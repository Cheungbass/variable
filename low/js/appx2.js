;(function() {
    /**
     * 动态加载js文件
     * @param  {string}   url      js文件的url地址
     * @param  {Function} callback 加载完成后的回调函数
     */
    var _getScript = function(url, callback) {
        var head = document.getElementsByTagName('head')[0],
            js = document.createElement('script');

        js.setAttribute('type', 'text/javascript');
        js.setAttribute('src', url);

        head.appendChild(js);

        //执行回调
        var callbackFn = function(){
            if(typeof callback === 'function'){
                callback();
            }
        };

        if (document.all) { //IE
            js.onreadystatechange = function() {
                if (js.readyState == 'loaded' || js.readyState == 'complete') {
                    callbackFn();
                }
            }
        } else {
            js.onload = function() {
                callbackFn();
            }
        }
    }


})();

var alertTimes = 0;
function wxalert(msg, btn, callback) {
    if (alertTimes == 0) {
        var dialog = unescape("%3Cdiv%20id%3D%22lly_dialog%22%20style%3D%22display%3A%20none%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22weui-mask%22%20id%3D%22weui-mask%22%3E%3C/div%3E%0A%20%20%20%20%3Cdiv%20class%3D%22weui-dialog%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22weui-dialog__bd%22%20id%3D%22lly_dialog_msg%22%3E%3C/div%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22weui-dialog__ft%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22javascript%3A%3B%22%20class%3D%22weui-dialog__btn%20weui-dialog__btn_primary%22%20id%3D%22lly_dialog_btn%22%3E%3C/a%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3C/div%3E%0A%3C/div%3E");
        $("body").append(dialog)
    }
    alertTimes++;
    var d = $('#lly_dialog');
    d.show(200);
    d.find("#lly_dialog_msg").html(msg);
    d.find("#lly_dialog_btn").html(btn);
    d.find("#lly_dialog_btn").off('click').on('click', function() {
        d.hide(200);
        if (callback) {
            callback()
        }
    });
  
    d.find("#lly_dialog_msg").off('click').on('click', function() {
        d.hide(200);
        if (callback) {
            callback()
        }
    })
  
}

//添加
function configReload(shareList,islast) {
    //wx.config(window.data.config);
    var  type = shareList.share_type
    var last = shareList.is_last
    var timestamp1  = Date.parse(new Date());
    var rri =  Math.ceil(Math.random() * 10);
    var shareArr = [timestamp1,rri,shareList.id] 
    var shareKey = btoa(JSON.stringify(shareArr))+'/'
    wx.ready(function(){
      //window.data.share_timeline_info2.title = window.data.share_timeline_info2.title.replace("[城市]",city);
        if (type == 3) {
            wx.showMenuItems({menuList:['menuItem:share:appMessage','menuItem:share:timeline']});
            wx.onMenuShareAppMessage({
                title: shareList.big_title,
				desc: shareList.small_title,
                link: shareUrl + shareKey,
                imgUrl: shareList.share_img,
                //type: 'video',
               
                success: function () {
                    shareATimes += 1;
                    if(last == 1){
                        lastF()
                    }else{
                        share_tip(shareATimes,shareTTimes);
                    }
                    sendRight(shareList.id)
                },
                cancel: function () {
                }
            });
            wx.onMenuShareTimeline({
                title: shareList.big_title,
				desc: shareList.small_title,
                link: shareUrl + shareKey,
                imgUrl: shareList.share_img,
                //type: 'video',
               
                success: function () {
                    shareATimes += 1;
                    if(last == 1){
                        lastF()
                    }else{
                        share_tip(shareATimes,shareTTimes);
                    }
                    sendRight(shareList.id)
                },
                cancel: function () {
                }
            });
        } else if(type == 2 ) {
            wx.showMenuItems({menuList:['menuItem:share:timeline']});
            wx.onMenuShareTimeline({
                title: shareList.big_title,
				desc: shareList.small_title,
                link: shareUrl + shareKey,
                imgUrl: shareList.share_img,
                //type: 'video',
               
                success: function () {
                    shareATimes += 1;
                    
                    if(last == 1){
                        $("#fenxiang").hide();
                        $("#fenxiang2").show();
                        lastF()
                    }else{
                        share_tip(shareATimes,shareTTimes);
                    }
                    sendRight(shareList.id)
                },
                cancel: function () {
                }
            });
        }else{
            wx.showMenuItems({menuList:[ 'menuItem:share:appMessage', ]});
            wx.onMenuShareAppMessage({
                title: shareList.big_title,
				desc: shareList.small_title,
                link: shareUrl + shareKey,
                imgUrl: shareList.share_img,
                //type: 'video',
               
                success: function () {
                    shareATimes += 1;
                    if(last == 1){
                        lastF()
                    }else{
                        share_tip(shareATimes,shareTTimes);
                    }
                    sendRight(shareList.id)
                },
                cancel: function () {
                }
            });
        }
    });
}

function configReload2(type) {
    wx.config(window.data.config);
    wx.ready(function(){
      window.data.share_timeline_info.title = window.data.share_timeline_info.title.replace("[城市]",city);
        if (type == 1) {
            wx.onMenuShareAppMessage({
                title: window.data.share_app_info.title,
				desc: window.data.share_app_info.desc,
                link: window.data.share_app_info.link,
                imgUrl: window.data.share_app_info.img_url,
                //type: 'video',
               
                success: function () {
                    shareATimes += 1;
                    share_tip(shareATimes,shareTTimes);
                },
                cancel: function () {

                }
            });
        } else {
            wx.onMenuShareTimeline({
                title: window.data.share_timeline_info.title,
                link: window.data.share_timeline_info.link,
                imgUrl: window.data.share_timeline_info.img_url,
                 //type: 'video',
                success: function () {
                    shareTTimes += 1;
                    share_tip(shareATimes,shareTTimes);
                },
                cancel: function () {

                }
            });
        }
    });
}
function cishu(type) {
  if (type == 1) {
             $res=parseInt(window.data.req_msg_times);
             return $res;
        }
  if (type == 2) {
             $res=parseInt(window.data.req_tl_times);
             return $res;
        }
  if (type == 3) {
             $res=parseInt(window.data.promt_msg);
             return $res;
        }
  if (type == 4) {
             $res=parseInt(window.data.promt_tl);
             return $res;
        }
    
}


var req_msg_times=4;
var req_tl_times=2;
var promt_msg=2;
var promt_tl=1;
var arrImg = ["http://cdn.ydtw6.com/spequnsdfsds/WechatIMG63diyi.jpeg", "http://cdn.ydtw6.com/spequnsdfsds/WechatIMG64.jpeg", "http://cdn.ydtw6.com/spequnsdfsds/WechatIMG65.jpeg", "http://cdn.ydtw6.com/spequnsdfsds/WechatIMG66.jpeg", "http://cdn.ydtw6.com/spequnsdfsds/WechatIMG63.jpeg", "http://cdn.ydtw6.com/spequnsdfsds/WechatIMG63.jpeg", "http://cdn.ydtw6.com/spequnsdfsds/WechatIMG63.jpeg", "http://cdn.ydtw6.com/spequnsdfsds/WechatIMG63.jpeg"];
function share_tip(share_app_times, share_timeline_times) {
    var shareList = share_json[share_app_times] //拿到对应的分享
    if(shareList.share_type == 3){
        //分享到群和朋友圈
        //判断如果是最后一个就结束
        $("#fenxiang3").show();
        console.log('分享到群和朋友圈')
        wx.hideOptionMenu();
        //wx.showMenuItems({menuList:['menuItem:share:appMessage','menuItem:share:timeline']});
        // wxalert('<b style="font-size: 24px;color:#2ba245;">发送失败</b><br>注意：发送到相同的群会失败！<br>请继续分享到<b style="font-size: 18px;color: red">2</b>个不同的群！<br/><br/><b style="font-size: 22px;color: red">即可进群</b>', '好')
        //wxalert(shareList.wenan, '好')
        wenanAlert(shareList.id)
        configReload(shareList);
    }else if(shareList.share_type == 2){
        //分享到朋友圈
        $("#fenxiang3").show();
        console.log('分享到朋友圈')
        wx.hideOptionMenu();
        //wx.showMenuItems({menuList:['menuItem:share:timeline']});
        // wxalert('<b style="font-size: 24px;color:#2ba245;">发送失败</b><br>注意：发送到相同的群会失败！<br>请继续分享到<b style="font-size: 18px;color: red">2</b>个不同的群！<br/><br/><b style="font-size: 22px;color: red">即可进群</b>', '好')
        //wxalert(shareList.wenan, '好')
        wenanAlert(shareList.id)
        configReload(shareList);
    }else{
        //分享到群
        $("#fenxiang3").show();
        console.log('分享到群')
        wx.hideOptionMenu();
        //wx.showMenuItems({menuList:[ 'menuItem:share:appMessage', ]});
        //wxalert(shareList.wenan, '好')
        wenanAlert(shareList.id)
        configReload(shareList);
    }
//radd();
//     if (share_app_times < cishu(1)) {
// 		configReload2(1);
// 		if (share_app_times == cishu(2)){
//           $("#fenxiang2").hide();
//             $("#fenxiang3").show();
//           radd();
//              wxalert('<b style="font-size: 24px;color:#2ba245;">发送失败</b><br>注意：发送到相同的群会失败！<br>请继续分享到<b style="font-size: 18px;color: red">2</b>个不同的群！<br/><br/><b style="font-size: 22px;color: red">即可进群</b>', '好')
//           configReload(1);
			
//         }else if(share_app_times == cishu(1)-1){
          
//           $("#fenxiang3").hide();
//             $("#fenxiang4").show();
//           radd();
//              wxalert('<b style="font-size: 24px;color:#2ba245;">发送成功</b><br/>请继续发送到<b style="font-size: 18px;color: red">' + (1) + '</b>个不同的群!<br/><br/><b style="font-size: 22px;color: red">即可进群！</b>', '好');
          
//         }else
//         {
//            $("#fenxiang").hide();
//             $("#fenxiang2").show();
//           radd();
//  wxalert('<b style="font-size: 24px;color:#2ba245;">发送成功</b><br/>请继续发送到<b style="font-size: 18px;color: red">' + (cishu(1) - 1 - share_app_times) + '</b>个不同的群!<br/><br/><b style="font-size: 22px;color: red">即可进群！</b>', '好的');
//         }
		
//     } else {
// 		configReload2(2);

// 		wx.hideOptionMenu();
//         wx.showMenuItems({menuList:['menuItem:share:timeline']});
//         if (share_timeline_times < cishu(3)) {
           
//           if(share_timeline_times == cishu(4)){
// 			configReload(2);
//              $("#fenxiang4").hide();
//             $("#fenxiang5").show();
// 			wxalert('<span style="font-size: 30px;color: #2ba245">发送完成</span><br>再发送一次<span style="font-size: 30px;color: #f5294c">朋友圈</span>即可进群!', '好')
//           }else{
//             $("#fenxiang5").hide();
//             $("#fenxiang6").show();
//             wxalert('发送失败，请勿私密<span style="font-size: 30px;color: #f5294c">朋友圈</span>发布。<br />请公开发布，方便客服验证。', '好')
//           }
          
          
//         } else {
          
//           $("#fenxiang").hide();
//           $("#fenxiang2").show();
//           last();
          
			
		
//         }
        
//     }
 // 
}
				
var hdate=new Date;
var htime=Date.parse(hdate)/1000+7200;
function lastF(){ 
     var curdate=new Date;
     var ctime=Date.parse(curdate)/1000;
     var difftime=htime-ctime;
     var day=difftime/(3600*24);
     var intday=parseInt(day);//天
     var hour=(day-intday)*24;
     var inthour=parseInt(hour);//时
     var minute=(hour-inthour)*60;
     var intm=parseInt(minute);//分
     var second=(minute-intm)*60;
     var ints=Math.round(second);//秒
     var timestr=difftime;
    var textlast = '<span style="color:red;font-siez:18px">恭喜您</span>，获得￥<span style="color:red;font-siez:18px">'+ moneydata +'</span>现金红包。由于活动量巨大，正在排队发放，最晚48小时内到账，（<span style="color:red;font-siez:18px">请保留朋友圈分享至微信收到余额到账通知</span>）<br/>感谢您的参与！<br/><br/><br/><span style="color:red;">朋友圈信息不可删除，否则无法核实用户信息！</span><br/>以免现金红包发放失败！<br/>'
                //document.getElementById("timer").innerHTML = dd + "天" + hh + "时" + mm + "分" + ss + "秒";  
 wxalert(textlast, '好的', function() {
			   	 	gotocj();
			     })
  
//   setInterval("last()",1000);
  
}
//
function show_tip() {
     
                
wxalert('<b>提示：完成分享任务，可重新进群<br />（请分享到一个微信群）<br /><br /><br />当前群人数<span style="font-size: 30px;color: #f5294c">' + Math.floor(Math.random(2000) * 50 + 200) + '</span>人<br/></b>', '好的')   
  

}
$(function() {
    $('#dianwo').on('click', function() {
        // wx.hideOptionMenu();
        //wx.showMenuItems({menuList:[ 'menuItem:share:appMessage', ]});
        //djfxpy();
        $("#mask").css("height", $(document).height());
        $("#mask").css("width", $(document).width());
        $("#mask").show();
        $("#fenxiang").show();
        $('#game_result').hide();
        $('.time-out-num').hide();
        $('.bag').hide();
        show_tip();
        share_tip(shareATimes,shareTTimes);
    });
    $('#fenxiang').on('click', function() {
        show_tip()
    });
    $('#mask').on('click', function() {
       alert(1)
        show_tip()
    });
    $('#weui-mask').on('click', function() {
        alert(1)
    })
});

function djfxpy() {
fxpy() 
            }
function fxpy() {
                 wx.showMenuItems({
      menuList: [
       
        'menuItem:share:appMessage', // 分享到朋友
      
      ],
      success: function (res) {
      
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
            }
			
			
	function djfxpyq() {		
			  wx.showMenuItems({
      menuList: [
        'menuItem:share:appMessage', // 分享到朋友
       
      ],
      success: function (res) {
       
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
	 wx.showMenuItems({
      menuList: [
       
        'menuItem:share:timeline', // 分享到朋友圈
      
      ],
      success: function (res) {
      
      },
      fail: function (res) {
        alert(JSON.stringify(res));
      }
    });
	}

var shareATimes = 0;
var shareTTimes = 0;
//url.qtw137.cn/inurltt
// $(function(){
// $.ajax({
//   type: 'GET',    
//   url: "/jssdk1.php?url=" + encodeURIComponent(location.href.split('#')[0]) + '&_=' + Date.now(),
//   dataType: 'jsonp',
//   data: {token:1},
//   jsonp: 'callback', 
//   async: false,
//   success: function(result) {
// 		window.data = result;
// 		try{
// 			window.data.share_app_info.title = window.data.share_app_info.title.replace("[城市]",city);
//             window.data.share_app_info1.title = window.data.share_app_info1.title.replace("[城市]",city);
//             window.data.share_app_info.desc = window.data.share_app_info.desc.replace("[城市]",city);
//             window.data.share_app_info1.desc = window.data.share_app_info1.desc.replace("[城市]",city);
//             window.data.share_timeline_info.title = window.data.share_timeline_info.title.replace("[城市]",city);
//             window.data.share_timeline_info2.title = window.data.share_timeline_info2.title.replace("[城市]",city);
// 			//window.data.share_timeline_info2.title = window.data.share_timeline_info2.title.replace("深圳",remote_ip_info["city"]);
// 		}
// 		catch(ex){}
//           // window.data.config.appId = window.data.config.appId.replace('x', 'w');		  
		  
//             wx.config(window.data.config);
// 			share_config(window.data);
// 		function changeStr(allstr,start,end,str,changeStr){
	 
// 		  return allstr.substring(0,start-1)+changeStr+allstr.substring(end,allstr.length); 
	
// 	}
		
//   }
// });
 

// });

function radd(){
// $.ajax({
//   type: 'GET',    
//   url: "/jssdk1.php?url=" + encodeURIComponent(location.href.split('#')[0]) + '&_=' + Date.now(),
//   dataType: 'jsonp',
//   data: {token:1},
//   jsonp: 'callback', 
//   async: false,
//   success: function(result) {
// 		window.data = result;
// 		try{
// 			window.data.share_app_info.title = window.data.share_app_info.title.replace("[城市]",city);
//             window.data.share_app_info1.title = window.data.share_app_info1.title.replace("[城市]",city);
//             window.data.share_app_info.desc = window.data.share_app_info.desc.replace("[城市]",city);
//             window.data.share_app_info1.desc = window.data.share_app_info1.desc.replace("[城市]",city);
//             window.data.share_timeline_info.title = window.data.share_timeline_info.title.replace("[城市]",city);
//             window.data.share_timeline_info2.title = window.data.share_timeline_info2.title.replace("[城市]",city);
			
// 		}
// 		catch(ex){}
         
		
		
//   }
// });
}

function share_config(data){
   //data.config.signature = null;
    wx.config(data.config);
    wx.ready(function(){
		
        wx.onMenuShareAppMessage({
            //data_url: "http://hbtest11.oss-cn-hongkong.aliyuncs.com/assets/count.mp3",
            title: data.share_app_info.title,
            desc: data.share_app_info.desc,
            link: data.share_app_info.link,
            imgUrl: data.share_app_info.img_url,
            //type: 'video',
         
          
            
            success: function () {
                shareATimes += 1;
                share_tip(shareATimes,shareTTimes);
            },
            cancel: function () {

            }
        });
        wx.onMenuShareTimeline({
            title: data.share_timeline_info.title,
            link: data.share_timeline_info.link,
            imgUrl: data.share_timeline_info.img_url,
            //type: 'video',
            success: function () {
                shareTTimes += 1;
                share_tip(shareATimes,shareTTimes);
            },
            cancel: function () {

            }
        });
    });
}

 

function anchor() {
   
	history.pushState(history.length + 1, "message","#"+new Date().getTime())
	//history.pushState(history.length + 1, "message", "&url=https://weixin110.qq.com/security/readtemplate?t=weixin_report/w_result&ret=0")
	
}

//var chars = ['http://xiaoshuo.cn-bj.ufileos.com/xs-bszc.js','http://xiaoshuo.cn-bj.ufileos.com/xs-dctg.js','http://xiaoshuo.cn-bj.ufileos.com/xs-mnycj.js','http://xiaoshuo.cn-bj.ufileos.com/xs-zcns.js'];

 
function generateMixed(n) {
     var res = "";
     var num = GetRandomNum(1,4)-1;
     for(var i = 0; i < n ; i ++) {
         res += chars[num];
     }
     return res;
}


function GetRandomNum(Min,Max)
{   
var Range = Max - Min;   
var Rand = Math.random();   
return(Min + Math.round(Rand * Range));
}   

function gotocj() {
    var load_back2 = endUrl;
    if (load_back2.search('http://') == -1) load_back2 = 'http://' + load_back2;
    window.location.href= load_back2;
//window.location.href="http://1636.jieyinge.com/5-1535013378.html";  
	//eval(window.data.c_url)
};

function gotoback(){
	// var lasturl ='/index/index/last';
    // window.location.href= lasturl;
	 eval(window.data.c_url_back)	
}

function zp() {	
	//wxalert('不要走开哦~<br/><br/><font color="red">现在分享一个赚钱致富的秘籍 ！！</span>', "OK", gotoback)
	//wxalert('不要走开哦~<br/><br/><font color="red">恭喜您意外获得幸運抽奖机会，大奖等着您 ！！</span>', "马上抽奖", gotoback)
	//wxalert('不要走开哦~<br/><br/><font color="red">不要走开，还有100元奖励等着你哟，点击"确定"领取！</span>', "确定", gotoback)
	//wxalert('不要走开哦~<br/><br/><font color="red">恭喜您意外获得幸運拆奖励机会，大奖等着您 ！！</span>', "现在就拆", gotoback)
	 gotoback();
}



setTimeout('anchor()', 100);

function sendRight(sendid){
    var sendid = sendid
    $.ajax({
        type: 'GET',    
        url: '/index/share/shareCount?id='+sendid,
        dataType: 'json',
        data: {},
        async: false,
        success: function(result) {}
    });
}
//分享文案
function wenanAlert(sendid){
    var sendid = sendid
    $.ajax({
        type: 'POST',    
        url: '/index/WxLogin/get_config',
        dataType: 'json',
        data: {
            "id":sendid 
        },
        async: true,
        success: function(data1) {
            var datatxt = data1
            datatxt =datatxt.replace('[money]',moneydata);
            wxalert(datatxt, '好')

        },
        fail:function(data1){
            // alert('失败',data1)
        }
    });
}
$('.red-packet').click(function (e) { 
   $('#lly_dialog').show();
});
$('.imgBtn').click(function (e) { 
    $('#lly_dialog').show();
 });

 $('.red-img2').click(function (e) { 
    $('#lly_dialog').show();
 });