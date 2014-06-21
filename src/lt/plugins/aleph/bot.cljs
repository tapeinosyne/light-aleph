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

(defn select-keys-with [map pred xs]
  (into {} (filter (partial pred xs) map)))


;;; behavior to object/tag

(defn any-in-tag? [bs t]
  (some bs (map k|coll (val t))))

(defn b->t
  "Given a behavior name or sequence thereof, returns a map of tags which
   associate any of them.
   Keys are tag names, associated to their full list of behaviors.

   The returned map is a subset of the `object/tags` index."
  [bs]
  (let [b-set (->set bs)]
    (select-keys-with @object/tags
                      any-in-tag?
                      b-set)))

(defn any-in-listeners? [bs o]
  (some bs (flat-listeners (val o))))

(defn b->o
  "Given a behavior name or sequence thereof, returns a map of objects which
   use any of them.
   Keys are integer ids, associated to their object instance.

   The returned map is a subset of the `object/instances` index."
  [bs]
  (let [b-set (->set bs)]
    (select-keys-with @object/instances
                      any-in-listeners?
                      b-set)))


;;; object to behavior/tag

(defn mapcat-rel [relator elements]
    (into {} (distinct (mapcat relator elements))))

(defprotocol ObjectRelator
  (o->b [o]
   "Given an object type, id, or instance, or a sequence thereof, returns a map
    of their behaviors.
    Keys are behavior names, associated to their full value: name, triggers, reaction.

    The returned map is a subset of the `object/behaviors` index.")

  (o->t [o]
   "Given an object type, id, or instance, or a sequence thereof, returns a map
    of their tags.
    Keys are tag names, associated to their full list of behaviors.

    The returned map is a subset of the `object/tags` index."))

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

(defn ->b-val
  "Given an index of behaviors and a behavior name, returns the full behavior
   value. Arguments passed to the behavior are stored as kv `::args [arg & more]`."
  [index b]
  (if (coll? b)
    (merge ((first b) index) {::args (into [] (rest b))})
    (b index)))

(defn t->b
  "Given a tag or sequence thereof, returns a map of the behaviors associated
   by any of them.
   Keys are behavior names, associated to their full value: name, triggers, reaction.
   Arguments passed by a tag will be stored in the behavior's entry as kv
   `:lt.plugins.aleph.bot/args [arg & more]`."
  [ts]
  (let [t-set (->set ts)
        bs (object/tags->behaviors t-set)
        index @object/behaviors]
    (zipmap (map k|coll bs)
            (map #(->b-val index %) bs))))

(defn any-tags? [ts o]
  (some ts (:tags @(val o))))

(defn t->o
  "Given a tag or sequence thereof, returns a map of the objects tagged with any
   of them.

   The returned map is a subset of the `object/instances` index."
  [ts]
  (let [t-set (->set ts)]
    ;; there seem to be inconsistent performance issues
    (select-keys-with @object/instances
                      any-tags?
                      t-set)))


;;;;===========================================================================
;;;; API
;;;;
;;;; Additional facilities for querying BOT.
;;;;___________________________________________________________________________

;;; triggers

(defn any-triggers? [triggers b]
  (some triggers (:triggers (val b))))

(defn triggers->behaviors
  "Given a trigger or a sequence thereof, returns a map of behaviors listening
   for any of them.
   Keys are behavior names, associated to their full value: name, triggers, reaction.

   The returned map is a subset of the `object/behaviors` index."
  [triggers]
  (let [trigger-set (->set triggers)]
    (select-keys-with @object/behaviors
                      any-triggers?
                      trigger-set)))



;;; dispatcher

(def relators
  {:b {:t b->t :o b->o}
   :o {:b o->b :t o->t}
   :t {:b t->b :o t->o}})

(defn relate
  "Identifies associations between BOT elements.

   Takes one element or a sequence thereof, reads them as elements of type `tail`,
   and returns the associated elements of type `head`.

   Tail and head are keywords, and can be:
   - `:b` for behaviors,
   - `:o` for objects,
   - `:t` for tags."
  [elems tail head]
  ((-> relators tail head) elems))
