(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/vcS":function(e,n,t){"use strict";t.d(n,"a",(function(){return w})),t.d(n,"b",(function(){return s})),t.d(n,"c",(function(){return o})),t.d(n,"d",(function(){return p})),t.d(n,"e",(function(){return m})),t.d(n,"f",(function(){return f})),t.d(n,"g",(function(){return y})),t.d(n,"h",(function(){return x})),t.d(n,"i",(function(){return O})),t.d(n,"j",(function(){return S})),t.d(n,"k",(function(){return a})),t.d(n,"l",(function(){return d})),t.d(n,"m",(function(){return g})),t.d(n,"n",(function(){return h})),t.d(n,"o",(function(){return b})),t.d(n,"p",(function(){return j})),t.d(n,"q",(function(){return l})),t.d(n,"r",(function(){return v})),t.d(n,"s",(function(){return c})),t.d(n,"t",(function(){return i})),t.d(n,"u",(function(){return u})),t.d(n,"v",(function(){return r}));var r="username",o="email",i="code",a="phone",u="password",s="country-dial-code-select",l="+1",c="amplify-auth-source",f="amplify-redirected-from-hosted-ui",d="amplify-authenticator-authState",m="Phone number can not be empty",p="No Auth module found, please ensure @aws-amplify/auth is imported",h="No Storage module found, please ensure @aws-amplify/storage is imported",g="No Interactions module found, please ensure @aws-amplify/interactions is imported",y="SETUP_TOTP",b="User has not set up software token mfa",j="User has not verified software token mfa",v="SUCCESS",w="auth",O="UI Auth",x="ToastAuthError",S="AuthStateChange"},"2uVw":function(e,n,t){"use strict";t.r(n),t.d(n,"amplify_greetings",(function(){return u}));var r=t("1OyB"),o=t("vuIU"),i=t("bRKV"),a=(t("s1tr"),t("c82j"),t("/vcS"),t("MFbZ")),u=function(){function e(n){Object(r.a)(this,e),Object(i.k)(this,n),this.username=null,this.logo=null,this.handleAuthStateChange=a.d}return Object(o.a)(e,[{key:"render",value:function(){return Object(i.i)("header",{class:"greetings"},Object(i.i)("span",{class:"logo"},Object(i.i)("slot",{name:"logo"},this.logo&&Object(i.i)("span",null,this.logo))),Object(i.i)("span",{class:"nav"},Object(i.i)("slot",{name:"nav"},Object(i.i)("amplify-nav",null,this.username&&Object(i.i)("slot",{name:"greetings-message"},Object(i.i)("span",null,"Hello, ",this.username)),Object(i.i)("amplify-sign-out",{handleAuthStateChange:this.handleAuthStateChange})))))}}]),e}();u.style=":host{--background-color:var(--amplify-white);--border-color:var(--amplify-light-grey);--font-family:var(--amplify-font-family)}.greetings{display:-ms-flexbox;display:flex;border:1px solid transparent;background-color:var(--background-color);border-color:var(--border-color);padding:0.625rem;font-family:var(--font-family);-ms-flex-pack:justify;justify-content:space-between}.nav{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center}.logo{display:-ms-flexbox;display:flex;-ms-flex-item-align:center;align-self:center;justify-self:flex-start}amplify-sign-out{margin-left:1rem}"}}]);