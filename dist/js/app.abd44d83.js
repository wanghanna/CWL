(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"fadda9db","chunk-1c93d526":"7f8d8df9","chunk-2d217270":"0bee6571","chunk-33f5ca96":"432e1686","chunk-6cb08b1c":"5d414ea8","chunk-2d21de4f":"5afe9f8e","chunk-77674691":"9957c322"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,"chunk-1c93d526":1,"chunk-33f5ca96":1,"chunk-6cb08b1c":1,"chunk-77674691":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"7199c8bf","chunk-1c93d526":"17c9ae19","chunk-2d217270":"31d6cfe0","chunk-33f5ca96":"cdefeb28","chunk-6cb08b1c":"13e1c64c","chunk-2d21de4f":"31d6cfe0","chunk-77674691":"137d0fa1"}[t]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],d.parentNode.removeChild(d),n(s)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"10ba":function(t,e,n){},1312:function(t,e,n){"use strict";var a=n("10ba"),r=n.n(a);r.a},"47aa":function(t,e,n){},"53db":function(t,e,n){"use strict";var a=n("bf69"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vw-100 d-flex flex-column align-items-center",attrs:{id:"app"}},[n("navbar",{staticClass:"sticky-top"}),n("vueToTop",{staticStyle:{"z-index":"9999"},attrs:{type:"4",size:"50",color:"#1D1F29",top:"100",bottom:"5",right:"10"}}),n("router-view",{staticStyle:{width:"90%"}}),n("ft"),n("bot")],1)},o=[],s=n("5f5b"),i=(n("f9e3"),n("2dd8"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid m-0 p-0",attrs:{id:"navbart"}},[a("vs-navbar",{staticClass:"nabarx d-none d-lg-flex pt-3",style:t.navbarStyle},[a("div",{attrs:{slot:"title"},slot:"title"},[a("vs-navbar-title",{class:t.titleClass},[a("router-link",{attrs:{to:"/"}},[a("span",[a("img",{staticClass:"mx-3 timg",staticStyle:{width:"50px"},attrs:{src:n("9f62"),title:"辰偉照明",alt:"ChenWeiLighting"}})])]),a("span",[t._v("辰偉照明")])],1)],1),a("div",{staticClass:"row m-0"},[a("vs-navbar-item",{attrs:{index:"0"}},[a("router-link",{attrs:{to:"/idx"}},[a("span",{staticClass:"mx-2 buttonOverlay"},[t._v("Home")])])],1),a("vs-navbar-item",{attrs:{index:"1"}},[a("router-link",{attrs:{to:"/about"}},[a("span",{staticClass:"mx-2 buttonOverlay"},[t._v("Company")])])],1),a("vs-navbar-item",{attrs:{index:"2"}},[a("router-link",{attrs:{to:"/product"}},[a("span",{staticClass:"mx-2 buttonOverlay"},[t._v("Product")])])],1),a("vs-navbar-item",{attrs:{index:"3"}},[a("router-link",{attrs:{to:"/knowledge"}},[a("span",{staticClass:"ml-2 mr-5 buttonOverlay"},[t._v("About light")])])],1)],1)]),a("div",{staticClass:"d-lg-none"},[a("div",{staticClass:"bg-info row m-0 align-items-center",attrs:{id:"small"}},[a("vs-icon",{staticClass:"ml-3 mr-auto",attrs:{id:"smalla",icon:"menu",size:"medium"},on:{click:function(e){t.cols=!t.cols}}}),a("span",{staticStyle:{color:"#eaeaea","font-weight":"bolder","font-size":"30px"}},[t._v("辰偉照明")]),a("router-link",{attrs:{to:"/"}},[a("span",{staticClass:"px-4"},[a("img",{staticClass:"timg",staticStyle:{width:"50px"},attrs:{src:n("9f62")}})])])],1),t.cols?a("div",{attrs:{id:"menu"}},[a("div",{staticClass:"menu1"},[a("router-link",{attrs:{to:"/idx"}},[a("span",{on:{click:function(e){t.cols=!t.cols}}},[t._v("Home")])])],1),a("hr",{staticClass:"styleT"}),a("div",{staticClass:"menu1"},[a("router-link",{attrs:{to:"/about"}},[a("span",{on:{click:function(e){t.cols=!t.cols}}},[t._v("Company")])])],1),a("hr",{staticClass:"styleT"}),a("div",{staticClass:"menu1"},[a("router-link",{attrs:{to:"/product"}},[a("span",{on:{click:function(e){t.cols=!t.cols}}},[t._v("Product")])])],1),a("hr",{staticClass:"styleT"}),a("div",{staticClass:"menu1"},[a("router-link",{attrs:{to:"/knowledge"}},[a("span",{on:{click:function(e){t.cols=!t.cols}}},[t._v("About light")])])],1),a("hr",{staticClass:"styleT"}),a("vs-icon",{attrs:{id:"smalla",icon:"eject",size:"medium"},on:{click:function(e){t.cols=!t.cols}}})],1):t._e()]),a("hr",{staticClass:"styleT"})],1)}),c=[],l={data:function(){return{activeItem:0,navbarType:"shadow",navbarStyle:"background:#fff;box-shadow:0 0 0 #fff",titleClass:"row m-0 px-4 align-items-center",cols:!1}}},u=l,f=(n("cdd7"),n("2877")),d=Object(f["a"])(u,i,c,!1,null,"1c5039a7",null),m=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid main row flex-column flex-md-row mb-2 m-0"},[n("div",{staticClass:"container-fluid col-md-8 row flex-column flex-md-row m-0"},[n("div",{staticClass:"col"},[t._m(0),n("hr",{staticClass:"styleT"}),t._m(1),n("vs-button",{attrs:{color:"#33322E",size:"large",type:"flat",icon:"input"},on:{click:t.go}}),n("br")],1),t._m(2),t._m(3)]),t._m(4)])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h6",[n("b",[t._v("CHEN WEI LIGHTING")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"text-align":"start"}},[a("img",{attrs:{src:n("9f62"),width:"100px"}}),a("p",[a("b",[t._v("Business Hour: ")]),t._v("Mon~Fri 09:00~18:00")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[n("h6",[n("b",[t._v("ADDRESS")])]),n("hr",{staticClass:"styleT"}),n("p",[n("b",[t._v("辰偉照明股份有限公司")])]),n("p",[t._v("高雄市新興區七賢一路199號")]),n("p",[t._v("\n        No. 199,QIXIAN 1ST RD., XINXING DIST., KAOHSIUNG CITY\n        800,TAIWAN(R.O.C)\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[n("h6",[n("b",[t._v("CONTACT")])]),n("hr",{staticClass:"styleT"}),n("p",[n("b",[t._v("Phone: ")]),t._v("+886-7-2382383")]),n("p",[n("b",[t._v("Fax: ")]),t._v("+886-7-2382385")]),n("p",[n("b",[t._v("Email: ")]),t._v("chenweilight@yahoo.com.tw")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col"},[a("img",{attrs:{id:"map",src:n("8b55"),alt:""}})])}],h={methods:{go:function(){window.location.href="http://127.0.0.1/myvue/vue2_backside/www_backside/admin.php"}}},b=h,g=(n("1312"),Object(f["a"])(b,v,p,!1,null,"127de6b2",null)),_=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row fixed-bottom flex-column flex-md-row m-0 align-items-center justify-content-md-center",attrs:{id:"bottom"}},[n("div",{staticClass:"col text-center"},[t._v("© 2019 Chen Wei Lighting CO., LTD")]),n("div",{staticClass:"d-md-none",staticStyle:{"font-family":"'Noto Sans TC', sans-serif"}},[t._v("\n    直接來電 "),n("a",{attrs:{href:"tel:+886-7-2382383"}},[n("eva-icon",{staticClass:"my-1",attrs:{name:"phone-call-outline",animation:"shake",fill:"#33322E"}})],1)])])},C=[],k=(n("b849"),{}),w=Object(f["a"])(k,y,C,!1,null,"cb52f5f2",null),x=w.exports;a["default"].use(s["a"]);var E={components:{navbar:m,ft:_,bot:x}},T=E,O=(n("034f"),Object(f["a"])(T,r,o,!1,null,null,null)),S=O.exports,j=n("8c4f"),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vh-100 vw-100 d-flex justify-content-center",attrs:{id:"front"}},[n("router-link",{attrs:{to:"/idx"}}),t._m(0),t._m(1),t._m(2),n("div",{staticClass:"enter",staticStyle:{position:"absolute",left:"50%"}},[n("a",{attrs:{href:"#/idx"}},[n("vs-icon",{attrs:{icon:"fingerprint",size:"50px",bg:""}})],1)])],1)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-xl-flex d-none",attrs:{id:"imgb"}},[a("img",{attrs:{src:n("9f62"),alt:""}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-xl-none d-flex",attrs:{id:"imgt"}},[a("img",{attrs:{src:n("9f62"),alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("div",{staticClass:"row flex-column flex-md-row",attrs:{id:"cwlc"}},[n("h1",[t._v("CHEN WEI")]),n("h1",[t._v("LIGHTING")])])])}],I=(n("53db"),{}),P=Object(f["a"])(I,N,A,!1,null,"538f9bbd",null),$=P.exports;a["default"].use(j["a"]);var L=new j["a"]({routes:[{path:"/",name:"home",component:$},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/idx",name:"idx",component:function(){return n.e("chunk-77674691").then(n.bind(null,"2a06"))}},{path:"/product",name:"product",component:function(){return Promise.all([n.e("chunk-6cb08b1c"),n.e("chunk-2d21de4f")]).then(n.bind(null,"d2f1"))}},{path:"/light",name:"light",component:function(){return n.e("chunk-6cb08b1c").then(n.bind(null,"32f4"))}},{path:"/component",name:"component",component:function(){return n.e("chunk-33f5ca96").then(n.bind(null,"c2cd"))}},{path:"/knowledge",name:"knowledge",component:function(){return n.e("chunk-1c93d526").then(n.bind(null,"e149"))}},{path:"/0_testPage",name:"0_testPage",component:function(){return n.e("chunk-2d217270").then(n.bind(null,"c607"))}}]}),H=n("2f62");a["default"].use(H["a"]);var D=new H["a"].Store({state:{},mutations:{},actions:{}}),z=n("9483");Object(z["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var G=n("fb9a"),F=n.n(G),B=(n("04f2"),n("c789"),n("0a63")),M=n.n(B),W=n("bc3a"),q=n.n(W),R=n("a7fe"),X=n.n(R),J=n("0665"),K=n.n(J),U=n("ecee"),Q=n("c074"),Y=n("f2d1"),V=n("ad3d"),Z=n("6f69"),tt=n.n(Z);a["default"].use(tt.a),U["c"].add(Q["a"],Y["a"]),a["default"].component("font-awesome-icon",V["a"]),a["default"].use(K.a),a["default"].use(X.a,q.a),a["default"].use(M.a),a["default"].use(F.a,{}),a["default"].config.productionTip=!1,new a["default"]({router:L,store:D,render:function(t){return t(S)}}).$mount("#app")},"64a9":function(t,e,n){},"6e54":function(t,e,n){},"8b55":function(t,e,n){t.exports=n.p+"img/map.26f01608.png"},"9f62":function(t,e,n){t.exports=n.p+"img/LOGO_Lamp.607f239e.svg"},b849:function(t,e,n){"use strict";var a=n("6e54"),r=n.n(a);r.a},bf69:function(t,e,n){},cdd7:function(t,e,n){"use strict";var a=n("47aa"),r=n.n(a);r.a}});
//# sourceMappingURL=app.abd44d83.js.map