Aleph
=====
> “The Aleph?” I repeated.  
> “Yes, the only place on earth where all places are — seen from every angle, each standing clear, without any confusion or blending.”
>
> — Jorge Luis Borges, *The Aleph* 

Aleph is a privileged point of observation on Light Table's inner machinery: an introspector for the BOT architecture.

## Installation
Aleph is available through the plugin manager.

Alternatively, you can manually clone this repository and place it into your plugin folder.  

## Usage
### `Aleph: open browser`
The Aleph browser exposes an index of the current BOT configuration in the form of three fuzzy-searchable lists, one for each element of the BOT architecture: **behaviors**, **objects**, and **tags**.

The three lists are linked, and work in concert to help you navigate these elements, as well as identify relations between them.

#### Search
- **Behavior List**: searchable by `name`, `triggers`.
- **Object List**: searchable by `type`, `id`.
- **Tag List**: searchable by `name`; each entry includes the full list of behaviors associated to the tag.

Searching any list in the Aleph will not only display the relevant results within the category, but also populate all other lists with those entries that are related to your search results.

Query    | Behavior List Results | Object List Results | Tag List Results
---------|---------------|-------------|----------
Behavior | Matching `behaviors` | Objects using any matching `behavior` | Tags attaching any matching `behavior`
Object   | Behaviors used by any matching `object`| Matching `objects` | Tags attached to any matching `object`
Tag      | Behaviors attached by any matching `tag` | Objects tagged with any matching `tag` | Matching `tags`

During a search, you are free to move between lists and narrow the results down without losing the context defined by the previous query.

Selecting an entry will display results for that entry and that entry only.

#### Refreshing
Aleph lists will automatically refresh when you clear the input field. You can also refresh a list manually, mid-search, by clicking the refresh button `⟳`.

To refresh all lists at once, you can use the command `Aleph: refresh browser`.


## API

### BOT
The `lt.plugins.aleph.bot` namespace offers facilities to identify the current configuration of BOT components. In practice, the included methods answer questions like "which tags are attaching which behaviors to which objects?"

`relate` is a dynamic method that takes a sequence of elements, a keyword representing their shared category (`:b`, `:o`, or `:t`), and the category of elements that should be returned.

```clojure
(ns lt.plugins.example
  (:require [lt.plugins.aleph.bot :as bot])
  
(bot/relate [id1 id2 :lt.example.object/type] :o :b)
; => map of behaviors used by object 1, object 2, and all objects of type `:lt.example.object/type`
```

`bot/relate` is a simple dispatcher to individual relator methods. When the call-site has compile-time knowledge of the categories being related, it is generally more practical to use these methods directly.

`(b->o [behaviors])` returns objects featuring any of `[behaviors]`.
```clojure
(bot/b->o [:lt.example/behavior])

; =>
{92 #<Atom {}>
 98 #<Atom {}>}
```

`(b->t [behaviors])` returns tags which make any of `[behaviors]` available to tagged objects.

```clojure
(bot/b->t [:lt.example/behavior])

; =>
{:example-tag (:lt.example/behavior)>
 :foo-tag (:lt.example/behavior :lt.bar/baz)}
```

`(o->b [objects])` returns behaviors available to any of `[objects]`. It accepts any mix of object ids, types, and instances.
```clojure
(bot/o->b [92])

; =>
{:lt.example/behavior {:name :lt.example/behavior
                       :triggers #{}
                       :reaction <fn …>}
```

`(o->t [objects])` returns tags attached to any of `[objects]`. It accepts any mix of object ids, types, and instances.
```clojure
(bot/o->t [92])

; =>
{:example-tag (:lt.example/behavior)>}
```

`(t->o [tags])` returns objects tagged by any of `[tags]`.
```clojure
(bot/t->o [:example-tag])

; =>
{92 #<Atom {}>}
```

`(t->b [tags])` returns behaviors included in any of `[tags]`.
```clojure
(bot/t->b [:example-tag])

; => 
{:lt.example/behavior {:name :lt.example/behavior
                       :triggers #{}
                       :reaction <fn …>}
```


