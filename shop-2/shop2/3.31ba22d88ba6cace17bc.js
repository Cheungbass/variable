(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{227:function(t,e,i){"use strict";i.r(e);var s=i(344),a=i(252);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i(317),i(318);var o=i(67),c=Object(o.a)(a.default,s.a,s.b,!1,null,"12db0521",null);c.options.__file="src/page/goods/detail.vue",e.default=c.exports},252:function(t,e,i){"use strict";i.r(e);var s=i(253),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e.default=a.a},253:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=m(i(68)),a=i(97),n=m(i(304)),o=m(i(305)),c=m(i(306)),r=m(i(246)),l=m(i(307));function m(t){return t&&t.__esModule?t:{default:t}}var _=null;e.default={data:function(){return{starSeckill:!1,showIndicators:!0,itemData:{},searchDialog:!1,searchText:"",tabSelect:1,commentSelect:"",skuSelectedInfo:{selectPrice:0,selectStock:0,selectNum:1,selectedIndex:-1,selectedSku:[]},stockSku:[],day:0,hour:0,minute:0,second:0,commentList:[],page:0,consignee_name:"",consignee_mobile:"",province:"",city:"",area:"",pick_address:"",remark:"",show:!1,payment_id:2,payment_name:"支付宝",showPayType:!1,actions:[{name:"支付宝",disabled:!1,payment_id:2},{name:"微信",disabled:!1,payment_id:3},{name:"货到付款",disabled:!1,payment_id:1}],showComplaints:!1,actionsComplaints:[{name:"在线客服，点击投诉",disabled:!1,complaints_id:1},{name:"投诉电话：400-900-1231",disabled:!1,complaints_id:2}],showCertification:!1,max_promotion_price:"",max_market_price:"",min_promotion_price:"",min_market_price:""}},components:{sku:o.default,banner:c.default,MsgBubble:n.default,"address-picker":l.default},mounted:function(){this.sign=this.$route.query.sign||"",this.code=this.$route.query.code||"",this.source=this.$route.query.source||"",this.callback=this.$route.query.callback||"",this.item_id=this.$route.query.item_id||"",this.item_type=this.$route.query.item_type||"",this.addEvent(),this.getItem()},methods:{addEvent:function(){$(window).scroll(function(){$(".sku-dialog").length&&($(window).scrollTop()+2>=$(".sku-dialog").offset().top?$(".footer").hide():$(".footer").show())})},handle:function(t){console.log(t),this.province=t.province.name,this.city=t.city.name,this.area=t.district.name},selectPayType:function(){this.showPayType=!0},onSelect:function(t){this.showPayType=!1,this.payment_id=t.payment_id,this.payment_name=t.name},selectComplaints:function(){this.showComplaints=!0},onAddressSelect:function(){this.show=!0,_czc.push(["_trackEvent","预下单","收货人地址选择",""])},onSelectComplaints:function(t){1==t.complaints_id?location.href="https://qiyukf.com/client?k=97a8bb5512338e5d873d15a1148509c1":window.location.href="tel://"+"400-900-1231".replace(/-/g,"")},onShowCertification:function(){this.showCertification=!0},getItem:function(){var t=this;a.Api.getItemDetail({id:this.item_id}).then(function(e){var i=/<img(.*?)src="(.*?)"(.*?)>/g,s=e.data.item,a={};a.imgList=s.image_list,t.$refs.banner.initBanner(a),t.itemData=s,t.itemData.name&&(document.title=t.itemData.name),setTimeout(function(){t.itemData.detail.replace(i,'<img$1src="$2?x-oss-process=image/resize,w_750/quality,Q_60"$3>'),t.$set(t.itemData,"goodsDetail",t.itemData.detail)},1e3),t.renderComment(),t.renderSuccess(s)}).catch(function(t){console.log(111)}).then(function(){console.log(222)})},renderSuccess:function(t){var e=this;this.initSeckill(t),t.seller_info&&t.seller_info.customer_service_mobile?this.tel=t.seller_info.customer_service_mobile:this.tel=t.seller_info.mobile,t.item_sku_list&&t.item_sku_list.length?t.item_sku_list.forEach(function(t){e.max_market_price=e.max_market_price>t.market_price?e.max_market_price:t.market_price,e.max_promotion_price=e.max_promotion_price>t.promotion_price?e.max_promotion_price:t.promotion_price,e.min_market_price=e.min_market_price<t.market_price&&e.min_market_price?e.min_market_price:t.market_price,e.min_promotion_price=e.min_promotion_price<t.promotion_price&&e.min_promotion_price?e.min_promotion_price:t.promotion_price}):(this.max_promotion_price=this.min_promotion_price=t.promotion_price,this.max_market_price=this.min_market_price=t.market_price),t.pay_type_support=t.pay_type_support?JSON.parse(t.pay_type_support):[],t.pay_type_support.length>0&&(this.payment_id=t.pay_type_support[0],this.payment_name=["货到付款","支付宝","微信"][1*t.pay_type_support[0]-1],this.actions.map(function(e,i){-1==t.pay_type_support.indexOf(e.payment_id.toString())&&(e.disabled=!0)})),this.$refs.skuDialog.initSku(t)},initSeckill:function(t){t.seckill&&(this.starSeckill=!0,1==t.seckill_status?this.setSeckillTime(t.seckill_end_time):-1==t.seckill_status&&this.setSeckillTime(t.seckill_start_time))},setSeckillTime:function(t){var e=this,i=Math.abs(r.default.diffTime(t,"ms")),s=Math.floor(i/1e3/60/60/24),a=Math.floor(i/1e3/60/60)-24*s,n=Math.floor(i/1e3/60)-24*s*60-60*a,o=Math.floor(i/1e3)-24*s*60*60-60*a*60-60*n;this.day=s,this.hour=a,this.minute=n,this.second=o,_=setInterval(function(){0!==e.second?e.second-=1:0!==e.minute?(e.minute-=1,e.second=59):0!==e.hour?(e.hour-=1,e.minute=59,e.second=59):0!==e.day?(e.day-=1,e.hour=23,e.minute=59,e.second=59):e.cleanTimer()},1e3)},cleanTimer:function(){_&&(clearInterval(_),_=null,location.reload())},skuSelectedText:function(t,e){this.skuSelectedInfo.selectNum=t,this.skuSelectedInfo.selectedIndex=e},goSelectConfirm:function(t,e){var i=[{seller_id:this.itemData.seller_id,item_sku_id:e||"",sku_id:e||"",item_id:this.item_id,item_type:this.itemData.item_type,number:t||0,service_list:[]}];lib.storage.set("products",(0,s.default)(i)),lib.storage.set("sourceType",2),this.$router.push({path:"item-confirm",query:{t_id:this.t_id||"",star_user_id:this.star_user_id||"",buy_limit:this.itemData.buy_limit?this.buyLimit:"",item_free_postage_conf_string:this.itemData.free_postage_config_mark&&this.itemData.item_free_postage_conf_string||""}})},renderComment:function(t){var e=this;this.isAlone=t,this.isAjax||(this.isAjax=!0,a.Api.questionList({offset:20*this.page,count:20,user_id:this.itemData.seller_id}).then(function(t){var i=t.data.after_sales_question_list;Array.isArray(i)&&i.length?e.commentList=i:e.commentList=[]}).catch(function(t){e.$toast({message:t.msg})}))},dialogTel:function(){var t=this;this.$dialog.confirm({title:"提示",message:"确认拨打电话"+this.tel+"吗？"}).then(function(){window.location.href="tel:"+t.tel})},confirm:function(t){var e=this;setTimeout(function(){e.scrollToEnd()},320),t.preventDefault(),t.stopPropagation()},scrollToEnd:function(){return $(window).scrollTop($(".sku-dialog").offset().top),!1},orderSubmit:function(){_czc.push(["_trackEvent","预下单","提交订单",""]),0==this.skuSelectedInfo.selectedIndex||this.skuSelectedInfo.selectedIndex||!this.itemData.item_sku_list.length?this.pay():this.$toast({message:"没有选中规格"})},pay:function(){this.checkStock()&&this.validate()&&(_ks_trace.push({event:"click3"}),1!=this.payment_id?this.goOnlinePay():this.goToConfirmOrder())},checkStock:function(){var t=!0;if(this.itemData.item_sku_list&&this.itemData.item_sku_list.length)for(var e=0;e<this.itemData.item_sku_list.length;e++)e==this.skuSelectedInfo.selectedIndex&&this.itemData.item_sku_list[e].stock_num<1&&(t=!1,this.$toast({message:"库存不足"}));else this.itemData.stock_num<1&&(t=!1,this.$toast({message:"库存不足"}));return t},validate:function(){if(""==this.consignee_name)return this.$toast({message:"请添加收货人姓名"}),!1;return/^1[3,4,5,6,7,8,9]\d{9}$/.test(this.consignee_mobile)?""==this.province?(this.$toast({message:"请选择收货地区"}),!1):""!=this.pick_address||(this.$toast({message:"请填写详细地址"}),!1):(this.$toast({message:"请填写收货人手机号"}),!1)},goOnlinePay:function(){var t=this,e=this;e.isPayAjax||e.isPayUrl||(e.isPayAjax=!0,a.Api.orderOnlineAdd({item_id:this.itemData.id,item_sku_id:this.itemData.item_sku_list?this.itemData.item_sku_list[this.skuSelectedInfo.selectedIndex].id:"",number:this.skuSelectedInfo.selectNum,pay_type:this.payment_id,consignee_name:this.consignee_name,consignee_mobile:this.consignee_mobile,consignee_address:this.province+"-"+this.city+"-"+this.area+this.pick_address,remark:this.remark,source:e.source,callback:e.callback}).then(function(i){if(e.isPayAjax=!1,1==e.payment_id)return lib.storage.set("isPay",!0),void t.$router.push({path:"order-detail",query:{order_sn:i.data.user_order.order_sn||""}});e.getPayUrl(i.data.user_order.id,e.payment_id)}).catch(function(i){e.isPayAjax=!1,t.$toast({message:i.msg})}))},goToConfirmOrder:function(){var t=this;this.isPayAjax||(this.isPayAjax=!0,a.Api.orderAdd({item_id:this.itemData.id,item_sku_id:this.itemData.item_sku_list?this.itemData.item_sku_list[this.skuSelectedInfo.selectedIndex].id:"",number:this.skuSelectedInfo.selectNum,pay_type:this.payment_id,consignee_name:this.consignee_name,consignee_mobile:this.consignee_mobile,consignee_address:this.province+"-"+this.city+"-"+this.area+this.pick_address,remark:this.remark,source:this.source,callback:this.callback}).then(function(e){t.$router.push({path:"/pay-success",query:{order_sn:e.data.user_order.order_sn,pay_amount:e.data.user_order.pay_amount,consignee_name:t.consignee_name,consignee_mobile:t.consignee_mobile,consignee_address:t.province+"-"+t.city+"-"+t.area+t.pick_address,remark:t.remark,item_name:e.data.user_order.order_item_list[0].item_name}})}).catch(function(e){t.$toast({message:e.msg})}))},getPayUrl:function(t,e){var i=this,s=this;s.isPayUrl||(s.isPayUrl=!0,a.Api.wapPaymentUrl({order_id:t,pay_type:e}).then(function(t){s.isPayUrl=!1,2==s.payment_id?$("body").html(t.data.params.request_form):location.href=t.data.pay_url}).catch(function(t){s.isPayUrl=!1,t.msg&&i.$toast({message:"获取支付失败！"})}))},searchOrder:function(){this.searchDialog=!0},search:function(){this.$router.push({path:"/my-order",query:{consignee_mobile:this.searchText}})}},destroyed:function(){$(window).unbind(event,scroll)}}},266:function(t,e,i){},267:function(t,e,i){},317:function(t,e,i){"use strict";var s=i(266);i.n(s).a},318:function(t,e,i){"use strict";var s=i(267);i.n(s).a},344:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container"},[i("div",{staticClass:"search-btn",on:{click:t.searchOrder}},[i("img",{attrs:{src:"http://img.mockuai.com/tms/2019/5/22/upload_0c14ce045faec0a3eb58c748616387dd.png",alt:""}}),t._v("查询订单\n        ")]),t._v(" "),i("banner",{ref:"banner",attrs:{isSeckill:t.starSeckill,showIndicators:t.showIndicators}}),t._v(" "),i("div",{staticStyle:{background:"#fff"}},[t.starSeckill&&1==t.itemData.seckill_status?i("div",{staticClass:"seckill"},[i("div",{staticClass:"seckill-price"},[i("div",{staticClass:"seckill-price-market"},[t._v("￥"),i("span",{staticClass:"seckill-price-num"},[t._v(t._s(t._f("getPriceNum")(t.itemData.seckill_price)))]),i("span",[t._v(t._s(t._f("getPriceDecimals")(t.itemData.seckill_price)))])]),t._v(" "),i("div",{staticClass:"seckill-price-promotion"},[i("img",{attrs:{src:"http://img.mockuai.com/tms/2019/5/14/upload_88ea37ebb723b0512cadd0ca308404c3.png",alt:""}}),t._v(" "),i("span",{staticClass:"seckill-price-delete"},[t._v("￥"+t._s(t._f("filterPrice")(t.itemData.promotion_price)))])])]),t._v(" "),i("div",{staticClass:"seckill-time"},[i("div",{staticClass:"seckill-time-countdown"},[i("div",[t._v("距结束还剩:")]),t._v(" "),i("div",[i("span",[t._v(t._s(t.day>9?t.day:"0"+t.day))]),t._v("天"),i("span",[t._v(t._s(t.hour>9?t.hour:"0"+t.hour))]),t._v(":"),i("span",[t._v(t._s(t.minute>9?t.minute:"0"+t.minute))]),t._v(":"),i("span",[t._v(t._s(t.second>9?t.second:"0"+t.second))])])])])]):i("div",{staticClass:"item-body"},[t.max_promotion_price==t.min_promotion_price?i("div",[i("span",{staticClass:"current_price RMB"},[t._v(t._s(t._f("getPriceNum")(t.max_promotion_price))),i("span",{staticClass:"sm_price"},[t._v(t._s(t._f("getPriceDecimals")(t.max_promotion_price)))])])]):i("div",[i("span",{staticClass:"current_price RMB"},[t._v(t._s(t._f("filterPrice")(t.min_promotion_price))+" - ")]),i("span",{staticClass:"current_price RMB"},[t._v(t._s(t._f("filterPrice")(t.max_promotion_price)))])])]),t._v(" "),i("h1",[t._v(t._s(t.itemData.name))]),t._v(" "),i("div",{staticClass:"item-tag-list bar-priodect clearfix font-xiti"},[t._m(0),t._v(" "),i("div",{staticClass:"item-tag shop-certification",on:{click:t.onShowCertification}},[i("img",{attrs:{src:"http://img.mockuai.com/tms/2019/5/13/upload_77db7472e14fa9f66e8aaa87560c3953.png"}}),i("span",[t._v("店铺已认证")])])])]),t._v(" "),i("div",{staticClass:"goods-detail-middle"},[i("div",{staticClass:"middle-top"},[i("ul",[i("li",{class:1==t.tabSelect?"hover":"",on:{click:function(e){t.tabSelect=1}}},[i("span",[t._v("商品详情")])]),t._v(" "),i("li",{class:2==t.tabSelect?"hover":"",on:{click:function(e){t.tabSelect=2}}},[i("span",[t._v("售后咨询")])])])]),t._v(" "),1==t.tabSelect?i("div",{staticClass:"pro detail-desc",attrs:{id:"detail"},domProps:{innerHTML:t._s(t.itemData.goodsDetail)}}):t._e()]),t._v(" "),2==t.tabSelect?i("div",{staticClass:"pro pro-comment",attrs:{id:"comment"}},[t.commentList.length?i("div",{staticClass:"comment-lists"},t._l(t.commentList,function(e,s){return e.name&&e.description?i("div",{staticClass:"comment-item",on:{click:function(e){t.commentSelect=s}}},[i("p",{class:t.commentSelect==s?"toggle-down comment-content":"comment-content"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"text-info",style:t.commentSelect==s?"display:block":""},[e.description?i("span",[t._v(t._s(e.description))]):t._e()])]):t._e()})):i("div",{staticClass:"no-comment"},[i("div",{staticClass:"comment-icon"}),i("p",{staticClass:"tips"},[t._v("商品暂无售后咨询~")])])]):t._e(),t._v(" "),i("div",{staticClass:"sku-dialog",attrs:{id:"sku-box","control-type":""}},[t._m(1),t._v(" "),i("sku",{ref:"skuDialog",on:{onItemClick:t.skuSelectedText}}),t._v(" "),i("div",{staticClass:"module tab-pick-info isMulshop-no"},[i("div",{staticClass:"storeAddr store-addr"}),t._v(" "),i("div",{staticClass:"pick-form",attrs:{id:"pickInfo"}},[i("div",{staticClass:"input-item"},[i("label",[t._v("收货人")]),t._v(" "),i("div",{staticClass:"input-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.consignee_name,expression:"consignee_name"}],attrs:{id:"detailName",type:"text",maxlength:"15",name:"pick-name",placeholder:"收货人姓名",onclick:"_czc.push(['_trackEvent', '预下单', '收货人姓名', '']);"},domProps:{value:t.consignee_name},on:{input:function(e){e.target.composing||(t.consignee_name=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"input-item"},[i("label",[t._v("手机号")]),t._v(" "),i("div",{staticClass:"input-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.consignee_mobile,expression:"consignee_mobile"}],attrs:{id:"detailMobile",type:"tel",name:"pick-phone",maxlength:"11",placeholder:"请填写收货人手机号",onclick:"_czc.push(['_trackEvent', '预下单', '收货人手机号', '']);"},domProps:{value:t.consignee_mobile},on:{input:function(e){e.target.composing||(t.consignee_mobile=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"input-item input-select-address"},[i("label",[t._v("所在地区")]),t._v(" "),i("div",{staticClass:"input-box",attrs:{id:"detailAddressSelect"},on:{click:t.onAddressSelect}},[i("div",{staticClass:"citypicker"},[t._v(t._s(t.province?t.province+"-"+t.city+"-"+t.area:"请选择收货地址"))])])]),t._v(" "),i("div",{staticClass:"input-item"},[i("label",[t._v("详细地址")]),t._v(" "),i("div",{staticClass:"input-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.pick_address,expression:"pick_address"}],attrs:{id:"detailAddress",type:"text",name:"pick-address",maxlength:"40",placeholder:"请填写详细地址",onclick:"_czc.push(['_trackEvent', '预下单', '收货人详细地址', '']);"},domProps:{value:t.pick_address},on:{input:function(e){e.target.composing||(t.pick_address=e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"freight"},[t._v("运费 "),i("span",{staticStyle:{float:"right"}},[t._v(t._s(t.itemData.freight?"￥"+t.itemData.freight/100:"包邮"))])]),t._v(" "),i("div",{staticClass:"total-pay"},[t._v("合计\n                    "),t.starSeckill&&1==t.itemData.seckill_status?i("span",{staticClass:"money",staticStyle:{float:"right"}},[t._v("\n                        ￥"+t._s(t._f("filterPrice")(t.itemData.freight?t.itemData.freight+t.itemData.seckill_price*t.skuSelectedInfo.selectNum:t.itemData.seckill_price*t.skuSelectedInfo.selectNum))+"\n                    ")]):1*t.skuSelectedInfo.selectedIndex>0&&t.itemData.item_sku_list?i("span",{staticClass:"money",staticStyle:{float:"right"}},[t._v("\n                        ￥"+t._s(t._f("filterPrice")(t.itemData.freight?t.itemData.freight+t.itemData.item_sku_list[t.skuSelectedInfo.selectedIndex].promotion_price*t.skuSelectedInfo.selectNum:t.itemData.item_sku_list[t.skuSelectedInfo.selectedIndex].promotion_price*t.skuSelectedInfo.selectNum))+"\n                    ")]):i("span",{staticClass:"money",staticStyle:{float:"right"}},[t._v("\n                        ￥"+t._s(t._f("filterPrice")(t.itemData.freight?t.itemData.freight+t.itemData.promotion_price*t.skuSelectedInfo.selectNum:t.itemData.promotion_price*t.skuSelectedInfo.selectNum))+"\n                    ")])])]),t._v(" "),i("div",{staticClass:"module tab-pick-info isMulshop-no"},[i("div",{staticClass:"pay-type",on:{click:t.selectPayType}},[t._v("付款方式 "),i("span",{staticStyle:{float:"right"}},[t._v(t._s(t.payment_name))])]),t._v(" "),i("div",{staticClass:"input-item"},[i("label",[t._v("买家留言")]),t._v(" "),i("div",{staticClass:"input-box"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.remark,expression:"remark"}],attrs:{type:"text",name:"pick-remark",maxlength:"40",placeholder:"选填：对快递等的特殊要求"},domProps:{value:t.remark},on:{input:function(e){e.target.composing||(t.remark=e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"footer-bottom"},[i("div",{staticClass:"order-submit",attrs:{id:"detailSubmit"},on:{click:t.orderSubmit}},[t._v("提交订单")])]),t._v(" "),i("div",{staticClass:"footer-bottom"},[i("div",{staticClass:"dialog-tel",on:{click:t.dialogTel}},[t._v("联系商家")])]),t._v(" "),i("div",{staticStyle:{"text-align":"center","font-size":"12px",color:"#666","line-height":"20px","padding-top":"10px"}},[t._v("无敌掌柜提供技术支持")]),t._v(" "),i("div",{staticClass:"kefu-type",staticStyle:{"text-align":"center","font-size":"12px",color:"#666","line-height":"20px","padding-bottom":"10px"},on:{click:t.selectComplaints}},[t._v("我要投诉")]),t._v(" "),i("div",{staticClass:"footer"},[i("div",{staticClass:"sku-confirm sku-item"},[i("div",{staticClass:"dialogTel tel left",on:{click:t.dialogTel}},[i("img",{staticStyle:{width:"13px"},attrs:{src:"http://img.mockuai.com/tms/2019/5/16/upload_8221728d30e6750563c3293a438ff61e.png"}}),t._v(" "),i("span",[t._v("电话咨询")])]),t._v(" "),i("div",{staticClass:"pro-buy-red right confirm",attrs:{id:""},on:{click:t.confirm}},[t._v("立即抢购")])])])],1)],1),t._v(" "),i("address-picker",{on:{confirm:t.handle},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),t._v(" "),i("mk-action-sheet",{attrs:{actions:t.actions},on:{select:t.onSelect},model:{value:t.showPayType,callback:function(e){t.showPayType=e},expression:"showPayType"}}),t._v(" "),i("mk-action-sheet",{attrs:{actions:t.actionsComplaints,"cancel-text":"取消"},on:{select:t.onSelectComplaints},model:{value:t.showComplaints,callback:function(e){t.showComplaints=e},expression:"showComplaints"}}),t._v(" "),i("mk-dialog",{attrs:{title:"查询订单","show-cancel-button":""},on:{confirm:t.search},model:{value:t.searchDialog,callback:function(e){t.searchDialog=e},expression:"searchDialog"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"search-input",attrs:{type:"text",placeholder:"请输入收货人手机号"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})]),t._v(" "),t.itemData.seller_info?i("mk-dialog",{model:{value:t.showCertification,callback:function(e){t.showCertification=e},expression:"showCertification"}},[i("div",{staticClass:"certification"},[i("div",{staticClass:"certification-item"},[i("div",{staticClass:"certification-item-name"},[t._v("公司名称")]),t._v(" "),i("div",{staticClass:"certification-item-content"},[t._v(t._s(t.itemData.seller_info.company_name))])]),t._v(" "),i("div",{staticClass:"certification-item"},[i("div",{staticClass:"certification-item-name"},[t._v("所属行业")]),t._v(" "),i("div",{staticClass:"certification-item-content"},[t._v(t._s(t.itemData.seller_info.business_info))])]),t._v(" "),i("div",{staticClass:"certification-item"},[i("div",{staticClass:"certification-item-name"},[t._v("营业执照")]),t._v(" "),i("div",{staticClass:"certification-item-content"},[i("img",{attrs:{src:t.itemData.seller_info.business_license,alt:""}})])])])]):t._e()],1)},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item-tag"},[e("img",{attrs:{src:"http://img.mockuai.com/tms/2019/5/13/upload_77db7472e14fa9f66e8aaa87560c3953.png"}}),e("span",[this._v("七天无理由退货")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"middle-top-title"},[e("ul",[e("li",[e("span",{staticClass:"hover",attrs:{po:"1"}},[this._v("订单信息")])])])])}];s._withStripped=!0,i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})}}]);