(ns lt.plugins.aleph.browser
  (:require [lt.plugins.aleph.bot :as bot]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.sidebar.command :as fl]
            [lt.objs.tabs :as tab]
            [lt.util.dom :as dom]
            [clojure.set :as setop])
  (:require-macros [lt.macros :refer [behavior defui]]))


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
  "Given an Aleph filter-list, extracts the current results into a list
   of items compatible with relator functions."
  [f-l]
  (let [cur (:cur @f-l)
        k (::relate-by @f-l)]
    (map k (filter map? (apply concat cur)))))

(defn propagate! [super observed & [force?]]
  (object/merge! super {:observing observed})
  (object/raise super :propagate! force?))

(behavior ::update-sub
          :triggers #{:refresh!}
          :reaction (fn [this]
                      (object/merge! this {:cur (fl/indexed-results @this)})
                      (fl/fill-lis @this
                                   (:cur @this))
                        (let [super (:super @this)
                              observed (extract-keys this)]
                          (propagate! super observed))))

(behavior ::re-list
          :triggers #{:re-list}
          :reaction (fn [this]
                      (object/merge! this {:cur (fl/indexed-results @this)})
                      (fl/fill-lis @this
                                (:cur @this))))

(behavior ::propagate-selection!
          :triggers #{:select}
          :reaction (fn [this item]
                      (let [super (:super @this)
                            relator (::relate-by @this)
                            observed [(relator item)]]
                        (propagate! super observed :from-selection))))


;;; search modes

(defn opposite-mode [selector new-mode]
  (let [search-modes (::modes @selector)]
    (first (disj search-modes new-mode))))

(defn opposite-mode-id [selector new-mode]
  (::css-sel (opposite-mode selector new-mode)))

(defn ->str-id [val-id]
  (str "#" val-id))

(defn switch-button-emphasis [inactive active]
  (let [inactive-id-str (->str-id inactive)
        active-id-str (->str-id active)]
    (dom/remove-class (dom/$ inactive-id-str) :current-mode)
    (dom/add-class (dom/$ active-id-str) :current-mode)))

(defn emphasize-mode [selector mode]
  (let [active-id (::css-sel mode)
        inactive-id (opposite-mode-id selector mode)]
    (switch-button-emphasis inactive-id active-id)))

(defn ->class-str [& strings]
  (->> (into [] strings)
       (filter identity)
       (interpose " ")
       (apply str)))

(defui search-mode-button [this {:keys [::display-key ::css-sel ::priority] :as mode}]
  [:div {:id css-sel
         :class (->class-str "button" "aleph-selector" (if (= 0 priority)
                                                       "current-mode"))}
   display-key]
  :click (fn []
           (object/raise this :search-by mode)))

(defn change-search-mode [flist new-mode]
  (object/merge! flist new-mode))

(behavior ::search-by
          :triggers #{:search-by}
          :reaction (fn [this search-mode]
                      (change-search-mode this search-mode)
                      (emphasize-mode this search-mode)))

(def css-mode-prefix "aleph-browser_search-by-")

(defn mode-priority-< [x y]
  (let [x-priority (::priority x)
        y-priority (::priority y)
        comparison (compare x-priority y-priority)]
    (if-not (= comparison 0)
      comparison
      (compare x y))))


;;; aleph filter-list object and constructor

(object/object* ::selector
                :tags #{:filter-list :aleph.selector}
                :selected 0
                :placeholder "search"
                :items []
                :search ""
                :init (fn [this opts]
                        (let [opts (merge {:size 100} opts)
                              items (for [coll (range (:size opts))]
                                      (fl/item this coll))
                              mode-buttons (if-let [modes (::modes opts)]
                                             (map #(search-mode-button this %) modes))]
                          (object/merge! this (merge {:lis (vec items)} opts))
                          [:div.filter-list.empty
                           (fl/input this)
                           (if mode-buttons
                             [:div.mode-selection
                              mode-buttons])
                           [:ul
                            items]
                           ])))

(defn selector [opts]
  (let [sel (object/create ::selector opts)]
    (object/raise sel :re-list)
    sel))


;;; behavior filter-list

(defn b-enlist [b]
  (map #(hash-map ::name-key (str (:name %))
                  ::triggers-key (str (:triggers %))
                  :name (:name %)
                  :triggers (:triggers %)) b))

(defn b-itemize-with-name []
  (fn [original scored highlighted item]
    (str "<h2>" highlighted "</h2><p>" (:triggers item) "</p>")))

(defn b-itemize-with-triggers []
  (fn [original scored highlighted item]
    (str "<h2>" (:name item) "</h2><p>" highlighted "</p>")))

(def b-search-modes
  (sorted-set-by mode-priority-<
                 {:key ::name-key
                  :transform (b-itemize-with-name)
                  ::display-key "by name"
                  ::css-sel (str css-mode-prefix "name")
                  ::priority 0}
                 {:key ::triggers-key
                  :transform (b-itemize-with-triggers)
                  ::display-key "by trigger"
                  ::css-sel (str css-mode-prefix "trigger")
                  ::priority 1}))

(def b-list (selector {:items (fn [] (b-enlist (vals @object/behaviors)))
                       :key ::name-key
                       :transform (b-itemize-with-name)
                       :placeholder "Behavior"
                       ::modes b-search-modes
                       ::relate-by :name
                       ::list-fn b-enlist
                       ::starter-items (fn []
                                         (vals @object/behaviors))}))


;;; object filter-list

(defn o-enlist [o]
  (map #(hash-map ::type-key (-> @% :lt.object/type str)
                  ::id-key (-> @% :lt.object/id str)
                  :lt.object/type (-> @% :lt.object/type)
                  :lt.object/id (-> @% :lt.object/id)
                  :tags (-> @% :tags)
                  :listeners (-> @% :listeners)) o))

(defn o-itemize-with-type []
  (fn [original scored highlighted item]
    (str "<h2>" highlighted "</h2><p>" (:lt.object/id item) "</p>")))

(defn o-itemize-with-id []
  (fn [original scored highlighted item]
    (str "<h2>" (:lt.object/type item) "</h2><p>" highlighted "</p>")))

(def o-search-modes
  (sorted-set-by mode-priority-<
                 {:key ::type-key
                  :transform (o-itemize-with-type)
                  ::display-key "by type"
                  ::css-sel (str css-mode-prefix "type")
                  ::priority 0}
                 {:key ::id-key
                  :transform (o-itemize-with-id)
                  ::display-key "by id"
                  ::css-sel (str css-mode-prefix "id")
                  ::priority 1}))

(def o-list (selector {:items (fn [] (o-enlist (vals @object/instances)))
                       :key ::type-key
                       :transform (o-itemize-with-type)
                       :placeholder "Object"
                       ::modes o-search-modes
                       ::relate-by :lt.object/id
                       ::list-fn o-enlist
                       ::starter-items (fn []
                                         (vals @object/instances))}))


;;; tag filter-list

(defn t-enlist [t]
  (map #(hash-map ::tag-key (str (key %))
                  :tag (key %)
                  :behaviors (val %)) t))

(defn t-itemize []
  (fn [original scored highlighted item]
    (str "<h2>" highlighted "</h2><p>" (:behaviors item) "</p>")))

(def t-list (selector {:items (fn [] (t-enlist @object/tags))
                       :key ::tag-key
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
          :reaction (fn [this force?]
                      (let [element (type* this)
                            targets (vals (dissoc subspaces element))
                            selector (:selector @this)
                            obs (:observing @this)]
                        (if (or force?
                                (seq (fl/input-val selector)))
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

(->sub {:el  ::b
        :sel b-list
        :rel {:o bot/o->b :t bot/t->b}})

(->sub {:el  ::o
        :sel o-list
        :rel {:b bot/b->o :t bot/t->o}})

(->sub {:el  ::t
        :sel t-list
        :rel {:b bot/b->t+b :o bot/o->t+b}})

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
