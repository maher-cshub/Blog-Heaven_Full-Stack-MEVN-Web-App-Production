(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{c6b6a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"SeePost"},[a("v-container",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pa-4 mx-auto",attrs:{sm:"10"}},[a("v-card",{staticClass:"pa-2"},[a("v-img",{attrs:{height:"600",width:"auto",src:"/"+t.post.image}}),a("v-card-actions",{staticClass:"pb-0"},[a("v-row",{staticClass:"mt-1 mx-1"},[a("v-col",{attrs:{sm:"2"}},[a("v-btn",{attrs:{small:"",outlined:"",color:"primary"}},[t._v(" "+t._s(t.post.category)+" ")])],1),a("v-col",{staticClass:"d-flex justify-end",attrs:{sm:"10"}},[a("v-btn",{attrs:{color:"blue",text:""},on:{click:t.EditPost}},[t._v("Edit")]),a("v-btn",{attrs:{color:"red",text:""},on:{click:t.DeletePost}},[t._v("Delete")])],1)],1)],1),a("v-card-subtitle",{staticClass:"headline"},[a("h3",[t._v(t._s(t.post.title))])]),a("v-card-text",{staticClass:"grey--text"},[a("v-row",{staticClass:"pb-3"},[a("h5",{staticClass:"black--text"},[t._v(" CREATED : "),a("span",{staticClass:"green--text"},[t._v(" "+t._s(t.post.date_created.split("T")[0])+" ")])]),t._v("     "),a("h5",{staticClass:"black--text"},[t._v(" LAST UPDATE : "),a("span",{staticClass:"blue--text"},[t._v(" "+t._s(t.post.date_updated.split("T")[0])+" ")])])]),a("p",[t._v(" "+t._s(t.post.content)+" ")])],1)],1)],1)],1)],1)],1)},r=[],n=a("1da1"),o=(a("96cf"),a("d722")),c={data:function(){return{post:{}}},methods:{DeletePost:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].deletePost(t.post._id);case 2:e.sent,t.$router.push({name:"Home",params:{message:"POST DELETED SUCCESSFULY"}});case 4:case"end":return e.stop()}}),e)})))()},EditPost:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$router.push({name:"updatepost",params:{id:t.post._id}});case 1:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].seePost(t.$route.params.post_id);case 2:t.post=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},i=c,u=a("2877"),l=a("6544"),d=a.n(l),p=a("8336"),v=a("b0af"),m=a("99d9"),C=a("62ad"),_=a("a523"),b=a("adda"),h=a("0fd9"),w=Object(u["a"])(i,s,r,!1,null,null,null);e["default"]=w.exports;d()(w,{VBtn:p["a"],VCard:v["a"],VCardActions:m["a"],VCardSubtitle:m["b"],VCardText:m["c"],VCol:C["a"],VContainer:_["a"],VImg:b["a"],VRow:h["a"]})}}]);
//# sourceMappingURL=about.5f136b86.js.map