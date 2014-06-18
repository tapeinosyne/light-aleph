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
lt.plugins.aleph.bot.any_in_tag_QMARK_ = (function any_in_tag_QMARK_(bs,t){return cljs.core.some.call(null,bs,cljs.core.map.call(null,lt.plugins.aleph.bot.k_BAR_coll,cljs.core.val.call(null,t)));
});
lt.plugins.aleph.bot.b__GT_t = (function b__GT_t(bs){var b_set = lt.plugins.aleph.bot.__GT_set.call(null,bs);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (b_set){
return (function (p1__8127_SHARP_){return lt.plugins.aleph.bot.any_in_tag_QMARK_.call(null,b_set,p1__8127_SHARP_);
});})(b_set))
,cljs.core.deref.call(null,lt.object.tags)));
});
lt.plugins.aleph.bot.any_in_listeners_QMARK_ = (function any_in_listeners_QMARK_(bs,o){return cljs.core.some.call(null,bs,lt.plugins.aleph.bot.flat_listeners.call(null,cljs.core.val.call(null,o)));
});
lt.plugins.aleph.bot.b__GT_o = (function b__GT_o(bs){var b_set = lt.plugins.aleph.bot.__GT_set.call(null,bs);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (b_set){
return (function (p1__8128_SHARP_){return lt.plugins.aleph.bot.any_in_listeners_QMARK_.call(null,b_set,p1__8128_SHARP_);
});})(b_set))
,cljs.core.deref.call(null,lt.object.instances)));
});
lt.plugins.aleph.bot.mapcat_rel = (function mapcat_rel(relator,elements){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.distinct.call(null,cljs.core.mapcat.call(null,relator,elements)));
});
lt.plugins.aleph.bot.ObjectRelator = (function (){var obj8130 = {};return obj8130;
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
* Given a behavior name, returns the full behavior map.
*/
lt.plugins.aleph.bot.__GT_b_val = (function __GT_b_val(index,b){if(cljs.core.coll_QMARK_.call(null,b))
{return cljs.core.merge.call(null,cljs.core.first.call(null,b).call(null,index),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.aleph.bot","args","lt.plugins.aleph.bot/args",1398344397),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.rest.call(null,b))], null));
} else
{return b.call(null,index);
}
});
/**
* Given a tag or sequence thereof, returns a map of the associated behaviors.
* Aguments passed by a tag will be stored in the behavior's entry as kv
* `:lt.plugins.aleph.bot/args [args]`.
*/
lt.plugins.aleph.bot.t__GT_b = (function t__GT_b(ts){var t_set = lt.plugins.aleph.bot.__GT_set.call(null,ts);var bs = lt.object.tags__GT_behaviors.call(null,t_set);var index = cljs.core.deref.call(null,lt.object.behaviors);return cljs.core.zipmap.call(null,cljs.core.map.call(null,lt.plugins.aleph.bot.k_BAR_coll,bs),cljs.core.map.call(null,((function (t_set,bs,index){
return (function (p1__8131_SHARP_){return lt.plugins.aleph.bot.__GT_b_val.call(null,index,p1__8131_SHARP_);
});})(t_set,bs,index))
,bs));
});
lt.plugins.aleph.bot.any_tags_QMARK_ = (function any_tags_QMARK_(ts,o){return cljs.core.some.call(null,ts,new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.val.call(null,o))));
});
/**
* Given a tag or sequence thereof, returns a map of the associated objects.
*/
lt.plugins.aleph.bot.t__GT_o = (function t__GT_o(ts){var t_set = lt.plugins.aleph.bot.__GT_set.call(null,ts);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (t_set){
return (function (p1__8132_SHARP_){return lt.plugins.aleph.bot.any_tags_QMARK_.call(null,t_set,p1__8132_SHARP_);
});})(t_set))
,cljs.core.deref.call(null,lt.object.instances)));
});
lt.plugins.aleph.bot.relators = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"t","t",1013904358),lt.plugins.aleph.bot.b__GT_t,new cljs.core.Keyword(null,"o","o",1013904353),lt.plugins.aleph.bot.b__GT_o], null),new cljs.core.Keyword(null,"o","o",1013904353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.aleph.bot.o__GT_b,new cljs.core.Keyword(null,"t","t",1013904358),lt.plugins.aleph.bot.o__GT_t], null),new cljs.core.Keyword(null,"t","t",1013904358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.aleph.bot.t__GT_b,new cljs.core.Keyword(null,"o","o",1013904353),lt.plugins.aleph.bot.t__GT_o], null)], null);
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
var propagate_BANG___delegate = function (super$,observed,p__8133){var vec__8135 = p__8133;var force_QMARK_ = cljs.core.nth.call(null,vec__8135,0,null);lt.object.merge_BANG_.call(null,super$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"observing","observing",3230796363),observed], null));
return lt.object.raise.call(null,super$,new cljs.core.Keyword(null,"propagate!","propagate!",4257587594),force_QMARK_);
};
var propagate_BANG_ = function (super$,observed,var_args){
var p__8133 = null;if (arguments.length > 2) {
  p__8133 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return propagate_BANG___delegate.call(this,super$,observed,p__8133);};
propagate_BANG_.cljs$lang$maxFixedArity = 2;
propagate_BANG_.cljs$lang$applyTo = (function (arglist__8196){
var super$ = cljs.core.first(arglist__8196);
arglist__8196 = cljs.core.next(arglist__8196);
var observed = cljs.core.first(arglist__8196);
var p__8133 = cljs.core.rest(arglist__8196);
return propagate_BANG___delegate(super$,observed,p__8133);
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
var __BEH__reset_BANG___delegate = function (this$,p__8136){var vec__8138 = p__8136;var notify_QMARK_ = cljs.core.nth.call(null,vec__8138,0,null);var enlist = new cljs.core.Keyword("lt.plugins.aleph.browser","list-fn","lt.plugins.aleph.browser/list-fn",642632039).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var starter = new cljs.core.Keyword("lt.plugins.aleph.browser","starter-items","lt.plugins.aleph.browser/starter-items",4099370290).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1114430258),enlist.call(null,starter.call(null))], null));
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
var p__8136 = null;if (arguments.length > 1) {
  p__8136 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__reset_BANG___delegate.call(this,this$,p__8136);};
__BEH__reset_BANG_.cljs$lang$maxFixedArity = 1;
__BEH__reset_BANG_.cljs$lang$applyTo = (function (arglist__8197){
var this$ = cljs.core.first(arglist__8197);
var p__8136 = cljs.core.rest(arglist__8197);
return __BEH__reset_BANG___delegate(this$,p__8136);
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
__GT_class_str.cljs$lang$applyTo = (function (arglist__8198){
var strings = cljs.core.seq(arglist__8198);
return __GT_class_str__delegate(strings);
});
__GT_class_str.cljs$core$IFn$_invoke$arity$variadic = __GT_class_str__delegate;
return __GT_class_str;
})()
;
lt.plugins.aleph.browser.search_mode_button = (function search_mode_button(this$,p__8139){var map__8147 = p__8139;var map__8147__$1 = ((cljs.core.seq_QMARK_.call(null,map__8147))?cljs.core.apply.call(null,cljs.core.hash_map,map__8147):map__8147);var mode = map__8147__$1;var priority = cljs.core.get.call(null,map__8147__$1,new cljs.core.Keyword("lt.plugins.aleph.browser","priority","lt.plugins.aleph.browser/priority",3598229972));var css_sel = cljs.core.get.call(null,map__8147__$1,new cljs.core.Keyword("lt.plugins.aleph.browser","css-sel","lt.plugins.aleph.browser/css-sel",1432363696));var display_key = cljs.core.get.call(null,map__8147__$1,new cljs.core.Keyword("lt.plugins.aleph.browser","display-key","lt.plugins.aleph.browser/display-key",2333352676));var e__7783__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),css_sel,new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.aleph.browser.__GT_class_str.call(null,"button","mode-selector",((cljs.core._EQ_.call(null,0,priority))?"current-mode":null))], null),display_key], null));var seq__8148_8199 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7783__auto__,map__8147,map__8147__$1,mode,priority,css_sel,display_key){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"search-by","search-by",2792063502),mode);
});})(e__7783__auto__,map__8147,map__8147__$1,mode,priority,css_sel,display_key))
], null)));var chunk__8149_8200 = null;var count__8150_8201 = 0;var i__8151_8202 = 0;while(true){
if((i__8151_8202 < count__8150_8201))
{var vec__8152_8203 = cljs.core._nth.call(null,chunk__8149_8200,i__8151_8202);var ev__7784__auto___8204 = cljs.core.nth.call(null,vec__8152_8203,0,null);var func__7785__auto___8205 = cljs.core.nth.call(null,vec__8152_8203,1,null);lt.util.dom.on.call(null,e__7783__auto__,ev__7784__auto___8204,func__7785__auto___8205);
{
var G__8206 = seq__8148_8199;
var G__8207 = chunk__8149_8200;
var G__8208 = count__8150_8201;
var G__8209 = (i__8151_8202 + 1);
seq__8148_8199 = G__8206;
chunk__8149_8200 = G__8207;
count__8150_8201 = G__8208;
i__8151_8202 = G__8209;
continue;
}
} else
{var temp__4092__auto___8210 = cljs.core.seq.call(null,seq__8148_8199);if(temp__4092__auto___8210)
{var seq__8148_8211__$1 = temp__4092__auto___8210;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8148_8211__$1))
{var c__7112__auto___8212 = cljs.core.chunk_first.call(null,seq__8148_8211__$1);{
var G__8213 = cljs.core.chunk_rest.call(null,seq__8148_8211__$1);
var G__8214 = c__7112__auto___8212;
var G__8215 = cljs.core.count.call(null,c__7112__auto___8212);
var G__8216 = 0;
seq__8148_8199 = G__8213;
chunk__8149_8200 = G__8214;
count__8150_8201 = G__8215;
i__8151_8202 = G__8216;
continue;
}
} else
{var vec__8153_8217 = cljs.core.first.call(null,seq__8148_8211__$1);var ev__7784__auto___8218 = cljs.core.nth.call(null,vec__8153_8217,0,null);var func__7785__auto___8219 = cljs.core.nth.call(null,vec__8153_8217,1,null);lt.util.dom.on.call(null,e__7783__auto__,ev__7784__auto___8218,func__7785__auto___8219);
{
var G__8220 = cljs.core.next.call(null,seq__8148_8211__$1);
var G__8221 = null;
var G__8222 = 0;
var G__8223 = 0;
seq__8148_8199 = G__8220;
chunk__8149_8200 = G__8221;
count__8150_8201 = G__8222;
i__8151_8202 = G__8223;
continue;
}
}
} else
{}
}
break;
}
return e__7783__auto__;
});
lt.plugins.aleph.browser.reset_button = (function reset_button(this$){var e__7783__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button.reset","div.button.reset",629395778),"refresh"], null));var seq__8160_8224 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7783__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"reset!","reset!",4374429732),true);
});})(e__7783__auto__))
], null)));var chunk__8161_8225 = null;var count__8162_8226 = 0;var i__8163_8227 = 0;while(true){
if((i__8163_8227 < count__8162_8226))
{var vec__8164_8228 = cljs.core._nth.call(null,chunk__8161_8225,i__8163_8227);var ev__7784__auto___8229 = cljs.core.nth.call(null,vec__8164_8228,0,null);var func__7785__auto___8230 = cljs.core.nth.call(null,vec__8164_8228,1,null);lt.util.dom.on.call(null,e__7783__auto__,ev__7784__auto___8229,func__7785__auto___8230);
{
var G__8231 = seq__8160_8224;
var G__8232 = chunk__8161_8225;
var G__8233 = count__8162_8226;
var G__8234 = (i__8163_8227 + 1);
seq__8160_8224 = G__8231;
chunk__8161_8225 = G__8232;
count__8162_8226 = G__8233;
i__8163_8227 = G__8234;
continue;
}
} else
{var temp__4092__auto___8235 = cljs.core.seq.call(null,seq__8160_8224);if(temp__4092__auto___8235)
{var seq__8160_8236__$1 = temp__4092__auto___8235;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8160_8236__$1))
{var c__7112__auto___8237 = cljs.core.chunk_first.call(null,seq__8160_8236__$1);{
var G__8238 = cljs.core.chunk_rest.call(null,seq__8160_8236__$1);
var G__8239 = c__7112__auto___8237;
var G__8240 = cljs.core.count.call(null,c__7112__auto___8237);
var G__8241 = 0;
seq__8160_8224 = G__8238;
chunk__8161_8225 = G__8239;
count__8162_8226 = G__8240;
i__8163_8227 = G__8241;
continue;
}
} else
{var vec__8165_8242 = cljs.core.first.call(null,seq__8160_8236__$1);var ev__7784__auto___8243 = cljs.core.nth.call(null,vec__8165_8242,0,null);var func__7785__auto___8244 = cljs.core.nth.call(null,vec__8165_8242,1,null);lt.util.dom.on.call(null,e__7783__auto__,ev__7784__auto___8243,func__7785__auto___8244);
{
var G__8245 = cljs.core.next.call(null,seq__8160_8236__$1);
var G__8246 = null;
var G__8247 = 0;
var G__8248 = 0;
seq__8160_8224 = G__8245;
chunk__8161_8225 = G__8246;
count__8162_8226 = G__8247;
i__8163_8227 = G__8248;
continue;
}
}
} else
{}
}
break;
}
return e__7783__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","selector","lt.plugins.aleph.browser/selector",1845218271),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aleph.selector","aleph.selector",3339412653),null,new cljs.core.Keyword(null,"filter-list","filter-list",4372522309),null], null), null),new cljs.core.Keyword(null,"selected","selected",2205476365),0,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"search",new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search","search",4402534682),"",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,opts){var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),100], null),opts);var items = (function (){var iter__7081__auto__ = ((function (opts__$1){
return (function iter__8167(s__8168){return (new cljs.core.LazySeq(null,((function (opts__$1){
return (function (){var s__8168__$1 = s__8168;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8168__$1);if(temp__4092__auto__)
{var s__8168__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8168__$2))
{var c__7079__auto__ = cljs.core.chunk_first.call(null,s__8168__$2);var size__7080__auto__ = cljs.core.count.call(null,c__7079__auto__);var b__8170 = cljs.core.chunk_buffer.call(null,size__7080__auto__);if((function (){var i__8169 = 0;while(true){
if((i__8169 < size__7080__auto__))
{var coll = cljs.core._nth.call(null,c__7079__auto__,i__8169);cljs.core.chunk_append.call(null,b__8170,lt.objs.sidebar.command.item.call(null,this$,coll));
{
var G__8249 = (i__8169 + 1);
i__8169 = G__8249;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8170),iter__8167.call(null,cljs.core.chunk_rest.call(null,s__8168__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8170),null);
}
} else
{var coll = cljs.core.first.call(null,s__8168__$2);return cljs.core.cons.call(null,lt.objs.sidebar.command.item.call(null,this$,coll),iter__8167.call(null,cljs.core.rest.call(null,s__8168__$2)));
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
return (function (p1__8166_SHARP_){return lt.plugins.aleph.browser.search_mode_button.call(null,this$,p1__8166_SHARP_);
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
lt.plugins.aleph.browser.b_enlist = (function b_enlist(bs){return cljs.core.map.call(null,(function (p1__8171_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword("lt.plugins.aleph.browser","name-key","lt.plugins.aleph.browser/name-key",2207412253),new cljs.core.Keyword("lt.plugins.aleph.browser","triggers-key","lt.plugins.aleph.browser/triggers-key",1037107309),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"triggers","triggers",2516997421)],[[cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8171_SHARP_))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"triggers","triggers",2516997421).cljs$core$IFn$_invoke$arity$1(p1__8171_SHARP_))].join(''),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8171_SHARP_),new cljs.core.Keyword(null,"triggers","triggers",2516997421).cljs$core$IFn$_invoke$arity$1(p1__8171_SHARP_)]);
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
lt.plugins.aleph.browser.o_enlist = (function o_enlist(os){return cljs.core.map.call(null,(function (p1__8172_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword("lt.plugins.aleph.browser","type-key","lt.plugins.aleph.browser/type-key",4254508652),new cljs.core.Keyword("lt.plugins.aleph.browser","id-key","lt.plugins.aleph.browser/id-key",3694985933),new cljs.core.Keyword("lt.object","type","lt.object/type",701613666),new cljs.core.Keyword("lt.object","id","lt.object/id",706431105),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.Keyword(null,"listeners","listeners",4090152369)],[[cljs.core.str(new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8172_SHARP_)))].join(''),[cljs.core.str(new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8172_SHARP_)))].join(''),new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8172_SHARP_)),new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8172_SHARP_)),new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8172_SHARP_)),new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8172_SHARP_))]);
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
lt.plugins.aleph.browser.t_enlist = (function t_enlist(ts){return cljs.core.map.call(null,(function (p1__8173_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword("lt.plugins.aleph.browser","tag-key","lt.plugins.aleph.browser/tag-key",2978653644),new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"behaviors","behaviors",607554515)],[[cljs.core.str(cljs.core.key.call(null,p1__8173_SHARP_))].join(''),cljs.core.key.call(null,p1__8173_SHARP_),cljs.core.val.call(null,p1__8173_SHARP_)]);
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
{var seq__8182 = cljs.core.seq.call(null,targets);var chunk__8183 = null;var count__8184 = 0;var i__8185 = 0;while(true){
if((i__8185 < count__8184))
{var aleph_sub = cljs.core._nth.call(null,chunk__8183,i__8185);lt.object.raise.call(null,aleph_sub,new cljs.core.Keyword(null,"relate","relate",4374217419),tail,obs);
{
var G__8250 = seq__8182;
var G__8251 = chunk__8183;
var G__8252 = count__8184;
var G__8253 = (i__8185 + 1);
seq__8182 = G__8250;
chunk__8183 = G__8251;
count__8184 = G__8252;
i__8185 = G__8253;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8182);if(temp__4092__auto__)
{var seq__8182__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8182__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8182__$1);{
var G__8254 = cljs.core.chunk_rest.call(null,seq__8182__$1);
var G__8255 = c__7112__auto__;
var G__8256 = cljs.core.count.call(null,c__7112__auto__);
var G__8257 = 0;
seq__8182 = G__8254;
chunk__8183 = G__8255;
count__8184 = G__8256;
i__8185 = G__8257;
continue;
}
} else
{var aleph_sub = cljs.core.first.call(null,seq__8182__$1);lt.object.raise.call(null,aleph_sub,new cljs.core.Keyword(null,"relate","relate",4374217419),tail,obs);
{
var G__8258 = cljs.core.next.call(null,seq__8182__$1);
var G__8259 = null;
var G__8260 = 0;
var G__8261 = 0;
seq__8182 = G__8258;
chunk__8183 = G__8259;
count__8184 = G__8260;
i__8185 = G__8261;
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
{var seq__8186 = cljs.core.seq.call(null,cljs.core.vals.call(null,lt.plugins.aleph.browser.subspaces));var chunk__8187 = null;var count__8188 = 0;var i__8189 = 0;while(true){
if((i__8189 < count__8188))
{var aleph_sub = cljs.core._nth.call(null,chunk__8187,i__8189);lt.object.raise.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aleph_sub)),new cljs.core.Keyword(null,"reset!","reset!",4374429732));
{
var G__8262 = seq__8186;
var G__8263 = chunk__8187;
var G__8264 = count__8188;
var G__8265 = (i__8189 + 1);
seq__8186 = G__8262;
chunk__8187 = G__8263;
count__8188 = G__8264;
i__8189 = G__8265;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8186);if(temp__4092__auto__)
{var seq__8186__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8186__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8186__$1);{
var G__8266 = cljs.core.chunk_rest.call(null,seq__8186__$1);
var G__8267 = c__7112__auto__;
var G__8268 = cljs.core.count.call(null,c__7112__auto__);
var G__8269 = 0;
seq__8186 = G__8266;
chunk__8187 = G__8267;
count__8188 = G__8268;
i__8189 = G__8269;
continue;
}
} else
{var aleph_sub = cljs.core.first.call(null,seq__8186__$1);lt.object.raise.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aleph_sub)),new cljs.core.Keyword(null,"reset!","reset!",4374429732));
{
var G__8270 = cljs.core.next.call(null,seq__8186__$1);
var G__8271 = null;
var G__8272 = 0;
var G__8273 = 0;
seq__8186 = G__8270;
chunk__8187 = G__8271;
count__8188 = G__8272;
i__8189 = G__8273;
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","sub","lt.plugins.aleph.browser/sub",4650426176),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph.sub","aleph.sub",3776989910),null], null), null),new cljs.core.Keyword(null,"element","element",3646034542),null,new cljs.core.Keyword(null,"observing","observing",3230796363),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selector","selector",2205476689),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,p__8190){var map__8191 = p__8190;var map__8191__$1 = ((cljs.core.seq_QMARK_.call(null,map__8191))?cljs.core.apply.call(null,cljs.core.hash_map,map__8191):map__8191);var opts = map__8191__$1;var sel = cljs.core.get.call(null,map__8191__$1,new cljs.core.Keyword(null,"sel","sel",1014017996));var el = cljs.core.get.call(null,map__8191__$1,new cljs.core.Keyword(null,"el","el",1013907481));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",3646034542),el,new cljs.core.Keyword(null,"selector","selector",2205476689),sel], null));
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
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"aleph.browser.refresh","aleph.browser.refresh",1517034667),new cljs.core.Keyword(null,"desc","desc",1016984067),"Aleph: refresh browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var seq__8192 = cljs.core.seq.call(null,cljs.core.vals.call(null,lt.plugins.aleph.browser.subspaces));var chunk__8193 = null;var count__8194 = 0;var i__8195 = 0;while(true){
if((i__8195 < count__8194))
{var sub = cljs.core._nth.call(null,chunk__8193,i__8195);lt.object.raise.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sub)),new cljs.core.Keyword(null,"reset!","reset!",4374429732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",1014012659),"every"], null));
{
var G__8274 = seq__8192;
var G__8275 = chunk__8193;
var G__8276 = count__8194;
var G__8277 = (i__8195 + 1);
seq__8192 = G__8274;
chunk__8193 = G__8275;
count__8194 = G__8276;
i__8195 = G__8277;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8192);if(temp__4092__auto__)
{var seq__8192__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8192__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8192__$1);{
var G__8278 = cljs.core.chunk_rest.call(null,seq__8192__$1);
var G__8279 = c__7112__auto__;
var G__8280 = cljs.core.count.call(null,c__7112__auto__);
var G__8281 = 0;
seq__8192 = G__8278;
chunk__8193 = G__8279;
count__8194 = G__8280;
i__8195 = G__8281;
continue;
}
} else
{var sub = cljs.core.first.call(null,seq__8192__$1);lt.object.raise.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sub)),new cljs.core.Keyword(null,"reset!","reset!",4374429732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",1014012659),"every"], null));
{
var G__8282 = cljs.core.next.call(null,seq__8192__$1);
var G__8283 = null;
var G__8284 = 0;
var G__8285 = 0;
seq__8192 = G__8282;
chunk__8193 = G__8283;
count__8194 = G__8284;
i__8195 = G__8285;
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