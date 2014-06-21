if(!lt.util.load.provided_QMARK_('lt.plugins.aleph.bot')) {
goog.provide('lt.plugins.aleph.bot');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.aleph.bot.__GT_set = (function __GT_set(x){if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,x);
} else
{return cljs.core.PersistentHashSet.fromArray.call(null,[x],true);
}
});
lt.plugins.aleph.bot.k_BAR_coll = (function k_BAR_coll(b){if(cljs.core.coll_QMARK_.call(null,b))
{return cljs.core.first.call(null,b);
} else
{return b;
}
});
lt.plugins.aleph.bot.flat_listeners = (function flat_listeners(o){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o))));
});
lt.plugins.aleph.bot.select_keys_with = (function select_keys_with(map,pred,xs){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,pred,xs),map));
});
lt.plugins.aleph.bot.any_in_tag_QMARK_ = (function any_in_tag_QMARK_(bs,t){return cljs.core.some.call(null,bs,cljs.core.map.call(null,lt.plugins.aleph.bot.k_BAR_coll,cljs.core.val.call(null,t)));
});
/**
* Given a behavior name or sequence thereof, returns a map of tags which
* associate any of them.
* Keys are tag names, associated to their full list of behaviors.
* 
* The returned map is a subset of the `object/tags` index.
*/
lt.plugins.aleph.bot.b__GT_t = (function b__GT_t(bs){var b_set = lt.plugins.aleph.bot.__GT_set.call(null,bs);return lt.plugins.aleph.bot.select_keys_with.call(null,cljs.core.deref.call(null,lt.object.tags),lt.plugins.aleph.bot.any_in_tag_QMARK_,b_set);
});
lt.plugins.aleph.bot.any_in_listeners_QMARK_ = (function any_in_listeners_QMARK_(bs,o){return cljs.core.some.call(null,bs,lt.plugins.aleph.bot.flat_listeners.call(null,cljs.core.val.call(null,o)));
});
/**
* Given a behavior name or sequence thereof, returns a map of objects which
* use any of them.
* Keys are integer ids, associated to their object instance.
* 
* The returned map is a subset of the `object/instances` index.
*/
lt.plugins.aleph.bot.b__GT_o = (function b__GT_o(bs){var b_set = lt.plugins.aleph.bot.__GT_set.call(null,bs);return lt.plugins.aleph.bot.select_keys_with.call(null,cljs.core.deref.call(null,lt.object.instances),lt.plugins.aleph.bot.any_in_listeners_QMARK_,b_set);
});
lt.plugins.aleph.bot.mapcat_rel = (function mapcat_rel(relator,elements){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.distinct.call(null,cljs.core.mapcat.call(null,relator,elements)));
});
lt.plugins.aleph.bot.ObjectRelator = (function (){var obj8321 = {};return obj8321;
})();
lt.plugins.aleph.bot.o__GT_b = (function o__GT_b(o){if((function (){var and__6352__auto__ = o;if(and__6352__auto__)
{return o.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1;
} else
{return and__6352__auto__;
}
})())
{return o.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1(o);
} else
{var x__6991__auto__ = (((o == null))?null:o);return (function (){var or__6364__auto__ = (lt.plugins.aleph.bot.o__GT_b[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (lt.plugins.aleph.bot.o__GT_b["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ObjectRelator.o->b",o);
}
}
})().call(null,o);
}
});
lt.plugins.aleph.bot.o__GT_t = (function o__GT_t(o){if((function (){var and__6352__auto__ = o;if(and__6352__auto__)
{return o.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1;
} else
{return and__6352__auto__;
}
})())
{return o.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1(o);
} else
{var x__6991__auto__ = (((o == null))?null:o);return (function (){var or__6364__auto__ = (lt.plugins.aleph.bot.o__GT_t[goog.typeOf(x__6991__auto__)]);if(or__6364__auto__)
{return or__6364__auto__;
} else
{var or__6364__auto____$1 = (lt.plugins.aleph.bot.o__GT_t["_"]);if(or__6364__auto____$1)
{return or__6364__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ObjectRelator.o->t",o);
}
}
})().call(null,o);
}
});
cljs.core.Keyword.prototype.lt$plugins$aleph$bot$ObjectRelator$ = true;
cljs.core.Keyword.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1 = (function (o_COLON_type){var o_COLON_type__$1 = this;var os = lt.object.instances_by_type.call(null,o_COLON_type__$1);return lt.plugins.aleph.bot.o__GT_t.call(null,os);
});
cljs.core.Keyword.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1 = (function (o_COLON_type){var o_COLON_type__$1 = this;var os = lt.object.instances_by_type.call(null,o_COLON_type__$1);return lt.plugins.aleph.bot.o__GT_b.call(null,os);
});
(lt.plugins.aleph.bot.ObjectRelator["number"] = true);
(lt.plugins.aleph.bot.o__GT_t["number"] = (function (o_COLON_id){var o = lt.object.by_id.call(null,o_COLON_id);return lt.plugins.aleph.bot.o__GT_t.call(null,o);
}));
(lt.plugins.aleph.bot.o__GT_b["number"] = (function (o_COLON_id){var o = lt.object.by_id.call(null,o_COLON_id);return lt.plugins.aleph.bot.o__GT_b.call(null,o);
}));
cljs.core.Atom.prototype.lt$plugins$aleph$bot$ObjectRelator$ = true;
cljs.core.Atom.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1 = (function (o){var o__$1 = this;var ts = new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o__$1));return cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.object.tags),ts);
});
cljs.core.Atom.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1 = (function (o){var o__$1 = this;var bs = lt.plugins.aleph.bot.flat_listeners.call(null,o__$1);return cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.object.behaviors),bs);
});
cljs.core.PersistentHashSet.prototype.lt$plugins$aleph$bot$ObjectRelator$ = true;
cljs.core.PersistentHashSet.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_t,os__$1);
});
cljs.core.PersistentHashSet.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_b,os__$1);
});
cljs.core.PersistentVector.prototype.lt$plugins$aleph$bot$ObjectRelator$ = true;
cljs.core.PersistentVector.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_t,os__$1);
});
cljs.core.PersistentVector.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_b,os__$1);
});
cljs.core.List.prototype.lt$plugins$aleph$bot$ObjectRelator$ = true;
cljs.core.List.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_t,os__$1);
});
cljs.core.List.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_b,os__$1);
});
cljs.core.LazySeq.prototype.lt$plugins$aleph$bot$ObjectRelator$ = true;
cljs.core.LazySeq.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_t,os__$1);
});
cljs.core.LazySeq.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_b,os__$1);
});
/**
* Given an index of behaviors and a behavior name, returns the full behavior
* value. Arguments passed to the behavior are stored as kv `::args [arg & more]`.
*/
lt.plugins.aleph.bot.__GT_b_val = (function __GT_b_val(index,b){if(cljs.core.coll_QMARK_.call(null,b))
{return cljs.core.merge.call(null,cljs.core.first.call(null,b).call(null,index),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.aleph.bot","args","lt.plugins.aleph.bot/args",1398344397),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.rest.call(null,b))], null));
} else
{return b.call(null,index);
}
});
/**
* Given a tag or sequence thereof, returns a map of the behaviors associated
* by any of them.
* Keys are behavior names, associated to their full value: name, triggers, reaction.
* Arguments passed by a tag will be stored in the behavior's entry as kv
* `:lt.plugins.aleph.bot/args [arg & more]`.
*/
lt.plugins.aleph.bot.t__GT_b = (function t__GT_b(ts){var t_set = lt.plugins.aleph.bot.__GT_set.call(null,ts);var bs = lt.object.tags__GT_behaviors.call(null,t_set);var index = cljs.core.deref.call(null,lt.object.behaviors);return cljs.core.zipmap.call(null,cljs.core.map.call(null,lt.plugins.aleph.bot.k_BAR_coll,bs),cljs.core.map.call(null,((function (t_set,bs,index){
return (function (p1__8322_SHARP_){return lt.plugins.aleph.bot.__GT_b_val.call(null,index,p1__8322_SHARP_);
});})(t_set,bs,index))
,bs));
});
lt.plugins.aleph.bot.any_tags_QMARK_ = (function any_tags_QMARK_(ts,o){return cljs.core.some.call(null,ts,new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.val.call(null,o))));
});
/**
* Given a tag or sequence thereof, returns a map of the objects tagged with any
* of them.
* 
* The returned map is a subset of the `object/instances` index.
*/
lt.plugins.aleph.bot.t__GT_o = (function t__GT_o(ts){var t_set = lt.plugins.aleph.bot.__GT_set.call(null,ts);return lt.plugins.aleph.bot.select_keys_with.call(null,cljs.core.deref.call(null,lt.object.instances),lt.plugins.aleph.bot.any_tags_QMARK_,t_set);
});
lt.plugins.aleph.bot.any_triggers_QMARK_ = (function any_triggers_QMARK_(triggers,b){return cljs.core.some.call(null,triggers,new cljs.core.Keyword(null,"triggers","triggers",2516997421).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,b)));
});
/**
* Given a trigger or a sequence thereof, returns a map of behaviors listening
* for any of them.
* Keys are behavior names, associated to their full value: name, triggers, reaction.
* 
* The returned map is a subset of the `object/behaviors` index.
*/
lt.plugins.aleph.bot.triggers__GT_behaviors = (function triggers__GT_behaviors(triggers){var trigger_set = lt.plugins.aleph.bot.__GT_set.call(null,triggers);return lt.plugins.aleph.bot.select_keys_with.call(null,cljs.core.deref.call(null,lt.object.behaviors),lt.plugins.aleph.bot.any_triggers_QMARK_,trigger_set);
});
lt.plugins.aleph.bot.relators = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"t","t",1013904358),lt.plugins.aleph.bot.b__GT_t,new cljs.core.Keyword(null,"o","o",1013904353),lt.plugins.aleph.bot.b__GT_o], null),new cljs.core.Keyword(null,"o","o",1013904353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.aleph.bot.o__GT_b,new cljs.core.Keyword(null,"t","t",1013904358),lt.plugins.aleph.bot.o__GT_t], null),new cljs.core.Keyword(null,"t","t",1013904358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.aleph.bot.t__GT_b,new cljs.core.Keyword(null,"o","o",1013904353),lt.plugins.aleph.bot.t__GT_o], null)], null);
/**
* Identifies associations between BOT elements.
* 
* Takes one element or a sequence thereof, reads them as elements of type `tail`,
* and returns the associated elements of type `head`.
* 
* Tail and head are keywords, and can be:
* - `:b` for behaviors,
* - `:o` for objects,
* - `:t` for tags.
*/
lt.plugins.aleph.bot.relate = (function relate(elems,tail,head){return head.call(null,tail.call(null,lt.plugins.aleph.bot.relators)).call(null,elems);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.aleph')) {
goog.provide('lt.plugins.aleph');
goog.require('cljs.core');
goog.require('lt.plugins.aleph.bot');
goog.require('lt.plugins.aleph.bot');
goog.require('lt.object');
goog.require('lt.object');
}
if(!lt.util.load.provided_QMARK_('lt.plugins.aleph.browser')) {
goog.provide('lt.plugins.aleph.browser');
goog.require('cljs.core');
goog.require('lt.objs.sidebar.command');
goog.require('lt.util.dom');
goog.require('lt.objs.notifos');
goog.require('lt.objs.tabs');
goog.require('lt.objs.notifos');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar.command');
goog.require('lt.plugins.aleph.bot');
goog.require('lt.objs.command');
goog.require('lt.plugins.aleph.bot');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
lt.plugins.aleph.browser.index__GT_node = (function index__GT_node(this$,i){return cljs.core.nth.call(null,new cljs.core.Keyword(null,"lis","lis",1014011400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),i);
});
lt.plugins.aleph.browser.remove_active_query = (function remove_active_query(sel){var old = new cljs.core.Keyword(null,"active-query","active-query",1348584115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sel));if(cljs.core.truth_(old))
{lt.util.dom.remove_class.call(null,lt.plugins.aleph.browser.index__GT_node.call(null,sel,old),new cljs.core.Keyword(null,"active-query","active-query",1348584115));
} else
{}
return lt.object.assoc_in_BANG_.call(null,sel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-query","active-query",1348584115)], null),null);
});
lt.plugins.aleph.browser.emphasize_active_query = (function emphasize_active_query(sel){var new$ = new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sel));lt.plugins.aleph.browser.remove_active_query.call(null,sel);
lt.object.merge_BANG_.call(null,sel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-query","active-query",1348584115),new$], null));
return lt.util.dom.add_class.call(null,lt.plugins.aleph.browser.index__GT_node.call(null,sel,new$),new cljs.core.Keyword(null,"active-query","active-query",1348584115));
});
lt.plugins.aleph.browser.__BEH__de_emphasize_query = (function __BEH__de_emphasize_query(this$){return lt.plugins.aleph.browser.remove_active_query.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","de-emphasize-query","lt.plugins.aleph.browser/de-emphasize-query",720233025),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.browser.__BEH__de_emphasize_query,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-list","re-list",2046533482),null,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840),null], null), null));
/**
* Given an Aleph filter-list, extracts the current results into a list
* of items compatible with relator functions.
*/
lt.plugins.aleph.browser.extract_keys = (function extract_keys(f_l){var cur = new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,f_l));var k = new cljs.core.Keyword("lt.plugins.aleph.browser","relate-by","lt.plugins.aleph.browser/relate-by",4655195243).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,f_l));return cljs.core.map.call(null,k,cljs.core.filter.call(null,cljs.core.map_QMARK_,cljs.core.apply.call(null,cljs.core.concat,cur)));
});
/**
* @param {...*} var_args
*/
lt.plugins.aleph.browser.propagate_BANG_ = (function() { 
var propagate_BANG___delegate = function (super$,observed,p__8323){var vec__8325 = p__8323;var force_QMARK_ = cljs.core.nth.call(null,vec__8325,0,null);lt.object.merge_BANG_.call(null,super$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"observing","observing",3230796363),observed], null));
return lt.object.raise.call(null,super$,new cljs.core.Keyword(null,"propagate!","propagate!",4257587594),force_QMARK_);
};
var propagate_BANG_ = function (super$,observed,var_args){
var p__8323 = null;if (arguments.length > 2) {
  p__8323 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return propagate_BANG___delegate.call(this,super$,observed,p__8323);};
propagate_BANG_.cljs$lang$maxFixedArity = 2;
propagate_BANG_.cljs$lang$applyTo = (function (arglist__8386){
var super$ = cljs.core.first(arglist__8386);
arglist__8386 = cljs.core.next(arglist__8386);
var observed = cljs.core.first(arglist__8386);
var p__8323 = cljs.core.rest(arglist__8386);
return propagate_BANG___delegate(super$,observed,p__8323);
});
propagate_BANG_.cljs$core$IFn$_invoke$arity$variadic = propagate_BANG___delegate;
return propagate_BANG_;
})()
;
lt.plugins.aleph.browser.__BEH__update_sub = (function __BEH__update_sub(this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cur","cur",1014003122),lt.objs.sidebar.command.indexed_results.call(null,cljs.core.deref.call(null,this$))], null));
lt.objs.sidebar.command.fill_lis.call(null,cljs.core.deref.call(null,this$),new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
var super$ = new cljs.core.Keyword(null,"super","super",1123705581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var observed = lt.plugins.aleph.browser.extract_keys.call(null,this$);return lt.plugins.aleph.browser.propagate_BANG_.call(null,super$,observed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","update-sub","lt.plugins.aleph.browser/update-sub",4340760636),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.browser.__BEH__update_sub,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh!","refresh!",4597922840),null], null), null));
lt.plugins.aleph.browser.__BEH__re_list = (function __BEH__re_list(this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cur","cur",1014003122),lt.objs.sidebar.command.indexed_results.call(null,cljs.core.deref.call(null,this$))], null));
return lt.objs.sidebar.command.fill_lis.call(null,cljs.core.deref.call(null,this$),new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","re-list","lt.plugins.aleph.browser/re-list",1401197576),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.browser.__BEH__re_list,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-list","re-list",2046533482),null], null), null));
/**
* @param {...*} var_args
*/
lt.plugins.aleph.browser.__BEH__reset_BANG_ = (function() { 
var __BEH__reset_BANG___delegate = function (this$,p__8326){var vec__8328 = p__8326;var notify_QMARK_ = cljs.core.nth.call(null,vec__8328,0,null);var enlist = new cljs.core.Keyword("lt.plugins.aleph.browser","list-fn","lt.plugins.aleph.browser/list-fn",642632039).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var starter = new cljs.core.Keyword("lt.plugins.aleph.browser","starter-items","lt.plugins.aleph.browser/starter-items",4099370290).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1114430258),enlist.call(null,starter.call(null))], null));
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"re-list","re-list",2046533482));
if(cljs.core.truth_(notify_QMARK_))
{return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Aleph Browser: refreshed "),cljs.core.str((function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(notify_QMARK_);if(cljs.core.truth_(temp__4090__auto__))
{var s = temp__4090__auto__;return s;
} else
{return clojure.string.lower_case.call(null,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
})()),cljs.core.str(" list")].join(''));
} else
{return null;
}
};
var __BEH__reset_BANG_ = function (this$,var_args){
var p__8326 = null;if (arguments.length > 1) {
  p__8326 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__reset_BANG___delegate.call(this,this$,p__8326);};
__BEH__reset_BANG_.cljs$lang$maxFixedArity = 1;
__BEH__reset_BANG_.cljs$lang$applyTo = (function (arglist__8387){
var this$ = cljs.core.first(arglist__8387);
var p__8326 = cljs.core.rest(arglist__8387);
return __BEH__reset_BANG___delegate(this$,p__8326);
});
__BEH__reset_BANG_.cljs$core$IFn$_invoke$arity$variadic = __BEH__reset_BANG___delegate;
return __BEH__reset_BANG_;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","reset!","lt.plugins.aleph.browser/reset!",3972248770),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.browser.__BEH__reset_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset!","reset!",4374429732),null], null), null));
lt.plugins.aleph.browser.__BEH__propagate_selection_BANG_ = (function __BEH__propagate_selection_BANG_(this$,item){var super$ = new cljs.core.Keyword(null,"super","super",1123705581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var relator = new cljs.core.Keyword("lt.plugins.aleph.browser","relate-by","lt.plugins.aleph.browser/relate-by",4655195243).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var observed = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [relator.call(null,item)], null);lt.plugins.aleph.browser.propagate_BANG_.call(null,super$,observed,new cljs.core.Keyword(null,"from-selection","from-selection",3073266331));
return lt.plugins.aleph.browser.emphasize_active_query.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","propagate-selection!","lt.plugins.aleph.browser/propagate-selection!",2823629369),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.browser.__BEH__propagate_selection_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.aleph.browser.change_search_mode = (function change_search_mode(flist,new_mode){return lt.object.merge_BANG_.call(null,flist,new_mode);
});
lt.plugins.aleph.browser.__BEH__search_by = (function __BEH__search_by(this$,search_mode){lt.plugins.aleph.browser.change_search_mode.call(null,this$,search_mode);
return lt.plugins.aleph.browser.emphasize_mode.call(null,this$,search_mode);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","search-by","lt.plugins.aleph.browser/search-by",2268376988),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.browser.__BEH__search_by,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-by","search-by",2792063502),null], null), null));
lt.plugins.aleph.browser.css_mode_prefix = "aleph-browser_search-by-";
lt.plugins.aleph.browser.mode_priority__LT_ = (function mode_priority__LT_(x,y){var x_priority = new cljs.core.Keyword("lt.plugins.aleph.browser","priority","lt.plugins.aleph.browser/priority",3598229972).cljs$core$IFn$_invoke$arity$1(x);var y_priority = new cljs.core.Keyword("lt.plugins.aleph.browser","priority","lt.plugins.aleph.browser/priority",3598229972).cljs$core$IFn$_invoke$arity$1(y);var comparison = cljs.core.compare.call(null,x_priority,y_priority);if(!(cljs.core._EQ_.call(null,comparison,0)))
{return comparison;
} else
{return cljs.core.compare.call(null,x,y);
}
});
lt.plugins.aleph.browser.opposite_mode = (function opposite_mode(selector,new_mode){var search_modes = new cljs.core.Keyword("lt.plugins.aleph.browser","modes","lt.plugins.aleph.browser/modes",720184400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selector));return cljs.core.first.call(null,cljs.core.disj.call(null,search_modes,new_mode));
});
lt.plugins.aleph.browser.__GT_str_id = (function __GT_str_id(val_id){return [cljs.core.str("#"),cljs.core.str(val_id)].join('');
});
lt.plugins.aleph.browser.emphasize_mode = (function emphasize_mode(selector,mode){var active_id = new cljs.core.Keyword("lt.plugins.aleph.browser","css-sel","lt.plugins.aleph.browser/css-sel",1432363696).cljs$core$IFn$_invoke$arity$1(mode);var inactive_id = new cljs.core.Keyword("lt.plugins.aleph.browser","css-sel","lt.plugins.aleph.browser/css-sel",1432363696).cljs$core$IFn$_invoke$arity$1(lt.plugins.aleph.browser.opposite_mode.call(null,selector,mode));var inactive_sel = lt.plugins.aleph.browser.__GT_str_id.call(null,inactive_id);var active_sel = lt.plugins.aleph.browser.__GT_str_id.call(null,active_id);lt.util.dom.remove_class.call(null,lt.util.dom.$.call(null,inactive_sel),new cljs.core.Keyword(null,"current-mode","current-mode",2436437225));
return lt.util.dom.add_class.call(null,lt.util.dom.$.call(null,active_sel),new cljs.core.Keyword(null,"current-mode","current-mode",2436437225));
});
/**
* @param {...*} var_args
*/
lt.plugins.aleph.browser.__GT_class_str = (function() { 
var __GT_class_str__delegate = function (strings){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.filter.call(null,cljs.core.identity,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,strings))));
};
var __GT_class_str = function (var_args){
var strings = null;if (arguments.length > 0) {
  strings = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return __GT_class_str__delegate.call(this,strings);};
__GT_class_str.cljs$lang$maxFixedArity = 0;
__GT_class_str.cljs$lang$applyTo = (function (arglist__8388){
var strings = cljs.core.seq(arglist__8388);
return __GT_class_str__delegate(strings);
});
__GT_class_str.cljs$core$IFn$_invoke$arity$variadic = __GT_class_str__delegate;
return __GT_class_str;
})()
;
lt.plugins.aleph.browser.search_mode_button = (function search_mode_button(this$,p__8329){var map__8337 = p__8329;var map__8337__$1 = ((cljs.core.seq_QMARK_.call(null,map__8337))?cljs.core.apply.call(null,cljs.core.hash_map,map__8337):map__8337);var mode = map__8337__$1;var priority = cljs.core.get.call(null,map__8337__$1,new cljs.core.Keyword("lt.plugins.aleph.browser","priority","lt.plugins.aleph.browser/priority",3598229972));var css_sel = cljs.core.get.call(null,map__8337__$1,new cljs.core.Keyword("lt.plugins.aleph.browser","css-sel","lt.plugins.aleph.browser/css-sel",1432363696));var display_key = cljs.core.get.call(null,map__8337__$1,new cljs.core.Keyword("lt.plugins.aleph.browser","display-key","lt.plugins.aleph.browser/display-key",2333352676));var e__8017__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),css_sel,new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.aleph.browser.__GT_class_str.call(null,"button","mode-selector",((cljs.core._EQ_.call(null,0,priority))?"current-mode":null))], null),display_key], null));var seq__8338_8389 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__8017__auto__,map__8337,map__8337__$1,mode,priority,css_sel,display_key){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"search-by","search-by",2792063502),mode);
});})(e__8017__auto__,map__8337,map__8337__$1,mode,priority,css_sel,display_key))
], null)));var chunk__8339_8390 = null;var count__8340_8391 = 0;var i__8341_8392 = 0;while(true){
if((i__8341_8392 < count__8340_8391))
{var vec__8342_8393 = cljs.core._nth.call(null,chunk__8339_8390,i__8341_8392);var ev__8018__auto___8394 = cljs.core.nth.call(null,vec__8342_8393,0,null);var func__8019__auto___8395 = cljs.core.nth.call(null,vec__8342_8393,1,null);lt.util.dom.on.call(null,e__8017__auto__,ev__8018__auto___8394,func__8019__auto___8395);
{
var G__8396 = seq__8338_8389;
var G__8397 = chunk__8339_8390;
var G__8398 = count__8340_8391;
var G__8399 = (i__8341_8392 + 1);
seq__8338_8389 = G__8396;
chunk__8339_8390 = G__8397;
count__8340_8391 = G__8398;
i__8341_8392 = G__8399;
continue;
}
} else
{var temp__4092__auto___8400 = cljs.core.seq.call(null,seq__8338_8389);if(temp__4092__auto___8400)
{var seq__8338_8401__$1 = temp__4092__auto___8400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8338_8401__$1))
{var c__7112__auto___8402 = cljs.core.chunk_first.call(null,seq__8338_8401__$1);{
var G__8403 = cljs.core.chunk_rest.call(null,seq__8338_8401__$1);
var G__8404 = c__7112__auto___8402;
var G__8405 = cljs.core.count.call(null,c__7112__auto___8402);
var G__8406 = 0;
seq__8338_8389 = G__8403;
chunk__8339_8390 = G__8404;
count__8340_8391 = G__8405;
i__8341_8392 = G__8406;
continue;
}
} else
{var vec__8343_8407 = cljs.core.first.call(null,seq__8338_8401__$1);var ev__8018__auto___8408 = cljs.core.nth.call(null,vec__8343_8407,0,null);var func__8019__auto___8409 = cljs.core.nth.call(null,vec__8343_8407,1,null);lt.util.dom.on.call(null,e__8017__auto__,ev__8018__auto___8408,func__8019__auto___8409);
{
var G__8410 = cljs.core.next.call(null,seq__8338_8401__$1);
var G__8411 = null;
var G__8412 = 0;
var G__8413 = 0;
seq__8338_8389 = G__8410;
chunk__8339_8390 = G__8411;
count__8340_8391 = G__8412;
i__8341_8392 = G__8413;
continue;
}
}
} else
{}
}
break;
}
return e__8017__auto__;
});
lt.plugins.aleph.browser.reset_button = (function reset_button(this$){var e__8017__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button.reset","div.button.reset",629395778),"refresh"], null));var seq__8350_8414 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__8017__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"reset!","reset!",4374429732),true);
});})(e__8017__auto__))
], null)));var chunk__8351_8415 = null;var count__8352_8416 = 0;var i__8353_8417 = 0;while(true){
if((i__8353_8417 < count__8352_8416))
{var vec__8354_8418 = cljs.core._nth.call(null,chunk__8351_8415,i__8353_8417);var ev__8018__auto___8419 = cljs.core.nth.call(null,vec__8354_8418,0,null);var func__8019__auto___8420 = cljs.core.nth.call(null,vec__8354_8418,1,null);lt.util.dom.on.call(null,e__8017__auto__,ev__8018__auto___8419,func__8019__auto___8420);
{
var G__8421 = seq__8350_8414;
var G__8422 = chunk__8351_8415;
var G__8423 = count__8352_8416;
var G__8424 = (i__8353_8417 + 1);
seq__8350_8414 = G__8421;
chunk__8351_8415 = G__8422;
count__8352_8416 = G__8423;
i__8353_8417 = G__8424;
continue;
}
} else
{var temp__4092__auto___8425 = cljs.core.seq.call(null,seq__8350_8414);if(temp__4092__auto___8425)
{var seq__8350_8426__$1 = temp__4092__auto___8425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8350_8426__$1))
{var c__7112__auto___8427 = cljs.core.chunk_first.call(null,seq__8350_8426__$1);{
var G__8428 = cljs.core.chunk_rest.call(null,seq__8350_8426__$1);
var G__8429 = c__7112__auto___8427;
var G__8430 = cljs.core.count.call(null,c__7112__auto___8427);
var G__8431 = 0;
seq__8350_8414 = G__8428;
chunk__8351_8415 = G__8429;
count__8352_8416 = G__8430;
i__8353_8417 = G__8431;
continue;
}
} else
{var vec__8355_8432 = cljs.core.first.call(null,seq__8350_8426__$1);var ev__8018__auto___8433 = cljs.core.nth.call(null,vec__8355_8432,0,null);var func__8019__auto___8434 = cljs.core.nth.call(null,vec__8355_8432,1,null);lt.util.dom.on.call(null,e__8017__auto__,ev__8018__auto___8433,func__8019__auto___8434);
{
var G__8435 = cljs.core.next.call(null,seq__8350_8426__$1);
var G__8436 = null;
var G__8437 = 0;
var G__8438 = 0;
seq__8350_8414 = G__8435;
chunk__8351_8415 = G__8436;
count__8352_8416 = G__8437;
i__8353_8417 = G__8438;
continue;
}
}
} else
{}
}
break;
}
return e__8017__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","selector","lt.plugins.aleph.browser/selector",1845218271),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aleph.selector","aleph.selector",3339412653),null,new cljs.core.Keyword(null,"filter-list","filter-list",4372522309),null], null), null),new cljs.core.Keyword(null,"selected","selected",2205476365),0,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"search",new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search","search",4402534682),"",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,opts){var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),100], null),opts);var items = (function (){var iter__7081__auto__ = ((function (opts__$1){
return (function iter__8357(s__8358){return (new cljs.core.LazySeq(null,((function (opts__$1){
return (function (){var s__8358__$1 = s__8358;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8358__$1);if(temp__4092__auto__)
{var s__8358__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8358__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8358__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8360 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8359 = 0;while(true){
if((i__8359 < size__7080__auto__))
{var coll = cljs.core._nth.call(null,c__7079__auto__,i__8359);cljs.core.chunk_append.call(null,b__8360,lt.objs.sidebar.command.item.call(null,this$,coll));
{
var G__8439 = (i__8359 + 1);
i__8359 = G__8439;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8360),iter__8357.call(null,cljs.core.chunk_rest.call(null,s__8358__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8360),null);
}
} else
{var coll = cljs.core.first.call(null,s__8358__$2);return cljs.core.cons.call(null,lt.objs.sidebar.command.item.call(null,this$,coll),iter__8357.call(null,cljs.core.rest.call(null,s__8358__$2)));
}
} else
{return null;
}
break;
}
});})(opts__$1))
,null,null));
});})(opts__$1))
;return iter__7081__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(opts__$1)));
})();var mode_buttons = (function (){var temp__4090__auto__ = new cljs.core.Keyword("lt.plugins.aleph.browser","modes","lt.plugins.aleph.browser/modes",720184400).cljs$core$IFn$_invoke$arity$1(opts__$1);if(cljs.core.truth_(temp__4090__auto__))
{var modes = temp__4090__auto__;return cljs.core.map.call(null,((function (modes,temp__4090__auto__,opts__$1,items){
return (function (p1__8356_SHARP_){return lt.plugins.aleph.browser.search_mode_button.call(null,this$,p1__8356_SHARP_);
});})(modes,temp__4090__auto__,opts__$1,items))
,modes);
} else
{return null;
}
})();lt.object.merge_BANG_.call(null,this$,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lis","lis",1014011400),cljs.core.vec.call(null,items)], null),opts__$1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-list.empty","div.filter-list.empty",3131797703),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-row","div.flex-row",4121591349),lt.objs.sidebar.command.input.call(null,this$),lt.plugins.aleph.browser.reset_button.call(null,this$)], null),(cljs.core.truth_(mode_buttons)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mode-selection","div.mode-selection",4735357009),mode_buttons], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),items], null)], null);
}));
lt.plugins.aleph.browser.selector = (function selector(opts){var sel = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","selector","lt.plugins.aleph.browser/selector",1845218271),opts);lt.object.raise.call(null,sel,new cljs.core.Keyword(null,"re-list","re-list",2046533482));
return sel;
});
lt.plugins.aleph.browser.b_enlist = (function b_enlist(bs){return cljs.core.map.call(null,(function (p1__8361_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword("lt.plugins.aleph.browser","name-key","lt.plugins.aleph.browser/name-key",2207412253),new cljs.core.Keyword("lt.plugins.aleph.browser","triggers-key","lt.plugins.aleph.browser/triggers-key",1037107309),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"triggers","triggers",2516997421)],[[cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8361_SHARP_))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"triggers","triggers",2516997421).cljs$core$IFn$_invoke$arity$1(p1__8361_SHARP_))].join(''),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8361_SHARP_),new cljs.core.Keyword(null,"triggers","triggers",2516997421).cljs$core$IFn$_invoke$arity$1(p1__8361_SHARP_)]);
}),cljs.core.vals.call(null,bs));
});
lt.plugins.aleph.browser.b_itemize_with_name = (function b_itemize_with_name(){return (function (original,scored,highlighted,item){return [cljs.core.str("<h2>"),cljs.core.str(highlighted),cljs.core.str("</h2><p>"),cljs.core.str(new cljs.core.Keyword(null,"triggers","triggers",2516997421).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("</p>")].join('');
});
});
lt.plugins.aleph.browser.b_itemize_with_triggers = (function b_itemize_with_triggers(){return (function (original,scored,highlighted,item){return [cljs.core.str("<h2>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("</h2><p>"),cljs.core.str(highlighted),cljs.core.str("</p>")].join('');
});
});
lt.plugins.aleph.browser.b_search_modes = cljs.core.sorted_set_by.call(null,lt.plugins.aleph.browser.mode_priority__LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword("lt.plugins.aleph.browser","name-key","lt.plugins.aleph.browser/name-key",2207412253),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.browser.b_itemize_with_name.call(null),new cljs.core.Keyword("lt.plugins.aleph.browser","display-key","lt.plugins.aleph.browser/display-key",2333352676),"by name",new cljs.core.Keyword("lt.plugins.aleph.browser","css-sel","lt.plugins.aleph.browser/css-sel",1432363696),[cljs.core.str(lt.plugins.aleph.browser.css_mode_prefix),cljs.core.str("name")].join(''),new cljs.core.Keyword("lt.plugins.aleph.browser","priority","lt.plugins.aleph.browser/priority",3598229972),0], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword("lt.plugins.aleph.browser","triggers-key","lt.plugins.aleph.browser/triggers-key",1037107309),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.browser.b_itemize_with_triggers.call(null),new cljs.core.Keyword("lt.plugins.aleph.browser","display-key","lt.plugins.aleph.browser/display-key",2333352676),"by trigger",new cljs.core.Keyword("lt.plugins.aleph.browser","css-sel","lt.plugins.aleph.browser/css-sel",1432363696),[cljs.core.str(lt.plugins.aleph.browser.css_mode_prefix),cljs.core.str("trigger")].join(''),new cljs.core.Keyword("lt.plugins.aleph.browser","priority","lt.plugins.aleph.browser/priority",3598229972),1], null));
lt.plugins.aleph.browser.b_list = lt.plugins.aleph.browser.selector.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return lt.plugins.aleph.browser.b_enlist.call(null,cljs.core.deref.call(null,lt.object.behaviors));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword("lt.plugins.aleph.browser","name-key","lt.plugins.aleph.browser/name-key",2207412253),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.browser.b_itemize_with_name.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Behavior",new cljs.core.Keyword("lt.plugins.aleph.browser","modes","lt.plugins.aleph.browser/modes",720184400),lt.plugins.aleph.browser.b_search_modes,new cljs.core.Keyword("lt.plugins.aleph.browser","relate-by","lt.plugins.aleph.browser/relate-by",4655195243),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword("lt.plugins.aleph.browser","list-fn","lt.plugins.aleph.browser/list-fn",642632039),lt.plugins.aleph.browser.b_enlist,new cljs.core.Keyword("lt.plugins.aleph.browser","starter-items","lt.plugins.aleph.browser/starter-items",4099370290),(function (){return cljs.core.deref.call(null,lt.object.behaviors);
})], null));
lt.plugins.aleph.browser.o_enlist = (function o_enlist(os){return cljs.core.map.call(null,(function (p1__8362_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword("lt.plugins.aleph.browser","type-key","lt.plugins.aleph.browser/type-key",4254508652),new cljs.core.Keyword("lt.plugins.aleph.browser","id-key","lt.plugins.aleph.browser/id-key",3694985933),new cljs.core.Keyword("lt.object","type","lt.object/type",701613666),new cljs.core.Keyword("lt.object","id","lt.object/id",706431105),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.Keyword(null,"listeners","listeners",4090152369)],[[cljs.core.str(new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8362_SHARP_)))].join(''),[cljs.core.str(new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8362_SHARP_)))].join(''),new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8362_SHARP_)),new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8362_SHARP_)),new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8362_SHARP_)),new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8362_SHARP_))]);
}),cljs.core.vals.call(null,os));
});
lt.plugins.aleph.browser.o_itemize_with_type = (function o_itemize_with_type(){return (function (original,scored,highlighted,item){return [cljs.core.str("<h2>"),cljs.core.str(highlighted),cljs.core.str("</h2><p>"),cljs.core.str(new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("</p>")].join('');
});
});
lt.plugins.aleph.browser.o_itemize_with_id = (function o_itemize_with_id(){return (function (original,scored,highlighted,item){return [cljs.core.str("<h2>"),cljs.core.str(new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("</h2><p>"),cljs.core.str(highlighted),cljs.core.str("</p>")].join('');
});
});
lt.plugins.aleph.browser.o_search_modes = cljs.core.sorted_set_by.call(null,lt.plugins.aleph.browser.mode_priority__LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword("lt.plugins.aleph.browser","type-key","lt.plugins.aleph.browser/type-key",4254508652),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.browser.o_itemize_with_type.call(null),new cljs.core.Keyword("lt.plugins.aleph.browser","display-key","lt.plugins.aleph.browser/display-key",2333352676),"by type",new cljs.core.Keyword("lt.plugins.aleph.browser","css-sel","lt.plugins.aleph.browser/css-sel",1432363696),[cljs.core.str(lt.plugins.aleph.browser.css_mode_prefix),cljs.core.str("type")].join(''),new cljs.core.Keyword("lt.plugins.aleph.browser","priority","lt.plugins.aleph.browser/priority",3598229972),0], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword("lt.plugins.aleph.browser","id-key","lt.plugins.aleph.browser/id-key",3694985933),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.browser.o_itemize_with_id.call(null),new cljs.core.Keyword("lt.plugins.aleph.browser","display-key","lt.plugins.aleph.browser/display-key",2333352676),"by id",new cljs.core.Keyword("lt.plugins.aleph.browser","css-sel","lt.plugins.aleph.browser/css-sel",1432363696),[cljs.core.str(lt.plugins.aleph.browser.css_mode_prefix),cljs.core.str("id")].join(''),new cljs.core.Keyword("lt.plugins.aleph.browser","priority","lt.plugins.aleph.browser/priority",3598229972),1], null));
lt.plugins.aleph.browser.o_list = lt.plugins.aleph.browser.selector.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return lt.plugins.aleph.browser.o_enlist.call(null,cljs.core.deref.call(null,lt.object.instances));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword("lt.plugins.aleph.browser","type-key","lt.plugins.aleph.browser/type-key",4254508652),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.browser.o_itemize_with_type.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Object",new cljs.core.Keyword("lt.plugins.aleph.browser","modes","lt.plugins.aleph.browser/modes",720184400),lt.plugins.aleph.browser.o_search_modes,new cljs.core.Keyword("lt.plugins.aleph.browser","relate-by","lt.plugins.aleph.browser/relate-by",4655195243),new cljs.core.Keyword("lt.object","id","lt.object/id",706431105),new cljs.core.Keyword("lt.plugins.aleph.browser","list-fn","lt.plugins.aleph.browser/list-fn",642632039),lt.plugins.aleph.browser.o_enlist,new cljs.core.Keyword("lt.plugins.aleph.browser","starter-items","lt.plugins.aleph.browser/starter-items",4099370290),(function (){return cljs.core.deref.call(null,lt.object.instances);
})], null));
lt.plugins.aleph.browser.t_enlist = (function t_enlist(ts){return cljs.core.map.call(null,(function (p1__8363_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword("lt.plugins.aleph.browser","tag-key","lt.plugins.aleph.browser/tag-key",2978653644),new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"behaviors","behaviors",607554515)],[[cljs.core.str(cljs.core.key.call(null,p1__8363_SHARP_))].join(''),cljs.core.key.call(null,p1__8363_SHARP_),cljs.core.val.call(null,p1__8363_SHARP_)]);
}),ts);
});
lt.plugins.aleph.browser.t_itemize = (function t_itemize(){return (function (original,scored,highlighted,item){return [cljs.core.str("<h2>"),cljs.core.str(highlighted),cljs.core.str("</h2><p>"),cljs.core.str(new cljs.core.Keyword(null,"behaviors","behaviors",607554515).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("</p>")].join('');
});
});
lt.plugins.aleph.browser.t_list = lt.plugins.aleph.browser.selector.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return lt.plugins.aleph.browser.t_enlist.call(null,cljs.core.deref.call(null,lt.object.tags));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword("lt.plugins.aleph.browser","tag-key","lt.plugins.aleph.browser/tag-key",2978653644),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.browser.t_itemize.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Tag",new cljs.core.Keyword("lt.plugins.aleph.browser","relate-by","lt.plugins.aleph.browser/relate-by",4655195243),new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword("lt.plugins.aleph.browser","list-fn","lt.plugins.aleph.browser/list-fn",642632039),lt.plugins.aleph.browser.t_enlist,new cljs.core.Keyword("lt.plugins.aleph.browser","starter-items","lt.plugins.aleph.browser/starter-items",4099370290),(function (){return cljs.core.deref.call(null,lt.object.tags);
})], null));
lt.plugins.aleph.browser.__BEH__propagate_BANG_ = (function __BEH__propagate_BANG_(this$,force_QMARK_){var tail = new cljs.core.Keyword(null,"element","element",3646034542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var obs = new cljs.core.Keyword(null,"observing","observing",3230796363).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var targets = cljs.core.vals.call(null,cljs.core.dissoc.call(null,lt.plugins.aleph.browser.subspaces,tail));var selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_((function (){var or__6364__auto__ = force_QMARK_;if(cljs.core.truth_(or__6364__auto__))
{return or__6364__auto__;
} else
{return cljs.core.seq.call(null,lt.objs.sidebar.command.input_val.call(null,selector));
}
})()))
{var seq__8372 = cljs.core.seq.call(null,targets);var chunk__8373 = null;var count__8374 = 0;var i__8375 = 0;while(true){
if((i__8375 < count__8374))
{var aleph_sub = cljs.core._nth.call(null,chunk__8373,i__8375);lt.object.raise.call(null,aleph_sub,new cljs.core.Keyword(null,"relate","relate",4374217419),tail,obs);
{
var G__8440 = seq__8372;
var G__8441 = chunk__8373;
var G__8442 = count__8374;
var G__8443 = (i__8375 + 1);
seq__8372 = G__8440;
chunk__8373 = G__8441;
count__8374 = G__8442;
i__8375 = G__8443;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8372);if(temp__4092__auto__)
{var seq__8372__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8372__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8372__$1);{
var G__8444 = cljs.core.chunk_rest.call(null,seq__8372__$1);
var G__8445 = c__7112__auto__;
var G__8446 = cljs.core.count.call(null,c__7112__auto__);
var G__8447 = 0;
seq__8372 = G__8444;
chunk__8373 = G__8445;
count__8374 = G__8446;
i__8375 = G__8447;
continue;
}
} else
{var aleph_sub = cljs.core.first.call(null,seq__8372__$1);lt.object.raise.call(null,aleph_sub,new cljs.core.Keyword(null,"relate","relate",4374217419),tail,obs);
{
var G__8448 = cljs.core.next.call(null,seq__8372__$1);
var G__8449 = null;
var G__8450 = 0;
var G__8451 = 0;
seq__8372 = G__8448;
chunk__8373 = G__8449;
count__8374 = G__8450;
i__8375 = G__8451;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{var seq__8376 = cljs.core.seq.call(null,cljs.core.vals.call(null,lt.plugins.aleph.browser.subspaces));var chunk__8377 = null;var count__8378 = 0;var i__8379 = 0;while(true){
if((i__8379 < count__8378))
{var aleph_sub = cljs.core._nth.call(null,chunk__8377,i__8379);lt.object.raise.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aleph_sub)),new cljs.core.Keyword(null,"reset!","reset!",4374429732));
{
var G__8452 = seq__8376;
var G__8453 = chunk__8377;
var G__8454 = count__8378;
var G__8455 = (i__8379 + 1);
seq__8376 = G__8452;
chunk__8377 = G__8453;
count__8378 = G__8454;
i__8379 = G__8455;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8376);if(temp__4092__auto__)
{var seq__8376__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8376__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8376__$1);{
var G__8456 = cljs.core.chunk_rest.call(null,seq__8376__$1);
var G__8457 = c__7112__auto__;
var G__8458 = cljs.core.count.call(null,c__7112__auto__);
var G__8459 = 0;
seq__8376 = G__8456;
chunk__8377 = G__8457;
count__8378 = G__8458;
i__8379 = G__8459;
continue;
}
} else
{var aleph_sub = cljs.core.first.call(null,seq__8376__$1);lt.object.raise.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aleph_sub)),new cljs.core.Keyword(null,"reset!","reset!",4374429732));
{
var G__8460 = cljs.core.next.call(null,seq__8376__$1);
var G__8461 = null;
var G__8462 = 0;
var G__8463 = 0;
seq__8376 = G__8460;
chunk__8377 = G__8461;
count__8378 = G__8462;
i__8379 = G__8463;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","propagate!","lt.plugins.aleph.browser/propagate!",3486420520),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.browser.__BEH__propagate_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagate!","propagate!",4257587594),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),400);
lt.plugins.aleph.browser.__BEH__relate = (function __BEH__relate(this$,tail,obs){var selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var items = new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selector));var enlist = new cljs.core.Keyword("lt.plugins.aleph.browser","list-fn","lt.plugins.aleph.browser/list-fn",642632039).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selector));var head = new cljs.core.Keyword(null,"element","element",3646034542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var related = lt.plugins.aleph.bot.relate.call(null,obs,tail,head);lt.object.merge_BANG_.call(null,selector,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1114430258),enlist.call(null,related)], null));
return lt.object.raise.call(null,selector,new cljs.core.Keyword(null,"re-list","re-list",2046533482));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","relate","lt.plugins.aleph.browser/relate",3971706969),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.browser.__BEH__relate,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"relate","relate",4374217419),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","sub","lt.plugins.aleph.browser/sub",4650426176),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph.sub","aleph.sub",3776989910),null], null), null),new cljs.core.Keyword(null,"element","element",3646034542),null,new cljs.core.Keyword(null,"observing","observing",3230796363),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selector","selector",2205476689),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,p__8380){var map__8381 = p__8380;var map__8381__$1 = ((cljs.core.seq_QMARK_.call(null,map__8381))?cljs.core.apply.call(null,cljs.core.hash_map,map__8381):map__8381);var opts = map__8381__$1;var sel = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"sel","sel",1014017996));var el = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"el","el",1013907481));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",3646034542),el,new cljs.core.Keyword(null,"selector","selector",2205476689),sel], null));
return lt.object.merge_BANG_.call(null,sel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"super","super",1123705581),this$], null));
}));
lt.plugins.aleph.browser.__GT_sub = (function __GT_sub(el,sel){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","sub","lt.plugins.aleph.browser/sub",4650426176),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",1013907481),el,new cljs.core.Keyword(null,"sel","sel",1014017996),sel], null));
});
lt.plugins.aleph.browser.b_sub = lt.plugins.aleph.browser.__GT_sub.call(null,new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.aleph.browser.b_list);
lt.plugins.aleph.browser.o_sub = lt.plugins.aleph.browser.__GT_sub.call(null,new cljs.core.Keyword(null,"o","o",1013904353),lt.plugins.aleph.browser.o_list);
lt.plugins.aleph.browser.t_sub = lt.plugins.aleph.browser.__GT_sub.call(null,new cljs.core.Keyword(null,"t","t",1013904358),lt.plugins.aleph.browser.t_list);
lt.plugins.aleph.browser.subspaces = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.aleph.browser.b_sub,new cljs.core.Keyword(null,"o","o",1013904353),lt.plugins.aleph.browser.o_sub,new cljs.core.Keyword(null,"t","t",1013904358),lt.plugins.aleph.browser.t_sub], null);
lt.plugins.aleph.browser.__BEH__on_close = (function __BEH__on_close(this$){return lt.objs.tabs.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","on-close","lt.plugins.aleph.browser/on-close",1026934186),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.browser.__BEH__on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","aleph.browser","lt.plugins.aleph.browser/aleph.browser",1223404396),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph.browser","aleph.browser",1755612606),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Aleph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.aleph-browser","div.aleph-browser",4444866114),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-row","div.flex-row",4121591349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#aleph-behaviors.aleph-filter","div#aleph-behaviors.aleph-filter",3799671359),lt.object.__GT_content.call(null,lt.plugins.aleph.browser.b_list)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#aleph-objects.aleph-filter","div#aleph-objects.aleph-filter",1406779308),lt.object.__GT_content.call(null,lt.plugins.aleph.browser.o_list)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#aleph-tags.aleph-filter","div#aleph-tags.aleph-filter",3092406733),lt.object.__GT_content.call(null,lt.plugins.aleph.browser.t_list)], null)], null)], null);
}));
lt.plugins.aleph.browser.browser = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","aleph.browser","lt.plugins.aleph.browser/aleph.browser",1223404396));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"aleph.browse","aleph.browse",2561850968),new cljs.core.Keyword(null,"desc","desc",1016984067),"Aleph: open browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.aleph.browser.browser);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"aleph.browser.refresh","aleph.browser.refresh",1517034667),new cljs.core.Keyword(null,"desc","desc",1016984067),"Aleph: refresh browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var seq__8382 = cljs.core.seq.call(null,cljs.core.vals.call(null,lt.plugins.aleph.browser.subspaces));var chunk__8383 = null;var count__8384 = 0;var i__8385 = 0;while(true){
if((i__8385 < count__8384))
{var sub = cljs.core._nth.call(null,chunk__8383,i__8385);lt.object.raise.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sub)),new cljs.core.Keyword(null,"reset!","reset!",4374429732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",1014012659),"every"], null));
{
var G__8464 = seq__8382;
var G__8465 = chunk__8383;
var G__8466 = count__8384;
var G__8467 = (i__8385 + 1);
seq__8382 = G__8464;
chunk__8383 = G__8465;
count__8384 = G__8466;
i__8385 = G__8467;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8382);if(temp__4092__auto__)
{var seq__8382__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8382__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8382__$1);{
var G__8468 = cljs.core.chunk_rest.call(null,seq__8382__$1);
var G__8469 = c__7112__auto__;
var G__8470 = cljs.core.count.call(null,c__7112__auto__);
var G__8471 = 0;
seq__8382 = G__8468;
chunk__8383 = G__8469;
count__8384 = G__8470;
i__8385 = G__8471;
continue;
}
} else
{var sub = cljs.core.first.call(null,seq__8382__$1);lt.object.raise.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sub)),new cljs.core.Keyword(null,"reset!","reset!",4374429732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",1014012659),"every"], null));
{
var G__8472 = cljs.core.next.call(null,seq__8382__$1);
var G__8473 = null;
var G__8474 = 0;
var G__8475 = 0;
seq__8382 = G__8472;
chunk__8383 = G__8473;
count__8384 = G__8474;
i__8385 = G__8475;
continue;
}
}
} else
{return null;
}
}
break;
}
})], null));
}
if(!lt.util.load.provided_QMARK_('')) {
}

//# sourceMappingURL=aleph_compiled.js.map