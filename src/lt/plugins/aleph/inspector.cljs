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
                    {:class "error"}))

(defn discern-keyword [sym]
  (condp #(%1 %2) sym
    bot/b?       :b
    bot/t?       :t
    bot/trigger? :trigger
    (notify-nonbot sym)))

(defn discern-element [sym]
  (condp #(%1 %2) sym
    number?  :o
    symbol?  :o
    keyword? (discern-keyword sym)
    (notify-nonbot sym)))

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

(defn fnstr [args]
  (apply str (interpose " " args)))

(defn wrap-fnstr [args]
  (str "(" (fnstr args) ")"))

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
