(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/help/Help"],{240:function(e,n,t){"use strict";(function(e,n){var o=t(4);t(26);o(t(25));var u=o(t(241));e.__webpack_require_UNI_MP_PLUGIN__=t,n(u.default)}).call(this,t(1)["default"],t(2)["createPage"])},241:function(e,n,t){"use strict";t.r(n);var o=t(242),u=t(244);for(var i in u)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(i);t(246);var r,s=t(32),l=Object(s["default"])(u["default"],o["render"],o["staticRenderFns"],!1,null,"45b729c6",null,!1,o["components"],r);l.options.__file="pages/help/Help.vue",n["default"]=l.exports},242:function(e,n,t){"use strict";t.r(n);var o=t(243);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},243:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return u})),t.d(n,"staticRenderFns",(function(){return r})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return o}));try{o={uToast:function(){return t.e("uni_modules/uview-ui/components/u-toast/u-toast").then(t.bind(null,352))},uRow:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-row/u-row")]).then(t.bind(null,328))},uCol:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-col/u-col")]).then(t.bind(null,336))},uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,412))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var u=function(){var e=this,n=e.$createElement,t=(e._self._c,e.Problem.length),o=e.Problem.length,u=e.shoppingGuide.length,i=e.shoppingGuide.length,r=e.orderGuide.length,s=e.orderGuide.length,l=e.payment.length,c=e.payment.length,a=e.logistics.length,d=e.logistics.length,f=e.After.length,m=e.After.length,g=e.returnGoods.length,h=e.returnGoods.length,p=e.http.length,b=e.http.length,v=e.lnves.length,_=e.lnves.length;e.$mp.data=Object.assign({},{$root:{g0:t,g1:o,g2:u,g3:i,g4:r,g5:s,g6:l,g7:c,g8:a,g9:d,g10:f,g11:m,g12:g,g13:h,g14:p,g15:b,g16:v,g17:_}})},i=!1,r=[];u._withStripped=!0},244:function(e,n,t){"use strict";t.r(n);var o=t(245),u=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=u.a},245:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"Help",data:function(){return{tabs:[{title:"常见问题",num:1,isnab:!0},{title:"购物指南",num:2,isnab:!1},{title:"订单指南",num:3,isnab:!1},{title:"支付问题",num:4,isnab:!1},{title:"物流问题",num:5,isnab:!1},{title:"售后问题",num:6,isnab:!1},{title:"退货细则",num:7,isnab:!1},{title:"协议规则",num:8,isnab:!1},{title:"招商加盟",num:9,isnab:!1}],Problem:[{text:"商品质量为题"},{text:"超时未收到货"},{text:"物流地址发错"}],shoppingGuide:[{text:"发什么快递"},{text:"全场包邮吗"},{text:"是否是正品"}],orderGuide:[{text:"如何查询订单"}],payment:[],logistics:[],After:[],returnGoods:[],http:[{text:"正品保证"},{text:"买贵必赔"},{text:"全场包邮"}],lnves:[],isNabCommod:1}},methods:{tabItem:function(e){this.tabs.forEach((function(e){e.isnab=!1})),e.isnab=!0,this.isNabCommod=e.num,this.show()},show:function(){this.$refs.uToast.show({type:"loading",title:"正在加载",message:"正在加载",duration:"500"})},Jump:function(){this.$refs.uToast.show({message:"服务器请求失败"})}}};n.default=o},246:function(e,n,t){"use strict";t.r(n);var o=t(247),u=t.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=u.a},247:function(e,n,t){}},[[240,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/help/Help.js.map