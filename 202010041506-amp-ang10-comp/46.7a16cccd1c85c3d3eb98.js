(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"30K8":function(t,e,r){"use strict";r.r(e),r.d(e,"scopeCss",(function(){return k}));var n=r("KQm4"),c="-shadowcsshost",o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",s=new RegExp("(-shadowcsshost"+o,"gim"),a=new RegExp("(-shadowcsscontext"+o,"gim"),i=new RegExp("(-shadowcssslotted"+o,"gim"),u="-shadowcsshost-no-combinator",l=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],p=/-shadowcsshost/gim,f=/:host/gim,g=/::slotted/gim,d=/:host-context/gim,m=/\/\*\s*[\s\S]*?\*\//g,v=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,w=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,x=/([{}])/g,_="%BLOCK%",b=function(t,e){var r=S(t),n=0;return r.escapedString.replace(w,(function(){var t=arguments.length<=2?void 0:arguments[2],c="",o=arguments.length<=4?void 0:arguments[4],s="";o&&o.startsWith("{%BLOCK%")&&(c=r.blocks[n++],o=o.substring(_.length+1),s="{");var a={selector:t,content:c},i=e(a);return"".concat(arguments.length<=1?void 0:arguments[1]).concat(i.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(s).concat(i.content).concat(o)}))},S=function(t){for(var e=t.split(x),r=[],n=[],c=0,o=[],s=0;s<e.length;s++){var a=e[s];"}"===a&&c--,c>0?o.push(a):(o.length>0&&(n.push(o.join("")),r.push(_),o=[]),r.push(a)),"{"===a&&c++}return o.length>0&&(n.push(o.join("")),r.push(_)),{escapedString:r.join(""),blocks:n}},O=function(t,e,r){return t.replace(e,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(e[2]){for(var c=e[2].split(","),o=[],s=0;s<c.length;s++){var a=c[s].trim();if(!a)break;o.push(r(u,a,e[3]))}return o.join(",")}return u+e[3]}))},W=function(t,e,r){return t+e.replace(c,"")+r},j=function(t,e,r){return e.indexOf(c)>-1?W(t,e,r):t+e+r+", "+e+" "+t+r},k=function(t,e,r){var o=e+"-h",w=e+"-s",x=t.match(v)||[];t=t.replace(m,"");var _=[];if(r){var S=function(t){var e="/*!@___".concat(_.length,"___*/"),r="/*!@".concat(t.selector,"*/");return _.push({placeholder:e,comment:r}),t.selector=e+t.selector,t};t=b(t,(function(t){return"@"!==t.selector[0]?S(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=b(t.content,S),t):t}))}var k=function(t,e,r,n,o){var m=function(t,e){var r="."+e+" > ",n=[];return t=t.replace(i,(function(){for(var t=arguments.length,e=new Array(t),c=0;c<t;c++)e[c]=arguments[c];if(e[2]){for(var o=e[2].trim(),s=r+o+e[3],a="",i=e[4]-1;i>=0;i--){var l=e[5][i];if("}"===l||","===l)break;a=l+a}var h=a+s,p="".concat(a.trimRight()).concat(s.trim());if(h.trim()!==p.trim()){var f="".concat(p,", ").concat(h);n.push({orgSelector:h,updatedSelector:f})}return s}return u+e[3]})),{selectors:n,cssText:t}}(t=function(t){return O(t,a,j)}(t=function(t){return O(t,s,W)}(t=t.replace(d,"-shadowcsscontext").replace(f,c).replace(g,"-shadowcssslotted"))),n);return t=function(t){return h.reduce((function(t,e){return t.replace(e," ")}),t)}(t=m.cssText),e&&(t=function t(e,r,n,c,o){return b(e,(function(e){var o=e.selector,s=e.content;return"@"!==e.selector[0]?o=function(t,e,r,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():function(t,e){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e).test(t)}(t,e)?function(t,e,r){for(var n,c="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}))),o=function(t){var n=t.trim();if(!n)return"";if(t.indexOf(u)>-1)n=function(t,e,r){if(p.lastIndex=0,p.test(t)){var n=".".concat(r);return t.replace(l,(function(t,e){return e.replace(/([^:]*)(:*)(.*)/,(function(t,e,r,c){return e+n+r+c}))})).replace(p,n+" ")}return e+" "+t}(t,e,r);else{var o=t.replace(p,"");if(o.length>0){var s=o.match(/([^:]*)(:*)(.*)/);s&&(n=s[1]+c+s[2]+s[3])}}return n},s=function(t){var e=[],r=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var c="__ph-".concat(r,"__");return e.push(n),r++,c}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,c){var o="__ph-".concat(r,"__");return e.push(c),r++,n+o})),placeholders:e}}(t),a="",i=0,h=/( |>|\+|~(?!=))\s*/g,f=!((t=s.content).indexOf(u)>-1);null!==(n=h.exec(t));){var g=n[1],d=t.slice(i,n.index).trim(),m=(f=f||d.indexOf(u)>-1)?o(d):d;a+="".concat(m," ").concat(g," "),i=h.lastIndex}var v,w=t.substring(i);return a+=(f=f||w.indexOf(u)>-1)?o(w):w,v=s.placeholders,a.replace(/__ph-(\d+)__/g,(function(t,e){return v[+e]}))}(t,e,r).trim():t.trim()})).join(", ")}(e.selector,r,n,c):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(s=t(e.content,r,n,c)),{selector:o.replace(/\s{2,}/g," ").trim(),content:s}}))}(t,e,r,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(r))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:m.selectors}}(t,e,o,w);return t=[k.cssText].concat(Object(n.a)(x)).join("\n"),r&&_.forEach((function(e){t=t.replace(e.placeholder,e.comment)})),k.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);