if(!lt.util.load.provided_QMARK_('lt.plugins.aleph.selector')) {
goog.provide('lt.plugins.aleph.selector');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.aleph.selector.index__GT_node = (function index__GT_node(this$,i){return cljs.core.nth.call(null,new cljs.core.Keyword(null,"lis","lis",1014011400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),i);
});
lt.plugins.aleph.selector.remove_active_query = (function remove_active_query(sel){var old = new cljs.core.Keyword(null,"active-query","active-query",1348584115).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sel));if(cljs.core.truth_(old))
{lt.util.dom.remove_class.call(null,lt.plugins.aleph.selector.index__GT_node.call(null,sel,old),new cljs.core.Keyword(null,"active-query","active-query",1348584115));
} else
{}
return lt.object.assoc_in_BANG_.call(null,sel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-query","active-query",1348584115)], null),null);
});
lt.plugins.aleph.selector.emphasize_active_query = (function emphasize_active_query(sel){var new$ = new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sel));lt.plugins.aleph.selector.remove_active_query.call(null,sel);
lt.object.merge_BANG_.call(null,sel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-query","active-query",1348584115),new$], null));
return lt.util.dom.add_class.call(null,lt.plugins.aleph.selector.index__GT_node.call(null,sel,new$),new cljs.core.Keyword(null,"active-query","active-query",1348584115));
});
lt.plugins.aleph.selector.__BEH__de_emphasize_query = (function __BEH__de_emphasize_query(this$){return lt.plugins.aleph.selector.remove_active_query.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.selector","de-emphasize-query","lt.plugins.aleph.selector/de-emphasize-query",3308523619),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.selector.__BEH__de_emphasize_query,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-list","re-list",2046533482),null,new cljs.core.Keyword(null,"refresh!","refresh!",4597922840),null], null), null));
lt.plugins.aleph.selector.fill_list = (function fill_list(this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cur","cur",1014003122),lt.objs.sidebar.command.indexed_results.call(null,cljs.core.deref.call(null,this$))], null));
return lt.objs.sidebar.command.fill_lis.call(null,cljs.core.deref.call(null,this$),new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.plugins.aleph.selector.__BEH__re_list = (function __BEH__re_list(this$){return lt.plugins.aleph.selector.fill_list.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.selector","re-list","lt.plugins.aleph.selector/re-list",2411660188),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.selector.__BEH__re_list,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-list","re-list",2046533482),null], null), null));
/**
* @param {...*} var_args
*/
lt.plugins.aleph.selector.__BEH__reset_BANG_ = (function() { 
var __BEH__reset_BANG___delegate = function (this$,p__11152){var vec__11154 = p__11152;var notify_QMARK_ = cljs.core.nth.call(null,vec__11154,0,null);var enlist = new cljs.core.Keyword(null,"enlist-with","enlist-with",2793597310).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var starter = new cljs.core.Keyword(null,"starter-items","starter-items",4786571380).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1114430258),enlist.call(null,starter.call(null))], null));
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
var p__11152 = null;if (arguments.length > 1) {
  p__11152 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return __BEH__reset_BANG___delegate.call(this,this$,p__11152);};
__BEH__reset_BANG_.cljs$lang$maxFixedArity = 1;
__BEH__reset_BANG_.cljs$lang$applyTo = (function (arglist__11187){
var this$ = cljs.core.first(arglist__11187);
var p__11152 = cljs.core.rest(arglist__11187);
return __BEH__reset_BANG___delegate(this$,p__11152);
});
__BEH__reset_BANG_.cljs$core$IFn$_invoke$arity$variadic = __BEH__reset_BANG___delegate;
return __BEH__reset_BANG_;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.selector","reset!","lt.plugins.aleph.selector/reset!",4345177058),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.selector.__BEH__reset_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset!","reset!",4374429732),null], null), null));
lt.plugins.aleph.selector.css_mode_prefix = "aleph-selector_search-by-";
lt.plugins.aleph.selector.mode_priority__LT_ = (function mode_priority__LT_(x,y){var x_priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(x);var y_priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(y);var comparison = cljs.core.compare.call(null,x_priority,y_priority);if(!(cljs.core._EQ_.call(null,comparison,0)))
{return comparison;
} else
{return cljs.core.compare.call(null,x,y);
}
});
lt.plugins.aleph.selector.opposite_mode = (function opposite_mode(selector,new_mode){var search_modes = new cljs.core.Keyword(null,"modes","modes",1117974178).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selector));return cljs.core.first.call(null,cljs.core.disj.call(null,search_modes,new_mode));
});
lt.plugins.aleph.selector.__GT_str_id = (function __GT_str_id(val_id){return [cljs.core.str("#"),cljs.core.str(val_id)].join('');
});
lt.plugins.aleph.selector.emphasize_mode = (function emphasize_mode(selector,mode){var active_sel = lt.plugins.aleph.selector.__GT_str_id.call(null,new cljs.core.Keyword(null,"css-sel","css-sel",2082467074).cljs$core$IFn$_invoke$arity$1(mode));var inactive_sel = lt.plugins.aleph.selector.__GT_str_id.call(null,new cljs.core.Keyword(null,"css-sel","css-sel",2082467074).cljs$core$IFn$_invoke$arity$1(lt.plugins.aleph.selector.opposite_mode.call(null,selector,mode)));lt.util.dom.remove_class.call(null,lt.util.dom.$.call(null,inactive_sel),new cljs.core.Keyword(null,"current-mode","current-mode",2436437225));
return lt.util.dom.add_class.call(null,lt.util.dom.$.call(null,active_sel),new cljs.core.Keyword(null,"current-mode","current-mode",2436437225));
});
/**
* @param {...*} var_args
*/
lt.plugins.aleph.selector.__GT_class_str = (function() { 
var __GT_class_str__delegate = function (strings){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.filter.call(null,cljs.core.identity,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,strings))));
};
var __GT_class_str = function (var_args){
var strings = null;if (arguments.length > 0) {
  strings = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return __GT_class_str__delegate.call(this,strings);};
__GT_class_str.cljs$lang$maxFixedArity = 0;
__GT_class_str.cljs$lang$applyTo = (function (arglist__11188){
var strings = cljs.core.seq(arglist__11188);
return __GT_class_str__delegate(strings);
});
__GT_class_str.cljs$core$IFn$_invoke$arity$variadic = __GT_class_str__delegate;
return __GT_class_str;
})()
;
lt.plugins.aleph.selector.search_mode_button = (function search_mode_button(this$,p__11155){var map__11163 = p__11155;var map__11163__$1 = ((cljs.core.seq_QMARK_.call(null,map__11163))?cljs.core.apply.call(null,cljs.core.hash_map,map__11163):map__11163);var mode = map__11163__$1;var priority = cljs.core.get.call(null,map__11163__$1,new cljs.core.Keyword(null,"priority","priority",4143410454));var css_sel = cljs.core.get.call(null,map__11163__$1,new cljs.core.Keyword(null,"css-sel","css-sel",2082467074));var display_key = cljs.core.get.call(null,map__11163__$1,new cljs.core.Keyword(null,"display-key","display-key",2727079494));var e__10132__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),css_sel,new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.aleph.selector.__GT_class_str.call(null,"button","mode-selector",((cljs.core._EQ_.call(null,0,priority))?"current-mode":null))], null),display_key], null));var seq__11164_11189 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__10132__auto__,map__11163,map__11163__$1,mode,priority,css_sel,display_key){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"search-by","search-by",2792063502),mode);
});})(e__10132__auto__,map__11163,map__11163__$1,mode,priority,css_sel,display_key))
], null)));var chunk__11165_11190 = null;var count__11166_11191 = 0;var i__11167_11192 = 0;while(true){
if((i__11167_11192 < count__11166_11191))
{var vec__11168_11193 = cljs.core._nth.call(null,chunk__11165_11190,i__11167_11192);var ev__10133__auto___11194 = cljs.core.nth.call(null,vec__11168_11193,0,null);var func__10134__auto___11195 = cljs.core.nth.call(null,vec__11168_11193,1,null);lt.util.dom.on.call(null,e__10132__auto__,ev__10133__auto___11194,func__10134__auto___11195);
{
var G__11196 = seq__11164_11189;
var G__11197 = chunk__11165_11190;
var G__11198 = count__11166_11191;
var G__11199 = (i__11167_11192 + 1);
seq__11164_11189 = G__11196;
chunk__11165_11190 = G__11197;
count__11166_11191 = G__11198;
i__11167_11192 = G__11199;
continue;
}
} else
{var temp__4092__auto___11200 = cljs.core.seq.call(null,seq__11164_11189);if(temp__4092__auto___11200)
{var seq__11164_11201__$1 = temp__4092__auto___11200;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11164_11201__$1))
{var c__9414__auto___11202 = cljs.core.chunk_first.call(null,seq__11164_11201__$1);{
var G__11203 = cljs.core.chunk_rest.call(null,seq__11164_11201__$1);
var G__11204 = c__9414__auto___11202;
var G__11205 = cljs.core.count.call(null,c__9414__auto___11202);
var G__11206 = 0;
seq__11164_11189 = G__11203;
chunk__11165_11190 = G__11204;
count__11166_11191 = G__11205;
i__11167_11192 = G__11206;
continue;
}
} else
{var vec__11169_11207 = cljs.core.first.call(null,seq__11164_11201__$1);var ev__10133__auto___11208 = cljs.core.nth.call(null,vec__11169_11207,0,null);var func__10134__auto___11209 = cljs.core.nth.call(null,vec__11169_11207,1,null);lt.util.dom.on.call(null,e__10132__auto__,ev__10133__auto___11208,func__10134__auto___11209);
{
var G__11210 = cljs.core.next.call(null,seq__11164_11201__$1);
var G__11211 = null;
var G__11212 = 0;
var G__11213 = 0;
seq__11164_11189 = G__11210;
chunk__11165_11190 = G__11211;
count__11166_11191 = G__11212;
i__11167_11192 = G__11213;
continue;
}
}
} else
{}
}
break;
}
return e__10132__auto__;
});
lt.plugins.aleph.selector.reset_button = (function reset_button(this$){var e__10132__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.button.reset","div.button.reset",629395778),"refresh"], null));var seq__11176_11214 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__10132__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"reset!","reset!",4374429732),true);
});})(e__10132__auto__))
], null)));var chunk__11177_11215 = null;var count__11178_11216 = 0;var i__11179_11217 = 0;while(true){
if((i__11179_11217 < count__11178_11216))
{var vec__11180_11218 = cljs.core._nth.call(null,chunk__11177_11215,i__11179_11217);var ev__10133__auto___11219 = cljs.core.nth.call(null,vec__11180_11218,0,null);var func__10134__auto___11220 = cljs.core.nth.call(null,vec__11180_11218,1,null);lt.util.dom.on.call(null,e__10132__auto__,ev__10133__auto___11219,func__10134__auto___11220);
{
var G__11221 = seq__11176_11214;
var G__11222 = chunk__11177_11215;
var G__11223 = count__11178_11216;
var G__11224 = (i__11179_11217 + 1);
seq__11176_11214 = G__11221;
chunk__11177_11215 = G__11222;
count__11178_11216 = G__11223;
i__11179_11217 = G__11224;
continue;
}
} else
{var temp__4092__auto___11225 = cljs.core.seq.call(null,seq__11176_11214);if(temp__4092__auto___11225)
{var seq__11176_11226__$1 = temp__4092__auto___11225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11176_11226__$1))
{var c__9414__auto___11227 = cljs.core.chunk_first.call(null,seq__11176_11226__$1);{
var G__11228 = cljs.core.chunk_rest.call(null,seq__11176_11226__$1);
var G__11229 = c__9414__auto___11227;
var G__11230 = cljs.core.count.call(null,c__9414__auto___11227);
var G__11231 = 0;
seq__11176_11214 = G__11228;
chunk__11177_11215 = G__11229;
count__11178_11216 = G__11230;
i__11179_11217 = G__11231;
continue;
}
} else
{var vec__11181_11232 = cljs.core.first.call(null,seq__11176_11226__$1);var ev__10133__auto___11233 = cljs.core.nth.call(null,vec__11181_11232,0,null);var func__10134__auto___11234 = cljs.core.nth.call(null,vec__11181_11232,1,null);lt.util.dom.on.call(null,e__10132__auto__,ev__10133__auto___11233,func__10134__auto___11234);
{
var G__11235 = cljs.core.next.call(null,seq__11176_11226__$1);
var G__11236 = null;
var G__11237 = 0;
var G__11238 = 0;
seq__11176_11214 = G__11235;
chunk__11177_11215 = G__11236;
count__11178_11216 = G__11237;
i__11179_11217 = G__11238;
continue;
}
}
} else
{}
}
break;
}
return e__10132__auto__;
});
lt.plugins.aleph.selector.change_search_mode = (function change_search_mode(flist,new_mode){return lt.object.merge_BANG_.call(null,flist,new_mode);
});
lt.plugins.aleph.selector.__BEH__search_by = (function __BEH__search_by(this$,search_mode){lt.plugins.aleph.selector.change_search_mode.call(null,this$,search_mode);
return lt.plugins.aleph.selector.emphasize_mode.call(null,this$,search_mode);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.selector","search-by","lt.plugins.aleph.selector/search-by",594486808),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.selector.__BEH__search_by,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-by","search-by",2792063502),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.selector","selector","lt.plugins.aleph.selector/selector",2219199189),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aleph.selector","aleph.selector",3339412653),null,new cljs.core.Keyword(null,"filter-list","filter-list",4372522309),null], null), null),new cljs.core.Keyword(null,"selected","selected",2205476365),0,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"search",new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"search","search",4402534682),"",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,opts){var opts__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1017434995),32], null),opts);var items = (function (){var iter__9383__auto__ = ((function (opts__$1){
return (function iter__11183(s__11184){return (new cljs.core.LazySeq(null,((function (opts__$1){
return (function (){var s__11184__$1 = s__11184;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11184__$1);if(temp__4092__auto__)
{var s__11184__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11184__$2))
{var c__9381__auto__ = cljs.core.chunk_first.call(null,s__11184__$2);var size__9382__auto__ = cljs.core.count.call(null,c__9381__auto__);var b__11186 = cljs.core.chunk_buffer.call(null,size__9382__auto__);if((function (){var i__11185 = 0;while(true){
if((i__11185 < size__9382__auto__))
{var coll = cljs.core._nth.call(null,c__9381__auto__,i__11185);cljs.core.chunk_append.call(null,b__11186,lt.objs.sidebar.command.item.call(null,this$,coll));
{
var G__11239 = (i__11185 + 1);
i__11185 = G__11239;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11186),iter__11183.call(null,cljs.core.chunk_rest.call(null,s__11184__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11186),null);
}
} else
{var coll = cljs.core.first.call(null,s__11184__$2);return cljs.core.cons.call(null,lt.objs.sidebar.command.item.call(null,this$,coll),iter__11183.call(null,cljs.core.rest.call(null,s__11184__$2)));
}
} else
{return null;
}
break;
}
});})(opts__$1))
,null,null));
});})(opts__$1))
;return iter__9383__auto__.call(null,cljs.core.range.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(opts__$1)));
})();var mode_buttons = (function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"modes","modes",1117974178).cljs$core$IFn$_invoke$arity$1(opts__$1);if(cljs.core.truth_(temp__4090__auto__))
{var modes = temp__4090__auto__;return cljs.core.map.call(null,((function (modes,temp__4090__auto__,opts__$1,items){
return (function (p1__11182_SHARP_){return lt.plugins.aleph.selector.search_mode_button.call(null,this$,p1__11182_SHARP_);
});})(modes,temp__4090__auto__,opts__$1,items))
,modes);
} else
{return null;
}
})();lt.object.merge_BANG_.call(null,this$,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lis","lis",1014011400),cljs.core.vec.call(null,items)], null),opts__$1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-list.empty","div.filter-list.empty",3131797703),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-row","div.flex-row",4121591349),lt.objs.sidebar.command.input.call(null,this$),lt.plugins.aleph.selector.reset_button.call(null,this$)], null),(cljs.core.truth_(mode_buttons)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mode-selection","div.mode-selection",4735357009),mode_buttons], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),items], null)], null);
}));
lt.plugins.aleph.selector.selector = (function selector(opts){var sel = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.aleph.selector","selector","lt.plugins.aleph.selector/selector",2219199189),opts);lt.object.raise.call(null,sel,new cljs.core.Keyword(null,"re-list","re-list",2046533482));
return sel;
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.aleph.utilia')) {
goog.provide('lt.plugins.aleph.utilia');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.files');
/**
* @param {...*} var_args
*/
lt.plugins.aleph.utilia.deep_merge = (function() { 
var deep_merge__delegate = function (xs){var ms = cljs.core.map.call(null,(function (p1__11240_SHARP_){var or__8666__auto__ = p1__11240_SHARP_;if(cljs.core.truth_(or__8666__auto__))
{return or__8666__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
}),xs);return cljs.core.apply.call(null,((function (ms){
return (function() { 
var f__delegate = function (ys){if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,ys))
{return cljs.core.apply.call(null,cljs.core.merge_with,f,ys);
} else
{return cljs.core.last.call(null,ys);
}
};
var f = function (var_args){
var ys = null;if (arguments.length > 0) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return f__delegate.call(this,ys);};
f.cljs$lang$maxFixedArity = 0;
f.cljs$lang$applyTo = (function (arglist__11243){
var ys = cljs.core.seq(arglist__11243);
return f__delegate(ys);
});
f.cljs$core$IFn$_invoke$arity$variadic = f__delegate;
return f;
})()
;})(ms))
,ms);
};
var deep_merge = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return deep_merge__delegate.call(this,xs);};
deep_merge.cljs$lang$maxFixedArity = 0;
deep_merge.cljs$lang$applyTo = (function (arglist__11244){
var xs = cljs.core.seq(arglist__11244);
return deep_merge__delegate(xs);
});
deep_merge.cljs$core$IFn$_invoke$arity$variadic = deep_merge__delegate;
return deep_merge;
})()
;
lt.plugins.aleph.utilia.atom_QMARK_ = (function atom_QMARK_(x){var G__11242 = x;if(G__11242)
{var bit__9316__auto__ = (G__11242.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__9316__auto__) || (G__11242.cljs$core$IDeref$))
{return true;
} else
{if((!G__11242.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__11242);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__11242);
}
});
lt.plugins.aleph.utilia.if_at = (function if_at(x){if(lt.plugins.aleph.utilia.atom_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
lt.plugins.aleph.utilia.lt_home_folder = lt.objs.files.resolve.call(null,lt.objs.files.lt_home.call(null),"..");
lt.plugins.aleph.utilia.lt_home_project = lt.objs.files.join.call(null,lt.plugins.aleph.utilia.lt_home_folder,"project.clj");
}
if(!lt.util.load.provided_QMARK_('lt.plugins.aleph.bot')) {
goog.provide('lt.plugins.aleph.bot');
goog.require('cljs.core');
goog.require('lt.plugins.aleph.utilia');
goog.require('lt.plugins.aleph.utilia');
goog.require('lt.object');
goog.require('lt.object');
goog.require('clojure.set');
goog.require('clojure.set');
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
lt.plugins.aleph.bot.flat_listeners = (function flat_listeners(o){return cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(lt.plugins.aleph.utilia.if_at.call(null,o))));
});
lt.plugins.aleph.bot.select_keys_with = (function select_keys_with(map,pred,xs){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,pred,xs),map));
});
lt.plugins.aleph.bot.any_in_tag_QMARK_ = (function any_in_tag_QMARK_(bs,t){return cljs.core.some.call(null,bs,cljs.core.map.call(null,lt.plugins.aleph.bot.k_BAR_coll,cljs.core.val.call(null,t)));
});
lt.plugins.aleph.bot.any_in_listeners_QMARK_ = (function any_in_listeners_QMARK_(bs,o){return cljs.core.some.call(null,bs,lt.plugins.aleph.bot.flat_listeners.call(null,cljs.core.val.call(null,o)));
});
lt.plugins.aleph.bot.b__GT_b = (function b__GT_b(bs){var b_set = lt.plugins.aleph.bot.__GT_set.call(null,bs);return cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.object.behaviors),b_set);
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
/**
* Given a behavior name or sequence thereof, returns a map of tags which
* associate any of them.
* Keys are tag names, associated to their full list of behaviors.
* 
* The returned map is a subset of the `object/tags` index.
*/
lt.plugins.aleph.bot.b__GT_t = (function b__GT_t(bs){var b_set = lt.plugins.aleph.bot.__GT_set.call(null,bs);return lt.plugins.aleph.bot.select_keys_with.call(null,cljs.core.deref.call(null,lt.object.tags),lt.plugins.aleph.bot.any_in_tag_QMARK_,b_set);
});
lt.plugins.aleph.bot.mapcat_rel = (function mapcat_rel(relator,elements){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.distinct.call(null,cljs.core.mapcat.call(null,relator,elements)));
});
lt.plugins.aleph.bot.ObjectRelator = (function (){var obj10731 = {};return obj10731;
})();
lt.plugins.aleph.bot.o__GT_b = (function o__GT_b(o){if((function (){var and__8654__auto__ = o;if(and__8654__auto__)
{return o.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1;
} else
{return and__8654__auto__;
}
})())
{return o.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1(o);
} else
{var x__9293__auto__ = (((o == null))?null:o);return (function (){var or__8666__auto__ = (lt.plugins.aleph.bot.o__GT_b[goog.typeOf(x__9293__auto__)]);if(or__8666__auto__)
{return or__8666__auto__;
} else
{var or__8666__auto____$1 = (lt.plugins.aleph.bot.o__GT_b["_"]);if(or__8666__auto____$1)
{return or__8666__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ObjectRelator.o->b",o);
}
}
})().call(null,o);
}
});
lt.plugins.aleph.bot.o__GT_o = (function o__GT_o(o){if((function (){var and__8654__auto__ = o;if(and__8654__auto__)
{return o.lt$plugins$aleph$bot$ObjectRelator$o__GT_o$arity$1;
} else
{return and__8654__auto__;
}
})())
{return o.lt$plugins$aleph$bot$ObjectRelator$o__GT_o$arity$1(o);
} else
{var x__9293__auto__ = (((o == null))?null:o);return (function (){var or__8666__auto__ = (lt.plugins.aleph.bot.o__GT_o[goog.typeOf(x__9293__auto__)]);if(or__8666__auto__)
{return or__8666__auto__;
} else
{var or__8666__auto____$1 = (lt.plugins.aleph.bot.o__GT_o["_"]);if(or__8666__auto____$1)
{return or__8666__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ObjectRelator.o->o",o);
}
}
})().call(null,o);
}
});
lt.plugins.aleph.bot.o__GT_t = (function o__GT_t(o){if((function (){var and__8654__auto__ = o;if(and__8654__auto__)
{return o.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1;
} else
{return and__8654__auto__;
}
})())
{return o.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1(o);
} else
{var x__9293__auto__ = (((o == null))?null:o);return (function (){var or__8666__auto__ = (lt.plugins.aleph.bot.o__GT_t[goog.typeOf(x__9293__auto__)]);if(or__8666__auto__)
{return or__8666__auto__;
} else
{var or__8666__auto____$1 = (lt.plugins.aleph.bot.o__GT_t["_"]);if(or__8666__auto____$1)
{return or__8666__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ObjectRelator.o->t",o);
}
}
})().call(null,o);
}
});
cljs.core.Keyword.prototype.lt$plugins$aleph$bot$ObjectRelator$ = true;
cljs.core.Keyword.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1 = (function (o_COLON_type){var o_COLON_type__$1 = this;var instances = lt.object.instances_by_type.call(null,o_COLON_type__$1);var os = ((cljs.core.seq.call(null,instances))?instances:o_COLON_type__$1.call(null,cljs.core.deref.call(null,lt.object.object_defs)));if(cljs.core.truth_(os))
{return lt.plugins.aleph.bot.o__GT_b.call(null,os);
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
cljs.core.Keyword.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_o$arity$1 = (function (o_COLON_type){var o_COLON_type__$1 = this;var instances = lt.object.instances_by_type.call(null,o_COLON_type__$1);var os = ((cljs.core.seq.call(null,instances))?instances:o_COLON_type__$1.call(null,cljs.core.deref.call(null,lt.object.object_defs)));if(cljs.core.truth_(os))
{return lt.plugins.aleph.bot.o__GT_o.call(null,os);
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
cljs.core.Keyword.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1 = (function (o_COLON_type){var o_COLON_type__$1 = this;var instances = lt.object.instances_by_type.call(null,o_COLON_type__$1);var os = ((cljs.core.seq.call(null,instances))?instances:o_COLON_type__$1.call(null,cljs.core.deref.call(null,lt.object.object_defs)));if(cljs.core.truth_(os))
{return lt.plugins.aleph.bot.o__GT_t.call(null,os);
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
(lt.plugins.aleph.bot.ObjectRelator["number"] = true);
(lt.plugins.aleph.bot.o__GT_b["number"] = (function (o_COLON_id){var o = lt.object.by_id.call(null,o_COLON_id);return lt.plugins.aleph.bot.o__GT_b.call(null,o);
}));
(lt.plugins.aleph.bot.o__GT_o["number"] = (function (o_COLON_id){return cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.object.instances),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [o_COLON_id], null));
}));
(lt.plugins.aleph.bot.o__GT_t["number"] = (function (o_COLON_id){var o = lt.object.by_id.call(null,o_COLON_id);return lt.plugins.aleph.bot.o__GT_t.call(null,o);
}));
cljs.core.Atom.prototype.lt$plugins$aleph$bot$ObjectRelator$ = true;
cljs.core.Atom.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1 = (function (o){var o__$1 = this;var bs = lt.plugins.aleph.bot.flat_listeners.call(null,cljs.core.deref.call(null,o__$1));return cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.object.behaviors),bs);
});
cljs.core.Atom.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_o$arity$1 = (function (o){var o__$1 = this;var id = new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o__$1));return cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.object.instances),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
});
cljs.core.Atom.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1 = (function (o){var o__$1 = this;var ts = new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o__$1));return cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.object.tags),ts);
});
cljs.core.PersistentHashMap.prototype.lt$plugins$aleph$bot$ObjectRelator$ = true;
cljs.core.PersistentHashMap.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1 = (function (o){var o__$1 = this;var bs = lt.plugins.aleph.bot.flat_listeners.call(null,o__$1);return cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.object.behaviors),bs);
});
cljs.core.PersistentHashMap.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_o$arity$1 = (function (o){var o__$1 = this;var id = new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(o__$1);return cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.object.instances),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
});
cljs.core.PersistentHashMap.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1 = (function (o){var o__$1 = this;var ts = new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(o__$1);return cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.object.tags),ts);
});
cljs.core.PersistentArrayMap.prototype.lt$plugins$aleph$bot$ObjectRelator$ = true;
cljs.core.PersistentArrayMap.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1 = (function (o){var o__$1 = this;var bs = lt.plugins.aleph.bot.flat_listeners.call(null,o__$1);return cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.object.behaviors),bs);
});
cljs.core.PersistentArrayMap.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_o$arity$1 = (function (o){var o__$1 = this;var id = new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(o__$1);return cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.object.instances),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
});
cljs.core.PersistentArrayMap.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1 = (function (o){var o__$1 = this;var ts = new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(o__$1);return cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.object.tags),ts);
});
cljs.core.PersistentHashSet.prototype.lt$plugins$aleph$bot$ObjectRelator$ = true;
cljs.core.PersistentHashSet.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_b,os__$1);
});
cljs.core.PersistentHashSet.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_o$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_o,os__$1);
});
cljs.core.PersistentHashSet.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_t,os__$1);
});
cljs.core.PersistentVector.prototype.lt$plugins$aleph$bot$ObjectRelator$ = true;
cljs.core.PersistentVector.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_b,os__$1);
});
cljs.core.PersistentVector.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_o$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_o,os__$1);
});
cljs.core.PersistentVector.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_t,os__$1);
});
cljs.core.List.prototype.lt$plugins$aleph$bot$ObjectRelator$ = true;
cljs.core.List.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_b,os__$1);
});
cljs.core.List.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_o$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_o,os__$1);
});
cljs.core.List.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_t,os__$1);
});
cljs.core.LazySeq.prototype.lt$plugins$aleph$bot$ObjectRelator$ = true;
cljs.core.LazySeq.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_b$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_b,os__$1);
});
cljs.core.LazySeq.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_o$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_o,os__$1);
});
cljs.core.LazySeq.prototype.lt$plugins$aleph$bot$ObjectRelator$o__GT_t$arity$1 = (function (os){var os__$1 = this;return lt.plugins.aleph.bot.mapcat_rel.call(null,lt.plugins.aleph.bot.o__GT_t,os__$1);
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
lt.plugins.aleph.bot.any_tags_QMARK_ = (function any_tags_QMARK_(ts,o){return cljs.core.some.call(null,ts,new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.val.call(null,o))));
});
/**
* Given a tag or sequence thereof, returns a map of the behaviors associated
* by any of them.
* Keys are behavior names, associated to their full value: name, triggers, reaction.
* Arguments passed by a tag will be stored in the behavior's entry as kv
* `:lt.plugins.aleph.bot/args [arg & more]`.
*/
lt.plugins.aleph.bot.t__GT_b = (function t__GT_b(ts){var t_set = lt.plugins.aleph.bot.__GT_set.call(null,ts);var bs = lt.object.tags__GT_behaviors.call(null,t_set);var index = cljs.core.deref.call(null,lt.object.behaviors);return cljs.core.zipmap.call(null,cljs.core.map.call(null,lt.plugins.aleph.bot.k_BAR_coll,bs),cljs.core.map.call(null,((function (t_set,bs,index){
return (function (p1__10732_SHARP_){return lt.plugins.aleph.bot.__GT_b_val.call(null,index,p1__10732_SHARP_);
});})(t_set,bs,index))
,bs));
});
/**
* Given a tag or sequence thereof, returns a map of the objects tagged with any
* of them.
* 
* The returned map is a subset of the `object/instances` index.
*/
lt.plugins.aleph.bot.t__GT_o = (function t__GT_o(ts){var t_set = lt.plugins.aleph.bot.__GT_set.call(null,ts);return lt.plugins.aleph.bot.select_keys_with.call(null,cljs.core.deref.call(null,lt.object.instances),lt.plugins.aleph.bot.any_tags_QMARK_,t_set);
});
lt.plugins.aleph.bot.t__GT_t = (function t__GT_t(ts){var t_set = lt.plugins.aleph.bot.__GT_set.call(null,ts);return cljs.core.select_keys.call(null,cljs.core.deref.call(null,lt.object.tags),t_set);
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
lt.plugins.aleph.bot.triggered_by = (function triggered_by(trig,bs){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,(function (p1__10733_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"triggers","triggers",2516997421).cljs$core$IFn$_invoke$arity$1(p1__10733_SHARP_),trig);
}),bs));
});
/**
* Given a behavior or a sequence thereof, returns a map of triggers which launch
* any of them.
* Keys are trigger names, associated to their full list of bound behaviors.
*/
lt.plugins.aleph.bot.behaviors__GT_triggers = (function behaviors__GT_triggers(bs){var b_vals = cljs.core.vals.call(null,lt.plugins.aleph.bot.b__GT_b.call(null,lt.plugins.aleph.bot.__GT_set.call(null,bs)));var b_indexed = cljs.core.vals.call(null,cljs.core.deref.call(null,lt.object.behaviors));var trigs = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"triggers","triggers",2516997421),b_vals);return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (b_vals,b_indexed,trigs){
return (function (trig){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [trig,lt.plugins.aleph.bot.triggered_by.call(null,trig,b_indexed)], null);
});})(b_vals,b_indexed,trigs))
,trigs));
});
/**
* Given a trigger or a sequence thereof, returns a map of objects listening
* for any of them.
* Keys are integer ids, associated to their object instance.
* 
* The returned map is a subset of the `object/instances` index.
*/
lt.plugins.aleph.bot.triggers__GT_objects = (function triggers__GT_objects(triggers){return lt.plugins.aleph.bot.b__GT_o.call(null,cljs.core.keys.call(null,lt.plugins.aleph.bot.triggers__GT_behaviors.call(null,lt.plugins.aleph.bot.__GT_set.call(null,triggers))));
});
lt.plugins.aleph.bot.merge_triggered = (function merge_triggered(x,y){return cljs.core.merge_with.call(null,(function (p1__10734_SHARP_,p2__10735_SHARP_){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.distinct.call(null,cljs.core.apply.call(null,cljs.core.conj,p1__10734_SHARP_,p2__10735_SHARP_)));
}),x,y);
});
/**
* Given an object or a sequence thereof, returns a map of triggers bound to
* their behaviors.
* Keys are trigger names, associated to their full list of bound behaviors.
*/
lt.plugins.aleph.bot.objects__GT_triggers = (function objects__GT_triggers(os){return cljs.core.reduce.call(null,lt.plugins.aleph.bot.merge_triggered,cljs.core.map.call(null,(function (p1__10736_SHARP_){return new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__10736_SHARP_));
}),cljs.core.vals.call(null,lt.plugins.aleph.bot.o__GT_o.call(null,lt.plugins.aleph.bot.__GT_set.call(null,os)))));
});
/**
* Given a trigger or a sequence thereof, returns a map of tags attaching
* behaviors which listen for any of them.
* Keys are tag names, associated to their full list of behaviors.
* 
* The returned map is a subset of the `object/tags` index.
*/
lt.plugins.aleph.bot.triggers__GT_tags = (function triggers__GT_tags(triggers){return lt.plugins.aleph.bot.b__GT_t.call(null,cljs.core.keys.call(null,lt.plugins.aleph.bot.triggers__GT_behaviors.call(null,triggers)));
});
/**
* Given a tag or a sequence thereof, returns a map of triggers which launch
* any of the behaviors associated to those tags.
* Keys are trigger names, associated to their full list of bound behaviors.
*/
lt.plugins.aleph.bot.tags__GT_triggers = (function tags__GT_triggers(ts){var bs = cljs.core.keys.call(null,lt.plugins.aleph.bot.t__GT_b.call(null,ts));return lt.plugins.aleph.bot.behaviors__GT_triggers.call(null,bs);
});
lt.plugins.aleph.bot.b_QMARK_ = (function b_QMARK_(bs){return !(cljs.core.empty_QMARK_.call(null,lt.plugins.aleph.bot.b__GT_b.call(null,bs)));
});
lt.plugins.aleph.bot.o_QMARK_ = (function o_QMARK_(os){return (!(cljs.core.empty_QMARK_.call(null,lt.plugins.aleph.bot.o__GT_o.call(null,os)))) || (!(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.deref.call(null,lt.object.object_defs),lt.plugins.aleph.bot.__GT_set.call(null,os))))));
});
lt.plugins.aleph.bot.t_QMARK_ = (function t_QMARK_(ts){return !(cljs.core.empty_QMARK_.call(null,lt.plugins.aleph.bot.t__GT_t.call(null,ts)));
});
lt.plugins.aleph.bot.trigger_QMARK_ = (function trigger_QMARK_(triggers){return !(cljs.core.empty_QMARK_.call(null,lt.plugins.aleph.bot.triggers__GT_behaviors.call(null,triggers)));
});
/**
* @param {...*} var_args
*/
lt.plugins.aleph.bot.b_COLON_fname = (function() { 
var b_COLON_fname__delegate = function (b,p__10737){var vec__10739 = p__10737;var qualified_QMARK_ = cljs.core.nth.call(null,vec__10739,0,null);var b_COLON_name = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(b.call(null,cljs.core.deref.call(null,lt.object.behaviors)));var ns_str = (cljs.core.truth_(qualified_QMARK_)?[cljs.core.str(cljs.core.namespace.call(null,b)),cljs.core.str("/")].join(''):null);if(cljs.core.truth_(b_COLON_name))
{return cljs.core.symbol.call(null,[cljs.core.str(ns_str),cljs.core.str("__BEH__"),cljs.core.str(clojure.string.replace.call(null,cljs.core.name.call(null,b_COLON_name),/\./,"__DOT__"))].join(''));
} else
{return null;
}
};
var b_COLON_fname = function (b,var_args){
var p__10737 = null;if (arguments.length > 1) {
  p__10737 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return b_COLON_fname__delegate.call(this,b,p__10737);};
b_COLON_fname.cljs$lang$maxFixedArity = 1;
b_COLON_fname.cljs$lang$applyTo = (function (arglist__10758){
var b = cljs.core.first(arglist__10758);
var p__10737 = cljs.core.rest(arglist__10758);
return b_COLON_fname__delegate(b,p__10737);
});
b_COLON_fname.cljs$core$IFn$_invoke$arity$variadic = b_COLON_fname__delegate;
return b_COLON_fname;
})()
;
lt.plugins.aleph.bot.b_COLON_reaction = (function b_COLON_reaction(b){var temp__4090__auto__ = b.call(null,cljs.core.deref.call(null,lt.object.behaviors));if(cljs.core.truth_(temp__4090__auto__))
{var beh = temp__4090__auto__;return new cljs.core.Keyword(null,"reaction","reaction",4441361819).cljs$core$IFn$_invoke$arity$1(beh);
} else
{return null;
}
});
lt.plugins.aleph.bot.o_COLON_ns = (function o_COLON_ns(o){var pred__10745 = (function (p1__10740_SHARP_,p2__10741_SHARP_){return p1__10740_SHARP_.call(null,p2__10741_SHARP_);
});var expr__10746 = o;if(cljs.core.truth_(pred__10745.call(null,lt.plugins.aleph.bot.atom_QMARK_,expr__10746)))
{return cljs.core.namespace.call(null,new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,o)));
} else
{if(cljs.core.truth_(pred__10745.call(null,cljs.core.map_QMARK_,expr__10746)))
{return cljs.core.namespace.call(null,new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(o));
} else
{if(cljs.core.truth_(pred__10745.call(null,cljs.core.keyword,expr__10746)))
{return cljs.core.namespace.call(null,o);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10746)].join('')));
}
}
}
});
lt.plugins.aleph.bot.elements = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"b","b",1013904340),null,new cljs.core.Keyword(null,"o","o",1013904353),null,new cljs.core.Keyword(null,"trigger","trigger",4248979754),null,new cljs.core.Keyword(null,"t","t",1013904358),null], null), null);
lt.plugins.aleph.bot.longnames = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"b","b",1013904340),"behavior",new cljs.core.Keyword(null,"o","o",1013904353),"object",new cljs.core.Keyword(null,"t","t",1013904358),"tag",new cljs.core.Keyword(null,"trigger","trigger",4248979754),"trigger"], null);
lt.plugins.aleph.bot.relators = lt.plugins.aleph.utilia.deep_merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.aleph.bot.b__GT_b,new cljs.core.Keyword(null,"o","o",1013904353),lt.plugins.aleph.bot.b__GT_o,new cljs.core.Keyword(null,"t","t",1013904358),lt.plugins.aleph.bot.b__GT_t], null),new cljs.core.Keyword(null,"o","o",1013904353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.aleph.bot.o__GT_b,new cljs.core.Keyword(null,"o","o",1013904353),lt.plugins.aleph.bot.o__GT_o,new cljs.core.Keyword(null,"t","t",1013904358),lt.plugins.aleph.bot.o__GT_t], null),new cljs.core.Keyword(null,"t","t",1013904358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.aleph.bot.t__GT_b,new cljs.core.Keyword(null,"o","o",1013904353),lt.plugins.aleph.bot.t__GT_o,new cljs.core.Keyword(null,"t","t",1013904358),lt.plugins.aleph.bot.t__GT_t], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger","trigger",4248979754),lt.plugins.aleph.bot.behaviors__GT_triggers], null),new cljs.core.Keyword(null,"o","o",1013904353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger","trigger",4248979754),lt.plugins.aleph.bot.objects__GT_triggers], null),new cljs.core.Keyword(null,"t","t",1013904358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger","trigger",4248979754),lt.plugins.aleph.bot.tags__GT_triggers], null),new cljs.core.Keyword(null,"trigger","trigger",4248979754),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.aleph.bot.triggers__GT_behaviors,new cljs.core.Keyword(null,"o","o",1013904353),lt.plugins.aleph.bot.triggers__GT_objects,new cljs.core.Keyword(null,"t","t",1013904358),lt.plugins.aleph.bot.triggers__GT_tags], null)], null));
/**
* Identifies associations between BOT elements.
* 
* Takes one element or a sequence thereof, reads them as elements of type `tail`,
* and returns the associated elements of type `head`.
* 
* Tail and head are keywords, and can be:
* - `:b` for behaviors,
* - `:o` for objects,
* - `:t` for tags,
* - `:trigger` for triggers.
*/
lt.plugins.aleph.bot.relate = (function relate(elems,tail,head){return head.call(null,tail.call(null,lt.plugins.aleph.bot.relators)).call(null,elems);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.aleph.inspector')) {
goog.provide('lt.plugins.aleph.inspector');
goog.require('cljs.core');
goog.require('lt.plugins.aleph.utilia');
goog.require('crate.binding');
goog.require('lt.plugins.clojure');
goog.require('lt.plugins.aleph.utilia');
goog.require('lt.plugins.aleph.utilia');
goog.require('cljs.reader');
goog.require('crate.core');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.plugins.aleph.bot');
goog.require('lt.objs.command');
goog.require('lt.plugins.aleph.bot');
goog.require('lt.plugins.clojure');
goog.require('lt.plugins.uicommons.selector');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('lt.objs.editor');
goog.require('crate.core');
goog.require('lt.plugins.uicommons.selector');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.aleph.inspector.bot_complement = (function bot_complement(el){return cljs.core.disj.call(null,lt.plugins.aleph.bot.elements,el);
});
lt.plugins.aleph.inspector.read_token = (function read_token(token){if(cljs.core.truth_(token))
{return cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(token));
} else
{return null;
}
});
lt.plugins.aleph.inspector.read_token_at_cursor = (function read_token_at_cursor(editor){return lt.plugins.aleph.inspector.read_token.call(null,lt.plugins.clojure.find_symbol_at_cursor.call(null,editor));
});
lt.plugins.aleph.inspector.notify_nonbot = (function notify_nonbot(sym){lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("`"),cljs.core.str(sym),cljs.core.str("`"),cljs.core.str(" appears not to be a BOT element.")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
return null;
});
lt.plugins.aleph.inspector.discern_keyword = (function discern_keyword(sym){var pred__10989 = (function (p1__10984_SHARP_,p2__10985_SHARP_){return p1__10984_SHARP_.call(null,p2__10985_SHARP_);
});var expr__10990 = sym;if(cljs.core.truth_(pred__10989.call(null,lt.plugins.aleph.bot.b_QMARK_,expr__10990)))
{return new cljs.core.Keyword(null,"b","b",1013904340);
} else
{if(cljs.core.truth_(pred__10989.call(null,lt.plugins.aleph.bot.o_QMARK_,expr__10990)))
{return new cljs.core.Keyword(null,"o","o",1013904353);
} else
{if(cljs.core.truth_(pred__10989.call(null,lt.plugins.aleph.bot.t_QMARK_,expr__10990)))
{return new cljs.core.Keyword(null,"t","t",1013904358);
} else
{if(cljs.core.truth_(pred__10989.call(null,lt.plugins.aleph.bot.trigger_QMARK_,expr__10990)))
{return new cljs.core.Keyword(null,"trigger","trigger",4248979754);
} else
{return lt.plugins.aleph.inspector.notify_nonbot.call(null,sym);
}
}
}
}
});
lt.plugins.aleph.inspector.discern_element = (function discern_element(sym){var pred__10997 = (function (p1__10992_SHARP_,p2__10993_SHARP_){return p1__10992_SHARP_.call(null,p2__10993_SHARP_);
});var expr__10998 = sym;if(cljs.core.truth_(pred__10997.call(null,cljs.core.number_QMARK_,expr__10998)))
{return new cljs.core.Keyword(null,"o","o",1013904353);
} else
{if(cljs.core.truth_(pred__10997.call(null,cljs.core.symbol_QMARK_,expr__10998)))
{return new cljs.core.Keyword(null,"o","o",1013904353);
} else
{if(cljs.core.truth_(pred__10997.call(null,cljs.core.keyword_QMARK_,expr__10998)))
{return lt.plugins.aleph.inspector.discern_keyword.call(null,sym);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10998)].join('')));
}
}
}
});
lt.plugins.aleph.inspector.discern_element_at_cursor = (function discern_element_at_cursor(editor){return lt.plugins.aleph.inspector.discern_element.call(null,lt.plugins.aleph.inspector.read_token_at_cursor.call(null,editor));
});
lt.plugins.aleph.inspector.lt_nses = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["lt.plugins.auto-paren",null,"lt.objs",null,"lt.plugins.auto-complete",null,"lt.plugins.doc",null,"lt.object",null,"lt.util",null,"lt.plugins.watches",null,"lt.macros",null], null), null);
lt.plugins.aleph.inspector.from_lt_core_QMARK_ = (function from_lt_core_QMARK_(s){var ns_pattern = cljs.core.re_pattern.call(null,cljs.core.apply.call(null,cljs.core.str,"^",cljs.core.interpose.call(null,"|",lt.plugins.aleph.inspector.lt_nses)));return cljs.core.re_find.call(null,ns_pattern,s);
});
lt.plugins.aleph.inspector.space_separate = (function space_separate(args){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",args));
});
lt.plugins.aleph.inspector.wrap_fnstr = (function wrap_fnstr(args){return [cljs.core.str("("),cljs.core.str(lt.plugins.aleph.inspector.space_separate.call(null,args)),cljs.core.str(")")].join('');
});
/**
* @param {...*} var_args
*/
lt.plugins.aleph.inspector.raise_eval = (function() { 
var raise_eval__delegate = function (this$,args){var fnstring = lt.plugins.aleph.inspector.wrap_fnstr.call(null,args);return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),fnstring,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"inline-at-cursor","inline-at-cursor",3025579886),new cljs.core.Keyword(null,"verbatim","verbatim",3307884968),true], null));
};
var raise_eval = function (this$,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return raise_eval__delegate.call(this,this$,args);};
raise_eval.cljs$lang$maxFixedArity = 1;
raise_eval.cljs$lang$applyTo = (function (arglist__11054){
var this$ = cljs.core.first(arglist__11054);
var args = cljs.core.rest(arglist__11054);
return raise_eval__delegate(this$,args);
});
raise_eval.cljs$core$IFn$_invoke$arity$variadic = raise_eval__delegate;
return raise_eval;
})()
;
lt.plugins.aleph.inspector.related_keys = cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",-1640417152,null),new cljs.core.Symbol(null,"tail","tail",-1636979191,null),new cljs.core.Symbol(null,"head","head",-1637333095,null)], null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1637242963,null),cljs.core.list(new cljs.core.Symbol("lt.plugins.aleph.bot","relate","lt.plugins.aleph.bot/relate",1287787432,null),new cljs.core.Symbol(null,"sym","sym",-1640417152,null),new cljs.core.Symbol(null,"tail","tail",-1636979191,null),new cljs.core.Symbol(null,"head","head",-1637333095,null))));
/**
* @param {...*} var_args
*/
lt.plugins.aleph.inspector.__BEH__eval_relate = (function() { 
var __BEH__eval_relate__delegate = function (this$,sym,tail,head,p__11000){var vec__11002 = p__11000;var full_value_QMARK_ = cljs.core.nth.call(null,vec__11002,0,null);if(cljs.core.truth_(full_value_QMARK_))
{return lt.plugins.aleph.inspector.raise_eval.call(null,this$,new cljs.core.Symbol("lt.plugins.aleph.bot","relate","lt.plugins.aleph.bot/relate",1287787432,null),sym,tail,head);
} else
{return lt.plugins.aleph.inspector.raise_eval.call(null,this$,lt.plugins.aleph.inspector.related_keys,sym,tail,head);
}
};
var __BEH__eval_relate = function (this$,sym,tail,head,var_args){
var p__11000 = null;if (arguments.length > 4) {
  p__11000 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return __BEH__eval_relate__delegate.call(this,this$,sym,tail,head,p__11000);};
__BEH__eval_relate.cljs$lang$maxFixedArity = 4;
__BEH__eval_relate.cljs$lang$applyTo = (function (arglist__11055){
var this$ = cljs.core.first(arglist__11055);
arglist__11055 = cljs.core.next(arglist__11055);
var sym = cljs.core.first(arglist__11055);
arglist__11055 = cljs.core.next(arglist__11055);
var tail = cljs.core.first(arglist__11055);
arglist__11055 = cljs.core.next(arglist__11055);
var head = cljs.core.first(arglist__11055);
var p__11000 = cljs.core.rest(arglist__11055);
return __BEH__eval_relate__delegate(this$,sym,tail,head,p__11000);
});
__BEH__eval_relate.cljs$core$IFn$_invoke$arity$variadic = __BEH__eval_relate__delegate;
return __BEH__eval_relate;
})()
;
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.inspector","eval-relate","lt.plugins.aleph.inspector/eval-relate",2628605716),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.inspector.__BEH__eval_relate,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph.eval-relate","aleph.eval-relate",4024011328),null], null), null));
lt.plugins.aleph.inspector.relations = (function (){var iter__9383__auto__ = (function iter__11003(s__11004){return (new cljs.core.LazySeq(null,(function (){var s__11004__$1 = s__11004;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11004__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var x = cljs.core.first.call(null,xs__4579__auto__);var iterys__9379__auto__ = ((function (s__11004__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function iter__11005(s__11006){return (new cljs.core.LazySeq(null,((function (s__11004__$1,x,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__11006__$1 = s__11006;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__11006__$1);if(temp__4092__auto____$1)
{var s__11006__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__11006__$2))
{var c__9381__auto__ = cljs.core.chunk_first.call(null,s__11006__$2);var size__9382__auto__ = cljs.core.count.call(null,c__9381__auto__);var b__11008 = cljs.core.chunk_buffer.call(null,size__9382__auto__);if((function (){var i__11007 = 0;while(true){
if((i__11007 < size__9382__auto__))
{var y = cljs.core._nth.call(null,c__9381__auto__,i__11007);cljs.core.chunk_append.call(null,b__11008,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"tail","tail",1017456578),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.Keyword(null,"display-name","display-name",2582814760)],[x,y,[cljs.core.str(cljs.core.name.call(null,x)),cljs.core.str(" \u2192 "),cljs.core.str(cljs.core.name.call(null,y))].join('')]));
{
var G__11056 = (i__11007 + 1);
i__11007 = G__11056;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11008),iter__11005.call(null,cljs.core.chunk_rest.call(null,s__11006__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11008),null);
}
} else
{var y = cljs.core.first.call(null,s__11006__$2);return cljs.core.cons.call(null,cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"tail","tail",1017456578),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.Keyword(null,"display-name","display-name",2582814760)],[x,y,[cljs.core.str(cljs.core.name.call(null,x)),cljs.core.str(" \u2192 "),cljs.core.str(cljs.core.name.call(null,y))].join('')]),iter__11005.call(null,cljs.core.rest.call(null,s__11006__$2)));
}
} else
{return null;
}
break;
}
});})(s__11004__$1,x,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__11004__$1,x,xs__4579__auto__,temp__4092__auto__))
;var fs__9380__auto__ = cljs.core.seq.call(null,iterys__9379__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"o","o",1013904353),new cljs.core.Keyword(null,"t","t",1013904358),new cljs.core.Keyword(null,"trigger","trigger",4248979754)], null)));if(fs__9380__auto__)
{return cljs.core.concat.call(null,fs__9380__auto__,iter__11003.call(null,cljs.core.rest.call(null,s__11004__$1)));
} else
{{
var G__11057 = cljs.core.rest.call(null,s__11004__$1);
s__11004__$1 = G__11057;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9383__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"o","o",1013904353),new cljs.core.Keyword(null,"t","t",1013904358),new cljs.core.Keyword(null,"trigger","trigger",4248979754)], null));
})();
lt.plugins.aleph.inspector.rel_list = lt.plugins.uicommons.selector.exec_selector.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"display-name","display-name",2582814760),new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.aleph.inspector.relations,new cljs.core.Keyword(null,"size","size",1017434995),16,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"relators"], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"aleph.inline-relate","aleph.inline-relate",2617972899),new cljs.core.Keyword(null,"desc","desc",1016984067),"Aleph: display bot configuration at cursor",new cljs.core.Keyword(null,"options","options",4059396624),lt.plugins.aleph.inspector.rel_list,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (rel){var ed = lt.objs.editor.pool.last_active.call(null);var sym = lt.plugins.aleph.inspector.read_token_at_cursor.call(null,ed);var map__11009 = rel;var map__11009__$1 = ((cljs.core.seq_QMARK_.call(null,map__11009))?cljs.core.apply.call(null,cljs.core.hash_map,map__11009):map__11009);var head = cljs.core.get.call(null,map__11009__$1,new cljs.core.Keyword(null,"head","head",1017102674));var tail = cljs.core.get.call(null,map__11009__$1,new cljs.core.Keyword(null,"tail","tail",1017456578));return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"aleph.eval-relate","aleph.eval-relate",4024011328),sym,tail,head);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"aleph.inline-relate-with","aleph.inline-relate-with",3086038868),new cljs.core.Keyword(null,"desc","desc",1016984067),"Aleph: evaluate BOT relations at cursor with given input, output elements",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (tail,head){var ed = lt.objs.editor.pool.last_active.call(null);var sym = lt.plugins.aleph.inspector.read_token_at_cursor.call(null,ed);return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"aleph.eval-relate","aleph.eval-relate",4024011328),sym,tail,head);
})], null));
lt.plugins.aleph.inspector.resolvers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"symbol","symbol",4421347594),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",-1640531416,null)], null),cljs.core.list(new cljs.core.Symbol(null,"select-keys","select-keys",-1471524386,null),cljs.core.list(new cljs.core.Symbol(null,"deref","deref",-1545057749,null),cljs.core.list(new cljs.core.Symbol(null,"if","if",-1640528170,null),cljs.core.list(new cljs.core.Symbol(null,"number?","number?",653920207,null),new cljs.core.Symbol(null,"o","o",-1640531416,null)),cljs.core.list(new cljs.core.Symbol("object","by-id","object/by-id",-1749185626,null),new cljs.core.Symbol(null,"o","o",-1640531416,null)),new cljs.core.Symbol(null,"o","o",-1640531416,null))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.object","id","lt.object/id",706431105),new cljs.core.Keyword("lt.object","type","lt.object/type",701613666),new cljs.core.Keyword(null,"listeners","listeners",4090152369),new cljs.core.Keyword(null,"tags","tags",1017456523)], null))),new cljs.core.Keyword(null,"keyword","keyword",4494463323),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",-1640528255,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-1640531420,null)], null),cljs.core.list(new cljs.core.Symbol(null,"keyword","keyword",1840027554,null),new cljs.core.Symbol(null,"k","k",-1640531420,null)))], null);
lt.plugins.aleph.inspector.__BEH__resolve = (function __BEH__resolve(this$,sym){var resolver = (((sym instanceof cljs.core.Symbol))?new cljs.core.Keyword(null,"symbol","symbol",4421347594).cljs$core$IFn$_invoke$arity$1(lt.plugins.aleph.inspector.resolvers):(((sym instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"keyword","keyword",4494463323).cljs$core$IFn$_invoke$arity$1(lt.plugins.aleph.inspector.resolvers):null));var fnstring = lt.plugins.aleph.inspector.wrap_fnstr.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolver,sym], null));return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"eval.custom","eval.custom",3328560245),fnstring,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"return","return",4374474914),new cljs.core.Keyword(null,"handler","handler",1706707644),this$], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.inspector","resolve","lt.plugins.aleph.inspector/resolve",2950805202),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.inspector.__BEH__resolve,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resolve","resolve",2111272286),null], null), null));
lt.plugins.aleph.inspector.__BEH__inspect_resolved = (function __BEH__inspect_resolved(this$,p__11010){var map__11012 = p__11010;var map__11012__$1 = ((cljs.core.seq_QMARK_.call(null,map__11012))?cljs.core.apply.call(null,cljs.core.hash_map,map__11012):map__11012);var meta = cljs.core.get.call(null,map__11012__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));var result = cljs.core.get.call(null,map__11012__$1,new cljs.core.Keyword(null,"result","result",4374444943));var returned = cljs.reader.read_string.call(null,result);var resolved = (function (){var or__8666__auto__ = new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(returned);if(cljs.core.truth_(or__8666__auto__))
{return or__8666__auto__;
} else
{return returned;
}
})();var el = lt.plugins.aleph.inspector.discern_element.call(null,resolved);if(cljs.core.truth_(el))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"aleph.inspect","aleph.inspect",3562126506),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",3646034542),el,new cljs.core.Keyword(null,"sym","sym",1014018617),resolved], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.inspector","inspect-resolved","lt.plugins.aleph.inspector/inspect-resolved",2848401661),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.inspector.__BEH__inspect_resolved,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",4374474914),null], null), null));
lt.plugins.aleph.inspector.b_enlist = (function b_enlist(bs){return cljs.core.map.call(null,(function (p1__11013_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name-key","name-key",2853323663),new cljs.core.Keyword(null,"name","name",1017277949)],[[cljs.core.str(p1__11013_SHARP_)].join(''),p1__11013_SHARP_]);
}),cljs.core.keys.call(null,bs));
});
lt.plugins.aleph.inspector.behavior_selector = (function behavior_selector(parent,items){return lt.plugins.uicommons.selector.extended_selector.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1017434995),16,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name-key","name-key",2853323663),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"related behaviors",new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.aleph.inspector.b_enlist.call(null,items),new cljs.core.Keyword(null,"parent","parent",4313447452),parent], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph.inline-selector","aleph.inline-selector",2376640297),null], null), null));
});
lt.plugins.aleph.inspector.o_enlist = (function o_enlist(os){return cljs.core.map.call(null,(function (p1__11014_SHARP_){return cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.core.deref.call(null,p1__11014_SHARP_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.object","type","lt.object/type",701613666),new cljs.core.Keyword("lt.object","id","lt.object/id",706431105)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type-key","type-key",4631390398),[cljs.core.str(new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__11014_SHARP_)))].join(''),new cljs.core.Keyword(null,"id-key","id-key",4113763871),[cljs.core.str(new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__11014_SHARP_)))].join('')], null));
}),cljs.core.vals.call(null,os));
});
lt.plugins.aleph.inspector.o_itemize = (function o_itemize(original,scored,highlighted,item){return [cljs.core.str("<span>"),cljs.core.str(highlighted),cljs.core.str("</span>"),cljs.core.str(" of type "),cljs.core.str("<span class=\"cm-atom\">"),cljs.core.str(new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("</span>")].join('');
});
lt.plugins.aleph.inspector.object_selector = (function object_selector(parent,items){return lt.plugins.uicommons.selector.extended_selector.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"size","size",1017434995),16,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id-key","id-key",4113763871),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"related objects",new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.aleph.inspector.o_enlist.call(null,items),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.inspector.o_itemize,new cljs.core.Keyword(null,"parent","parent",4313447452),parent], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph.inline-selector","aleph.inline-selector",2376640297),null], null), null));
});
lt.plugins.aleph.inspector.t_enlist = (function t_enlist(ts){return cljs.core.map.call(null,(function (p1__11015_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"tag-key","tag-key",3758713118),new cljs.core.Keyword(null,"tag","tag",1014018828)],[[cljs.core.str(p1__11015_SHARP_)].join(''),p1__11015_SHARP_]);
}),cljs.core.keys.call(null,ts));
});
lt.plugins.aleph.inspector.tag_selector = (function tag_selector(parent,items){return lt.plugins.uicommons.selector.extended_selector.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"size","size",1017434995),16,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"tag-key","tag-key",3758713118),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"related tags",new cljs.core.Keyword(null,"items","items",1114430258),lt.plugins.aleph.inspector.t_enlist.call(null,items),new cljs.core.Keyword(null,"parent","parent",4313447452),parent], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph.inline-selector","aleph.inline-selector",2376640297),null], null), null));
});
lt.plugins.aleph.inspector.selectors_for = (function (){var method_table__9524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("selectors-for",new cljs.core.Keyword(null,"element","element",3646034542),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9528__auto__,method_table__9524__auto__,prefer_table__9525__auto__,method_cache__9526__auto__,cached_hierarchy__9527__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.aleph.inspector.selectors_for,new cljs.core.Keyword(null,"b","b",1013904340),(function (p__11016){var map__11017 = p__11016;var map__11017__$1 = ((cljs.core.seq_QMARK_.call(null,map__11017))?cljs.core.apply.call(null,cljs.core.hash_map,map__11017):map__11017);var parent = cljs.core.get.call(null,map__11017__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));var sym = cljs.core.get.call(null,map__11017__$1,new cljs.core.Keyword(null,"sym","sym",1014018617));var obj_sel = lt.plugins.aleph.inspector.object_selector.call(null,parent,lt.plugins.aleph.bot.b__GT_o.call(null,sym));var tag_sel = lt.plugins.aleph.inspector.tag_selector.call(null,parent,lt.plugins.aleph.bot.b__GT_t.call(null,sym));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj_sel,tag_sel], null);
}));
cljs.core._add_method.call(null,lt.plugins.aleph.inspector.selectors_for,new cljs.core.Keyword(null,"o","o",1013904353),(function (p__11018){var map__11019 = p__11018;var map__11019__$1 = ((cljs.core.seq_QMARK_.call(null,map__11019))?cljs.core.apply.call(null,cljs.core.hash_map,map__11019):map__11019);var parent = cljs.core.get.call(null,map__11019__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));var sym = cljs.core.get.call(null,map__11019__$1,new cljs.core.Keyword(null,"sym","sym",1014018617));var beh_sel = lt.plugins.aleph.inspector.behavior_selector.call(null,parent,lt.plugins.aleph.bot.o__GT_b.call(null,sym));var tag_sel = lt.plugins.aleph.inspector.tag_selector.call(null,parent,lt.plugins.aleph.bot.o__GT_t.call(null,sym));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [beh_sel,tag_sel], null);
}));
cljs.core._add_method.call(null,lt.plugins.aleph.inspector.selectors_for,new cljs.core.Keyword(null,"t","t",1013904358),(function (p__11020){var map__11021 = p__11020;var map__11021__$1 = ((cljs.core.seq_QMARK_.call(null,map__11021))?cljs.core.apply.call(null,cljs.core.hash_map,map__11021):map__11021);var parent = cljs.core.get.call(null,map__11021__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));var sym = cljs.core.get.call(null,map__11021__$1,new cljs.core.Keyword(null,"sym","sym",1014018617));var obj_sel = lt.plugins.aleph.inspector.object_selector.call(null,parent,lt.plugins.aleph.bot.t__GT_o.call(null,sym));var beh_sel = lt.plugins.aleph.inspector.behavior_selector.call(null,parent,lt.plugins.aleph.bot.t__GT_b.call(null,sym));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj_sel,beh_sel], null);
}));
cljs.core._add_method.call(null,lt.plugins.aleph.inspector.selectors_for,new cljs.core.Keyword(null,"trigger","trigger",4248979754),(function (p__11022){var map__11023 = p__11022;var map__11023__$1 = ((cljs.core.seq_QMARK_.call(null,map__11023))?cljs.core.apply.call(null,cljs.core.hash_map,map__11023):map__11023);var parent = cljs.core.get.call(null,map__11023__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));var sym = cljs.core.get.call(null,map__11023__$1,new cljs.core.Keyword(null,"sym","sym",1014018617));var obj_sel = lt.plugins.aleph.inspector.object_selector.call(null,parent,lt.plugins.aleph.bot.triggers__GT_objects.call(null,sym));var beh_sel = lt.plugins.aleph.inspector.behavior_selector.call(null,parent,lt.plugins.aleph.bot.triggers__GT_behaviors.call(null,sym));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj_sel,beh_sel], null);
}));
lt.plugins.aleph.inspector.__BEH__reload_parent_BANG_ = (function __BEH__reload_parent_BANG_(this$,item){var parent = new cljs.core.Keyword(null,"parent","parent",4313447452).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var id = (function (){var or__8666__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item);if(cljs.core.truth_(or__8666__auto__))
{return or__8666__auto__;
} else
{var or__8666__auto____$1 = new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(item);if(cljs.core.truth_(or__8666__auto____$1))
{return or__8666__auto____$1;
} else
{return new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(item);
}
}
})();var el = (cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"b","b",1013904340):(cljs.core.truth_(new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"o","o",1013904353):(cljs.core.truth_(new cljs.core.Keyword(null,"tag","tag",1014018828).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"t","t",1013904358):null)));return lt.object.raise.call(null,parent,new cljs.core.Keyword(null,"set-subject!","set-subject!",3043350770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",3646034542),el,new cljs.core.Keyword(null,"sym","sym",1014018617),id], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.inspector","reload-parent!","lt.plugins.aleph.inspector/reload-parent!",4175674923),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.inspector.__BEH__reload_parent_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.aleph.inspector.__BEH__set_subject_BANG_ = (function __BEH__set_subject_BANG_(this$,subj){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subject","subject",3440986270),subj], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"log-subject","log-subject",1938443029),subj);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.inspector","set-subject!","lt.plugins.aleph.inspector/set-subject!",1735400238),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.inspector.__BEH__set_subject_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-subject!","set-subject!",3043350770),null], null), null));
lt.plugins.aleph.inspector.__BEH__log_subject = (function __BEH__log_subject(this$,subj){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",1940838406)], null),cljs.core.conj,subj);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.inspector","log-subject","lt.plugins.aleph.inspector/log-subject",2773765387),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.inspector.__BEH__log_subject,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"log-subject","log-subject",1938443029),null], null), null));
lt.plugins.aleph.inspector.__BEH__inspect = (function __BEH__inspect(this$,opts){var map__11025 = opts;var map__11025__$1 = ((cljs.core.seq_QMARK_.call(null,map__11025))?cljs.core.apply.call(null,cljs.core.hash_map,map__11025):map__11025);var sym = cljs.core.get.call(null,map__11025__$1,new cljs.core.Keyword(null,"sym","sym",1014018617));var element = cljs.core.get.call(null,map__11025__$1,new cljs.core.Keyword(null,"element","element",3646034542));var inspector = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.aleph.inspector","inspector","lt.plugins.aleph.inspector/inspector",3914690727),opts);var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(ed.__GT_cursor.call(null,this$));var widget = ed.line_widget.call(null,this$,line,lt.object.__GT_content.call(null,inspector));return lt.object.merge_BANG_.call(null,inspector,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"widget","widget",4520824246),widget], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.inspector","inspect","lt.plugins.aleph.inspector/inspect",1671780218),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.inspector.__BEH__inspect,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph.inspect","aleph.inspect",3562126506),null], null), null));
lt.plugins.aleph.inspector.template_with = (function (){var method_table__9524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("template-with",((function (method_table__9524__auto__,prefer_table__9525__auto__,method_cache__9526__auto__,cached_hierarchy__9527__auto__,hierarchy__9528__auto__){
return (function (_,opts){return new cljs.core.Keyword(null,"element","element",3646034542).cljs$core$IFn$_invoke$arity$1(opts);
});})(method_table__9524__auto__,prefer_table__9525__auto__,method_cache__9526__auto__,cached_hierarchy__9527__auto__,hierarchy__9528__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9528__auto__,method_table__9524__auto__,prefer_table__9525__auto__,method_cache__9526__auto__,cached_hierarchy__9527__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.aleph.inspector.template_with,new cljs.core.Keyword(null,"b","b",1013904340),(function (this$,p__11026){var map__11027 = p__11026;var map__11027__$1 = ((cljs.core.seq_QMARK_.call(null,map__11027))?cljs.core.apply.call(null,cljs.core.hash_map,map__11027):map__11027);var opts = map__11027__$1;var sym = cljs.core.get.call(null,map__11027__$1,new cljs.core.Keyword(null,"sym","sym",1014018617));var beh = cljs.core.first.call(null,lt.plugins.aleph.bot.b__GT_b.call(null,sym));var bname = cljs.core.key.call(null,beh);var triggers = new cljs.core.Keyword(null,"triggers","triggers",2516997421).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,beh));var trigger_str = lt.plugins.aleph.inspector.space_separate.call(null,triggers);var sels = lt.plugins.aleph.inspector.selectors_for.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",4313447452),this$], null)));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selectors","selectors",3592911846),sels], null));
return crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inspector-header","div.inspector-header",4224386386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.element-id","h1.element-id",2115355459),"behavior ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bot-element.cm-atom","span.bot-element.cm-atom",4040133290),bname], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.el-addendum","h2.el-addendum",2314349414),"triggered by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bot-element.cm-atom","span.bot-element.cm-atom",4040133290),trigger_str], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.selectors","div.selectors",2949616329),cljs.core.map.call(null,lt.object.__GT_content,sels)], null)], null));
}));
cljs.core._add_method.call(null,lt.plugins.aleph.inspector.template_with,new cljs.core.Keyword(null,"o","o",1013904353),(function (this$,p__11028){var map__11029 = p__11028;var map__11029__$1 = ((cljs.core.seq_QMARK_.call(null,map__11029))?cljs.core.apply.call(null,cljs.core.hash_map,map__11029):map__11029);var opts = map__11029__$1;var sym = cljs.core.get.call(null,map__11029__$1,new cljs.core.Keyword(null,"sym","sym",1014018617));var obj = cljs.core.first.call(null,lt.plugins.aleph.bot.o__GT_o.call(null,sym));var o_id = cljs.core.key.call(null,obj);var tags = new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.val.call(null,obj)));var o_type = new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.val.call(null,obj)));var sels = lt.plugins.aleph.inspector.selectors_for.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",4313447452),this$], null)));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selectors","selectors",3592911846),sels], null));
return crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inspector-header","div.inspector-header",4224386386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.element-id","h1.element-id",2115355459),"object ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bot-element.cm-atom","span.bot-element.cm-atom",4040133290),o_id], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.el-addendum","h2.el-addendum",2314349414),"of type ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bot-element.cm-atom","span.bot-element.cm-atom",4040133290),o_type], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.selectors","div.selectors",2949616329),cljs.core.map.call(null,lt.object.__GT_content,sels)], null)], null));
}));
cljs.core._add_method.call(null,lt.plugins.aleph.inspector.template_with,new cljs.core.Keyword(null,"t","t",1013904358),(function (this$,p__11030){var map__11031 = p__11030;var map__11031__$1 = ((cljs.core.seq_QMARK_.call(null,map__11031))?cljs.core.apply.call(null,cljs.core.hash_map,map__11031):map__11031);var opts = map__11031__$1;var sym = cljs.core.get.call(null,map__11031__$1,new cljs.core.Keyword(null,"sym","sym",1014018617));var sels = lt.plugins.aleph.inspector.selectors_for.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",4313447452),this$], null)));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selectors","selectors",3592911846),sels], null));
return crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inspector-header","div.inspector-header",4224386386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.element-id","h1.element-id",2115355459),"tag ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bot-element.cm-atom","span.bot-element.cm-atom",4040133290),sym], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.selectors","div.selectors",2949616329),cljs.core.map.call(null,lt.object.__GT_content,sels)], null)], null));
}));
cljs.core._add_method.call(null,lt.plugins.aleph.inspector.template_with,new cljs.core.Keyword(null,"trigger","trigger",4248979754),(function (this$,p__11032){var map__11033 = p__11032;var map__11033__$1 = ((cljs.core.seq_QMARK_.call(null,map__11033))?cljs.core.apply.call(null,cljs.core.hash_map,map__11033):map__11033);var opts = map__11033__$1;var sym = cljs.core.get.call(null,map__11033__$1,new cljs.core.Keyword(null,"sym","sym",1014018617));var sels = lt.plugins.aleph.inspector.selectors_for.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parent","parent",4313447452),this$], null)));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selectors","selectors",3592911846),sels], null));
return crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inspector-header","div.inspector-header",4224386386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.element-id","h1.element-id",2115355459),"trigger ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bot-element.cm-atom","span.bot-element.cm-atom",4040133290),sym], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.selectors","div.selectors",2949616329),cljs.core.map.call(null,lt.object.__GT_content,sels)], null)], null));
}));
cljs.core._add_method.call(null,lt.plugins.aleph.inspector.template_with,new cljs.core.Keyword(null,"default","default",2558708147),(function (_,___$1){return null;
}));
lt.plugins.aleph.inspector.close_button = (function close_button(this$){var e__10132__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tab-close","span.tab-close",4094760846),"x"], null));var seq__11044_11058 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__10132__auto__){
return (function (){new cljs.core.Keyword(null,"widget","widget",4520824246).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)).clear();
var seq__11048_11062 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"selectors","selectors",3592911846).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var chunk__11049_11063 = null;var count__11050_11064 = 0;var i__11051_11065 = 0;while(true){
if((i__11051_11065 < count__11050_11064))
{var sel_11066 = cljs.core._nth.call(null,chunk__11049_11063,i__11051_11065);lt.object.destroy_BANG_.call(null,sel_11066);
{
var G__11067 = seq__11048_11062;
var G__11068 = chunk__11049_11063;
var G__11069 = count__11050_11064;
var G__11070 = (i__11051_11065 + 1);
seq__11048_11062 = G__11067;
chunk__11049_11063 = G__11068;
count__11050_11064 = G__11069;
i__11051_11065 = G__11070;
continue;
}
} else
{var temp__4092__auto___11071 = cljs.core.seq.call(null,seq__11048_11062);if(temp__4092__auto___11071)
{var seq__11048_11072__$1 = temp__4092__auto___11071;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11048_11072__$1))
{var c__9414__auto___11073 = cljs.core.chunk_first.call(null,seq__11048_11072__$1);{
var G__11074 = cljs.core.chunk_rest.call(null,seq__11048_11072__$1);
var G__11075 = c__9414__auto___11073;
var G__11076 = cljs.core.count.call(null,c__9414__auto___11073);
var G__11077 = 0;
seq__11048_11062 = G__11074;
chunk__11049_11063 = G__11075;
count__11050_11064 = G__11076;
i__11051_11065 = G__11077;
continue;
}
} else
{var sel_11078 = cljs.core.first.call(null,seq__11048_11072__$1);lt.object.destroy_BANG_.call(null,sel_11078);
{
var G__11079 = cljs.core.next.call(null,seq__11048_11072__$1);
var G__11080 = null;
var G__11081 = 0;
var G__11082 = 0;
seq__11048_11062 = G__11079;
chunk__11049_11063 = G__11080;
count__11050_11064 = G__11081;
i__11051_11065 = G__11082;
continue;
}
}
} else
{}
}
break;
}
return lt.object.destroy_BANG_.call(null,this$);
});})(e__10132__auto__))
], null)));var chunk__11045_11059 = null;var count__11046_11060 = 0;var i__11047_11061 = 0;while(true){
if((i__11047_11061 < count__11046_11060))
{var vec__11052_11083 = cljs.core._nth.call(null,chunk__11045_11059,i__11047_11061);var ev__10133__auto___11084 = cljs.core.nth.call(null,vec__11052_11083,0,null);var func__10134__auto___11085 = cljs.core.nth.call(null,vec__11052_11083,1,null);lt.util.dom.on.call(null,e__10132__auto__,ev__10133__auto___11084,func__10134__auto___11085);
{
var G__11086 = seq__11044_11058;
var G__11087 = chunk__11045_11059;
var G__11088 = count__11046_11060;
var G__11089 = (i__11047_11061 + 1);
seq__11044_11058 = G__11086;
chunk__11045_11059 = G__11087;
count__11046_11060 = G__11088;
i__11047_11061 = G__11089;
continue;
}
} else
{var temp__4092__auto___11090 = cljs.core.seq.call(null,seq__11044_11058);if(temp__4092__auto___11090)
{var seq__11044_11091__$1 = temp__4092__auto___11090;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11044_11091__$1))
{var c__9414__auto___11092 = cljs.core.chunk_first.call(null,seq__11044_11091__$1);{
var G__11093 = cljs.core.chunk_rest.call(null,seq__11044_11091__$1);
var G__11094 = c__9414__auto___11092;
var G__11095 = cljs.core.count.call(null,c__9414__auto___11092);
var G__11096 = 0;
seq__11044_11058 = G__11093;
chunk__11045_11059 = G__11094;
count__11046_11060 = G__11095;
i__11047_11061 = G__11096;
continue;
}
} else
{var vec__11053_11097 = cljs.core.first.call(null,seq__11044_11091__$1);var ev__10133__auto___11098 = cljs.core.nth.call(null,vec__11053_11097,0,null);var func__10134__auto___11099 = cljs.core.nth.call(null,vec__11053_11097,1,null);lt.util.dom.on.call(null,e__10132__auto__,ev__10133__auto___11098,func__10134__auto___11099);
{
var G__11100 = cljs.core.next.call(null,seq__11044_11091__$1);
var G__11101 = null;
var G__11102 = 0;
var G__11103 = 0;
seq__11044_11058 = G__11100;
chunk__11045_11059 = G__11101;
count__11046_11060 = G__11102;
i__11047_11061 = G__11103;
continue;
}
}
} else
{}
}
break;
}
return e__10132__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.inspector","inspector","lt.plugins.aleph.inspector/inspector",3914690727),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph.inspector","aleph.inspector",1724144781),null], null), null),new cljs.core.Keyword(null,"widget","widget",4520824246),null,new cljs.core.Keyword(null,"subject","subject",3440986270),null,new cljs.core.Keyword(null,"selectors","selectors",3592911846),null,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,opts){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subject","subject",3440986270),opts], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.aleph.inspector","div.aleph.inspector",4624907568),lt.plugins.aleph.inspector.close_button.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inspecting","div.inspecting",4298425917),crate.binding.bound.call(null,crate.binding.subatom.call(null,this$,new cljs.core.Keyword(null,"subject","subject",3440986270)),cljs.core.partial.call(null,lt.plugins.aleph.inspector.template_with,this$))], null)], null);
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"aleph.inspect-token","aleph.inspect-token",2366947478),new cljs.core.Keyword(null,"desc","desc",1016984067),"Aleph: inspect element at cursor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var ed = lt.objs.editor.pool.last_active.call(null);var cursor = lt.objs.editor.__GT_cursor.call(null,ed);var token_type = lt.objs.editor.__GT_token_type.call(null,ed,cursor);var sym = ((!(cljs.core._EQ_.call(null,"string",token_type)))?lt.plugins.aleph.inspector.read_token_at_cursor.call(null,ed):null);if(cljs.core.truth_(sym))
{return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"resolve","resolve",2111272286),sym);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,"Could not find symbol at cursor");
}
})], null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.aleph.browser')) {
goog.provide('lt.plugins.aleph.browser');
goog.require('cljs.core');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.tabs');
goog.require('lt.objs.sidebar.command');
goog.require('lt.plugins.aleph.bot');
goog.require('lt.objs.command');
goog.require('lt.plugins.aleph.bot');
goog.require('lt.plugins.aleph.selector');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.plugins.aleph.selector');
goog.require('lt.objs.command');
/**
* Given an Aleph filter-list, extracts the current results into a list
* of items compatible with relator functions.
*/
lt.plugins.aleph.browser.extract_keys = (function extract_keys(sel){var cur = new cljs.core.Keyword(null,"cur","cur",1014003122).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sel));var k = new cljs.core.Keyword(null,"relate-by","relate-by",1006071485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sel));return cljs.core.map.call(null,k,cljs.core.filter.call(null,cljs.core.map_QMARK_,cljs.core.apply.call(null,cljs.core.concat,cur)));
});
/**
* @param {...*} var_args
*/
lt.plugins.aleph.browser.propagate_BANG_ = (function() { 
var propagate_BANG___delegate = function (super$,observed,p__10809){var vec__10811 = p__10809;var force_QMARK_ = cljs.core.nth.call(null,vec__10811,0,null);lt.object.merge_BANG_.call(null,super$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"observing","observing",3230796363),observed], null));
return lt.object.raise.call(null,super$,new cljs.core.Keyword(null,"propagate!","propagate!",4257587594),force_QMARK_);
};
var propagate_BANG_ = function (super$,observed,var_args){
var p__10809 = null;if (arguments.length > 2) {
  p__10809 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return propagate_BANG___delegate.call(this,super$,observed,p__10809);};
propagate_BANG_.cljs$lang$maxFixedArity = 2;
propagate_BANG_.cljs$lang$applyTo = (function (arglist__10849){
var super$ = cljs.core.first(arglist__10849);
arglist__10849 = cljs.core.next(arglist__10849);
var observed = cljs.core.first(arglist__10849);
var p__10809 = cljs.core.rest(arglist__10849);
return propagate_BANG___delegate(super$,observed,p__10809);
});
propagate_BANG_.cljs$core$IFn$_invoke$arity$variadic = propagate_BANG___delegate;
return propagate_BANG_;
})()
;
lt.plugins.aleph.browser.__BEH__update_sub = (function __BEH__update_sub(this$){lt.plugins.aleph.selector.fill_list.call(null,this$);
var super$ = new cljs.core.Keyword(null,"super","super",1123705581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var observed = lt.plugins.aleph.browser.extract_keys.call(null,this$);return lt.plugins.aleph.browser.propagate_BANG_.call(null,super$,observed);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","update-sub","lt.plugins.aleph.browser/update-sub",4340760636),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.browser.__BEH__update_sub,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh!","refresh!",4597922840),null], null), null));
lt.plugins.aleph.browser.__BEH__propagate_selection_BANG_ = (function __BEH__propagate_selection_BANG_(this$,item){var super$ = new cljs.core.Keyword(null,"super","super",1123705581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var relator = new cljs.core.Keyword(null,"relate-by","relate-by",1006071485).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var observed = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [relator.call(null,item)], null);lt.plugins.aleph.browser.propagate_BANG_.call(null,super$,observed,new cljs.core.Keyword(null,"from-selection","from-selection",3073266331));
return lt.plugins.aleph.selector.emphasize_active_query.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","propagate-selection!","lt.plugins.aleph.browser/propagate-selection!",2823629369),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.browser.__BEH__propagate_selection_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.aleph.browser.b_enlist = (function b_enlist(bs){return cljs.core.map.call(null,(function (p1__10812_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"name-key","name-key",2853323663),new cljs.core.Keyword(null,"triggers-key","triggers-key",1406079679),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"triggers","triggers",2516997421)],[[cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__10812_SHARP_))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"triggers","triggers",2516997421).cljs$core$IFn$_invoke$arity$1(p1__10812_SHARP_))].join(''),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__10812_SHARP_),new cljs.core.Keyword(null,"triggers","triggers",2516997421).cljs$core$IFn$_invoke$arity$1(p1__10812_SHARP_)]);
}),cljs.core.vals.call(null,bs));
});
lt.plugins.aleph.browser.b_itemize_with_name = (function b_itemize_with_name(){return (function (original,scored,highlighted,item){return [cljs.core.str("<h2>"),cljs.core.str(highlighted),cljs.core.str("</h2><p>"),cljs.core.str(new cljs.core.Keyword(null,"triggers","triggers",2516997421).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("</p>")].join('');
});
});
lt.plugins.aleph.browser.b_itemize_with_triggers = (function b_itemize_with_triggers(){return (function (original,scored,highlighted,item){return [cljs.core.str("<h2>"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("</h2><p>"),cljs.core.str(highlighted),cljs.core.str("</p>")].join('');
});
});
lt.plugins.aleph.browser.b_search_modes = cljs.core.sorted_set_by.call(null,lt.plugins.aleph.selector.mode_priority__LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name-key","name-key",2853323663),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.browser.b_itemize_with_name.call(null),new cljs.core.Keyword(null,"display-key","display-key",2727079494),"by name",new cljs.core.Keyword(null,"css-sel","css-sel",2082467074),[cljs.core.str(lt.plugins.aleph.selector.css_mode_prefix),cljs.core.str("name")].join(''),new cljs.core.Keyword(null,"priority","priority",4143410454),0], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"triggers-key","triggers-key",1406079679),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.browser.b_itemize_with_triggers.call(null),new cljs.core.Keyword(null,"display-key","display-key",2727079494),"by trigger",new cljs.core.Keyword(null,"css-sel","css-sel",2082467074),[cljs.core.str(lt.plugins.aleph.selector.css_mode_prefix),cljs.core.str("trigger")].join(''),new cljs.core.Keyword(null,"priority","priority",4143410454),1], null));
lt.plugins.aleph.browser.b_list = lt.plugins.aleph.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return lt.plugins.aleph.browser.b_enlist.call(null,cljs.core.deref.call(null,lt.object.behaviors));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"name-key","name-key",2853323663),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.browser.b_itemize_with_name.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Behavior",new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.aleph.browser.b_search_modes,new cljs.core.Keyword(null,"relate-by","relate-by",1006071485),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"enlist-with","enlist-with",2793597310),lt.plugins.aleph.browser.b_enlist,new cljs.core.Keyword(null,"starter-items","starter-items",4786571380),(function (){return cljs.core.deref.call(null,lt.object.behaviors);
})], null));
lt.plugins.aleph.browser.o_enlist = (function o_enlist(os){return cljs.core.map.call(null,(function (p1__10813_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"type-key","type-key",4631390398),new cljs.core.Keyword(null,"id-key","id-key",4113763871),new cljs.core.Keyword("lt.object","type","lt.object/type",701613666),new cljs.core.Keyword("lt.object","id","lt.object/id",706431105),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.Keyword(null,"listeners","listeners",4090152369)],[[cljs.core.str(new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__10813_SHARP_)))].join(''),[cljs.core.str(new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__10813_SHARP_)))].join(''),new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__10813_SHARP_)),new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__10813_SHARP_)),new cljs.core.Keyword(null,"tags","tags",1017456523).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__10813_SHARP_)),new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__10813_SHARP_))]);
}),cljs.core.vals.call(null,os));
});
lt.plugins.aleph.browser.o_itemize_with_type = (function o_itemize_with_type(){return (function (original,scored,highlighted,item){return [cljs.core.str("<h2>"),cljs.core.str(highlighted),cljs.core.str("</h2><p>"),cljs.core.str(new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("</p>")].join('');
});
});
lt.plugins.aleph.browser.o_itemize_with_id = (function o_itemize_with_id(){return (function (original,scored,highlighted,item){return [cljs.core.str("<h2>"),cljs.core.str(new cljs.core.Keyword("lt.object","type","lt.object/type",701613666).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("</h2><p>"),cljs.core.str(highlighted),cljs.core.str("</p>")].join('');
});
});
lt.plugins.aleph.browser.o_search_modes = cljs.core.sorted_set_by.call(null,lt.plugins.aleph.selector.mode_priority__LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"type-key","type-key",4631390398),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.browser.o_itemize_with_type.call(null),new cljs.core.Keyword(null,"display-key","display-key",2727079494),"by type",new cljs.core.Keyword(null,"css-sel","css-sel",2082467074),[cljs.core.str(lt.plugins.aleph.selector.css_mode_prefix),cljs.core.str("type")].join(''),new cljs.core.Keyword(null,"priority","priority",4143410454),0], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id-key","id-key",4113763871),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.browser.o_itemize_with_id.call(null),new cljs.core.Keyword(null,"display-key","display-key",2727079494),"by id",new cljs.core.Keyword(null,"css-sel","css-sel",2082467074),[cljs.core.str(lt.plugins.aleph.selector.css_mode_prefix),cljs.core.str("id")].join(''),new cljs.core.Keyword(null,"priority","priority",4143410454),1], null));
lt.plugins.aleph.browser.o_list = lt.plugins.aleph.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return lt.plugins.aleph.browser.o_enlist.call(null,cljs.core.deref.call(null,lt.object.instances));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"type-key","type-key",4631390398),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.browser.o_itemize_with_type.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Object",new cljs.core.Keyword(null,"modes","modes",1117974178),lt.plugins.aleph.browser.o_search_modes,new cljs.core.Keyword(null,"relate-by","relate-by",1006071485),new cljs.core.Keyword("lt.object","id","lt.object/id",706431105),new cljs.core.Keyword(null,"enlist-with","enlist-with",2793597310),lt.plugins.aleph.browser.o_enlist,new cljs.core.Keyword(null,"starter-items","starter-items",4786571380),(function (){return cljs.core.deref.call(null,lt.object.instances);
})], null));
lt.plugins.aleph.browser.t_enlist = (function t_enlist(ts){return cljs.core.map.call(null,(function (p1__10814_SHARP_){return cljs.core.PersistentHashMap.fromArrays.call(null,[new cljs.core.Keyword(null,"tag-key","tag-key",3758713118),new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"behaviors","behaviors",607554515)],[[cljs.core.str(cljs.core.key.call(null,p1__10814_SHARP_))].join(''),cljs.core.key.call(null,p1__10814_SHARP_),cljs.core.val.call(null,p1__10814_SHARP_)]);
}),ts);
});
lt.plugins.aleph.browser.t_itemize = (function t_itemize(){return (function (original,scored,highlighted,item){return [cljs.core.str("<h2>"),cljs.core.str(highlighted),cljs.core.str("</h2><p>"),cljs.core.str(new cljs.core.Keyword(null,"behaviors","behaviors",607554515).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str("</p>")].join('');
});
});
lt.plugins.aleph.browser.t_list = lt.plugins.aleph.selector.selector.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"items","items",1114430258),(function (){return lt.plugins.aleph.browser.t_enlist.call(null,cljs.core.deref.call(null,lt.object.tags));
}),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"tag-key","tag-key",3758713118),new cljs.core.Keyword(null,"transform","transform",2066570974),lt.plugins.aleph.browser.t_itemize.call(null),new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Tag",new cljs.core.Keyword(null,"relate-by","relate-by",1006071485),new cljs.core.Keyword(null,"tag","tag",1014018828),new cljs.core.Keyword(null,"enlist-with","enlist-with",2793597310),lt.plugins.aleph.browser.t_enlist,new cljs.core.Keyword(null,"starter-items","starter-items",4786571380),(function (){return cljs.core.deref.call(null,lt.object.tags);
})], null));
lt.plugins.aleph.browser.__BEH__propagate_BANG_ = (function __BEH__propagate_BANG_(this$,force_QMARK_){var tail = new cljs.core.Keyword(null,"element","element",3646034542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var obs = new cljs.core.Keyword(null,"observing","observing",3230796363).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var targets = cljs.core.vals.call(null,cljs.core.dissoc.call(null,lt.plugins.aleph.browser.subspaces,tail));var selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_((function (){var or__8666__auto__ = force_QMARK_;if(cljs.core.truth_(or__8666__auto__))
{return or__8666__auto__;
} else
{return cljs.core.seq.call(null,lt.objs.sidebar.command.input_val.call(null,selector));
}
})()))
{var seq__10823 = cljs.core.seq.call(null,targets);var chunk__10824 = null;var count__10825 = 0;var i__10826 = 0;while(true){
if((i__10826 < count__10825))
{var aleph_sub = cljs.core._nth.call(null,chunk__10824,i__10826);lt.object.raise.call(null,aleph_sub,new cljs.core.Keyword(null,"relate","relate",4374217419),tail,obs);
{
var G__10850 = seq__10823;
var G__10851 = chunk__10824;
var G__10852 = count__10825;
var G__10853 = (i__10826 + 1);
seq__10823 = G__10850;
chunk__10824 = G__10851;
count__10825 = G__10852;
i__10826 = G__10853;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10823);if(temp__4092__auto__)
{var seq__10823__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10823__$1))
{var c__9414__auto__ = cljs.core.chunk_first.call(null,seq__10823__$1);{
var G__10854 = cljs.core.chunk_rest.call(null,seq__10823__$1);
var G__10855 = c__9414__auto__;
var G__10856 = cljs.core.count.call(null,c__9414__auto__);
var G__10857 = 0;
seq__10823 = G__10854;
chunk__10824 = G__10855;
count__10825 = G__10856;
i__10826 = G__10857;
continue;
}
} else
{var aleph_sub = cljs.core.first.call(null,seq__10823__$1);lt.object.raise.call(null,aleph_sub,new cljs.core.Keyword(null,"relate","relate",4374217419),tail,obs);
{
var G__10858 = cljs.core.next.call(null,seq__10823__$1);
var G__10859 = null;
var G__10860 = 0;
var G__10861 = 0;
seq__10823 = G__10858;
chunk__10824 = G__10859;
count__10825 = G__10860;
i__10826 = G__10861;
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
{var seq__10827 = cljs.core.seq.call(null,cljs.core.vals.call(null,lt.plugins.aleph.browser.subspaces));var chunk__10828 = null;var count__10829 = 0;var i__10830 = 0;while(true){
if((i__10830 < count__10829))
{var aleph_sub = cljs.core._nth.call(null,chunk__10828,i__10830);lt.object.raise.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aleph_sub)),new cljs.core.Keyword(null,"reset!","reset!",4374429732));
{
var G__10862 = seq__10827;
var G__10863 = chunk__10828;
var G__10864 = count__10829;
var G__10865 = (i__10830 + 1);
seq__10827 = G__10862;
chunk__10828 = G__10863;
count__10829 = G__10864;
i__10830 = G__10865;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10827);if(temp__4092__auto__)
{var seq__10827__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10827__$1))
{var c__9414__auto__ = cljs.core.chunk_first.call(null,seq__10827__$1);{
var G__10866 = cljs.core.chunk_rest.call(null,seq__10827__$1);
var G__10867 = c__9414__auto__;
var G__10868 = cljs.core.count.call(null,c__9414__auto__);
var G__10869 = 0;
seq__10827 = G__10866;
chunk__10828 = G__10867;
count__10829 = G__10868;
i__10830 = G__10869;
continue;
}
} else
{var aleph_sub = cljs.core.first.call(null,seq__10827__$1);lt.object.raise.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,aleph_sub)),new cljs.core.Keyword(null,"reset!","reset!",4374429732));
{
var G__10870 = cljs.core.next.call(null,seq__10827__$1);
var G__10871 = null;
var G__10872 = 0;
var G__10873 = 0;
seq__10827 = G__10870;
chunk__10828 = G__10871;
count__10829 = G__10872;
i__10830 = G__10873;
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
lt.plugins.aleph.browser.__BEH__relate = (function __BEH__relate(this$,tail,obs){var selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var items = new cljs.core.Keyword(null,"items","items",1114430258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selector));var enlist = new cljs.core.Keyword(null,"enlist-with","enlist-with",2793597310).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selector));var head = new cljs.core.Keyword(null,"element","element",3646034542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var related = lt.plugins.aleph.bot.relate.call(null,obs,tail,head);lt.object.merge_BANG_.call(null,selector,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1114430258),enlist.call(null,related)], null));
return lt.object.raise.call(null,selector,new cljs.core.Keyword(null,"re-list","re-list",2046533482));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","relate","lt.plugins.aleph.browser/relate",3971706969),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.browser.__BEH__relate,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"relate","relate",4374217419),null], null), null));
lt.plugins.aleph.browser.refresh_BANG_ = (function refresh_BANG_(){var seq__10835 = cljs.core.seq.call(null,cljs.core.vals.call(null,lt.plugins.aleph.browser.subspaces));var chunk__10836 = null;var count__10837 = 0;var i__10838 = 0;while(true){
if((i__10838 < count__10837))
{var sub = cljs.core._nth.call(null,chunk__10836,i__10838);lt.object.raise.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sub)),new cljs.core.Keyword(null,"reset!","reset!",4374429732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",1014012659),"every"], null));
{
var G__10874 = seq__10835;
var G__10875 = chunk__10836;
var G__10876 = count__10837;
var G__10877 = (i__10838 + 1);
seq__10835 = G__10874;
chunk__10836 = G__10875;
count__10837 = G__10876;
i__10838 = G__10877;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10835);if(temp__4092__auto__)
{var seq__10835__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10835__$1))
{var c__9414__auto__ = cljs.core.chunk_first.call(null,seq__10835__$1);{
var G__10878 = cljs.core.chunk_rest.call(null,seq__10835__$1);
var G__10879 = c__9414__auto__;
var G__10880 = cljs.core.count.call(null,c__9414__auto__);
var G__10881 = 0;
seq__10835 = G__10878;
chunk__10836 = G__10879;
count__10837 = G__10880;
i__10838 = G__10881;
continue;
}
} else
{var sub = cljs.core.first.call(null,seq__10835__$1);lt.object.raise.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,sub)),new cljs.core.Keyword(null,"reset!","reset!",4374429732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",1014012659),"every"], null));
{
var G__10882 = cljs.core.next.call(null,seq__10835__$1);
var G__10883 = null;
var G__10884 = 0;
var G__10885 = 0;
seq__10835 = G__10882;
chunk__10836 = G__10883;
count__10837 = G__10884;
i__10838 = G__10885;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","sub","lt.plugins.aleph.browser/sub",4650426176),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph.sub","aleph.sub",3776989910),null], null), null),new cljs.core.Keyword(null,"element","element",3646034542),null,new cljs.core.Keyword(null,"observing","observing",3230796363),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selector","selector",2205476689),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,opts){lt.object.merge_BANG_.call(null,this$,opts);
return lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"super","super",1123705581),this$], null));
}));
lt.plugins.aleph.browser.__GT_sub = (function __GT_sub(el,sel){return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","sub","lt.plugins.aleph.browser/sub",4650426176),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",3646034542),el,new cljs.core.Keyword(null,"selector","selector",2205476689),sel], null));
});
lt.plugins.aleph.browser.b_sub = lt.plugins.aleph.browser.__GT_sub.call(null,new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.aleph.browser.b_list);
lt.plugins.aleph.browser.o_sub = lt.plugins.aleph.browser.__GT_sub.call(null,new cljs.core.Keyword(null,"o","o",1013904353),lt.plugins.aleph.browser.o_list);
lt.plugins.aleph.browser.t_sub = lt.plugins.aleph.browser.__GT_sub.call(null,new cljs.core.Keyword(null,"t","t",1013904358),lt.plugins.aleph.browser.t_list);
lt.plugins.aleph.browser.subspaces = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"b","b",1013904340),lt.plugins.aleph.browser.b_sub,new cljs.core.Keyword(null,"o","o",1013904353),lt.plugins.aleph.browser.o_sub,new cljs.core.Keyword(null,"t","t",1013904358),lt.plugins.aleph.browser.t_sub], null);
lt.plugins.aleph.browser.__BEH__on_close = (function __BEH__on_close(this$){return lt.objs.tabs.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","on-close","lt.plugins.aleph.browser/on-close",1026934186),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.browser.__BEH__on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","browser","lt.plugins.aleph.browser/browser",674632792),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph.browser","aleph.browser",1755612606),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"Aleph",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.aleph-browser","div.aleph-browser",4444866114),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-row","div.flex-row",4121591349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#aleph-behaviors.aleph-filter","div#aleph-behaviors.aleph-filter",3799671359),lt.object.__GT_content.call(null,lt.plugins.aleph.browser.b_list)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#aleph-objects.aleph-filter","div#aleph-objects.aleph-filter",1406779308),lt.object.__GT_content.call(null,lt.plugins.aleph.browser.o_list)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#aleph-tags.aleph-filter","div#aleph-tags.aleph-filter",3092406733),lt.object.__GT_content.call(null,lt.plugins.aleph.browser.t_list)], null)], null)], null);
}));
lt.plugins.aleph.browser.browser = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.aleph.browser","browser","lt.plugins.aleph.browser/browser",674632792));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"aleph.browse","aleph.browse",2561850968),new cljs.core.Keyword(null,"desc","desc",1016984067),"Aleph: open browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.aleph.browser.browser);
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"aleph.browser.refresh","aleph.browser.refresh",1517034667),new cljs.core.Keyword(null,"desc","desc",1016984067),"Aleph: refresh browser",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.plugins.aleph.browser.refresh_BANG_.call(null);
})], null));
}
if(!lt.util.load.provided_QMARK_('clojure.data')) {
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
/**
* Internal helper for diff.
*/
clojure.data.atom_diff = (function atom_diff(a,b){if(cljs.core._EQ_.call(null,a,b))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
* Convert an associative-by-numeric-index collection into
* an equivalent vector, with nil for any missing keys
*/
clojure.data.vectorize = (function vectorize(m){if(cljs.core.seq.call(null,m))
{return cljs.core.reduce.call(null,(function (result,p__11140){var vec__11141 = p__11140;var k = cljs.core.nth.call(null,vec__11141,0,null);var v = cljs.core.nth.call(null,vec__11141,1,null);return cljs.core.assoc.call(null,result,k,v);
}),cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,m)),null)),m);
} else
{return null;
}
});
/**
* Diff associative things a and b, comparing only the key k.
*/
clojure.data.diff_associative_key = (function diff_associative_key(a,b,k){var va = cljs.core.get.call(null,a,k);var vb = cljs.core.get.call(null,b,k);var vec__11143 = clojure.data.diff.call(null,va,vb);var a_STAR_ = cljs.core.nth.call(null,vec__11143,0,null);var b_STAR_ = cljs.core.nth.call(null,vec__11143,1,null);var ab = cljs.core.nth.call(null,vec__11143,2,null);var in_a = cljs.core.contains_QMARK_.call(null,a,k);var in_b = cljs.core.contains_QMARK_.call(null,b,k);var same = (in_a) && (in_b) && ((!((ab == null))) || (((va == null)) && ((vb == null))));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((in_a) && ((!((a_STAR_ == null))) || (!(same))))?new cljs.core.PersistentArrayMap.fromArray([k,a_STAR_], true, false):null),(((in_b) && ((!((b_STAR_ == null))) || (!(same))))?new cljs.core.PersistentArrayMap.fromArray([k,b_STAR_], true, false):null),((same)?new cljs.core.PersistentArrayMap.fromArray([k,ab], true, false):null)], null);
});
/**
* Diff associative things a and b, comparing only keys in ks (if supplied).
*/
clojure.data.diff_associative = (function() {
var diff_associative = null;
var diff_associative__2 = (function (a,b){return diff_associative.call(null,a,b,clojure.set.union.call(null,cljs.core.keys.call(null,a),cljs.core.keys.call(null,b)));
});
var diff_associative__3 = (function (a,b,ks){return cljs.core.reduce.call(null,(function (diff1,diff2){return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.call(null,cljs.core.partial.call(null,clojure.data.diff_associative_key,a,b),ks));
});
diff_associative = function(a,b,ks){
switch(arguments.length){
case 2:
return diff_associative__2.call(this,a,b);
case 3:
return diff_associative__3.call(this,a,b,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
diff_associative.cljs$core$IFn$_invoke$arity$2 = diff_associative__2;
diff_associative.cljs$core$IFn$_invoke$arity$3 = diff_associative__3;
return diff_associative;
})()
;
clojure.data.diff_sequential = (function diff_sequential(a,b){return cljs.core.vec.call(null,cljs.core.map.call(null,clojure.data.vectorize,clojure.data.diff_associative.call(null,((cljs.core.vector_QMARK_.call(null,a))?a:cljs.core.vec.call(null,a)),((cljs.core.vector_QMARK_.call(null,b))?b:cljs.core.vec.call(null,b)),cljs.core.range.call(null,(function (){var x__8973__auto__ = cljs.core.count.call(null,a);var y__8974__auto__ = cljs.core.count.call(null,b);return ((x__8973__auto__ > y__8974__auto__) ? x__8973__auto__ : y__8974__auto__);
})()))));
});
clojure.data.diff_set = (function diff_set(a,b){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty.call(null,clojure.set.difference.call(null,a,b)),cljs.core.not_empty.call(null,clojure.set.difference.call(null,b,a)),cljs.core.not_empty.call(null,clojure.set.intersection.call(null,a,b))], null);
});
clojure.data.EqualityPartition = (function (){var obj11145 = {};return obj11145;
})();
clojure.data.equality_partition = (function equality_partition(x){if((function (){var and__8654__auto__ = x;if(and__8654__auto__)
{return x.clojure$data$EqualityPartition$equality_partition$arity$1;
} else
{return and__8654__auto__;
}
})())
{return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else
{var x__9293__auto__ = (((x == null))?null:x);return (function (){var or__8666__auto__ = (clojure.data.equality_partition[goog.typeOf(x__9293__auto__)]);if(or__8666__auto__)
{return or__8666__auto__;
} else
{var or__8666__auto____$1 = (clojure.data.equality_partition["_"]);if(or__8666__auto____$1)
{return or__8666__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"EqualityPartition.equality-partition",x);
}
}
})().call(null,x);
}
});
clojure.data.Diff = (function (){var obj11147 = {};return obj11147;
})();
clojure.data.diff_similar = (function diff_similar(a,b){if((function (){var and__8654__auto__ = a;if(and__8654__auto__)
{return a.clojure$data$Diff$diff_similar$arity$2;
} else
{return and__8654__auto__;
}
})())
{return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else
{var x__9293__auto__ = (((a == null))?null:a);return (function (){var or__8666__auto__ = (clojure.data.diff_similar[goog.typeOf(x__9293__auto__)]);if(or__8666__auto__)
{return or__8666__auto__;
} else
{var or__8666__auto____$1 = (clojure.data.diff_similar["_"]);if(or__8666__auto____$1)
{return or__8666__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Diff.diff-similar",a);
}
}
})().call(null,a,b);
}
});
(clojure.data.EqualityPartition["_"] = true);
(clojure.data.equality_partition["_"] = (function (x){if((function (){var G__11148 = x;if(G__11148)
{var bit__9316__auto__ = (G__11148.cljs$lang$protocol_mask$partition0$ & 1024);if((bit__9316__auto__) || (G__11148.cljs$core$IMap$))
{return true;
} else
{if((!G__11148.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__11148);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__11148);
}
})())
{return new cljs.core.Keyword(null,"map","map",1014012110);
} else
{if((function (){var G__11149 = x;if(G__11149)
{var bit__9316__auto__ = (G__11149.cljs$lang$protocol_mask$partition0$ & 4096);if((bit__9316__auto__) || (G__11149.cljs$core$ISet$))
{return true;
} else
{if((!G__11149.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__11149);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__11149);
}
})())
{return new cljs.core.Keyword(null,"set","set",1014018004);
} else
{if((function (){var G__11150 = x;if(G__11150)
{var bit__9316__auto__ = (G__11150.cljs$lang$protocol_mask$partition0$ & 16777216);if((bit__9316__auto__) || (G__11150.cljs$core$ISequential$))
{return true;
} else
{if((!G__11150.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__11150);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__11150);
}
})())
{return new cljs.core.Keyword(null,"sequential","sequential",849892465);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return new cljs.core.Keyword(null,"atom","atom",1016908995);
} else
{return null;
}
}
}
}
}));
(clojure.data.EqualityPartition["boolean"] = true);
(clojure.data.equality_partition["boolean"] = (function (x){return new cljs.core.Keyword(null,"atom","atom",1016908995);
}));
(clojure.data.EqualityPartition["function"] = true);
(clojure.data.equality_partition["function"] = (function (x){return new cljs.core.Keyword(null,"atom","atom",1016908995);
}));
(clojure.data.EqualityPartition["array"] = true);
(clojure.data.equality_partition["array"] = (function (x){return new cljs.core.Keyword(null,"sequential","sequential",849892465);
}));
(clojure.data.EqualityPartition["number"] = true);
(clojure.data.equality_partition["number"] = (function (x){return new cljs.core.Keyword(null,"atom","atom",1016908995);
}));
(clojure.data.EqualityPartition["string"] = true);
(clojure.data.equality_partition["string"] = (function (x){return new cljs.core.Keyword(null,"atom","atom",1016908995);
}));
(clojure.data.EqualityPartition["null"] = true);
(clojure.data.equality_partition["null"] = (function (x){return new cljs.core.Keyword(null,"atom","atom",1016908995);
}));
(clojure.data.Diff["_"] = true);
(clojure.data.diff_similar["_"] = (function (a,b){return (function (){var G__11151 = clojure.data.equality_partition.call(null,a);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"map","map",1014012110),G__11151))
{return clojure.data.diff_associative;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"sequential","sequential",849892465),G__11151))
{return clojure.data.diff_sequential;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"set","set",1014018004),G__11151))
{return clojure.data.diff_set;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"atom","atom",1016908995),G__11151))
{return clojure.data.atom_diff;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(clojure.data.equality_partition.call(null,a))].join('')));
} else
{return null;
}
}
}
}
}
})().call(null,a,b);
}));
(clojure.data.Diff["boolean"] = true);
(clojure.data.diff_similar["boolean"] = (function (a,b){return clojure.data.atom_diff.call(null,a,b);
}));
(clojure.data.Diff["function"] = true);
(clojure.data.diff_similar["function"] = (function (a,b){return clojure.data.atom_diff.call(null,a,b);
}));
(clojure.data.Diff["array"] = true);
(clojure.data.diff_similar["array"] = (function (a,b){return clojure.data.diff_sequential.call(null,a,b);
}));
(clojure.data.Diff["number"] = true);
(clojure.data.diff_similar["number"] = (function (a,b){return clojure.data.atom_diff.call(null,a,b);
}));
(clojure.data.Diff["string"] = true);
(clojure.data.diff_similar["string"] = (function (a,b){return clojure.data.atom_diff.call(null,a,b);
}));
(clojure.data.Diff["null"] = true);
(clojure.data.diff_similar["null"] = (function (a,b){return clojure.data.atom_diff.call(null,a,b);
}));
/**
* Recursively compares a and b, returning a tuple of
* [things-only-in-a things-only-in-b things-in-both].
* Comparison rules:
* 
* * For equal a and b, return [nil nil a].
* * Maps are subdiffed where keys match and values differ.
* * Sets are never subdiffed.
* * All sequential things are treated as associative collections
* by their indexes, with results returned as vectors.
* * Everything else (including strings!) is treated as
* an atom and compared for equality.
*/
clojure.data.diff = (function diff(a,b){if(cljs.core._EQ_.call(null,a,b))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else
{if(cljs.core._EQ_.call(null,clojure.data.equality_partition.call(null,a),clojure.data.equality_partition.call(null,b)))
{return clojure.data.diff_similar.call(null,a,b);
} else
{return clojure.data.atom_diff.call(null,a,b);
}
}
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.aleph.monitor')) {
goog.provide('lt.plugins.aleph.monitor');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.object');
goog.require('clojure.data');
lt.plugins.aleph.monitor.snap_counter = cljs.core.atom.call(null,0);
lt.plugins.aleph.monitor.enqueue = (function enqueue(buffer,coll,size){if(cljs.core._EQ_.call(null,size,cljs.core.count.call(null,buffer)))
{return cljs.core.conj.call(null,cljs.core.pop.call(null,buffer),coll);
} else
{return cljs.core.conj.call(null,buffer,coll);
}
});
lt.plugins.aleph.monitor.__BEH__dispatch_BANG_ = (function __BEH__dispatch_BANG_(this$,subject,data){var monitor = subject.call(null,new cljs.core.Keyword(null,"monitors","monitors",685105611).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));cljs.core.println.call(null,monitor);
if(cljs.core.truth_(monitor))
{return lt.object.raise.call(null,monitor,new cljs.core.Keyword(null,"log!","log!",1017231567),subject,data);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.monitor","dispatch!","lt.plugins.aleph.monitor/dispatch!",696447441),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.monitor.__BEH__dispatch_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch!","dispatch!",1251884633),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.monitor","aggregator","lt.plugins.aleph.monitor/aggregator",1409549111),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph.monitor-aggregator","aleph.monitor-aggregator",3183139818),null], null), null),new cljs.core.Keyword(null,"monitors","monitors",685105611),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return null;
}));
lt.plugins.aleph.monitor.monitor_aggregator = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.aleph.monitor","aggregator","lt.plugins.aleph.monitor/aggregator",1409549111));
lt.plugins.aleph.monitor.snap_name = (function snap_name(id){return cljs.core.keyword.call(null,[cljs.core.str("__ALEPH__snap"),cljs.core.str(id),cljs.core.str("-"),cljs.core.str((cljs.core.deref.call(null,lt.plugins.aleph.monitor.snap_counter) + 1))].join(''));
});
lt.plugins.aleph.monitor.snap_fn = (function snap_fn(snap_id){return (function() { 
var G__11135__delegate = function (this$,args){var t = performance.now();var state = cljs.core.deref.call(null,this$);var obj_id = new cljs.core.Keyword("lt.object","id","lt.object/id",706431105).cljs$core$IFn$_invoke$arity$1(state);return lt.object.raise.call(null,lt.plugins.aleph.monitor.monitor_aggregator,new cljs.core.Keyword(null,"dispatch!","dispatch!",1251884633),snap_id,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lt.object","id","lt.object/id",706431105),obj_id,new cljs.core.Keyword(null,"time","time",1017464383),t,new cljs.core.Keyword(null,"state","state",1123661827),state,new cljs.core.Keyword(null,"args","args",1016906831),args], null));
};
var G__11135 = function (this$,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__11135__delegate.call(this,this$,args);};
G__11135.cljs$lang$maxFixedArity = 1;
G__11135.cljs$lang$applyTo = (function (arglist__11136){
var this$ = cljs.core.first(arglist__11136);
var args = cljs.core.rest(arglist__11136);
return G__11135__delegate(this$,args);
});
G__11135.cljs$core$IFn$_invoke$arity$variadic = G__11135__delegate;
return G__11135;
})()
;
});
lt.plugins.aleph.monitor.snap_behavior = (function snap_behavior(subject){var snap_id = lt.plugins.aleph.monitor.snap_name.call(null,subject);return lt.object.behavior_STAR_.call(null,snap_id,new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.monitor.snap_fn.call(null,snap_id));
});
lt.plugins.aleph.monitor.__BEH__log_BANG_ = (function __BEH__log_BANG_(this$,subject,data){var size = new cljs.core.Keyword(null,"history-size","history-size",3300576524).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",1940838406),subject], null),((function (size){
return (function (p1__11118_SHARP_){return lt.plugins.aleph.monitor.enqueue.call(null,p1__11118_SHARP_,data,size);
});})(size))
);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.monitor","log!","lt.plugins.aleph.monitor/log!",2541779259),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.monitor.__BEH__log_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"log!","log!",1017231567),null], null), null));
/**
* @param {...*} var_args
*/
lt.plugins.aleph.monitor.wrap_with = (function() { 
var wrap_with__delegate = function (vect,k1,p__11120){var vec__11122 = p__11120;var k2 = cljs.core.nth.call(null,vec__11122,0,null);if(cljs.core.truth_(k2))
{return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (vec__11122,k2){
return (function (p1__11119_SHARP_){if(cljs.core.keyword_identical_QMARK_.call(null,k2,p1__11119_SHARP_))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,p1__11119_SHARP_,k1], null);
} else
{return p1__11119_SHARP_;
}
});})(vec__11122,k2))
,vect)));
} else
{return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1], null),cljs.core.conj.call(null,vect,k1)));
}
};
var wrap_with = function (vect,k1,var_args){
var p__11120 = null;if (arguments.length > 2) {
  p__11120 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return wrap_with__delegate.call(this,vect,k1,p__11120);};
wrap_with.cljs$lang$maxFixedArity = 2;
wrap_with.cljs$lang$applyTo = (function (arglist__11137){
var vect = cljs.core.first(arglist__11137);
arglist__11137 = cljs.core.next(arglist__11137);
var k1 = cljs.core.first(arglist__11137);
var p__11120 = cljs.core.rest(arglist__11137);
return wrap_with__delegate(vect,k1,p__11120);
});
wrap_with.cljs$core$IFn$_invoke$arity$variadic = wrap_with__delegate;
return wrap_with;
})()
;
lt.plugins.aleph.monitor.__BEH__inject_BANG_ = (function __BEH__inject_BANG_(this$,opts){var obj = new cljs.core.Keyword(null,"object","object",4285503153).cljs$core$IFn$_invoke$arity$1(opts);var trig = new cljs.core.Keyword(null,"trigger","trigger",4248979754).cljs$core$IFn$_invoke$arity$1(opts);var beh = new cljs.core.Keyword(null,"behavior","behavior",2524816836).cljs$core$IFn$_invoke$arity$1(opts);var snap_id = lt.plugins.aleph.monitor.snap_name.call(null,(function (){var or__8666__auto__ = beh;if(cljs.core.truth_(or__8666__auto__))
{return or__8666__auto__;
} else
{return trig;
}
})());lt.plugins.aleph.monitor.snap_behavior.call(null,(function (){var or__8666__auto__ = beh;if(cljs.core.truth_(or__8666__auto__))
{return or__8666__auto__;
} else
{return trig;
}
})());
if(cljs.core.truth_(beh))
{lt.object.update_BANG_.call(null,obj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",4090152369),trig], null),((function (obj,trig,beh,snap_id){
return (function (p1__11123_SHARP_){return lt.plugins.aleph.monitor.wrap_with.call(null,p1__11123_SHARP_,snap_id,beh);
});})(obj,trig,beh,snap_id))
);
} else
{lt.object.update_BANG_.call(null,obj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",4090152369),trig], null),((function (obj,trig,beh,snap_id){
return (function (p1__11124_SHARP_){return lt.plugins.aleph.monitor.wrap_with.call(null,p1__11124_SHARP_,snap_id);
});})(obj,trig,beh,snap_id))
);
}
lt.object.assoc_in_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",1940838406),snap_id], null),cljs.core.PersistentQueue.EMPTY);
return lt.object.assoc_in_BANG_.call(null,lt.plugins.aleph.monitor.monitor_aggregator,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monitors","monitors",685105611),snap_id], null),this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.monitor","inject!","lt.plugins.aleph.monitor/inject!",4353307658),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.aleph.monitor.__BEH__inject_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inject!","inject!",2962717730),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.aleph.monitor","monitor","lt.plugins.aleph.monitor/monitor",3993108808),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aleph.monitor","aleph.monitor",2840991728),null], null), null),new cljs.core.Keyword(null,"history","history",1940838406),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"history-size","history-size",3300576524),128,new cljs.core.Keyword(null,"subjects","subjects",3239003193),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,opts){return lt.object.merge_BANG_.call(null,this$,opts);
}));
lt.plugins.aleph.monitor.test_monitor = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.aleph.monitor","monitor","lt.plugins.aleph.monitor/monitor",3993108808));
}

//# sourceMappingURL=aleph_compiled.js.map