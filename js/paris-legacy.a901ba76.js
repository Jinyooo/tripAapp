"use strict";(self["webpackChunkprojecttrip"]=self["webpackChunkprojecttrip"]||[]).push([[69],{6840:function(t,e,a){a.r(e),a.d(e,{default:function(){return A}});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{attrs:{app:"",flat:""}},[i("v-btn",{attrs:{icon:""}},[i("v-icon",{attrs:{size:"40"},on:{click:function(e){return t.$router.push("/tripa")}}},[t._v("mdi-chevron-left")])],1),i("v-spacer"),i("div",{staticClass:"d-flex align-center"},[i("v-img",{staticClass:"shrink mr-2",attrs:{alt:"TripA Logo",contain:"",src:a(325),transition:"scale-transition",width:"90"},on:{click:function(e){return t.$router.push("/tripa")}}})],1),i("v-spacer"),i("v-dialog",{attrs:{fullscreen:"",transition:"dialog-top-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[i("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),a),[i("v-icon",{attrs:{size:"40"}},[t._v("mdi-magnify")])],1)]}}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[i("v-card",[i("v-btn",{staticClass:"top right",attrs:{text:""},on:{click:t.submitSearch}},[i("v-icon",[t._v("mdi-close")])],1),i("v-sheet",{staticClass:"mx-auto",attrs:{"max-width":"50%"}},[i("v-slide-group",t._l(t.filtericons,(function(e){return i("v-slide-item",{key:e,staticClass:"justify-center",scopedSlots:t._u([{key:"default",fn:function(a){var r=a.active,s=a.toggle;return[i("v-btn",{staticClass:"ma-2",attrs:{"input-value":r,"active-class":"primary white--text",outlined:""},on:{click:s}},[i("v-icon",[t._v(t._s(e))])],1)]}}],null,!0)})})),1)],1),i("v-text-field",{staticClass:"shrink mx-20",attrs:{label:"검색어를 입력하세요"}}),i("v-btn",{attrs:{id:"searchMagnify"},on:{click:t.submitSearch}},[i("v-icon",[t._v("mdi-magnify")])],1)],1)],1),i("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[i("v-icon",{attrs:{size:"40"}},[t._v("mdi-account-outline")])],1)],1),i("v-navigation-drawer",{attrs:{absolute:"",right:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-toolbar",{attrs:{flat:""}},[i("v-list",{attrs:{nav:"",dense:""}},[i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{staticClass:"grey white--text"},[t._v("mdi-account")])],1),i("v-list-item-content",[i("v-list-item-title",[i("a",{attrs:{href:"#"}},[t._v("마이페이지")])]),i("v-list-item-subtitle",[i("a",{attrs:{href:"#"}},[t._v("로그인")])])],1)],1)],1)],1),i("v-divider"),i("v-list",[i("v-list-item",[i("v-lsit-item-content",t._l(5,(function(e){return i("v-list-item-title",{key:e,staticClass:"ma-3"},[t._v("Menu "+t._s(e))])})),1)],1)],1)],1),i("v-main",[i("v-container",[i("v-carousel",{attrs:{"show-arrows-on-hover":!0}},t._l(t.photos,(function(t){return i("v-carousel-item",{key:t,attrs:{src:t}},[i("v-sheet",[i("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}})],1)],1)})),1),i("v-sheet",[i("div",{staticClass:"my-5"},[i("h2",[t._v("[Title] This is a title. "),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-dots-vertical")])],1)],1),i("h3",[t._v("₩1,099,000")])]),i("div",[i("p",[t._v("설명을 위한 칸입니다.설명을 위한 칸입니다.설명을 위한 칸입니다. ")])])]),i("v-bottom-navigation",{attrs:{absolute:""}},[i("v-btn",{attrs:{value:"favorites"},on:{click:t.addtoFavorites}},[i("v-icon",{attrs:{size:"40",color:t.onList?"red":"default"}},[t._v("mdi-heart")])],1),i("v-dialog",{scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[i("v-btn",t._g(t._b({},"v-btn",r,!1),a),[i("span",[t._v("1:1 문의하기")])])]}}])},[i("v-card",[i("v-card-title",[t._v("1:1 문의하기")]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6"}},[i("v-text-field",{attrs:{label:"제목"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-textarea",{attrs:{outlined:"",rows:"6"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.inquire=!1}}},[t._v("닫기")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.inquire=!1}}},[t._v("저장하기")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"100%"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[i("v-btn",t._g(t._b({attrs:{value:"reserve",color:"default"}},"v-btn",r,!1),a),[i("span",[t._v("예약하기")])])]}}]),model:{value:t.reserve,callback:function(e){t.reserve=e},expression:"reserve"}},[i("v-card",[i("v-card-title",[t._v("예약하기")]),i("v-card-text",[i("v-container")],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.reserve=!1}}},[t._v("닫기")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.reserve=!1}}},[t._v("다음")])],1)],1)],1)],1)],1)],1)],1)},r=[],s={data:()=>({drawer:!1,photos:["https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075__480.jpg","https://cdn.pixabay.com/photo/2017/07/13/03/15/paris-2499022__340.jpg","https://cdn.pixabay.com/photo/2020/07/23/21/34/arc-de-triomphe-5432392__480.jpg","https://cdn.pixabay.com/photo/2019/12/11/14/49/notredame-4688554__480.jpg"],onList:!1,type:0,search:!1,inquire:!1,reserve:!1,filtericons:["mdi-airplane","mdi-bed","mdi-car-side","mdi-ticket-percent"],value:""}),methods:{addtoFavorites:function(){this.onList=!this.onList},submitSearch:function(){this.search=!1,this.$router.push("/danang")}}},n=s,o=a(1001),c=a(3453),l=a.n(c),v=a(303),u=a(5157),d=a(7881),h=a(6847),p=a(2026),m=a(5255),f=a(8266),_=a(9690),g=a(7024),b=a(1819),w=a(1620),x=a(5596),k=a(4456),Z=a(5288),y=a(893),V=a(907),C=a(3319),I=a(8400),S=a(4021),T=a(1373),H=a(7894),L=a(801),z=a(307),$=a(1818),B=a(2515),G=a(2832),j=a(7033),N=a(1652),F=(0,o.Z)(n,i,r,!1,null,"2abe50f4",null),A=F.exports;l()(F,{VApp:v.Z,VAppBar:u.Z,VBottomNavigation:d.Z,VBtn:h.Z,VCard:p.Z,VCardActions:m.h7,VCardText:m.ZB,VCardTitle:m.EB,VCarousel:f.Z,VCarouselItem:_.Z,VCol:g.Z,VContainer:b.Z,VDialog:w.Z,VDivider:x.Z,VIcon:k.Z,VImg:Z.Z,VList:y.Z,VListItem:V.Z,VListItemAvatar:C.Z,VListItemContent:I.km,VListItemSubtitle:I.oZ,VListItemTitle:I.V9,VMain:S.Z,VNavigationDrawer:T.Z,VRow:H.Z,VSheet:L.Z,VSlideGroup:z.ZP,VSlideItem:$.Z,VSpacer:B.Z,VTextField:G.Z,VTextarea:j.Z,VToolbar:N.Z})},5255:function(t,e,a){a.d(e,{EB:function(){return c},ZB:function(){return o},h7:function(){return s}});var i=a(2026),r=a(8131);const s=(0,r.Ji)("v-card__actions"),n=(0,r.Ji)("v-card__subtitle"),o=(0,r.Ji)("v-card__text"),c=(0,r.Ji)("v-card__title");i.Z},7033:function(t,e,a){a.d(e,{Z:function(){return n}});var i=a(2832),r=a(5530);const s=(0,r.Z)(i.Z);var n=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...i.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null==(e=this.$refs.input)||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=i.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){i.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=paris-legacy.a901ba76.js.map