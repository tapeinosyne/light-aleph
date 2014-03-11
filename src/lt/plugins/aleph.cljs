(ns lt.plugins.aleph
  (:require [lt.object :as object]
            [lt.objs.tabs :as tab]
            [lt.objs.command :as cmd]
            [lt.objs.sidebar.command :as scmd]
            [clojure.set :as setop]
            [lt.objs.editor.pool :as pool])
  (:require-macros [lt.macros :refer [behavior background defui]]))


;;;; tag to object/behavior ;;;;

(defn ->behavior [beh]
  (if (coll? beh)
    (with-meta (@object/behaviors (first beh)) {:with-args (into [] (rest beh))})
    (@object/behaviors beh)))

(defn t->b
  "Given a tag, returns a map of the associated behaviors.
   Arguments passed by the tag will be stored as metadata `:with-args [args]`
   in the entry for the associated behavior."
  [t]
  (map ->behavior (object/tags->behaviors [t])))

(defn t->o
  "Given a tag, returns a map of tagged objects' values."
  [t]
  (map deref (object/by-tag t)))

(defn t-enlist [t]
 (map #(hash-map :tag (str (key %))
                 :behaviors (val %)) @t))

(def t-list (scmd/filter-list {:items (t-enlist object/tags)
                               :key :tag
                               :placeholder "Tag"}))


;;;; object to behavior/tag ;;;;

(defn o->t
  "Given an object instance, returns its tags."
  [o]
  (:tags @o))

(defn o->b
  "Given an object instance, return the associated behaviors."
  [o]
  (mapcat t->b (o->t o)))

(defn o-enlist [o]
  (map #(hash-map :type (-> % val deref :lt.object/type str)
                  :tags (-> % val deref :tags)
                  :listeners (-> % val deref :listeners)) @o))

(def o-list (scmd/filter-list {:items (o-enlist object/instances)
                               :key :type
                               :placeholder "Object"}))


;;;; behavior to object/tag ;;;;

(defn beh-k|coll?
  ;; todo: make this more readable
  [b]
  (if (coll? b)
    (fn [t] (some #(= b %) (val t)))
    (fn [t] (some #(= b %) (map #(if (coll? %)
                                   (first %)
                                   %)
                                (val t))))))

(defn b->t [b]
  (->> @object/tags
       (filter (beh-k|coll? b))
       (into {})))

(defn b->o [b]
  (mapcat #(object/by-tag %) (keys (b->t b))))

;;; behavior filter-list

(defn b-enlist [b]
  (map #(hash-map :name (str (:name %))
                  :triggers (:triggers %)) (vals @b)))

(def b-list (scmd/filter-list {:items (b-enlist object/behaviors)
                               :key :name
                               :placeholder "Behaviors"}))
