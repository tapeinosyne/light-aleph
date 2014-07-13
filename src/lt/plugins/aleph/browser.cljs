(ns lt.plugins.aleph.browser
  (:require [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.sidebar.command :as fl]
            [lt.objs.tabs :as tab]
            [lt.plugins.aleph.selector :as sel]
            [lt.plugins.aleph.bot :as bot])
  (:require-macros [lt.macros :refer [behavior defui]]))


;;;;===========================================================================
;;;; BOT filter-lists
;;;;
;;;; Searchable lists to be displayed in the Aleph browser.
;;;;___________________________________________________________________________

;;; propagation

(defn extract-keys
  "Given an Aleph filter-list, extracts the current results into a list
  of items compatible with relator functions."
  [sel]
  (let [cur (:cur @sel)
        k (:relate-by @sel)]
    (map k (filter map? (apply concat cur)))))

(defn propagate! [super observed & [force?]]
  (object/merge! super {:observing observed})
  (object/raise super :propagate! force?))

(behavior ::update-sub
          :triggers #{:refresh!}
          :reaction (fn [this]
                      (sel/fill-list this)
                      (let [super (:super @this)
                            observed (extract-keys this)]
                        (propagate! super observed))))

(behavior ::propagate-selection!
          :triggers #{:select}
          :reaction (fn [this item]
                      (let [super (:super @this)
                            relator (:relate-by @this)
                            observed [(relator item)]]
                        (propagate! super observed :from-selection)
                        (sel/emphasize-active-query this))))


;;; behavior filter-list

(defn b-enlist [bs]
  (map #(hash-map :name-key (str (:name %))
                  :triggers-key (str (:triggers %))
                  :name (:name %)
                  :triggers (:triggers %))
       (vals bs)))

(defn b-itemize-with-name []
  (fn [original scored highlighted item]
    (str "<h2>" highlighted "</h2><p>" (:triggers item) "</p>")))

(defn b-itemize-with-triggers []
  (fn [original scored highlighted item]
    (str "<h2>" (:name item) "</h2><p>" highlighted "</p>")))

(def b-search-modes
  (sorted-set-by sel/mode-priority-<
                 {:key :name-key
                  :transform (b-itemize-with-name)
                  :display-key "by name"
                  :css-sel (str sel/css-mode-prefix "name")
                  :priority 0}
                 {:key :triggers-key
                  :transform (b-itemize-with-triggers)
                  :display-key "by trigger"
                  :css-sel (str sel/css-mode-prefix "trigger")
                  :priority 1}))

(def b-list (sel/selector {:items (fn [] (b-enlist @object/behaviors))
                       :key :name-key
                       :transform (b-itemize-with-name)
                       :placeholder "Behavior"
                       :modes b-search-modes
                       :relate-by :name
                       :enlist-with b-enlist
                       :starter-items (fn [] @object/behaviors)}))


;;; object filter-list

(defn o-enlist [os]
  (map #(hash-map :type-key (-> @% :lt.object/type str)
                  :id-key (-> @% :lt.object/id str)
                  :lt.object/type (-> @% :lt.object/type)
                  :lt.object/id (-> @% :lt.object/id)
                  :tags (-> @% :tags)
                  :listeners (-> @% :listeners))
       (vals os)))

(defn o-itemize-with-type []
  (fn [original scored highlighted item]
    (str "<h2>" highlighted "</h2><p>" (:lt.object/id item) "</p>")))

(defn o-itemize-with-id []
  (fn [original scored highlighted item]
    (str "<h2>" (:lt.object/type item) "</h2><p>" highlighted "</p>")))

(def o-search-modes
  (sorted-set-by sel/mode-priority-<
                 {:key :type-key
                  :transform (o-itemize-with-type)
                  :display-key "by type"
                  :css-sel (str sel/css-mode-prefix "type")
                  :priority 0}
                 {:key :id-key
                  :transform (o-itemize-with-id)
                  :display-key "by id"
                  :css-sel (str sel/css-mode-prefix "id")
                  :priority 1}))

(def o-list (sel/selector {:items (fn [] (o-enlist @object/instances))
                       :key :type-key
                       :transform (o-itemize-with-type)
                       :placeholder "Object"
                       :modes o-search-modes
                       :relate-by :lt.object/id
                       :enlist-with o-enlist
                       :starter-items (fn [] @object/instances)}))


;;; tag filter-list

(defn t-enlist [ts]
  (map #(hash-map :tag-key (str (key %))
                  :tag (key %)
                  :behaviors (val %))
       ts))

(defn t-itemize []
  (fn [original scored highlighted item]
    (str "<h2>" highlighted "</h2><p>" (:behaviors item) "</p>")))

(def t-list (sel/selector {:items (fn [] (t-enlist @object/tags))
                       :key :tag-key
                       :transform (t-itemize)
                       :placeholder "Tag"
                       :relate-by :tag
                       :enlist-with t-enlist
                       :starter-items (fn [] @object/tags)}))


;;;;===========================================================================
;;;; Aleph subspaces
;;;;
;;;; Manage BOT lists and propagation of results.
;;;;___________________________________________________________________________

(behavior ::propagate!
          :triggers #{:propagate!}
          :debounce 400
          :reaction (fn [this force?]
                      (let [tail (:element @this)
                            obs (:observing @this)
                            targets (vals (dissoc subspaces tail))
                            selector (:selector @this)]
                        (if (or force?
                                (seq (fl/input-val selector)))
                          (doseq [aleph-sub targets]
                            (object/raise aleph-sub :relate tail obs))
                          (doseq [aleph-sub (vals subspaces)]
                            (object/raise (:selector @aleph-sub) :reset!))))))

(behavior ::relate
          :triggers #{:relate}
          :reaction (fn [this tail obs]
                      (let [selector (:selector @this)
                            items (:items @selector)
                            enlist (:enlist-with @selector)
                            head (:element @this)
                            related (bot/relate obs tail head)]
                        (object/merge! selector {:items (enlist related)})
                        (object/raise selector :re-list))))

(defn refresh! []
  (doseq [sub (vals subspaces)]
    (object/raise (:selector @sub) :reset! {:msg "every"})))


;;; sub objects

(object/object* ::sub
                :tags #{:aleph.sub}
                :element nil
                :observing []
                :selector {}
                :init (fn [this opts]
                        (object/merge! this opts)
                        ;; This could be done without circularity, but this is
                        ;; the Aleph, after all.
                        (object/merge! (:selector opts) {:super this})))

(defn ->sub [el sel]
  (object/create ::sub {:element el
                        :selector sel}))

(def b-sub (->sub :b b-list))
(def o-sub (->sub :o o-list))
(def t-sub (->sub :t t-list))

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

(object/object* ::browser
                :tags #{:aleph.browser}
                :name "Aleph"
                :init (fn [this]
                        [:div.aleph-browser
                         [:div.flex-row
                          [:div#aleph-behaviors.aleph-filter
                           (object/->content b-list)]
                          [:div#aleph-objects.aleph-filter
                           (object/->content o-list)]
                          [:div#aleph-tags.aleph-filter
                           (object/->content t-list)]]]))

(def browser (object/create ::browser))

(cmd/command {:command :aleph.browse
              :desc "Aleph: open browser"
              :exec (fn [] (tab/add-or-focus! browser))})

(cmd/command {:command :aleph.browser.refresh
              :desc "Aleph: refresh browser"
              :exec (fn [] (refresh!))})
