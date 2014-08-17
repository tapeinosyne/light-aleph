(ns lt.plugins.aleph.utilia
  (:require [lt.objs.files :as fs]))


(defn deep-merge [& xs]
  (let [ms (map #(or % {}) xs)]
    (apply
     (fn f [& ys]
       (if (every? map? ys)
         (apply merge-with f ys)
         (last ys)))
     ms)))


(defn atom? [x]
  (satisfies? IDeref x))

(defn if-at [x]
  (if (atom? x)
    @x
    x))


(def lt-home-folder (fs/resolve (fs/lt-home) ".."))
(def lt-home-project (fs/join lt-home-folder "project.clj"))
