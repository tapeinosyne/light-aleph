(ns lt.plugins.aleph
  (:require [lt.object :as object]
            [lt.objs.tabs :as tab]
            [lt.objs.command :as cmd]
            [lt.objs.sidebar.command :as fl]
            [clojure.set :as setop]
            [lt.util.dom :as dom])
  (:require-macros [lt.macros :refer [behavior background defui]]))


;;;;===========================================================================
;;;; relation functions
;;;;
;;;; Identification of basic associations between behaviors, objects, tags.
;;;; TODO: separate graphing and restructuring for filter-lists.
;;;;___________________________________________________________________________

;;; behavior to object/tag

(defn k|coll [b]
  ;; will be used when relating behaviors with arguments.
  (if (coll? b)
    (first b)
    b))

(defn b->t
  "Given a sequence of behaviors, returns a map of the associated tags and all
   their behaviors."
  [bs]
  (let [behs (apply hash-set bs)]
    (->> @object/tags
         (filter (fn [t]
                   (some behs (val t))))
         (into {}))))

(defn b->o
  "Given a sequence of behaviors, returns a list of the objects to which any of
   them is associated."
  [bs]
  (let [behs (apply hash-set bs)
        listeners (fn [o]
                    (->> @o :listeners vals (apply concat)))]
    (filter #(some behs (listeners %))
            (vals @object/instances))))


;;; object to behavior/tag

(defn o->t*
  "Given an object instance, returns a list of its tags."
  [o]
  (:tags @o))

(defn o->t
  "Given a sequence of objects ids, returns a list of their tags as keys associated
   to the respective behaviors."
  [ids]
  (let [os (map object/by-id ids)
        t-keys (distinct (mapcat o->t* os))
        t-vals (map @object/tags t-keys)]
    (zipmap t-keys t-vals)))

(defn o->b*
  "Given an object instance, returns a list of the associated behaviors' names."
  [o]
  (let [listeners (:listeners @o)
        behs (vals listeners)]
    (apply concat behs)))

(defn o->b
  "Given a sequence of object ids, returns a list of the associated behaviors."
  [ids]
  (let [os (map object/by-id ids)]
    (->> os
         (mapcat o->b*)
         distinct
         (map @object/behaviors))))


;;; tag to object/behavior

(defn ->behavior
  "Given a behavior name, returns the full behavior map."
  [beh]
  ;; review: drop the metadata and use a normal keyval
  (if (coll? beh)
    (with-meta (@object/behaviors (first beh)) {:with-args (into [] (rest beh))})
    (@object/behaviors beh)))

(defn t->b
  "Given a sequence of tags, returns a list of the associated behaviors.
   Arguments passed by a tag will be stored as metadata `:with-args [args]`
   in the entry for the respective behavior."
  [ts]
  (map ->behavior (object/tags->behaviors ts)))

(defn t->o
  "Given a sequence of tags, returns a map of associated objects."
  [ts]
  (mapcat object/by-tag ts))


;;;;===========================================================================
;;;; BOT filter-lists
;;;;
;;;; Searchable lists to be displayed in the Aleph browser.
;;;;___________________________________________________________________________

(defn type*
  "Given an object instance, returns its type as an unqualified keyword."
  [obj]
  (keyword (name (:lt.object/type @obj))))

(defn extract-keys
  "Given an Aleph filter-list, extract the current results into a list
   of items compatible with relator functions."
  [f-l]
  (let [cur (:cur @f-l)
        k (::relate-by @f-l)]
    (map k (filter map? (apply concat cur)))))

(behavior ::update-sub
          :triggers #{:refresh!}
          :reaction (fn [this]
                      (object/merge! this {:cur (fl/indexed-results @this)})
                      (fl/fill-lis @this
                                   (:cur @this))
                        (let [super (:super @this)
                              observed (extract-keys this)]
                          (object/merge! super {:observing observed})
                          (object/raise super :propagate!))))

(behavior ::re-list
          :triggers #{:re-list}
          :reaction (fn [this]
                      (object/merge! this {:cur (fl/indexed-results @this)})
                      (fl/fill-lis @this
                                (:cur @this))))


;;; behavior filter-list

(defn b-enlist [b]
  (map #(hash-map ::index-by (str (:name %))
                  :name (:name %)
                  :triggers (:triggers %)) b))

(defn b-itemize []
  (fn [original scored highlighted item]
    (str "<h2>" highlighted "</h2><p>" (:triggers item) "</p>")))

(def b-list (fl/filter-list {:items (b-enlist (vals @object/behaviors))
                             :key ::index-by
                             :transform (b-itemize)
                             :placeholder "Behavior"
                             ::relate-by :name
                             ::list-fn b-enlist
                             ::starter-items (fn []
                                               (vals @object/behaviors))}))


;;; object filter-list

(defn o-enlist [o]
  (map #(hash-map ::index-by (-> @% :lt.object/type str)
                  :lt.object/type (-> @% :lt.object/type)
                  :lt.object/id (-> @% :lt.object/id)
                  :tags (-> @% :tags)
                  :listeners (-> @% :listeners)) o))

(defn o-itemize []
  (fn [original scored highlighted item]
    (str "<h2>" highlighted "</h2><p>" (:lt.object/id item) "</p>")))

(def o-list (fl/filter-list {:items (o-enlist (vals @object/instances))
                             :key ::index-by
                             :transform (o-itemize)
                             :placeholder "Object"
                             ::relate-by :lt.object/id
                             ::list-fn o-enlist
                             ::starter-items (fn []
                                               (vals @object/instances))}))


;;; tag filter-list

(defn t-enlist [t]
 (map #(hash-map ::index-by (str (key %))
                 :tag (key %)
                 :behaviors (val %)) t))

(defn t-itemize []
  (fn [original scored highlighted item]
    (str "<h2>" highlighted "</h2><p>" (:behaviors item) "</p>")))

(def t-list (fl/filter-list {:items (t-enlist @object/tags)
                             :key ::index-by
                             :transform (t-itemize)
                             :placeholder "Tag"
                             ::relate-by :tag
                             ::list-fn t-enlist
                             ::starter-items (fn [] @object/tags)}))


;;;;===========================================================================
;;;; Aleph subspaces
;;;;
;;;; Manage BOT lists and propagation of results.
;;;;___________________________________________________________________________

(behavior ::reset!
          :triggers #{:reset!}
          :reaction (fn [this]
                      (let [selector (:selector @this)
                            enlist (::list-fn @selector)
                            starter (::starter-items @selector)]
                        (object/merge! selector {:items (enlist (starter))})
                        (object/raise selector :re-list))))

(behavior ::propagate!
          :triggers #{:propagate!}
          :debounce 400
          :reaction (fn [this]
                      (let [element (type* this)
                            targets (vals (dissoc subspaces element))
                            selector (:selector @this)
                            obs (:observing @this)]
                        (if (seq (fl/input-val selector))
                          (doseq [aleph-sub targets]
                            (object/raise aleph-sub :relate element obs))
                          (doseq [aleph-sub targets]
                            (object/raise aleph-sub :reset!))))))

(behavior ::relate
          :triggers #{:relate}
          :reaction (fn [this element obs]
                      (let [selector (:selector @this)
                            items (:items @selector)
                            enlist (::list-fn @selector)
                            relator (-> @this :relator element)
                            context (relator obs)]
                        (object/merge! selector {:items (enlist context)})
                        (object/raise selector :re-list))))

;;; sub objects

(defn ->sub
  "Given a map of options {:el element, :sel selector, :rel relators},
   returns an Aleph subspace object."
  [{:keys [el sel rel]}]
  ;; review: if no substantial differences between handling of b/o/t emerge,
  ;; consider using native init instead of ->sub.
  (object/object* el
                  :tags #{:aleph.sub}
                  :observing []
                  :selector sel
                  :relator rel
                  :init (fn [this]
                          (object/add-tags sel [:aleph.selector])
                          ;; This could be done without circularity, but this is
                          ;; the Aleph, after all.
                          (object/merge! sel {:super this}))))

(->sub {:el ::b
        :sel b-list
        :rel {:o o->b :t t->b}})

(->sub {:el ::o
        :sel o-list
        :rel {:b b->o :t t->o}})

(->sub {:el ::t
        :sel t-list
        :rel {:b b->t :o o->t}})

(def b-sub (object/create ::b))
(def o-sub (object/create ::o))
(def t-sub (object/create ::t))

(def subspaces {:b b-sub
                :o o-sub
                :t t-sub})


;;;;===========================================================================
;;;; Aleph browser
;;;;
;;;; A simple 3-column view of the subspaces
;;;;___________________________________________________________________________

(behavior ::on-close
          :triggers #{:close}
          :reaction (fn [this]
                      (tab/rem! this)))

(object/object* ::aleph.browser
                :tags #{:aleph.browser}
                :name "Aleph"
                :init (fn [this]
                        [:div.aleph-browser
                         [:div.aleph-column
                          [:div#aleph-behaviors.aleph-filter
                           (object/->content b-list)]
                          [:div#aleph-objects.aleph-filter
                           (object/->content o-list)]
                          [:div#aleph-tags.aleph-filter
                           (object/->content t-list)]
                          ]
                         ]))

(def browser (object/create ::aleph.browser))

(cmd/command {:command :aleph.browse
              :desc "Aleph: show browser"
              :exec (fn []
                      (tab/add-or-focus! browser))})
