"use strict";(self["webpackChunkprojecttrip"]=self["webpackChunkprojecttrip"]||[]).push([[636],{5091:function(t,e,a){a.r(e),a.d(e,{default:function(){return H}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("v-container",[a("v-carousel",{attrs:{"show-arrows-on-hover":!0}},t._l(t.photos,(function(t){return a("v-carousel-item",{key:t,attrs:{src:t}},[a("v-sheet",[a("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}})],1)],1)})),1),a("v-sheet",[a("div",{staticClass:"my-5"},[a("h2",[t._v("[Title] This is a title. "),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("mdi-dots-vertical")])],1)],1),a("h3",[t._v("₩1,099,000")])]),a("div",[a("p",[t._v("설명을 위한 칸입니다.설명을 위한 칸입니다.설명을 위한 칸입니다. ")])]),a("v-bottom-navigation",{attrs:{absolute:""}},[a("v-btn",{attrs:{value:"favorites"},on:{click:t.addtoFavorites}},[a("v-icon",{attrs:{size:"40",color:t.onList?"red":"default"}},[t._v("mdi-heart")])],1),a("v-dialog",{attrs:{"max-width":"100%"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({},"v-btn",o,!1),r),[a("span",[t._v("1:1 문의하기")])])]}}]),model:{value:t.inquire,callback:function(e){t.inquire=e},expression:"inquire"}},[a("v-card",[a("v-card-title",[t._v("1:1 문의하기")]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"제목"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{outlined:"",rows:"6"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.inquire=!1}}},[t._v("닫기")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.inquire=!1}}},[t._v("저장하기")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"100%"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{value:"reserve",color:"default"}},"v-btn",o,!1),r),[a("span",[t._v("예약하기")])])]}}]),model:{value:t.reserve,callback:function(e){t.reserve=e},expression:"reserve"}},[a("v-card",[a("v-card-title",[t._v("예약하기")]),a("v-card-text",[a("v-container",[a("v-calender",{ref:"calender",model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(e){t.reserve=!1}}},[t._v("닫기")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.reserve=!1}}},[t._v("다음")])],1)],1)],1)],1)],1)],1)],1)],1)},o=[],i={data:()=>({drawer:!1,photos:["https://cdn.pixabay.com/photo/2018/08/17/03/49/great-3612031__480.jpg","https://cdn.pixabay.com/photo/2019/09/10/13/24/bicycle-4466113__340.jpg","https://cdn.pixabay.com/photo/2019/06/21/07/02/hoian-4288741__480.jpg","https://cdn.pixabay.com/photo/2020/09/02/08/52/farm-5537759__480.jpg"],onList:!1,type:0,search:!1,inquire:!1,reserve:!1,filtericons:["mdi-airplane","mdi-bed","mdi-car-side","mdi-ticket-percent"],value:""}),methods:{addtoFavorites:function(){this.onList=!this.onList},submitSearch:function(){this.search=!1,this.$router.push("/danang")}}},n=i,s=a(1001),c=a(3453),l=a.n(c),u=a(303),v=a(7881),h=a(6847),d=a(2026),p=a(5255),f=a(8266),m=a(9690),_=a(7024),g=a(1819),x=a(1620),b=a(4456),w=a(4021),Z=a(7894),k=a(801),y=a(2515),V=a(2832),I=a(7033),C=(0,s.Z)(n,r,o,!1,null,null,null),H=C.exports;l()(C,{VApp:u.Z,VBottomNavigation:v.Z,VBtn:h.Z,VCard:d.Z,VCardActions:p.h7,VCardText:p.ZB,VCardTitle:p.EB,VCarousel:f.Z,VCarouselItem:m.Z,VCol:_.Z,VContainer:g.Z,VDialog:x.Z,VIcon:b.Z,VMain:w.Z,VRow:Z.Z,VSheet:k.Z,VSpacer:y.Z,VTextField:V.Z,VTextarea:I.Z})},5255:function(t,e,a){a.d(e,{EB:function(){return c},ZB:function(){return s},h7:function(){return i}});var r=a(2026),o=a(8131);const i=(0,o.Ji)("v-card__actions"),n=(0,o.Ji)("v-card__subtitle"),s=(0,o.Ji)("v-card__text"),c=(0,o.Ji)("v-card__title");r.Z},7033:function(t,e,a){a.d(e,{Z:function(){return n}});var r=a(2832),o=a(5530);const i=(0,o.Z)(r.Z);var n=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...r.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null==(e=this.$refs.input)||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=r.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){r.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=danang.ca9fccf0.js.map