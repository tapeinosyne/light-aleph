if(!lt.util.load.provided_QMARK_('lt.plugins.aleph')) {
goog.provide('lt.plugins.aleph');
goog.require('cljs.core');
goog.require('lt.objs.sidebar.command');
goog.require('lt.util.dom');
goog.require('clojure.set');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
goog.require('clojure.set');
goog.require('lt.objs.tabs');
goog.require('lt.objs.command');
lt.plugins.aleph.k_BAR_coll = (function k_BAR_coll(b){if(cljs.core.coll_QMARK_.call(null,b))
{return cljs.core.first.call(null,b);
} else
{return b;
}
});
/**
* Given a sequence of behaviors, returns a map of the associated tags and all
* their behaviors.
*/
lt.plugins.aleph.b__GT_t = (function b__GT_t(bs){var behs = cljs.core.apply.call(null,cljs.core.hash_set,bs);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (t){return cljs.core.some.call(null,behs,cljs.core.val.call(null,t));
}),cljs.core.deref.call(null,lt.object.tags)));
});
/**
* Given a sequence of behaviors, returns a list of the objects to which any of
* them is associated.
*/
lt.plugins.aleph.b__GT_o = (function b__GT_o(bs){var behs = cljs.core.apply.call(null,cljs.core.hash_set,bs);var listeners = ((function (behs){
return (function (o){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o))));
});})(behs))
;return cljs.core.filter.call(null,(function (p1__8220_SHARP_){return cljs.core.some.call(null,behs,listeners.call(null,p1__8220_SHARP_));
}),cljs.core.vals.call(null,cljs.core.deref.call(null,lt.object.instances)));
});
/**
* Given an object instance, returns a list of its tags.
*/
lt.plugins.aleph.o__GT_t_STAR_ = (function o__GT_t_STAR_(o){return new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o));
});
/**
* Given a sequence of objects ids, returns a list of its tags as keys associated
* to their behaviors.
*/
lt.plugins.aleph.o__GT_t = (function o__GT_t(ids){var os = cljs.core.map.call(null,lt.object.by_id,ids);var t_keys = cljs.core.distinct.call(null,cljs.core.mapcat.call(null,lt.plugins.aleph.o__GT_t_STAR_,os));var t_vals = cljs.core.map.call(null,cljs.core.deref.call(null,lt.object.tags),t_keys);return cljs.core.zipmap.call(null,t_keys,t_vals);
});
/**
* Given an object instance, returns a list of its behaviors' names.
*/
lt.plugins.aleph.o__GT_b_STAR_ = (function o__GT_b_STAR_(o){var listeners = new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o));var behs = cljs.core.vals.call(null,listeners);return cljs.core.apply.call(null,cljs.core.concat,behs);
});
/**
* Given a sequence of object ids, returns a list of the associated behaviors.
*/
lt.plugins.aleph.o__GT_b = (function o__GT_b(ids){var os = cljs.core.map.call(null,lt.object.by_id,ids);return cljs.core.map.call(null,cljs.core.deref.call(null,lt.object.behaviors),cljs.core.distinct.call(null,cljs.core.mapcat.call(null,lt.plugins.aleph.o__GT_b_STAR_,os)));
});
lt.plugins.aleph.__GT_behavior = (function __GT_behavior(beh){if(cljs.core.coll_QMARK_.call(null,beh))
{return cljs.core.with_meta.call(null,cljs.core.deref.call(null,lt.object.behaviors).call(null,cljs.core.first.call(null,beh)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-args","with-args",1879884022),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.rest.call(null,beh))], null));
} else
{return cljs.core.deref.call(null,lt.object.behaviors).call(null,beh);
}
});
/**
* Given a sequence of tags, returns a list of the associated behaviors.
* Arguments passed by a tag will be stored as metadata `:with-args [args]`
* in the entry for the associated behavior.
*/
lt.plugins.aleph.t__GT_b = (function t__GT_b(ts){return cljs.core.map.call(null,lt.plugins.aleph.__GT_behavior,lt.object.tags__GT_behaviors.call(null,ts));
});
/**
* Given a sequence of tags, returns a map of associated objects.
*/
lt.plugins.aleph.t__GT_o = (function t__GT_o(ts){return cljs.core.mapcat.call(null,lt.object.by_tag,ts);
});
lt.plugins.aleph.type_STAR_ = (function type_STAR_(obj){return cljs.core.keyword.call(null,cljs.core.name.call(null,new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj))));
});
lt.plugins.aleph.__BEH__update_sub = (function __BEH__update_sub(this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cur","cur",1014003122),lt.objs.sidebar.command.indexed_results.call(null,cljs.core.deref.call(null,this$))], null));
lt.objs.sidebar.command.fill_lis.call(null,cljs.core.deref.call(null,this$),new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
var super$ = new cljs.core.Keyword(null,"super","super",1123705581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var observed = lt.plugins.aleph.extract_keys.call(null,this$);lt.object.merge_BANG_.call(null,super$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"observing","observing",3230796363),observed], null));
return lt.object.raise.call(null,super$,new cljs.core.Keyword(null,"propagate!","propagate!",4257587594));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph","update-sub","lt.plugins.aleph/update-sub",698281163),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.__BEH__update_sub,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh!","refresh!",4597922840),null], null), null));
lt.plugins.aleph.__BEH__re_list = (function __BEH__re_list(this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cur","cur",1014003122),lt.objs.sidebar.command.indexed_results.call(null,cljs.core.deref.call(null,this$))], null));
return lt.objs.sidebar.command.fill_lis.call(null,cljs.core.deref.call(null,this$),new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph","re-list","lt.plugins.aleph/re-list",4200366095),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.__BEH__re_list,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-list","re-list",2046533482),null], null), null));
lt.plugins.aleph.b_enlist = (function b_enlist(b){return cljs.core.map.call(null,(function (p1__8221_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword("lt.plugins.aleph","index-by","lt.plugins.aleph/index-by",827664597),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"triggers","triggers",2516997421)],[[cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8221_SHARP_))].join(''),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__8221_SHARP_),new cljs.core.Keyword(null,"triggers","triggers",2516997421).cljs$core$IFn$_invoke$arity$1(p1__8221_SHARP_)]);
}),b);
});
lt.plugins.aleph.b_itemize = (function b_itemize(){return (function (original,scored,highlighted,item){return [cljs.core.str("<h2>"),cljs.core.str(highlighted),cljs.core.str("</h2><p>"),cljs.core.str(new cljs.core.Keyword(null,"triggers","triggers",2516997421).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("</p>")].join('');
});
});
lt.plugins.aleph.b_list = lt.objs.sidebar.command.filter_list.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.aleph.b_enlist.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,lt.object.behaviors))),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword("lt.plugins.aleph","index-by","lt.plugins.aleph/index-by",827664597),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.b_itemize.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Behaviors",new cljs.core.Keyword("lt.plugins.aleph","relate-by","lt.plugins.aleph/relate-by",945901758),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword("lt.plugins.aleph","list-fn","lt.plugins.aleph/list-fn",4532990962),lt.plugins.aleph.b_enlist,new cljs.core.Keyword("lt.plugins.aleph","starter-items","lt.plugins.aleph/starter-items",1479243525),(function (){return cljs.core.vals.call(null,cljs.core.deref.call(null,lt.object.behaviors));
})], null));
lt.plugins.aleph.o_enlist = (function o_enlist(o){return cljs.core.map.call(null,(function (p1__8222_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword("lt.plugins.aleph","index-by","lt.plugins.aleph/index-by",827664597),new cljs.core.Keyword("lt.object","type","lt.object/type",701613666),new cljs.core.Keyword("lt.object","id","lt.object/id",706431105),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.Keyword(null,"listeners","listeners",4090152369)],[[cljs.core.str(new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8222_SHARP_)))].join(''),new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8222_SHARP_)),new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8222_SHARP_)),new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8222_SHARP_)),new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8222_SHARP_))]);
}),o);
});
lt.plugins.aleph.o_itemize = (function o_itemize(){return (function (original,scored,highlighted,item){return [cljs.core.str("<h2>"),cljs.core.str(highlighted),cljs.core.str("</h2><p>"),cljs.core.str(new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("</p>")].join('');
});
});
lt.plugins.aleph.o_list = lt.objs.sidebar.command.filter_list.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.aleph.o_enlist.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,lt.object.instances))),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword("lt.plugins.aleph","index-by","lt.plugins.aleph/index-by",827664597),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.o_itemize.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Object",new cljs.core.Keyword("lt.plugins.aleph","relate-by","lt.plugins.aleph/relate-by",945901758),new cljs.core.Keyword("lt.object","id","lt.object/id",706431105),new cljs.core.Keyword("lt.plugins.aleph","list-fn","lt.plugins.aleph/list-fn",4532990962),lt.plugins.aleph.o_enlist,new cljs.core.Keyword("lt.plugins.aleph","starter-items","lt.plugins.aleph/starter-items",1479243525),(function (){return cljs.core.vals.call(null,cljs.core.deref.call(null,lt.object.instances));
})], null));
lt.plugins.aleph.t_enlist = (function t_enlist(t){return cljs.core.map.call(null,(function (p1__8223_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword("lt.plugins.aleph","index-by","lt.plugins.aleph/index-by",827664597),new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"behaviors","behaviors",607554515)],[[cljs.core.str(cljs.core.key.call(null,p1__8223_SHARP_))].join(''),cljs.core.key.call(null,p1__8223_SHARP_),cljs.core.val.call(null,p1__8223_SHARP_)]);
}),t);
});
lt.plugins.aleph.t_itemize = (function t_itemize(){return (function (original,scored,highlighted,item){return [cljs.core.str("<h2>"),cljs.core.str(highlighted),cljs.core.str("</h2><p>"),cljs.core.str(new cljs.core.Keyword(null,"behaviors","behaviors",607554515).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("</p>")].join('');
});
});
lt.plugins.aleph.t_list = lt.objs.sidebar.command.filter_list.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.aleph.t_enlist.call(null,cljs.core.deref.call(null,lt.object.tags)),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword("lt.plugins.aleph","index-by","lt.plugins.aleph/index-by",827664597),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.t_itemize.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Tag",new cljs.core.Keyword("lt.plugins.aleph","relate-by","lt.plugins.aleph/relate-by",945901758),new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword("lt.plugins.aleph","list-fn","lt.plugins.aleph/list-fn",4532990962),lt.plugins.aleph.t_enlist,new cljs.core.Keyword("lt.plugins.aleph","starter-items","lt.plugins.aleph/starter-items",1479243525),(function (){return cljs.core.deref.call(null,lt.object.tags);
})], null));
/**
* Given a filter-list, extract the current items.
*/
lt.plugins.aleph.extract_keys = (function extract_keys(f_l){var cur = new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,f_l));var k = new cljs.core.Keyword("lt.plugins.aleph","relate-by","lt.plugins.aleph/relate-by",945901758).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,f_l));return cljs.core.map.call(null,k,cljs.core.filter.call(null,cljs.core.map_QMARK_,cljs.core.apply.call(null,cljs.core.concat,cur)));
});
lt.plugins.aleph.__BEH__reset_BANG_ = (function __BEH__reset_BANG_(this$){var selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var enlist = new cljs.core.Keyword("lt.plugins.aleph","list-fn","lt.plugins.aleph/list-fn",4532990962).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selector));var starter = new cljs.core.Keyword("lt.plugins.aleph","starter-items","lt.plugins.aleph/starter-items",1479243525).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selector));lt.object.merge_BANG_.call(null,selector,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1114430258),enlist.call(null,starter.call(null))], null));
return lt.object.raise.call(null,selector,new cljs.core.Keyword(null,"re-list","re-list",2046533482));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph","reset!","lt.plugins.aleph/reset!",1872339029),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.__BEH__reset_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset!","reset!",4374429732),null], null), null));
lt.plugins.aleph.__BEH__propagate_BANG_ = (function __BEH__propagate_BANG_(this$){var element = lt.plugins.aleph.type_STAR_.call(null,this$);var targets = cljs.core.vals.call(null,cljs.core.dissoc.call(null,lt.plugins.aleph.subspaces,element));var selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var obs = new cljs.core.Keyword(null,"observing","observing",3230796363).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.seq.call(null,lt.objs.sidebar.command.input_val.call(null,selector)))
{var seq__8232 = cljs.core.seq.call(null,targets);var chunk__8233 = null;var count__8234 = 0;var i__8235 = 0;while(true){
if((i__8235 < count__8234))
{var aleph_sub = cljs.core._nth.call(null,chunk__8233,i__8235);lt.object.raise.call(null,aleph_sub,new cljs.core.Keyword(null,"relate","relate",4374217419),element,obs);
{
var G__8253 = seq__8232;
var G__8254 = chunk__8233;
var G__8255 = count__8234;
var G__8256 = (i__8235 + 1);
seq__8232 = G__8253;
chunk__8233 = G__8254;
count__8234 = G__8255;
i__8235 = G__8256;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8232);if(temp__4092__auto__)
{var seq__8232__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8232__$1))
{var c__7500__auto__ = cljs.core.chunk_first.call(null,seq__8232__$1);{
var G__8257 = cljs.core.chunk_rest.call(null,seq__8232__$1);
var G__8258 = c__7500__auto__;
var G__8259 = cljs.core.count.call(null,c__7500__auto__);
var G__8260 = 0;
seq__8232 = G__8257;
chunk__8233 = G__8258;
count__8234 = G__8259;
i__8235 = G__8260;
continue;
}
} else
{var aleph_sub = cljs.core.first.call(null,seq__8232__$1);lt.object.raise.call(null,aleph_sub,new cljs.core.Keyword(null,"relate","relate",4374217419),element,obs);
{
var G__8261 = cljs.core.next.call(null,seq__8232__$1);
var G__8262 = null;
var G__8263 = 0;
var G__8264 = 0;
seq__8232 = G__8261;
chunk__8233 = G__8262;
count__8234 = G__8263;
i__8235 = G__8264;
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
{var seq__8236 = cljs.core.seq.call(null,targets);var chunk__8237 = null;var count__8238 = 0;var i__8239 = 0;while(true){
if((i__8239 < count__8238))
{var aleph_sub = cljs.core._nth.call(null,chunk__8237,i__8239);lt.object.raise.call(null,aleph_sub,new cljs.core.Keyword(null,"reset!","reset!",4374429732));
{
var G__8265 = seq__8236;
var G__8266 = chunk__8237;
var G__8267 = count__8238;
var G__8268 = (i__8239 + 1);
seq__8236 = G__8265;
chunk__8237 = G__8266;
count__8238 = G__8267;
i__8239 = G__8268;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8236);if(temp__4092__auto__)
{var seq__8236__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8236__$1))
{var c__7500__auto__ = cljs.core.chunk_first.call(null,seq__8236__$1);{
var G__8269 = cljs.core.chunk_rest.call(null,seq__8236__$1);
var G__8270 = c__7500__auto__;
var G__8271 = cljs.core.count.call(null,c__7500__auto__);
var G__8272 = 0;
seq__8236 = G__8269;
chunk__8237 = G__8270;
count__8238 = G__8271;
i__8239 = G__8272;
continue;
}
} else
{var aleph_sub = cljs.core.first.call(null,seq__8236__$1);lt.object.raise.call(null,aleph_sub,new cljs.core.Keyword(null,"reset!","reset!",4374429732));
{
var G__8273 = cljs.core.next.call(null,seq__8236__$1);
var G__8274 = null;
var G__8275 = 0;
var G__8276 = 0;
seq__8236 = G__8273;
chunk__8237 = G__8274;
count__8238 = G__8275;
i__8239 = G__8276;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph","propagate!","lt.plugins.aleph/propagate!",1991409199),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.__BEH__propagate_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagate!","propagate!",4257587594),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),600);
lt.plugins.aleph.__BEH__relate = (function __BEH__relate(this$,element,obs){var selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var items = new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selector));var enlist = new cljs.core.Keyword("lt.plugins.aleph","list-fn","lt.plugins.aleph/list-fn",4532990962).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selector));var relator = element.call(null,new cljs.core.Keyword(null,"relator","relator",2104398049).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var context = relator.call(null,obs);lt.object.merge_BANG_.call(null,selector,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1114430258),enlist.call(null,context)], null));
return lt.object.raise.call(null,selector,new cljs.core.Keyword(null,"re-list","re-list",2046533482));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph","relate","lt.plugins.aleph/relate",1872714992),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.__BEH__relate,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"relate","relate",4374217419),null], null), null));
lt.plugins.aleph.__GT_sub = (function __GT_sub(p__8240){var map__8242 = p__8240;var map__8242__$1 = ((cljs.core.seq_QMARK_.call(null,map__8242))?cljs.core.apply.call(null,cljs.core.hash_map,map__8242):map__8242);var rel = cljs.core.get.call(null,map__8242__$1,new cljs.core.Keyword(null,"rel","rel",1014017035));var sel = cljs.core.get.call(null,map__8242__$1,new cljs.core.Keyword(null,"sel","sel",1014017996));var el = cljs.core.get.call(null,map__8242__$1,new cljs.core.Keyword(null,"el","el",1013907481));return lt.object.object_STAR_.call(null,el,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph.sub","aleph.sub",3776989910),null], null), null),new cljs.core.Keyword(null,"observing","observing",3230796363),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selector","selector",2205476689),sel,new cljs.core.Keyword(null,"relator","relator",2104398049),rel,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.object.add_tags.call(null,sel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aleph.selector","aleph.selector",3339412653)], null));
return lt.object.merge_BANG_.call(null,sel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"super","super",1123705581),this$], null));
}));
});
lt.plugins.aleph.__GT_sub.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"el","el",1013907481),new cljs.core.Keyword("lt.plugins.aleph","b","lt.plugins.aleph/b",956812261),new cljs.core.Keyword(null,"sel","sel",1014017996),lt.plugins.aleph.b_list,new cljs.core.Keyword(null,"rel","rel",1014017035),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",1013904353),lt.plugins.aleph.o__GT_b,new cljs.core.Keyword(null,"t","t",1013904358),lt.plugins.aleph.t__GT_b], null)], null));
lt.plugins.aleph.__GT_sub.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"el","el",1013907481),new cljs.core.Keyword("lt.plugins.aleph","o","lt.plugins.aleph/o",956812250),new cljs.core.Keyword(null,"sel","sel",1014017996),lt.plugins.aleph.o_list,new cljs.core.Keyword(null,"rel","rel",1014017035),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.aleph.b__GT_o,new cljs.core.Keyword(null,"t","t",1013904358),lt.plugins.aleph.t__GT_o], null)], null));
lt.plugins.aleph.__GT_sub.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"el","el",1013907481),new cljs.core.Keyword("lt.plugins.aleph","t","lt.plugins.aleph/t",956812435),new cljs.core.Keyword(null,"sel","sel",1014017996),lt.plugins.aleph.t_list,new cljs.core.Keyword(null,"rel","rel",1014017035),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.aleph.b__GT_t,new cljs.core.Keyword(null,"o","o",1013904353),lt.plugins.aleph.o__GT_t], null)], null));
lt.plugins.aleph.b_sub = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.aleph","b","lt.plugins.aleph/b",956812261));
lt.plugins.aleph.o_sub = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.aleph","o","lt.plugins.aleph/o",956812250));
lt.plugins.aleph.t_sub = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.aleph","t","lt.plugins.aleph/t",956812435));
lt.plugins.aleph.subspaces = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.aleph.b_sub,new cljs.core.Keyword(null,"o","o",1013904353),lt.plugins.aleph.o_sub,new cljs.core.Keyword(null,"t","t",1013904358),lt.plugins.aleph.t_sub], null);
lt.plugins.aleph.__BEH__on_close = (function __BEH__on_close(this$){return lt.objs.tabs.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph","on-close","lt.plugins.aleph/on-close",4312264829),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.__BEH__on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph","aleph.browser","lt.plugins.aleph/aleph.browser",3973159355),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph.browser","aleph.browser",1755612606),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Aleph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.aleph-browser","div.aleph-browser",4444866114),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.aleph-column","div.aleph-column",1427442208),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#aleph-behaviors.aleph-filter","div#aleph-behaviors.aleph-filter",3799671359),lt.object.__GT_content.call(null,lt.plugins.aleph.b_list)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#aleph-objects.aleph-filter","div#aleph-objects.aleph-filter",1406779308),lt.object.__GT_content.call(null,lt.plugins.aleph.o_list)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#aleph-tags.aleph-filter","div#aleph-tags.aleph-filter",3092406733),lt.object.__GT_content.call(null,lt.plugins.aleph.t_list)], null)], null)], null);
}));
lt.plugins.aleph.browser = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.aleph","aleph.browser","lt.plugins.aleph/aleph.browser",3973159355));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"aleph.browse","aleph.browse",2561850968),new cljs.core.Keyword(null,"desc","desc",1016984067),"Aleph: show browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.aleph.browser);
})], null));
}

//# sourceMappingURL=aleph_compiled.js.map