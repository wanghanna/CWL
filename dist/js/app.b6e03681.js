(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"32a66418","chunk-0b127fee":"e949928b","chunk-2d2169c6":"13ad69c5","chunk-2d217270":"2ff70ce5","chunk-2d21de4f":"1fe0d1f0","chunk-2d2248e7":"10426572","chunk-a8a64ca4":"dbafc43d"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,"chunk-0b127fee":1,"chunk-a8a64ca4":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"75abe480","chunk-0b127fee":"b54458ba","chunk-2d2169c6":"31d6cfe0","chunk-2d217270":"31d6cfe0","chunk-2d21de4f":"31d6cfe0","chunk-2d2248e7":"31d6cfe0","chunk-a8a64ca4":"94fe1686"}[t]+".css",r=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}r[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2290:function(t,e,n){},"24f4":function(t,e,n){"use strict";var a=n("9df0"),o=n.n(a);o.a},4894:function(t,e,n){},"524f":function(t,e,n){"use strict";var a=n("2290"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid m-0 p-0 ",attrs:{id:"app"}},[n("navbar",{staticClass:"sticky-top d-lg-none"}),n("div",{staticClass:"fixed-top pt-2 px-3 d-none d-lg-block",staticStyle:{"text-align":"end"}},[n("a",{attrs:{href:"tel:+886-7-2382383"}},[n("eva-icon",{staticClass:"mx-3",attrs:{name:"phone",fill:"#8892B0",title:"07-2382383"}})],1),n("eva-icon",{staticClass:"mx-3",attrs:{name:"printer",fill:"#8892B0",title:"07-2382385"}}),n("eva-icon",{staticClass:"mx-3",attrs:{name:"email",fill:"#8892B0"}})],1),n("vueToTop",{staticStyle:{"z-index":"9999"},attrs:{type:"10",size:"50",color:"#000",top:"100"}}),n("div",{staticClass:"row m-0 nowrap mt-lg-5"},[n("div",{staticClass:"row flex-column d-none d-lg-inline-block p-3 ml-3",staticStyle:{"box-shadow":"0 0 5px #B8C6C6",background:"#fff","text-align":"start"},attrs:{id:"menu"}},[n("router-link",{staticClass:"m-5",staticStyle:{"font-size":"12px",color:"black"},attrs:{to:"/idx"}},[n("div",{staticStyle:{"white-space":"nowrap"}},[n("eva-icon",{attrs:{name:"home",fill:"#8892B0"}}),n("span",{staticClass:"pl-3"},[t._v("Home")])],1)]),n("router-link",{staticClass:"m-5",staticStyle:{"font-size":"12px",color:"black"},attrs:{to:"/about"}},[n("div",{staticStyle:{"white-space":"nowrap"}},[n("eva-icon",{attrs:{name:"briefcase",fill:"#8892B0"}}),n("span",{staticClass:"pl-3"},[t._v("About US")])],1)]),n("router-link",{staticClass:"m-5",staticStyle:{"font-size":"12px",color:"black"},attrs:{to:"/light"}},[n("div",{staticStyle:{"white-space":"nowrap"}},[n("eva-icon",{attrs:{name:"keypad",fill:"#8892B0"}}),n("span",{staticClass:"pl-3"},[t._v("Product")])],1)]),n("router-link",{staticClass:"m-5",staticStyle:{"font-size":"12px",color:"black"},attrs:{to:"/knowledge"}},[n("div",{staticStyle:{"white-space":"nowrap"}},[n("eva-icon",{attrs:{name:"bulb",fill:"#8892B0"}}),n("span",{staticClass:"pl-3"},[t._v("About Light")])],1)])],1),n("router-view",{staticClass:"col",staticStyle:{"border-radius":"20px 0 0 0","box-shadow":"0 0 20px #B8C6C6"}})],1),n("ft",{staticClass:"ml-3"}),n("bot",{staticClass:"fixed-bottom ml-3"})],1)},r=[],i=n("5f5b"),s=(n("f9e3"),n("2dd8"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid m-0 p-0"},[a("vs-navbar",{staticClass:"nabarx p-1 row m-0",attrs:{color:"white","text-color":"#989BAC","active-text-color":"rgba(255,255,255,1)",index:"danger",id:"navbar-t"},model:{value:t.activeItem,callback:function(e){t.activeItem=e},expression:"activeItem"}},[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[a("vs-navbar-title",[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"mt-1 d-none d-md-inline-flex",attrs:{id:"logo-t",src:n("9f62")}})]),t._v(" \n        "),a("span",{staticStyle:{color:"black"}},[t._v("ChenWeiLighting")])],1)],1),a("div",{staticClass:"row m-0",attrs:{id:"menu"}},[a("vs-navbar-item",{attrs:{index:"0"}},[a("router-link",{staticStyle:{"font-size":"12px"},attrs:{to:"/idx"}},[t._v("Home")])],1),a("vs-navbar-item",{attrs:{index:"1"}},[a("router-link",{staticStyle:{"font-size":"12px"},attrs:{to:"/about"}},[t._v("About US")])],1),a("vs-navbar-item",{attrs:{index:"2"}},[a("router-link",{staticStyle:{"font-size":"12px"},attrs:{to:"/light"}},[t._v("Products")])],1),a("vs-navbar-item",{attrs:{index:"3"}},[a("router-link",{staticStyle:{"font-size":"12px"},attrs:{to:"/knowledge"}},[t._v("About Light")])],1),a("vs-navbar-item",{attrs:{index:"4"}},[a("router-link",{staticStyle:{"font-size":"12px"},attrs:{to:"/0_testPage"}},[t._v("測試頁面")])],1)],1)])],1)}),c=[],l={data:function(){return{activeItem:0}}},u=l,f=(n("524f"),n("2877")),d=Object(f["a"])(u,s,c,!1,null,"4ccafec7",null),p=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid main row flex-column flex-md-row mb-2 m-0"},[n("div",{staticClass:"container-fluid col-md-8 row flex-column flex-md-row m-0"},[n("div",{staticClass:"col"},[t._m(0),n("hr"),t._m(1),n("p",[t._v("服務範圍: 全台各區")]),n("vs-button",{attrs:{color:"#207e89",size:"large",type:"filled",icon:"input"},on:{click:t.go}})],1),t._m(2),t._m(3)]),t._m(4)])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h6",[n("b",[t._v("CHEN WEI LIGHTING")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"text-align":"start"}},[a("img",{attrs:{src:n("9f62"),width:"100px"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[n("h6",[n("b",[t._v("ADDRESS")])]),n("hr"),n("p",[t._v("高雄市新興區七賢一路199號")]),n("p",[t._v("\n        No. 199,QIXIAN 1ST RD., XINXING DIST., KAOHSIUNG CITY\n        800,TAIWAN(R.O.C)\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[n("h6",[n("b",[t._v("CONTACT")])]),n("hr"),n("p",[n("b",[t._v("Phone: ")]),t._v("+886-7-2382383")]),n("p",[n("b",[t._v("Fax: ")]),t._v("+886-7-2382385")]),n("p",[n("b",[t._v("Email: ")]),t._v("chenweilight@yahoo.com.tw")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col"},[a("img",{attrs:{id:"map",src:n("8b55"),alt:""}})])}],h={methods:{go:function(){window.location.href="http://127.0.0.1/myvue/vue2_backside/www_backside/admin.php"}}},b=h,g=(n("bf09"),Object(f["a"])(b,v,m,!1,null,"2003596c",null)),_=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bottom"}},[n("div",{staticClass:"col"},[t._v("© 2019 Chen Wei Lighting CO., LTD")]),n("div",{staticClass:"d-md-none"},[t._v("\n    直接來電 "),n("a",{attrs:{href:"tel:+886-7-2382383"}},[n("eva-icon",{staticClass:"my-1",attrs:{name:"phone-call-outline",animation:"shake",fill:"white"}})],1)])])},k=[],x=(n("d05a"),{}),y=Object(f["a"])(x,w,k,!1,null,"08636569",null),C=y.exports;a["default"].use(i["a"]);var S={components:{navbar:p,ft:_,bot:C}},E=S,O=(n("24f4"),Object(f["a"])(E,o,r,!1,null,"c8b33b36",null)),A=O.exports,N=n("8c4f"),T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vh-100 row m-0 flex-column flex-md-row align-items-center",staticStyle:{background:"#F2F2F1"},attrs:{id:"front"}},[n("div",{staticClass:"cwlc col-md-6"},[n("div",{staticStyle:{"white-space":"nowrap"}},[t._v("辰偉照明")]),n("div",{staticClass:"cwls"},[t._v("offer the best service")])]),n("div",{staticClass:"cwl col-md-5 align-text-bottom"},[n("div",[t._v("CHEN WEI LIGHTING")]),n("div",{staticStyle:{"font-size":"3vh",color:"#565656","font-family":"'Noto Sans TC', sans-serif"}},[t._v("專業照明燈泡燈管總匯")])])])}],j=(n("7d5c"),{}),P=Object(f["a"])(j,T,I,!1,null,"9a959114",null),B=P.exports;a["default"].use(N["a"]);var L=new N["a"]({routes:[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/idx",name:"idx",component:function(){return n.e("chunk-a8a64ca4").then(n.bind(null,"2a06"))}},{path:"/product",name:"product",component:function(){return n.e("chunk-2d21de4f").then(n.bind(null,"d2f1"))}},{path:"/light",name:"light",component:function(){return n.e("chunk-0b127fee").then(n.bind(null,"32f4"))}},{path:"/component",name:"component",component:function(){return n.e("chunk-2d2169c6").then(n.bind(null,"c2cd"))}},{path:"/knowledge",name:"knowledge",component:function(){return n.e("chunk-2d2248e7").then(n.bind(null,"e149"))}},{path:"/0_testPage",name:"0_testPage",component:function(){return n.e("chunk-2d217270").then(n.bind(null,"c607"))}}]}),z=n("2f62");a["default"].use(z["a"]);var $=new z["a"].Store({state:{},mutations:{},actions:{}}),H=n("9483");Object(H["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var D=n("fb9a"),F=n.n(D),G=(n("04f2"),n("c789"),n("0a63")),W=n.n(G),M=n("bc3a"),U=n.n(M),q=n("a7fe"),R=n.n(q),X=n("0665"),J=n.n(X),K=n("ecee"),Q=n("c074"),Y=n("f2d1"),V=n("ad3d"),Z=n("6f69"),tt=n.n(Z);a["default"].use(tt.a),K["c"].add(Q["a"],Y["a"]),a["default"].component("font-awesome-icon",V["a"]),a["default"].use(J.a),a["default"].use(R.a,U.a),a["default"].use(W.a),a["default"].use(F.a,{}),a["default"].config.productionTip=!1,new a["default"]({router:L,store:$,render:function(t){return t(A)}}).$mount("#app")},"6dee":function(t,e,n){},"7d5c":function(t,e,n){"use strict";var a=n("4894"),o=n.n(a);o.a},"8b55":function(t,e,n){t.exports=n.p+"img/map.35d86427.png"},"9df0":function(t,e,n){},"9f62":function(t,e,n){t.exports=n.p+"img/LOGO_Lamp.4ae9aeb1.svg"},bf09:function(t,e,n){"use strict";var a=n("6dee"),o=n.n(a);o.a},d05a:function(t,e,n){"use strict";var a=n("f594"),o=n.n(a);o.a},f594:function(t,e,n){}});
//# sourceMappingURL=app.b6e03681.js.map