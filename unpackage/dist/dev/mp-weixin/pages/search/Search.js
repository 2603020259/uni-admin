(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/Search"],{272:function(n,e,t){"use strict";(function(n,e){var o=t(4);t(26);o(t(25));var r=o(t(273));n.__webpack_require_UNI_MP_PLUGIN__=t,e(r.default)}).call(this,t(1)["default"],t(2)["createPage"])},273:function(n,e,t){"use strict";t.r(e);var o=t(274),r=t(276);for(var s in r)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(s);t(278);var i,u=t(32),c=Object(u["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"7880c634",null,!1,o["components"],i);c.options.__file="pages/search/Search.vue",e["default"]=c.exports},274:function(n,e,t){"use strict";t.r(e);var o=t(275);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},275:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return r})),t.d(e,"staticRenderFns",(function(){return i})),t.d(e,"recyclableRender",(function(){return s})),t.d(e,"components",(function(){return o}));try{o={uToast:function(){return t.e("uni_modules/uview-ui/components/u-toast/u-toast").then(t.bind(null,352))},"u-Input":function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u--input/u--input")]).then(t.bind(null,359))},uTag:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-tag/u-tag")]).then(t.bind(null,456))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement,t=(n._self._c,n.lists.length),o=n.lists.length,r=n.lists.length;n.$mp.data=Object.assign({},{$root:{g0:t,g1:o,g2:r}})},s=!1,i=[];r._withStripped=!0},276:function(n,e,t){"use strict";t.r(e);var o=t(277),r=t.n(o);for(var s in o)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(s);e["default"]=r.a},277:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={name:"Search",data:function(){return{list:[],value:"",lists:[]}},methods:{twoCode:function(){n.scanCode({success:function(n){console.log("条码类型："+n.scanType),console.log("条码内容："+n.result)}})},Search:function(e){var t=this;""!==e?(this.list.push(e),this.$nextTick((function(){t.value=""})),n.navigateTo({url:"/pages/goodsList/GoodsList"}),this.$store.commit("SEARCHVALUE",this.value)):this.$refs.uToast.show({message:"搜索内容不能为空"})},Delete:function(n){this.list=this.list.filter((function(e){return e!==n}))},Jump:function(e){n.navigateTo({url:"/pages/goodsList/GoodsList"}),this.$store.commit("SEARCHVALUE",e)}},watch:{list:{deep:!0,handler:function(e){n.setStorageSync("name",JSON.stringify(e));var t=JSON.parse(n.getStorageSync("name"));console.log(888,t),this.lists=t}}},onShow:function(){var e=this;this.$nextTick((function(){var t=JSON.parse(n.getStorageSync("name"));console.log(888,t),e.lists=t,e.list=t}))}};e.default=t}).call(this,t(2)["default"])},278:function(n,e,t){"use strict";t.r(e);var o=t(279),r=t.n(o);for(var s in o)["default"].indexOf(s)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(s);e["default"]=r.a},279:function(n,e,t){}},[[272,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/search/Search.js.map