"use strict";(self["webpackChunkprojecttrip"]=self["webpackChunkprojecttrip"]||[]).push([[69],{7484:function(t,e,r){r.r(e),r.d(e,{default:function(){return T}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("v-container",[r("v-carousel",{attrs:{"show-arrows-on-hover":!0}},t._l(t.photos,(function(t){return r("v-carousel-item",{key:t,attrs:{src:t}},[r("v-sheet",[r("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}})],1)],1)})),1),r("v-sheet",[r("div",{staticClass:"my-5"},[r("h2",[t._v("[Title] This is a title. "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-dots-vertical")])],1)],1),r("h3",[t._v("₩1,099,000")])]),r("div",[r("p",[t._v("설명을 위한 칸입니다.설명을 위한 칸입니다.설명을 위한 칸입니다. ")])])]),r("v-bottom-navigation",{attrs:{absolute:""}},[r("v-btn",{attrs:{value:"favorites"},on:{click:t.addtoFavorites}},[r("v-icon",{attrs:{size:"40",color:t.onList?"red":"default"}},[t._v("mdi-heart")])],1),r("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({},"v-btn",o,!1),a),[r("span",[t._v("1:1 문의하기")])])]}}])},[r("v-card",[r("v-card-title",[t._v("1:1 문의하기")]),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-text-field",{attrs:{label:"제목"}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-textarea",{attrs:{outlined:"",rows:"6"}})],1)],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.inquire=!1}}},[t._v("닫기")]),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.inquire=!1}}},[t._v("저장하기")])],1)],1)],1),r("v-dialog",{attrs:{"max-width":"100%"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{value:"reserve",color:"default"}},"v-btn",o,!1),a),[r("span",[t._v("예약하기")])])]}}]),model:{value:t.reserve,callback:function(e){t.reserve=e},expression:"reserve"}},[r("v-card",[r("v-card-title",[t._v("예약하기")]),r("v-card-text",[r("v-container")],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.reserve=!1}}},[t._v("닫기")]),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.reserve=!1}}},[t._v("다음")])],1)],1)],1)],1)],1)],1)],1)},o=[],n={data:()=>({drawer:!1,photos:["https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075__480.jpg","https://cdn.pixabay.com/photo/2017/07/13/03/15/paris-2499022__340.jpg","https://cdn.pixabay.com/photo/2020/07/23/21/34/arc-de-triomphe-5432392__480.jpg","https://cdn.pixabay.com/photo/2019/12/11/14/49/notredame-4688554__480.jpg"],onList:!1,type:0,search:!1,inquire:!1,reserve:!1,filtericons:["mdi-airplane","mdi-bed","mdi-car-side","mdi-ticket-percent"],value:""}),methods:{addtoFavorites:function(){this.onList=!this.onList},submitSearch:function(){this.search=!1,this.$router.push("/danang")}}},i=n,s=r(1001),c=r(3453),v=r.n(c),l=r(303),d=r(7881),u=r(6847),p=r(2026),h=r(5255),_=r(8266),f=r(9690),b=r(7024),m=r(1819),V=r(1620),k=r(4456),x=r(4021),Z=r(7894),g=r(801),y=r(2515),C=r(2832),w=r(7033),j=(0,s.Z)(i,a,o,!1,null,"b64ef97a",null),T=j.exports;v()(j,{VApp:l.Z,VBottomNavigation:d.Z,VBtn:u.Z,VCard:p.Z,VCardActions:h.h7,VCardText:h.ZB,VCardTitle:h.EB,VCarousel:_.Z,VCarouselItem:f.Z,VCol:b.Z,VContainer:m.Z,VDialog:V.Z,VIcon:k.Z,VMain:x.Z,VRow:Z.Z,VSheet:g.Z,VSpacer:y.Z,VTextField:C.Z,VTextarea:w.Z})}}]);
//# sourceMappingURL=paris-legacy.8f2ccbd1.js.map