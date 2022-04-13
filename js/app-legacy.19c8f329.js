(function(){"use strict";var t={9553:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tripa"}},[n("v-row",t._l(9,(function(t){return n("v-col",{key:t,staticClass:"d-flex chid-flex",attrs:{cols:"4"}},[n("v-img",{staticClass:"grey lighten-2",attrs:{src:"https://picsum.photos/200/300?image="+(5*t+10),"aspect-ratio":"1"}})],1)})),1)],1)},i=[],r={name:"TripA"},o=r,s=n(1001),c=n(3453),l=n.n(c),u=n(7024),d=n(5288),p=n(7894),m=(0,s.Z)(o,a,i,!1,null,"6a44e734",null),v=m.exports;l()(m,{VCol:u.Z,VImg:d.Z,VRow:p.Z})},7462:function(t,e,n){var a=n(144),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{staticClass:"transparent",attrs:{flat:""}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[a("v-icon",{attrs:{size:"40"}},[t._v("mdi-menu")])],1),a("v-spacer"),a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"TripA Logo",contain:"",src:n(325),transition:"scale-transition",width:"90"},on:{click:function(e){return t.$router.push("/tripa")}}})],1),a("v-spacer"),a("v-dialog",{attrs:{fullscreen:"",transition:"dialog-top-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",i,!1),n),[a("v-icon",{attrs:{size:"40"}},[t._v("mdi-magnify")])],1)]}}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[a("v-card",[a("v-btn",{staticClass:"top right",attrs:{text:""},on:{click:t.submitSearch}},[a("v-icon",[t._v("mdi-close")])],1),a("v-sheet",{staticClass:"mx-auto",attrs:{"max-width":"50%"}},[a("v-slide-group",t._l(t.filtericons,(function(e){return a("v-slide-item",{key:e,staticClass:"justify-center",scopedSlots:t._u([{key:"default",fn:function(n){var i=n.active,r=n.toggle;return[a("v-btn",{staticClass:"ma-2",attrs:{"input-value":i,"active-class":"primary white--text",outlined:""},on:{click:r}},[a("v-icon",[t._v(t._s(e))])],1)]}}],null,!0)})})),1)],1),a("v-text-field",{staticClass:"shrink mx-20",attrs:{label:"검색어를 입력하세요"}}),a("v-btn",{attrs:{id:"searchMagnify"},on:{click:t.submitSearch}},[a("v-icon",[t._v("mdi-magnify")])],1)],1)],1)],1),a("v-main",[a("v-navigation-drawer",{attrs:{absolute:"",left:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-toolbar",{attrs:{flat:""}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item",[a("v-list-item-avatar",[a("v-icon",{staticClass:"grey white--text"},[t._v("mdi-account")])],1),a("v-list-item-content",[a("v-list-item-title",[a("a",{attrs:{href:"#"}},[t._v("마이페이지")])]),a("v-list-item-subtitle",[a("a",{attrs:{href:"#"}},[t._v("로그인")])])],1)],1)],1)],1),a("v-divider"),a("v-list",[a("v-list-item",[a("v-list-item-content",t._l(5,(function(e){return a("v-list-item-title",{key:e,staticClass:"ma-3"},[t._v(" Menu "+t._s(e))])})),1)],1)],1)],1),a("router-view",{attrs:{name:"leaveIm"}}),a("router-view",{attrs:{name:"popular"}}),a("router-view",{attrs:{name:"hashtag"}}),a("router-view")],1)],1)},r=[],o={destinations:[{name:"Osaka",slug:"osaka",image:"osaka",id:1,src:"https://cdn.pixabay.com/photo/2020/08/10/01/28/castle-5476737__340.jpg",details:[{img:""},{title:""},{description:""}]},{name:"Danang",slug:"danang",image:"danang",id:2,src:"https://cdn.pixabay.com/photo/2020/02/25/14/54/light-4879144__340.jpg",details:[{img:""},{title:""},{description:""}]},{name:"Paris",slug:"paris",image:"paris",id:3,src:"https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840__340.jpg",details:[{img:""},{title:""},{description:""}]},{name:"Guam",slug:"guam",image:"guam",id:4,src:"https://cdn.pixabay.com/photo/2021/02/18/03/59/beach-6026018__340.jpg",details:[{img:""},{title:""},{description:""}]},{name:"Bangkok",slug:"bangkok",image:"bangkok",id:5,src:"https://cdn.pixabay.com/photo/2020/08/10/10/09/bangkok-5477405__480.jpg",details:[{img:""},{title:""},{description:""}]}],randompic:[{src:"https://cdn.pixabay.com/photo/2019/07/21/19/53/san-diego-skyline-4353504__480.jpg",name:"야경 요트투어"},{src:"https://cdn.pixabay.com/photo/2020/01/12/16/57/stadium-4760441__340.jpg",name:"경기 관람권"},{src:"https://cdn.pixabay.com/photo/2016/11/19/11/11/dua-lipa-1838653__340.jpg",name:"공연티켓 할인"},{src:"https://cdn.pixabay.com/photo/2013/08/09/17/16/band-171117__480.jpg",name:"바 호핑"}]},s={name:"App",data:()=>({drawer:!1,model:null,showname:!1,destinations:o.destinations,search:!1,filtericons:["mdi-airplane","mdi-bed","mdi-car-side","mdi-ticket-percent"]}),methods:{submitSearch:function(){this.search=!1,this.$router.push("/tripa")}}},c=s,l=n(1001),u=n(3453),d=n.n(u),p=n(303),m=n(5157),v=n(6847),f=n(2026),h=n(1620),g=n(5596),b=n(4456),_=n(5288),y=n(893),k=n(907),Z=n(3319),w=n(8400),V=n(4021),x=n(1373),C=n(801),S=n(307),j=n(1818),P=n(2515),A=n(2832),O=n(1652),I=(0,l.Z)(c,i,r,!1,null,"76ec42fc",null),E=I.exports;d()(I,{VApp:p.Z,VAppBar:m.Z,VBtn:v.Z,VCard:f.Z,VDialog:h.Z,VDivider:g.Z,VIcon:b.Z,VImg:_.Z,VList:y.Z,VListItem:k.Z,VListItemAvatar:Z.Z,VListItemContent:w.km,VListItemSubtitle:w.oZ,VListItemTitle:w.V9,VMain:V.Z,VNavigationDrawer:x.Z,VSheet:C.Z,VSlideGroup:S.ZP,VSlideItem:j.Z,VSpacer:P.Z,VTextField:A.Z,VToolbar:O.Z});var T=n(8345),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:" my-5"},[n("h2",[t._v("바로 출발")]),n("v-slide-group",{attrs:{multiple:"","show-arrows":"","center-active":""}},t._l(t.destinations,(function(e,a){return n("v-slide-item",{key:a},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var i=a.hover;return[n("v-card",{staticClass:"mx-2",class:{imgOpacity:i},attrs:{width:"300"}},[n("v-img",{attrs:{src:e.src,alt:"destination.name"}},[n("div",{staticClass:"title"},[n("h1",[n("router-link",{attrs:{to:"/"+e.slug}},[n("a",{class:{"show-title":i}},[t._v(t._s(e.name))])])],1)])])],1)]}}],null,!0)})],1)})),1)],1)},N=[],$={name:"leave-im",data:()=>({model:null,showname:!1,destinations:o.destinations,transparent:"rgba(255, 255, 255, 0)"})},B=$,M=n(9657),D=(0,l.Z)(B,L,N,!1,null,"046bd5f4",null),F=D.exports;d()(D,{VCard:f.Z,VHover:M.Z,VImg:_.Z,VSheet:C.Z,VSlideGroup:S.ZP,VSlideItem:j.Z});var G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-sheet",{staticClass:"my-5"},[n("h2",[t._v("지금 인기")]),n("v-slide-group",{attrs:{multiple:"","show-arrows":"","center-active":""}},t._l(t.popular,(function(e,a){return n("v-slide-item",{key:a},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var i=a.hover;return[n("v-flex",{attrs:{xs6:"",sm6:"",md6:"",xl3:""}},[n("v-card",{staticClass:"mx-2",class:{imgOpacity:i},attrs:{width:"300"}},[n("v-img",{attrs:{src:e.src,alt:"pic.name",height:"100%"}},[n("div",{staticClass:"title"},[n("h1",[n("a",{class:{"show-title":i}},[t._v(" "+t._s(e.name)+" ")])])])])],1)],1)]}}],null,!0)})],1)})),1)],1)],1)},H=[],q={name:"popular-view",data:()=>({popular:o.randompic})},z=q,K=n(683),R=(0,l.Z)(z,G,H,!1,null,"28c03549",null),U=R.exports;d()(R,{VCard:f.Z,VFlex:K.Z,VHover:M.Z,VImg:_.Z,VSheet:C.Z,VSlideGroup:S.ZP,VSlideItem:j.Z});var J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-sheet",[n("h2",[t._v("실시간 키워드")]),n("v-slide-group",{attrs:{"show-arrows":""}},t._l(t.hashtags,(function(e){return n("v-slide-item",{key:e.name},[n("v-btn",{staticClass:"tagnav"},[n("router-link",{attrs:{to:"/"+e.path}},[t._v(" "+t._s(e.name)+" ")])],1)],1)})),1),n("router-view")],1)],1)},Q=[],W={name:"HashtagView",data:()=>({hashtags:[{name:"#트립에이",path:"tripa"},{name:"#도쿄맛집",path:"restaurants"},{name:"#여행액티비티",path:"activities"},{name:"#인생샷스팟",path:"photogenic"}]})},X=W,Y=(0,l.Z)(X,J,Q,!1,null,"11a8c912",null),tt=Y.exports;d()(Y,{VBtn:v.Z,VSheet:C.Z,VSlideGroup:S.ZP,VSlideItem:j.Z});var et=n(9553);a.Z.use(T.Z);const nt=[{path:"/tripa",components:{leaveIm:F,popular:U,hashtag:tt,TagMain:et["default"]},children:[{path:"/tripa",component:()=>Promise.resolve().then(n.bind(n,9553))},{path:"/restaurants",component:()=>n.e(437).then(n.bind(n,8437))},{path:"/activities",component:()=>n.e(471).then(n.bind(n,8471))},{path:"/photogenic",component:()=>n.e(823).then(n.bind(n,3823))}]},{path:"/osaka",component:()=>Promise.all([n.e(613),n.e(876)]).then(n.bind(n,567))},{path:"/danang",component:()=>Promise.all([n.e(613),n.e(636)]).then(n.bind(n,6624))},{path:"/paris",component:()=>Promise.all([n.e(613),n.e(69)]).then(n.bind(n,2489))},{path:"/guam",component:()=>Promise.all([n.e(613),n.e(147)]).then(n.bind(n,2846))},{path:"/bangkok",component:()=>Promise.all([n.e(613),n.e(150)]).then(n.bind(n,6927))}],at=new T.Z({mode:"history",base:"/tripAapp/",routes:nt});var it=at,rt=n(6482);a.Z.use(rt.Z);var ot=new rt.Z({});a.Z.config.productionTip=!1,new a.Z({router:it,vuetify:ot,render:function(t){return t(E)}}).$mount("#app")},325:function(t,e,n){t.exports=n.p+"img/trpAlogo.45b07350.png"}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,r){if(!a){var o=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],r=t[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&r||o>=r)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(s=!1,r<o&&(o=r));if(s){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,a){return n.f[a](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+({69:"paris",147:"guam",150:"bangkok",636:"danang",876:"osaka"}[t]||t)+"-legacy."+{69:"2ccd1815",147:"66ab0d4a",150:"7c711bc5",437:"52540726",471:"0883b2e2",613:"77d3f176",636:"2ff30f66",823:"0cd5127c",876:"8b1dfe03"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+({69:"paris",147:"guam",150:"bangkok",636:"danang",876:"osaka"}[t]||t)+"."+{69:"aa5a8489",147:"a1391e2e",150:"2b3543a4",437:"015fe766",471:"c23136b7",636:"12b6d3d3",823:"7850dc20",876:"d12c838a"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="projecttrip:";n.l=function(a,i,r,o){if(t[a])t[a].push(i);else{var s,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+r){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+r),s.src=a),t[a]=[i];var p=function(e,n){s.onerror=s.onload=null,clearTimeout(m);var i=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/tripAapp/"}(),function(){var t=function(t,e,n,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var r=function(r){if(i.onerror=i.onload=null,"load"===r.type)n();else{var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=s,i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=r,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=n[a],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===t||r===e))return i}var o=document.getElementsByTagName("style");for(a=0;a<o.length;a++){i=o[a],r=i.getAttribute("data-href");if(r===t||r===e)return i}},a=function(a){return new Promise((function(i,r){var o=n.miniCssF(a),s=n.p+o;if(e(o,s))return i();t(a,s,i,r)}))},i={143:0};n.f.miniCss=function(t,e){var n={69:1,147:1,150:1,437:1,471:1,636:1,823:1,876:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=a(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,a){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)a.push(i[2]);else{var r=new Promise((function(n,a){i=t[e]=[n,a]}));a.push(i[2]=r);var o=n.p+n.u(e),s=new Error,c=function(a){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var r=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,i[1](s)}};n.l(o,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,r,o=a[0],s=a[1],c=a[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var u=c(n)}for(e&&e(a);l<o.length;l++)r=o[l],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},a=self["webpackChunkprojecttrip"]=self["webpackChunkprojecttrip"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(7462)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.19c8f329.js.map