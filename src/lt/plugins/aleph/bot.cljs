(ns lt.plugins.aleph.bot
  (:require [clojure.set :as setop]
            [lt.object :as object]
            [lt.plugins.aleph.utilia :refer [deep-merge if-at]]))


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
  (->> (if-at o) :listeners vals (apply concat)))

(defn select-keys-with [map pred xs]
  (into {} (filter (partial pred xs) map)))


;;; behavior to object/tag

(defn any-in-tag? [bs t]
  (some bs (map k|coll (val t))))

(defn any-in-listeners? [bs o]
  (some bs (flat-listeners (val o))))

(defn b->b [bs]
  (let [b-set (->set bs)]
    (select-keys @object/behaviors b-set)))

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


;;; object to behavior/tag

(defn mapcat-rel [relator elements]
    (into {} (distinct (mapcat relator elements))))

(defprotocol ObjectRelator
  (o->b [o]
   "Given an object type, id, or instance, or a sequence thereof, returns a map
    of their behaviors.
    Keys are behavior names, associated to their full value: name, triggers, reaction.

    The returned map is a subset of the `object/behaviors` index.")

  (o->o [o])

  (o->t [o]
   "Given an object type, id, or instance, or a sequence thereof, returns a map
    of their tags.
    Keys are tag names, associated to their full list of behaviors.

    The returned map is a subset of the `object/tags` index."))

(extend-protocol ObjectRelator
  ;; concision?
  cljs.core/LazySeq
  (o->b [os] (mapcat-rel o->b os))
  (o->o [os] (mapcat-rel o->o os))
  (o->t [os] (mapcat-rel o->t os))

  cljs.core/List
  (o->b [os] (mapcat-rel o->b os))
  (o->o [os] (mapcat-rel o->o os))
  (o->t [os] (mapcat-rel o->t os))

  cljs.core/PersistentVector
  (o->b [os] (mapcat-rel o->b os))
  (o->o [os] (mapcat-rel o->o os))
  (o->t [os] (mapcat-rel o->t os))

  cljs.core/PersistentHashSet
  (o->b [os] (mapcat-rel o->b os))
  (o->o [os] (mapcat-rel o->o os))
  (o->t [os] (mapcat-rel o->t os))

  cljs.core/PersistentArrayMap
  (o->b [o] (let [bs (flat-listeners o)] (select-keys @object/behaviors bs)))
  (o->o [o] (let [id (:lt.object/id o)] (select-keys @object/instances [id])))
  (o->t [o] (let [ts (:tags o)] (select-keys @object/tags ts)))

  cljs.core/PersistentHashMap
  (o->b [o] (let [bs (flat-listeners o)] (select-keys @object/behaviors bs)))
  (o->o [o] (let [id (:lt.object/id o)] (select-keys @object/instances [id])))
  (o->t [o] (let [ts (:tags o)] (select-keys @object/tags ts)))

  cljs.core/Atom
  (o->b [o] (let [bs (flat-listeners @o)] (select-keys @object/behaviors bs)))
  (o->o [o] (let [id (:lt.object/id @o)] (select-keys @object/instances [id])))
  (o->t [o] (let [ts (:tags @o)] (select-keys @object/tags ts)))

  number
  (o->b [o:id]
    (let [o (object/by-id o:id)] (o->b o)))
  (o->o [o:id]
    (select-keys @object/instances [o:id]))
  (o->t [o:id]
    (let [o (object/by-id o:id)] (o->t o)))

  cljs.core/Keyword
  (o->b [o:type]
    (let [instances (object/instances-by-type o:type)
          os (if (seq instances) instances (o:type @object/object-defs))]
      (if os (o->b os) {})))
  (o->o [o:type]
    (let [instances (object/instances-by-type o:type)
          os (if (seq instances) instances (o:type @object/object-defs))]
      (if os (o->o os) {})))
  (o->t [o:type]
    (let [instances (object/instances-by-type o:type)
          os (if (seq instances) instances (o:type @object/object-defs))]
      (if os (o->t os) {}))))


;;; tag to object/behavior

(defn ->b-val
  "Given an index of behaviors and a behavior name, returns the full behavior
   value. Arguments passed to the behavior are stored as kv `::args [arg & more]`."
  [index b]
  (if (coll? b)
    (merge ((first b) index) {::args (into [] (rest b))})
    (b index)))

(defn any-tags? [ts o]
  (some ts (:tags @(val o))))

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

(defn t->t [ts]
  (let [t-set (->set ts)]
    (select-keys @object/tags t-set)))


;;;;===========================================================================
;;;; API
;;;; BOT addenda
;;;;
;;;; Additional facilities for querying BOT.
;;;;___________________________________________________________________________

;;;; triggers

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

(defn triggered-by [trig bs]
  (into [] (filter #(contains? (:triggers %) trig) bs)))

(defn behaviors->triggers
  "Given a behavior or a sequence thereof, returns a map of triggers which launch
   any of them.
   Keys are trigger names, associated to their full list of bound behaviors."
  [bs]
  (let [b-vals (-> bs ->set b->b vals)
        b-indexed (vals @object/behaviors)
        trigs (mapcat :triggers b-vals)]
    (into {} (map (fn [trig] [trig (triggered-by trig b-indexed)])
                  trigs))))


(defn triggers->objects
  "Given a trigger or a sequence thereof, returns a map of objects listening
   for any of them.
   Keys are integer ids, associated to their object instance.

   The returned map is a subset of the `object/instances` index."
  [triggers]
  (-> triggers ->set triggers->behaviors keys b->o))

(defn merge-triggered [x y]
  (merge-with #(into [] (distinct (apply conj %1 %2)))
              x y))

(defn objects->triggers
  "Given an object or a sequence thereof, returns a map of triggers bound to
   their behaviors.
   Keys are trigger names, associated to their full list of bound behaviors."
  [os]
  (->> (->set os) o->o vals
       (map #(:listeners @%))
       (reduce merge-triggered)))

(defn triggers->tags
  "Given a trigger or a sequence thereof, returns a map of tags attaching
   behaviors which listen for any of them.
   Keys are tag names, associated to their full list of behaviors.

   The returned map is a subset of the `object/tags` index."
  [triggers]
  (-> triggers triggers->behaviors keys b->t))

(defn tags->triggers
  "Given a tag or a sequence thereof, returns a map of triggers which launch
   any of the behaviors associated to those tags.
   Keys are trigger names, associated to their full list of bound behaviors."
  [ts]
  (let [bs (keys (t->b ts))]
    (behaviors->triggers bs)))


;;;; existance

(defn b? [bs]
  (not (empty? (b->b bs))))

(defn o? [os]
  (or (not (empty? (o->o os)))
      (not (empty? (->> (->set os)
                        (map @object/object-defs)
                        (filter identity))))))

(defn t? [ts]
  (not (empty? (t->t ts))))

(defn trigger? [triggers]
  (not (empty? (triggers->behaviors triggers))))


;;;; behavior

(defn b:fname [b & [qualified?]]
  (let [b:name (:name (b @object/behaviors))
        ns-str (if qualified? (str (namespace b) "/"))]
    (if b:name
      (symbol (str ns-str "__BEH__"
                   (clojure.string/replace (name b:name) #"\." "__DOT__"))))))

(defn b:reaction [b]
  (if-let [beh (b @object/behaviors)]
    (:reaction beh)))


;;;;===========================================================================
;;;; API
;;;; Convenience
;;;;
;;;; Additional facilities for querying BOT.
;;;;___________________________________________________________________________

(def elements #{:b :o :t :trigger})

;;; dispatcher

(def relators
  (deep-merge {:b {:b b->b  :o b->o  :t b->t}
               :o {:b o->b  :o o->o  :t o->t}
               :t {:b t->b  :o t->o  :t t->t}}

              {:b {:trigger behaviors->triggers}
               :o {:trigger   objects->triggers}
               :t {:trigger      tags->triggers}
               :trigger  {:b triggers->behaviors
                          :o triggers->objects
                          :t triggers->tags}}))

(defn relate
  "Identifies associations between BOT elements.

   Takes one element or a sequence thereof, reads them as elements of type `tail`,
   and returns the associated elements of type `head`.

   Tail and head are keywords, and can be:
   - `:b` for behaviors,
   - `:o` for objects,
   - `:t` for tags,
   - `:trigger` for triggers."
  [elems tail head]
  ((-> relators tail head) elems))
