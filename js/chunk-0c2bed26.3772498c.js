(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c2bed26"],{"079b":function(t,e,n){"use strict";n("917f")},2532:function(t,e,n){"use strict";var i=n("23e7"),c=n("5a34"),s=n("1d80"),r=n("ab13");i({target:"String",proto:!0,forced:!r("includes")},{includes:function(t){return!!~String(s(this)).indexOf(c(t),arguments.length>1?arguments[1]:void 0)}})},"2e90":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods-info van-hairline--bottom"},[n("div",{staticClass:"img-wrapper"},[n("img",{ref:"img",attrs:{src:t.item.images[0]}})]),n("ul",{staticClass:"info"},[n("li",{staticClass:"title overflow-text"},[t._v(t._s(t.item.title))]),n("li",{staticClass:"desc overflow-text"},[t._v(t._s(t.item.desc))]),n("li",{staticClass:"tags"},t._l(t.item.tags,(function(e){return n("span",{key:e},[t._v(t._s(e))])})),0),n("li",{staticClass:"price"},[n("div",{staticClass:"price-item"},[n("span",{staticClass:"price-num"},[t._v("¥"+t._s(t.item.price))]),n("span",{staticClass:"goods-num"},[t.goodsObj[t.item.id]>0?n("p",{on:{touchend:function(e){return t.counter(t.item.id,-1)}}},[n("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png"}})]):t._e(),t.goodsObj[t.item.id]>0?n("p",[t._v(t._s(t.goodsObj[t.item.id]))]):t._e(),n("p",{on:{touchend:function(e){return t.counter(t.item.id,1)}}},[n("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png"}})])])])])])])},c=[],s=n("5530"),r=n("2f62"),a=n("a026"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.exist?n("div",{staticClass:"item",style:{width:t.width+"px",height:t.height+"px",opacity:t.opacity,transform:"translate("+t.moveX+"px,\n  "+t.moveY+"px) scale("+t.sx+", "+t.sy+")"}},[n("img",{attrs:{src:t.src}})]):t._e()},u=[],l={},d=l,f=(n("4972"),n("2877")),h=Object(f["a"])(d,o,u,!1,null,"49e12b06",null),p=h.exports,g=a["a"].extend(p),m=function(t){var e=t.startX,n=t.startY,i=t.endX,c=t.endY,s=t.src,r=t.width,a=t.height,o=new g({el:document.createElement("div"),data:function(){return{moveX:e,moveY:n,sx:1,sy:1,opacity:1,exist:!0,src:s,width:r,height:a}}});document.body.appendChild(o.$el),setTimeout((function(){o.moveX=i,o.moveY=c,o.sx=.1,o.sy=.1,o.opacity=0}),0),setTimeout((function(){o.exist=!1}),1e3)},b={props:["item","goodsObj","nofly"],methods:Object(s["a"])(Object(s["a"])({},Object(r["c"])(["storageChange"])),{},{counter:function(t,e){if(this.storageChange({id:t,value:e}),-1!==e&&(console.log(this.nofly),!this.nofly)){var n=this.$refs.img.getBoundingClientRect(),i=n.left,c=n.top,s=this.$refs.img,r=s.offsetWidth,a=s.offsetHeight,o=document.getElementById("shop-cart"),u=o.getBoundingClientRect(),l=u.top,d=u.left,f=o.offsetWidth,h=o.offsetHeight,p=d+f/2,g=l+h/2;console.log(i,c,l,d),m({startX:i,startY:c,endX:p,endY:g,src:this.$refs.img.src,width:r,height:a})}}})},v=b,x=(n("a4d4"),Object(f["a"])(v,i,c,!1,null,"00bdffbe",null));e["a"]=x.exports},"44e7":function(t,e,n){var i=n("861d"),c=n("c6b6"),s=n("b622"),r=s("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==c(t))}},4972:function(t,e,n){"use strict";n("e153")},"5a34":function(t,e,n){var i=n("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},"917f":function(t,e,n){},a15b:function(t,e,n){"use strict";var i=n("23e7"),c=n("44ad"),s=n("fc6a"),r=n("a640"),a=[].join,o=c!=Object,u=r("join",",");i({target:"Array",proto:!0,forced:o||!u},{join:function(t){return a.call(s(this),void 0===t?",":t)}})},a162:function(t,e,n){},a4d4:function(t,e,n){"use strict";n("a162")},ab13:function(t,e,n){var i=n("b622"),c=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[c]=!1,"/./"[t](e)}catch(i){}}return!1}},b789:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shopping-cart-wrapper"},[n("div",{staticClass:"cart-title"},[n("van-nav-bar",{attrs:{title:"购物车",color:"#ff1a90",fixed:"","right-text":"删除"},on:{"click-right":t.onDel}})],1),n("div",{staticClass:"cart-list"},[n("van-checkbox-group",{ref:"checkboxGroup",model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},t._l(t.cartList,(function(e){return n("div",{key:e.id,staticClass:"check-box"},[n("van-checkbox",{staticClass:"checkbox",attrs:{name:e.id,"checked-color":"#ff1a90"}}),n("list",{staticClass:"cart-goods",attrs:{item:e,goodsObj:t.counteMap,nofly:!0}})],1)})),0)],1),n("div",{staticClass:"settle-accounts"},[n("van-submit-bar",{attrs:{price:t.allMoney,"button-text":"去结算("+t.totalNum+")"},on:{submit:t.onSubmit}},[n("van-checkbox",{on:{click:t.checkAll},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("全选")])],1)],1)])},c=[],s=(n("4de4"),n("4160"),n("caad"),n("a15b"),n("13d5"),n("b64b"),n("2532"),n("159b"),n("96cf"),n("1da1")),r=n("5530"),a=n("2e90"),o=n("d399"),u=n("2241"),l=n("2f62"),d={components:{List:a["a"]},data:function(){return{result:[],cartList:[],checked:!1}},created:function(){this.getCartData()},methods:Object(r["a"])(Object(r["a"])({},Object(l["c"])(["storageChange"])),{},{checkAll:function(){this.checked?this.$refs.checkboxGroup.toggleAll(!0):this.$refs.checkboxGroup.toggleAll(!1)},onSubmit:function(){},onSettleAccounts:function(){},getCartData:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=Object.keys(t.counteMap),e.next=3,t.$http.getGoodsByIds(n.join());case 3:i=e.sent,t.cartList=i.list;case 5:case"end":return e.stop()}}),e)})))()},onDel:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.result.length){e.next=3;break}return Object(o["a"])("请选择商品"),e.abrupt("return");case 3:return e.prev=3,e.next=6,u["a"].confirm({message:"确认删除已选商品"});case 6:t.result.forEach((function(e){t.storageChange({id:e,value:-1/0}),t.cartList=t.cartList.filter((function(e){return!t.result.includes(e.id)}))})),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](3),Object(o["a"])("我已取消,继续购买");case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))()}}),computed:Object(r["a"])({allMoney:function(){var t=this,e=this.cartList.filter((function(e){return t.result.includes(e.id)}));return e.reduce((function(e,n){var i=t.counteMap[n.id]||0;return Math.round(i*n.price*100)+e}),0)},totalNum:function(){var t=this,e=this.cartList.filter((function(e){return t.result.includes(e.id)})),n=e.reduce((function(e,n){return e+(t.counteMap[n.id]||0)}),0);return console.log(n,e,this.cartList,this.result),n}},Object(l["d"])({counteMap:function(t){return t.counteMap}})),watch:{result:function(){this.result.length===this.cartList.length?this.checked=!0:this.checked=!1}}},f=d,h=(n("079b"),n("2877")),p=Object(h["a"])(f,i,c,!1,null,"095dc985",null);e["default"]=p.exports},caad:function(t,e,n){"use strict";var i=n("23e7"),c=n("4d64").includes,s=n("44d2"),r=n("ae40"),a=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:!a},{includes:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")},e153:function(t,e,n){}}]);
//# sourceMappingURL=chunk-0c2bed26.3772498c.js.map