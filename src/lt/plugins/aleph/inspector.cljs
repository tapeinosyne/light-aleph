(ns lt.plugins.aleph.inspector
  (:require [cljs.reader :as reader]
            [crate.core :as crate]
            [crate.binding :refer [bound subatom]]
            [lt.util.dom :as dom]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.sidebar.command :as fl]
            [lt.objs.notifos :as notifos]
            [lt.objs.editor :as ed]
            [lt.objs.editor.pool :as pool]
            [lt.plugins.clojure :as clj]
            [lt.plugins.uicommons.selector :as sel]
            [lt.plugins.aleph.utilia :as utl :refer [atom? if-at]]
            [lt.plugins.aleph.bot :as bot]
            [lt.plugins.aleph.browser :as browser])
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
