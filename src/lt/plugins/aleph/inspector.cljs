(ns lt.plugins.aleph.inspector
  (:require [cljs.reader :as reader]
            [crate.core :as crate]
            [crate.binding :refer [bound subatom]]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor :as ed]
            [lt.objs.editor.pool :as pool]
            [lt.plugins.clojure :as clj]
            [lt.plugins.uicommons.selector :as sel]
            [lt.plugins.aleph.utilia :as utl :refer [atom? if-at]]
            [lt.plugins.aleph.bot :as bot])
  (:require-macros [lt.macros :refer [behavior defui]]))


;;;;===========================================================================
;;;; Helpers
;;;;___________________________________________________________________________

;;;; element detection

(defn bot-complement [el]
  (disj bot/elements el))


(defn read-token [token]
  (cljs.reader/read-string (:string token)))

(defn read-token-at-cursor [editor]
  (read-token (clj/find-symbol-at-cursor editor)))


(defn notify-nonbot [sym]
  (notifos/set-msg! (str "`" sym "`" " appears not to be a BOT element.")
                    {:class "error"})
  nil)

(defn discern-keyword [sym]
  (condp #(%1 %2) sym
    bot/b?       :b
    bot/o?       :o
    bot/t?       :t
    bot/trigger? :trigger
    (notify-nonbot sym)))

(defn discern-element [sym]
  (condp #(%1 %2) sym
    number?  :o
    symbol?  :o
    keyword? (discern-keyword sym)))

(defn discern-element-at-cursor [editor]
  (discern-element (read-token-at-cursor editor)))


(def lt-nses #{"lt.objs"
               "lt.object"
               "lt.macros"
               "lt.util"
               "lt.plugins.auto-complete"
               "lt.plugins.auto-paren"
               "lt.plugins.doc"
               "lt.plugins.watches"})

(defn from-lt-core? [s]
  (let [ns-pattern (re-pattern (apply str "^" (interpose "|" lt-nses)))]
    (re-find ns-pattern s)))


;;;; custom evaluation

(defn space-separate [args]
  (apply str (interpose " " args)))

(defn wrap-fnstr [args]
  (str "(" (space-separate args) ")"))

(defn raise-eval [this & args]
  (let [fnstring (wrap-fnstr args)]
    (object/raise this :eval.custom
                  fnstring
                  {:result-type :inline-at-cursor :verbatim true})))


;;;;===========================================================================
;;;; Inline relations
;;;;
;;;; Custom evaluators to display the bot configuration of a token.
;;;;___________________________________________________________________________


(def related-keys
  '(fn [sym tail head]
     (keys (lt.plugins.aleph.bot/relate sym tail head))))

(behavior ::eval-relate
          :triggers #{:aleph.eval-relate}
          :reaction (fn [this sym tail head & [full-value?]]
                      (if full-value?
                        (raise-eval this 'lt.plugins.aleph.bot/relate sym tail head)
                        (raise-eval this related-keys sym tail head))))


(def relations (for [x [:b :o :t :trigger]
                     y [:b :o :t :trigger]]
                 (hash-map :tail x :head y
                           :display-name (str (name x) " → " (name y)))))

(def rel-list (sel/exec-selector {:key :display-name
                                  :items relations
                                  :size 16
                                  :placeholder "relators"}))

(cmd/command {:command :aleph.inline-relate
              :desc "Aleph: display bot configuration at cursor"
              :options rel-list
              :exec (fn [rel]
                      (let [ed (pool/last-active)
                            sym (read-token-at-cursor ed)
                            {:keys [tail head]} rel]
                        (object/raise ed :aleph.eval-relate sym tail head)))})

(cmd/command {:command :aleph.inline-relate-with
              :desc "Aleph: evaluate BOT relations at cursor with given input, output elements"
              :hidden true
              :exec (fn [tail head]
                      (let [ed (pool/last-active)
                            sym (read-token-at-cursor ed)]
                        (object/raise ed :aleph.eval-relate sym tail head)))})


;;;;===========================================================================
;;;; Inspector
;;;;
;;;; Inline widget which displays the current BOT configuration of an object,
;;;; tag, behavior, or trigger.
;;;;___________________________________________________________________________

;;;; symbol resolution

(def resolvers
  {:symbol '(fn [o] (select-keys (deref (if (number? o) (object/by-id o) o))
                        [:lt.object/id :lt.object/type :listeners :tags]))
   :keyword '(fn [k] (keyword k))})

(behavior ::resolve
          :triggers #{:resolve}
          :reaction (fn [this sym]
                      (let [resolver (cond (symbol? sym) (:symbol resolvers)
                                           (keyword? sym) (:keyword resolvers))
                            fnstring (wrap-fnstr [resolver sym])]
                        (object/raise this :eval.custom
                                      fnstring
                                      {:result-type :return
                                       :handler this}))))

(behavior ::inspect-resolved
          :triggers #{:return}
          :reaction (fn [this {:keys [result meta]}]
                      (let [returned (reader/read-string result)
                            resolved (or (:lt.object/id returned) returned)
                            el (discern-element resolved)]
                        (when el
                          (object/raise this :aleph.inspect {:element el
                                                             :sym resolved})))))


;;;; inspector mini-lists

(defn b-enlist [bs]
  (map #(hash-map :name-key (str %)
                  :name %)
       (keys bs)))

(defn behavior-selector [parent items]
  (sel/extended-selector {:size 16
                          :key :name-key
                          :placeholder "related behaviors"
                          :items (b-enlist items)
                          :parent parent}
                         #{:aleph.inline-selector}))


(defn o-enlist [os]
  (map #(merge (select-keys @% [:lt.object/type :lt.object/id])
               {:type-key (-> @% :lt.object/type str)
                :id-key   (-> @% :lt.object/id str)})
       (vals os)))

(defn o-itemize [original scored highlighted item]
  (str "<span>" highlighted "</span>" " of type " "<span class=\"cm-atom\">" (:lt.object/type item) "</span>"))

(defn object-selector [parent items]
  (sel/extended-selector {:size 16
                          :key :id-key
                          :placeholder "related objects"
                          :items (o-enlist items)
                          :transform o-itemize
                          :parent parent}
                         #{:aleph.inline-selector}))


(defn t-enlist [ts]
  (map #(hash-map :tag-key (str %)
                  :tag %)
       (keys ts)))

(defn tag-selector [parent items]
  (sel/extended-selector {:size 16
                          :key :tag-key
                          :placeholder "related tags"
                          :items (t-enlist items)
                          :parent parent}
                         #{:aleph.inline-selector}))


(defmulti selectors-for :element)

(defmethod selectors-for :b
  [{:keys [sym parent]}]
  (let [obj-sel (object-selector parent (bot/b->o sym))
        tag-sel (tag-selector parent (bot/b->t sym))]
    [obj-sel tag-sel]))

(defmethod selectors-for :o
  [{:keys [sym parent]}]
  (let [beh-sel (behavior-selector parent (bot/o->b sym))
        tag-sel (tag-selector parent (bot/o->t sym))]
    [beh-sel tag-sel]))

(defmethod selectors-for :t
  [{:keys [sym parent]}]
  (let [obj-sel (object-selector parent (bot/t->o sym))
        beh-sel (behavior-selector parent (bot/t->b sym))]
    [obj-sel beh-sel]))

(defmethod selectors-for :trigger
  [{:keys [sym parent]}]
  (let [obj-sel (object-selector parent (bot/triggers->objects sym))
        beh-sel (behavior-selector parent (bot/triggers->behaviors sym))]
    [obj-sel beh-sel]))


(behavior ::reload-parent!
          :triggers #{:select}
          :reaction (fn [this item]
                      (let [parent (:parent @this)
                            id (or (:name item)
                                   (:tag item)
                                   (:lt.object/id item))
                            el (cond (:name item) :b
                                     (:lt.object/id item) :o
                                     (:tag item)  :t)]
                        (object/raise parent :set-subject! {:element el
                                                            :sym id}))))


;;;; inspector

(behavior ::set-subject!
          :triggers #{:set-subject!}
          :reaction (fn [this subj]
                      (object/merge! this {:subject subj})
                      (object/raise this :log-subject subj)))

(behavior ::log-subject
          :triggers #{:log-subject}
          :reaction (fn [this subj]
                      (object/update! this [:history] conj {:subject subj})))

(behavior ::inspect
          :triggers #{:aleph.inspect}
          :reaction (fn [this opts]
                      (let [{:keys [element sym]} opts
                            inspector (object/create ::inspector opts)
                            line (:line (ed/->cursor this))
                            widget (ed/line-widget this line (object/->content inspector))]
                        (object/merge! inspector {:widget widget}))))


;;; templating

(defmulti template-with (fn [_ opts] (:element opts)))

(defmethod template-with :b
  [this {:keys [sym] :as opts}]
  (let [beh (first (bot/b->b sym))
        bname (key beh)
        triggers (:triggers (val beh))
        trigger-str (space-separate triggers)
        sels (selectors-for (merge opts {:parent this}))]
    (object/merge! this {:selectors sels})
    (crate/html
     [:div
      [:div.inspector-header
       [:h1.element-id  "behavior " [:span.bot-element.cm-atom bname]]
       [:h2.el-addendum "triggered by " [:span.bot-element.cm-atom trigger-str]]]
      [:div.selectors (map object/->content sels)]])))

(defmethod template-with :o
  [this {:keys [sym] :as opts}]
  (let [obj (first (bot/o->o sym))
        o-id (key obj)
        tags (:tags @(val obj))
        o-type (:lt.object/type @(val obj))
        sels (selectors-for (merge opts {:parent this}))]
    (object/merge! this {:selectors sels})
    (crate/html
     [:div
      [:div.inspector-header
       [:h1.element-id "object " [:span.bot-element.cm-atom o-id]]
       [:h2.el-addendum "of type " [:span.bot-element.cm-atom o-type]]]
      [:div.selectors (map object/->content sels)]])))

(defmethod template-with :t
  [this {:keys [sym] :as opts}]
  (let [sels (selectors-for (merge opts {:parent this}))]
    (object/merge! this {:selectors sels})
    (crate/html
     [:div
      [:div.inspector-header
       [:h1.element-id "tag " [:span.bot-element.cm-atom sym]]]
      [:div.selectors (map object/->content sels)]])))

(defmethod template-with :trigger
  [this {:keys [sym] :as opts}]
  (let [sels (selectors-for (merge opts {:parent this}))]
    (object/merge! this {:selectors sels})
    (crate/html
     [:div
      [:div.inspector-header
       [:h1.element-id "trigger " [:span.bot-element.cm-atom sym]]]
      [:div.selectors (map object/->content sels)]])))

(defmethod template-with :default [_ _]) ; destruction triggers a re-template.


(defui close-button [this]
  [:span.tab-close "x"]
  :click (fn [] (.clear (:widget @this))
                (doseq [sel (:selectors @this)]
                  (object/destroy! sel))
                (object/destroy! this)))

(object/object* ::inspector
                :tags #{:aleph.inspector}
                :widget nil
                :subject nil
                :selectors nil
                :init (fn [this opts]
                        (object/merge! this {:subject opts})
                        [:div.aleph.inspector
                         (close-button this)
                         [:div.inspecting (bound (subatom this :subject) (partial template-with this))]]))


(cmd/command {:command :aleph.inspect-token
              :desc "Aleph: inspect element at cursor"
              :exec (fn []
                      (let [ed (pool/last-active)
                            sym (read-token-at-cursor ed)]
                        (object/raise ed :resolve sym)))})
