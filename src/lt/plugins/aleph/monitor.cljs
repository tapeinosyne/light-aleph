(ns lt.plugins.aleph.monitor
  (:require [clojure.data]
            [lt.object :as object])
  (:require-macros [lt.macros :refer [behavior]]))

(def snap-counter (atom 0))

(defn enqueue [buffer coll size]
  (if (= size
         (count buffer))
    (conj (pop buffer) coll)
    (conj buffer coll)))

(behavior ::dispatch!
          :triggers #{:dispatch!}
          :reaction (fn [this subject data]
                      (let [monitor (subject (:monitors @this))]
                        (println monitor)
                        (when monitor (object/raise monitor :log! subject data)))))

(object/object* ::aggregator
                :tags #{:aleph.monitor-aggregator}
                :monitors {}
                :init (fn [this]))

(def monitor-aggregator (object/create ::aggregator))


(defn snap-name [id]
  (keyword (str "__ALEPH__snap" id "-" (inc @snap-counter))))

(defn snap-fn [snap-id]
  (fn [this & args]
    (let [t (js/performance.now) ; process.hrtime would likely be excessive
          state @this
          obj-id (:lt.object/id state)]
      (object/raise monitor-aggregator :dispatch! snap-id {:lt.object/id obj-id
                                                           :time t
                                                           :state state
                                                           :args args}))))

(defn snap-behavior [subject]
  (let [snap-id (snap-name subject)]
    (object/behavior* snap-id :reaction (snap-fn snap-id))))


(behavior ::log!
          :triggers #{:log!}
          :reaction (fn [this subject data]
                      (let [size (:history-size @this)]
                        (object/update! this
                                        [:history subject]
                                        #(enqueue % data size)))))

(defn wrap-with [vect k1 & [k2]]
  (if k2
    (into [] (flatten (map #(if (keyword-identical? k2 %) [k1 % k1] %) vect)))
    (into [] (concat [k1] (conj vect k1)))))

(behavior ::inject!
          :triggers #{:inject!}
          :reaction (fn [this opts]
                      (let [obj (:object opts)
                            trig (:trigger opts)
                            beh (:behavior opts)
                            snap-id (snap-name (or beh trig))]
                        (snap-behavior (or beh trig))
                        (if beh
                          (object/update! obj [:listeners trig] #(wrap-with % snap-id beh))
                          (object/update! obj [:listeners trig] #(wrap-with % snap-id)))
                        (object/assoc-in! this [:history snap-id] cljs.core.PersistentQueue.EMPTY)
                        (object/assoc-in! monitor-aggregator [:monitors snap-id] this))))


(object/object* ::monitor
                :tags #{:aleph.monitor}
                :history {}
                :history-size 128
                :subjects {}
                :init (fn [this opts]
                        (object/merge! this opts)))

(def test-monitor (object/create ::monitor))

