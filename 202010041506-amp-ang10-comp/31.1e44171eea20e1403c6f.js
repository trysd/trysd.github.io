(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{mwoW:function(t,e,n){"use strict";n.r(e),n.d(e,"amplify_s3_image",(function(){return l}));var r=n("o0o1"),i=n.n(r),a=n("HaE+"),c=n("1OyB"),s=n("vuIU"),h=n("bRKV"),o=n("Nt7R"),u=n("H8iN"),d=(n("/vcS"),n("l1VB"),n("Yn1A")),p=new o.a("S3Image"),l=function(){function t(e){Object(c.a)(this,t),Object(h.k)(this,e),this.contentType="binary/octet-stream",this.level=u.a.Public}var e,n,r;return Object(s.a)(t,[{key:"watchHandler",value:(r=Object(a.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"componentWillLoad",value:(n=Object(a.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"load",value:(e=Object(a.a)(i.a.mark((function t(){var e,n,r,a,c,s,h,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.path,r=this.body,a=this.contentType,c=this.level,s=this.track,h=this.identityId,(e=this.imgKey)||n){t.next=4;break}return p.debug("empty imgKey and path"),t.abrupt("return");case 4:if(p.debug("loading "+(o=e||n)+"..."),t.prev=6,!r){t.next=10;break}return t.next=10,Object(d.e)(e,r,c,s,a,p);case 10:return t.next=12,Object(d.c)(o,c,s,h,p);case 12:this.src=t.sent,t.next=19;break;case 15:throw t.prev=15,t.t0=t.catch(6),p.debug(t.t0),new Error(t.t0);case 19:case"end":return t.stop()}}),t,this,[[6,15]])}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){return Object(h.i)(h.b,null,this.src&&Object(h.i)("img",{src:this.src,onLoad:this.handleOnLoad,onError:this.handleOnError}))}}],[{key:"watchers",get:function(){return{body:["watchHandler"]}}}]),t}();l.style=":host{height:inherit;width:inherit;--height:inherit;--width:inherit}img{height:var(--height);width:var(--width)}"}}]);