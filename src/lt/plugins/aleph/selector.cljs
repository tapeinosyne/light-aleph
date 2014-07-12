(ns lt.plugins.aleph.selector
  (:require [lt.object :as object]
            [lt.objs.sidebar.command :as fl]
            [lt.util.dom :as dom])
  (:require-macros [lt.macros :refer [behavior defui]]))


(defn change-search-mode [flist new-mode]
  (object/merge! flist new-mode))

(behavior ::search-by
          :triggers #{:search-by}
          :reaction (fn [this search-mode]
                      (change-search-mode this search-mode)
                      (emphasize-mode this search-mode)))

(def css-mode-prefix "aleph-selector_search-by-")

(defn mode-priority-< [x y]
  (let [x-priority (:priority x)
        y-priority (:priority y)
        comparison (compare x-priority y-priority)]
    (if-not (= comparison 0)
      comparison
      (compare x y))))


;;; aleph filter-list GUI elements

(defn opposite-mode [selector new-mode]
  (let [search-modes (::modes @selector)]
    (first (disj search-modes new-mode))))

(defn ->str-id [val-id] (str "#" val-id))

(defn emphasize-mode [selector mode]
  (let [active-sel (->str-id (:css-sel mode))
        inactive-sel (->str-id (:css-sel (opposite-mode selector mode)))]
    (dom/remove-class (dom/$ inactive-sel) :current-mode)
    (dom/add-class (dom/$ active-sel) :current-mode)))

(defn ->class-str [& strings]
  (->> (into [] strings)
       (filter identity)
       (interpose " ")
       (apply str)))

(defui search-mode-button [this {:keys [:display-key :css-sel :priority] :as mode}]
  [:div {:id css-sel
         :class (->class-str "button" "mode-selector" (if (= 0 priority)
                                                        "current-mode"))}
   display-key]
  :click (fn []
           (object/raise this :search-by mode)))

(defui reset-button [this]
  [:div.button.reset "refresh"]
  :click (fn [] (object/raise this :reset! true)))


;;; aleph selector object and constructor

(behavior ::re-list
          :triggers #{:re-list}
          :reaction (fn [this]
                      (object/merge! this {:cur (fl/indexed-results @this)})
                      (fl/fill-lis @this (:cur @this))))

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
                              mode-buttons (if-let [modes (:modes opts)]
                                             (map #(search-mode-button this %) modes))]
                          (object/merge! this (merge {:lis (vec items)} opts))
                          [:div.filter-list.empty
                           [:div.flex-row
                            (fl/input this)
                            (reset-button this)
                           ]
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
