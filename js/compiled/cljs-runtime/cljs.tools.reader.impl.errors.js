goog.provide('cljs.tools.reader.impl.errors');
cljs.tools.reader.impl.errors.ex_details = (function cljs$tools$reader$impl$errors$ex_details(rdr,ex_type){
var details = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"ex-kind","ex-kind",1581199296),ex_type], null);
if(cljs.tools.reader.reader_types.indexing_reader_QMARK_(rdr)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(details,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.tools.reader.reader_types.get_file_name(rdr),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number(rdr),new cljs.core.Keyword(null,"col","col",-1959363084),cljs.tools.reader.reader_types.get_column_number(rdr)], 0));
} else {
return details;
}
});
/**
 * Throw an ex-info error.
 */
cljs.tools.reader.impl.errors.throw_ex = (function cljs$tools$reader$impl$errors$throw_ex(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50333 = arguments.length;
var i__4737__auto___50334 = (0);
while(true){
if((i__4737__auto___50334 < len__4736__auto___50333)){
args__4742__auto__.push((arguments[i__4737__auto___50334]));

var G__50337 = (i__4737__auto___50334 + (1));
i__4737__auto___50334 = G__50337;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,ex_type,msg){
var details = cljs.tools.reader.impl.errors.ex_details(rdr,ex_type);
var file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(details);
var line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(details);
var col = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(details);
var msg1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)," "].join(''):null);
var msg2 = (cljs.core.truth_(line)?["[line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", col ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''):null);
var msg3 = (cljs.core.truth_((function (){var or__4126__auto__ = msg1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return msg2;
}
})())?" ":null);
var full_msg = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg1,msg2,msg3,msg);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(full_msg,details);
}));

(cljs.tools.reader.impl.errors.throw_ex.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.tools.reader.impl.errors.throw_ex.cljs$lang$applyTo = (function (seq49967){
var G__49968 = cljs.core.first(seq49967);
var seq49967__$1 = cljs.core.next(seq49967);
var G__49969 = cljs.core.first(seq49967__$1);
var seq49967__$2 = cljs.core.next(seq49967__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49968,G__49969,seq49967__$2);
}));

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.reader_error = (function cljs$tools$reader$impl$errors$reader_error(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50341 = arguments.length;
var i__4737__auto___50342 = (0);
while(true){
if((i__4737__auto___50342 < len__4736__auto___50341)){
args__4742__auto__.push((arguments[i__4737__auto___50342]));

var G__50344 = (i__4737__auto___50342 + (1));
i__4737__auto___50342 = G__50344;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(rdr,new cljs.core.Keyword(null,"reader-error","reader-error",1610253121),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msgs)], 0));
}));

(cljs.tools.reader.impl.errors.reader_error.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.tools.reader.impl.errors.reader_error.cljs$lang$applyTo = (function (seq50013){
var G__50014 = cljs.core.first(seq50013);
var seq50013__$1 = cljs.core.next(seq50013);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50014,seq50013__$1);
}));

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.illegal_arg_error = (function cljs$tools$reader$impl$errors$illegal_arg_error(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50348 = arguments.length;
var i__4737__auto___50350 = (0);
while(true){
if((i__4737__auto___50350 < len__4736__auto___50348)){
args__4742__auto__.push((arguments[i__4737__auto___50350]));

var G__50351 = (i__4737__auto___50350 + (1));
i__4737__auto___50350 = G__50351;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(rdr,new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msgs)], 0));
}));

(cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$applyTo = (function (seq50037){
var G__50038 = cljs.core.first(seq50037);
var seq50037__$1 = cljs.core.next(seq50037);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50038,seq50037__$1);
}));

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.eof_error = (function cljs$tools$reader$impl$errors$eof_error(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50358 = arguments.length;
var i__4737__auto___50359 = (0);
while(true){
if((i__4737__auto___50359 < len__4736__auto___50358)){
args__4742__auto__.push((arguments[i__4737__auto___50359]));

var G__50361 = (i__4737__auto___50359 + (1));
i__4737__auto___50359 = G__50361;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic(rdr,new cljs.core.Keyword(null,"eof","eof",-489063237),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msgs)], 0));
}));

(cljs.tools.reader.impl.errors.eof_error.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.tools.reader.impl.errors.eof_error.cljs$lang$applyTo = (function (seq50048){
var G__50049 = cljs.core.first(seq50048);
var seq50048__$1 = cljs.core.next(seq50048);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50049,seq50048__$1);
}));

cljs.tools.reader.impl.errors.throw_eof_delimited = (function cljs$tools$reader$impl$errors$throw_eof_delimited(var_args){
var G__50085 = arguments.length;
switch (G__50085) {
case 4:
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4 = (function (rdr,kind,column,line){
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5(rdr,kind,line,column,null);
}));

(cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5 = (function (rdr,kind,line,column,n){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading ",(cljs.core.truth_(n)?["item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," of "].join(''):null),cljs.core.name(kind),(cljs.core.truth_(line)?[", starting at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," and column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):null),"."], 0));
}));

(cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$lang$maxFixedArity = 5);

cljs.tools.reader.impl.errors.throw_odd_map = (function cljs$tools$reader$impl$errors$throw_odd_map(rdr,line,col,elements){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["The map literal starting with ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(cljs.core.first(elements)),(cljs.core.truth_(line)?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''):null)," contains ",cljs.core.count(elements)," form(s). Map literals must contain an even number of forms."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_number = (function cljs$tools$reader$impl$errors$throw_invalid_number(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid number: ",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_literal = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_literal(rdr,token){
throw cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode literal: \\",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_escape = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_escape(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode escape: \\u",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid = (function cljs$tools$reader$impl$errors$throw_invalid(rdr,kind,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid ",cljs.core.name(kind),": ",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_at_start = (function cljs$tools$reader$impl$errors$throw_eof_at_start(rdr,kind){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading start of ",cljs.core.name(kind),"."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_char = (function cljs$tools$reader$impl$errors$throw_bad_char(rdr,kind,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid character: ",ch," found while reading ",cljs.core.name(kind),"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_at_dispatch = (function cljs$tools$reader$impl$errors$throw_eof_at_dispatch(rdr){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading dispatch character."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_dispatch = (function cljs$tools$reader$impl$errors$throw_bad_dispatch(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No dispatch macro for ",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_unmatch_delimiter = (function cljs$tools$reader$impl$errors$throw_unmatch_delimiter(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unmatched delimiter ",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_reading = (function cljs$tools$reader$impl$errors$throw_eof_reading(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50396 = arguments.length;
var i__4737__auto___50398 = (0);
while(true){
if((i__4737__auto___50398 < len__4736__auto___50396)){
args__4742__auto__.push((arguments[i__4737__auto___50398]));

var G__50399 = (i__4737__auto___50398 + (1));
i__4737__auto___50398 = G__50399;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,kind,start){
var init = (function (){var G__50188 = kind;
var G__50188__$1 = (((G__50188 instanceof cljs.core.Keyword))?G__50188.fqn:null);
switch (G__50188__$1) {
case "regex":
return "#\"";

break;
case "string":
return "\"";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50188__$1)].join('')));

}
})();
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF reading ",cljs.core.name(kind)," starting ",cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,init,start),"."], 0));
}));

(cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$applyTo = (function (seq50160){
var G__50161 = cljs.core.first(seq50160);
var seq50160__$1 = cljs.core.next(seq50160);
var G__50162 = cljs.core.first(seq50160__$1);
var seq50160__$2 = cljs.core.next(seq50160__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50161,G__50162,seq50160__$2);
}));

cljs.tools.reader.impl.errors.throw_no_dispatch = (function cljs$tools$reader$impl$errors$throw_no_dispatch(rdr,ch){
return cljs.tools.reader.impl.errors.throw_bad_dispatch(rdr,ch);
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_char = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_char(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode character \\",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_digit_in_token(rdr,ch,token){
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid digit ",ch," in unicode character \\",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_digit(rdr,ch){
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid digit ",ch," in unicode character."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_len = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_len(rdr,actual,expected){
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid unicode literal. Unicode literals should be ",expected,"characters long.  ","value suppled is ",actual,"characters long."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_character_literal = (function cljs$tools$reader$impl$errors$throw_invalid_character_literal(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid character literal \\u",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_invalid_octal_len = (function cljs$tools$reader$impl$errors$throw_invalid_octal_len(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid octal escape sequence in a character literal:",token,". Octal escape sequences must be 3 or fewer digits."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_octal_number = (function cljs$tools$reader$impl$errors$throw_bad_octal_number(rdr){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Octal escape sequence must be in range [0, 377]."], 0));
});
cljs.tools.reader.impl.errors.throw_unsupported_character = (function cljs$tools$reader$impl$errors$throw_unsupported_character(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unsupported character: ",token,"."], 0));
});
cljs.tools.reader.impl.errors.throw_eof_in_character = (function cljs$tools$reader$impl$errors$throw_eof_in_character(rdr){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unexpected EOF while reading character."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_escape_char = (function cljs$tools$reader$impl$errors$throw_bad_escape_char(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unsupported escape character: \\",ch,"."], 0));
});
cljs.tools.reader.impl.errors.throw_single_colon = (function cljs$tools$reader$impl$errors$throw_single_colon(rdr){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["A single colon is not a valid keyword."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_metadata = (function cljs$tools$reader$impl$errors$throw_bad_metadata(rdr,x){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Metadata cannot be ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(x),". Metadata must be a Symbol, Keyword, String or Map."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_metadata_target = (function cljs$tools$reader$impl$errors$throw_bad_metadata_target(rdr,target){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Metadata can not be applied to ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(target),". ","Metadata can only be applied to IMetas."], 0));
});
cljs.tools.reader.impl.errors.throw_feature_not_keyword = (function cljs$tools$reader$impl$errors$throw_feature_not_keyword(rdr,feature){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Feature cannot be ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(feature)," Features must be keywords."], 0));
});
cljs.tools.reader.impl.errors.throw_ns_map_no_map = (function cljs$tools$reader$impl$errors$throw_ns_map_no_map(rdr,ns_name){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespaced map with namespace ",ns_name," does not specify a map."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_ns = (function cljs$tools$reader$impl$errors$throw_bad_ns(rdr,ns_name){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid value used as namespace in namespaced map: ",ns_name,"."], 0));
});
cljs.tools.reader.impl.errors.throw_bad_reader_tag = (function cljs$tools$reader$impl$errors$throw_bad_reader_tag(rdr,tag){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid reader tag: ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(tag),". Reader tags must be symbols."], 0));
});
cljs.tools.reader.impl.errors.throw_unknown_reader_tag = (function cljs$tools$reader$impl$errors$throw_unknown_reader_tag(rdr,tag){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["No reader function for tag ",cljs.tools.reader.impl.inspect.inspect.cljs$core$IFn$_invoke$arity$1(tag),"."], 0));
});
cljs.tools.reader.impl.errors.duplicate_keys_error = (function cljs$tools$reader$impl$errors$duplicate_keys_error(msg,coll){
var duplicates = (function cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates(seq){
var iter__4529__auto__ = (function cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__50278(s__50279){
return (new cljs.core.LazySeq(null,(function (){
var s__50279__$1 = s__50279;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50279__$1);
if(temp__5735__auto__){
var s__50279__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50279__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50279__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50281 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50280 = (0);
while(true){
if((i__50280 < size__4528__auto__)){
var vec__50287 = cljs.core._nth(c__4527__auto__,i__50280);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50287,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50287,(1),null);
if((freq > (1))){
cljs.core.chunk_append(b__50281,id);

var G__50436 = (i__50280 + (1));
i__50280 = G__50436;
continue;
} else {
var G__50437 = (i__50280 + (1));
i__50280 = G__50437;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50281),cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__50278(cljs.core.chunk_rest(s__50279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50281),null);
}
} else {
var vec__50291 = cljs.core.first(s__50279__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50291,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50291,(1),null);
if((freq > (1))){
return cljs.core.cons(id,cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__50278(cljs.core.rest(s__50279__$2)));
} else {
var G__50448 = cljs.core.rest(s__50279__$2);
s__50279__$1 = G__50448;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.frequencies(seq));
});
var dups = duplicates(coll);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,msg,(((cljs.core.count(dups) > (1)))?"s":null),": ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",dups));
});
cljs.tools.reader.impl.errors.throw_dup_keys = (function cljs$tools$reader$impl$errors$throw_dup_keys(rdr,kind,ks){
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.tools.reader.impl.errors.duplicate_keys_error([clojure.string.capitalize(cljs.core.name(kind))," literal contains duplicate key"].join(''),ks)], 0));
});
cljs.tools.reader.impl.errors.throw_eof_error = (function cljs$tools$reader$impl$errors$throw_eof_error(rdr,line){
if(cljs.core.truth_(line)){
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["EOF while reading, starting at line ",line,"."], 0));
} else {
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic(rdr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["EOF while reading."], 0));
}
});

//# sourceMappingURL=cljs.tools.reader.impl.errors.js.map
