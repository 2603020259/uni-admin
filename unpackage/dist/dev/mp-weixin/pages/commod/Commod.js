(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/commod/Commod"],{192:function(n,e,t){"use strict";(function(n,e){var o=t(4);t(26);o(t(25));var i=o(t(193));n.__webpack_require_UNI_MP_PLUGIN__=t,e(i.default)}).call(this,t(1)["default"],t(2)["createPage"])},193:function(n,e,t){"use strict";t.r(e);var o=t(194),i=t(196);for(var u in i)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(u);t(198);var r,s=t(32),c=Object(s["default"])(i["default"],o["render"],o["staticRenderFns"],!1,null,"54e7aa74",null,!1,o["components"],r);c.options.__file="pages/commod/Commod.vue",e["default"]=c.exports},194:function(n,e,t){"use strict";t.r(e);var o=t(195);t.d(e,"render",(function(){return o["render"]})),t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(e,"components",(function(){return o["components"]}))},195:function(n,e,t){"use strict";var o;t.r(e),t.d(e,"render",(function(){return i})),t.d(e,"staticRenderFns",(function(){return r})),t.d(e,"recyclableRender",(function(){return u})),t.d(e,"components",(function(){return o}));try{o={uTabs:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-tabs/u-tabs")]).then(t.bind(null,421))},uSwiper:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-swiper/u-swiper")]).then(t.bind(null,296))},uNumberBox:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-number-box/u-number-box")]).then(t.bind(null,394))},"u-Image":function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u--image/u--image")]).then(t.bind(null,365))},uRate:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-rate/u-rate")]).then(t.bind(null,429))},uniGoodsNav:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav")]).then(t.bind(null,437))},uPopup:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(t.bind(null,448))},uTag:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-tag/u-tag")]).then(t.bind(null,456))},uButton:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-button/u-button")]).then(t.bind(null,402))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var i=function(){var n=this,e=n.$createElement;n._self._c},u=!1,r=[];i._withStripped=!0},196:function(n,e,t){"use strict";t.r(e);var o=t(197),i=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=i.a},197:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;t(34);var o={data:function(){return{current:0,scrollTop:0,item:{},value:1,values:5,show:!1,info:0,orderData:[],old:{scrollTop:0},list:[{name:"商品简介"},{name:"商品详情"},{name:"商品评价"}],listImg:["https://gd-hbimg.huaban.com/7127b4a013ab1475b462e989e70ff69a146caadb43f79-oKPA5a","https://gd-hbimg.huaban.com/5d31d35917bb412d997869b7eecdfe8d355a7fd9a9eaf-6qqVnF_fw1200","https://gd-hbimg.huaban.com/98907bacc0b0df84a4774495cf52bd150d1da9697d104-RdRIHE_fw1200"],options:[{icon:"headphones",text:"客服"},{icon:"heart",text:"收藏"},{icon:"cart",text:"购物车",info:0}],buttonGroup:[{text:"加入购物车",backgroundColor:"#ff0000",color:"#fff"},{text:"立即购买",backgroundColor:"#ffa200",color:"#fff"}]}},methods:{click:function(n){0===n.index?this.scrollTop=0:1===n.index?this.scrollTop=510:2===n.index&&(this.scrollTop=4650)},submit:function(){this.options[2].info=this.info,this.show=!1,this.$set(this.item,"num",this.value),this.$set(this.item,"isShow",!1),this.$set(this.item,"isEnd",!0),this.$store.commit("ORDER",this.item),this.initData()},open:function(){},close:function(){this.show=!1},buttonClick:function(e){0===e.index&&(console.log("添加购物车"),this.show=!0),1===e.index&&(this.show=!0,console.log("立即购买"),n.switchTab({url:"/pages/order/Order"}),this.options[2].info=this.info,this.$set(this.item,"num",this.value),this.$set(this.item,"isShow",!1),this.$set(this.item,"isEnd",!0),this.$store.commit("ORDER",this.item))},onClick:function(e){1===e.index&&("heart"===e.content.icon?e.content.icon="heart-filled":e.content.icon="heart"),2===e.index&&n.switchTab({url:"/pages/order/Order"})},scroll:function(n){n.detail.scrollTop<=480?this.current=0:n.detail.scrollTop>=480&&(this.current=1),n.detail.scrollTop>=4650&&(this.current=2),this.old.scrollTop=n.detail.scrollTop},valChange:function(n){console.log("当前值为: "+n.value),this.value=n.value},initData:function(){this.orderData=this.$store.state.orderData,this.options[2].info=this.orderData.length}},onLoad:function(n){this.item=JSON.parse(decodeURIComponent(n.item)),this.listImg.unshift(this.item.path)},onShow:function(){this.initData()}};e.default=o}).call(this,t(2)["default"])},198:function(n,e,t){"use strict";t.r(e);var o=t(199),i=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=i.a},199:function(n,e,t){}},[[192,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/commod/Commod.js.map