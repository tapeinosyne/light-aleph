(ns lt.plugins.aleph.bot
  (:require [lt.object :as object]
            [clojure.set :as setop]))


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

(defn b->t+b
  "Given a sequence of behaviors, returns a map of the associated tags and all
   their behaviors."
  [bs]
  (let [behs (into #{} bs)]
    (->> @object/tags
         (filter (fn [t]
                   (some behs (val t))))
         (into {}))))

(defn b->t
  "Given a sequence of behaviors, returns a list of the associated tags."
  [bs]
  (keys (b->t+b bs)))

(defn b->o
  "Given a sequence of behaviors, returns a list of the objects to which any of
   them is associated."
  [bs]
  (let [behs (into #{} bs)
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
  "Given a sequence of object ids, return a list of their tags."
  [ids]
  (let [os (map object/by-id ids)]
    (distinct (mapcat o->t* os))))

(defn o->t+b
  "Given a sequence of objects ids, returns a list of their tags as keys associated
   to the respective behaviors."
  [ids]
  (let [t-keys (o->t ids)
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


