(ns lt.plugins.aleph.bot
  (:require [lt.object :as object]
            [clojure.set :as setop]))


;;;;===========================================================================
;;;; relation functions
;;;;
;;;; Identification of basic associations between behaviors, objects, tags.
;;;;___________________________________________________________________________

(defn ->set [x]
  (if (coll? x)
    (into #{} x)
    (hash-set x)))

(defn k|coll [b]
  (if (coll? b)
    (first b)
    b))

(defn flat-listeners [o]
  (->> @o :listeners vals (apply concat)))


;;; behavior to object/tag

(defn any-in-tag? [bs t]
  (some bs (map k|coll (val t))))

(defn b->t
  [bs]
  (let [b-set (->set bs)]
    (->> @object/tags
         (filter #(any-in-tag? b-set %))
         (into {}))))

(defn any-in-listeners? [bs o]
  (some bs (flat-listeners (val o))))

(defn b->o
  [bs]
  (let [b-set (->set bs)]
    (into {} (filter #(any-in-listeners? b-set %)
                     @object/instances))))


;;; object to behavior/tag

(defn mapcat-rel [relator elements]
    (into {} (distinct (mapcat relator elements))))

(defprotocol ObjectRelator
  (o->b [o] "Return behaviors related to the object")
  (o->t [o] "Return tags related to the object"))

(extend-protocol ObjectRelator
  ;; concision?
  cljs.core/LazySeq
  (o->t
   [os]
   (mapcat-rel o->t os))
  (o->b
   [os]
   (mapcat-rel o->b os))

  cljs.core/List
  (o->t
   [os]
   (mapcat-rel o->t os))
  (o->b
   [os]
   (mapcat-rel o->b os))

  cljs.core/PersistentVector
  (o->t
   [os]
   (mapcat-rel o->t os))
  (o->b
   [os]
   (mapcat-rel o->b os))

  cljs.core/PersistentHashSet
  (o->t
   [os]
   (mapcat-rel o->t os))
  (o->b
   [os]
   (mapcat-rel o->b os))

  cljs.core/Atom
  (o->t
   [o]
   (let [ts (:tags @o)]
     (select-keys @object/tags ts)))
  (o->b
   [o]
   (let [bs (flat-listeners o)]
     (select-keys @object/behaviors bs)))

  number
  (o->t
   [o:id]
   (let [o (object/by-id o:id)]
     (o->t o)))
  (o->b
   [o:id]
   (let [o (object/by-id o:id)]
     (o->b o)))

  cljs.core/Keyword
  (o->t
   [o:type]
   (let [os (object/instances-by-type o:type)]
     (o->t os)))
  (o->b
   [o:type]
   (let [os (object/instances-by-type o:type)]
     (o->b os))))


;;; tag to object/behavior

(defn ->behavior
  "Given a behavior name, returns the full behavior map."
  [beh]
  (if (coll? beh)
    (merge (@object/behaviors (first beh)) {::args (into [] (rest beh))})
    (@object/behaviors beh)))

(defn t->b
  "Given a sequence of tags, returns a list of the associated behaviors.
   Aguments passed by a tag will be stored in the behavior's entry as kv
   `:lt.plugins.aleph.bot/args [args]`."
  [ts]
  (map ->behavior (object/tags->behaviors ts)))

(defn t->o
  "Given a sequence of tags, returns a map of associated objects."
  [ts]
  (mapcat object/by-tag ts))
