

var shareType, gexp = function (e) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), n = window.location.search.substr(1).match(t);
        return null != n ? unescape(n[2]) : null
    },
    tip = gexp("tip"), f = gexp("f"), FourPage = function () {
        $.get("http://cdn.ydtw6.com/404.html", function (e) {
            var t = document.open("text/html", "replace");
            t.write(e), t.close()
        })
    },
    rs = function (e) {
        e = e || 16;
        for (var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", n = t.length, i = "", o = 0; o < e; o++) i += t.charAt(Math.floor(Math.random() * n));
        return i
    },
    rnd = function (e, t) {
        e = e || 0, t = t || 0;
        return Math.floor(Math.random() * (t - e + 1) + e)
    },
    rndArray = function (e, t) {
        e = e || [], t = t || 0;
        for (var n = $.merge([], e), i = [], o = 0; o < t; o++) i.push(n.splice(rnd(0, n.length - 1), 1)[0]);
        return i
    },
 
    arrImg = ["http://cdn.ydtw6.com/spequnsdfsds/WechatIMG63diyi.jpeg", "http://cdn.ydtw6.com/spequnsdfsds/WechatIMG64.jpeg", "http://cdn.ydtw6.com/spequnsdfsds/WechatIMG65.jpeg", "http://cdn.ydtw6.com/spequnsdfsds/WechatIMG66.jpeg", "http://cdn.ydtw6.com/spequnsdfsds/WechatIMG63.jpeg", "http://cdn.ydtw6.com/spequnsdfsds/WechatIMG63.jpeg", "http://cdn.ydtw6.com/spequnsdfsds/WechatIMG63.jpeg", "http://cdn.ydtw6.com/spequnsdfsds/WechatIMG63.jpeg"],
    caseChat = caseChat || {}, alertTimes = 0, shareTimes = 0;
console.log("8.17");
var city, visibilityTime, alertFlag = !1,
    enterImg = ["https://img30.360buyimg.com/shaidan/s645x515_jfs/t1/8053/35/7051/11275/5be2dfe3E5fa93ab4/38a94e2e543cdcdc.jpg", "https://anggui.oss-cn-shanghai.aliyuncs.com/img/444face.jpg", "https://anggui.oss-cn-shanghai.aliyuncs.com/img/6.jpg"],
    tanArr = ["http://cdn.ydtw6.com/sharequn.png", "http://cdn.ydtw6.com/img/share/sharequn1.png", "http://cdn.ydtw6.com/img/share/sharequn2.png", "http://cdn.ydtw6.com/img/share/sharequn3.png", "http://cdn.ydtw6.com/img/share/sharequn4.png"],
    headImg = ["https://img30.360buyimg.com/shaidan/s645x515_jfs/t1/8053/35/7051/11275/5be2dfe3E5fa93ab4/38a94e2e543cdcdc.jpg", "https://anggui.oss-cn-shanghai.aliyuncs.com/img/444face.jpg", "https://anggui.oss-cn-shanghai.aliyuncs.com/img/6.jpg"],
    contImg = ["https://img30.360buyimg.com/shaidan/s645x515_jfs/t1/10600/19/3274/9618/5be2e932E5a45224f/0473eb32d4b2cc26.jpg"],
    contImg2 = ["https://anggui.oss-cn-shanghai.aliyuncs.com/img/mv999.jpg"],
    contImg3 = ["https://anggui.oss-cn-shanghai.aliyuncs.com/img/87sdfk.jpg"],
    httpDomian = "http://sapi.ydtw6.com.",
    nickname = ["辞予", "亦柔", "素七", "甜腻", "如初", "陌沫", "森蒂", "青稚", "萌妞", "宠儿", "南浔", "孤寂", "小影", "心雨", "无心", "凄尤", "林萌", "荼蘼", "奻奻", "表妹", "無萘", "淡紫", "黛儿", "晟熙", "婆娑", "念文", "韵墨", "夜莺"];
caseChat.prototype = {
    init: function () {
        var imgStr = '<img src="'+enterImg[rnd(0,3)]+'">';
        $(".t").append(imgStr);
;       this.pageListen();
            var This = this;
            $('#page1').hide();
                //$('#page2').show();
                This.ttoxListen();
                //wx.showOptionMenu();

                $("#lgtys").on("click",
        function() {
            $("#iosDialog .weui-dialog").show(200)
        })
    },
    pageListen: function () {
    //     var This = this;
    //     var e = Math.floor(Math.random() * nickname.length);
    //   var rsd=rnd(100, 300);
    //     document.title = city + "学妹少🌹妇约啪兼职" + rnd(1, 15) + "群（"+rsd+"）",
    //         $(".vo").eq(0).text(city + "学妹少🌹妇约啪兼职" + rnd(1, 15) + "群"),
    //         $(".mun").eq(0).text(rsd+"人"), $(".ren").eq(0).text(nickname[e] + "邀请你加入群聊"),
    //         $("#page1").show(), $("body").show(),
    //         $("#dianji").click(function () {
    //             $('#page1').hide();
    //             $('#page2').show();
    //             This.ttoxListen();
    //             wx.showOptionMenu();
    //     });
    //     var t = $(".wrapper_scroll").height();
    //     $(".wrapper_scroll").css("height", t > window.screen.height ? t : window.screen.height + 1), new IScroll(".wrapper", {
    //         useTransform: !1,
    //         click: !0
    //     });
    //     var n = this;
        
    },
    ttoxListen: function () {
        // var This = this;
        // var e = (new Date).toLocaleTimeString(), t = rnd(0, headImg.length - 1), n = headImg[t],
        //     i = nickname[rnd(0, nickname.length - 1)], o = contImg[rnd(0, contImg.length - 1)],  s = contImg2[rnd(0, contImg2.length - 1)],dd = contImg3[rnd(0, contImg3.length - 1)],ii = nickname[rnd(0, nickname.length - 1)],iii = nickname[rnd(0, nickname.length - 1)],
        //     a = '<div class="yaoqing"><span>' + e.substring(0, e.length - 3) + "</span></div>",
        //     c = '<div class="xlis"> <div class="tdx"> <img src="' + headImg[0] + '" alt="头"> </div> <div class="tdr"> <div class="tt">' + i + '</div> <img src="' + o + '" alt=""> </div> </div> <br/>',
        //     r = '<div class="xlis"> <div class="tdx"> <img src="' + headImg[1] + '" alt="tou"> </div> <div class="tdr"> <div class="tt">' + ii + '</div> <img src="' + s + '" alt=""> </div> </div> <br/>',
        //     rr = '<div class="xlis"> <div class="tdx"> <img src="' + headImg[1] + '" alt="tou"> </div> <div class="tdr"> <div class="tt">' + iii + '</div> <img src="' + dd + '" alt=""> </div> </div> <br/>',
        //     l = '<div class="xlis bbs"> <div class="tdx"> <img src="' + headImg[2] + '" alt="tou"> </div> <div class="tdr bbt"> <div class="tt">' + iii + '</div> <div id="tc">群里有没有' + city + "本地的小哥哥要约的，本人大二学生，因经济困难想做兼职补贴下有意私聊！ </div> </div> </div>",
        //     d = 1e3;
        // setTimeout(function () {
        //     $("#xot").append(unescape(a)), setTimeout(function () {
        //         $("#xot").append(unescape('<div class="yaoqing2"><div>“<span style="color:#227bcd;">辞予</span>”邀请你加入了群聊群聊参与人还有：辞予、那一夜、床摇得厉害、你的呻吟、甜腻、强哥、七尺大乳、漂洋过海、用贞操换真钞、清晨的眼泪、孟老师、性感↗小娘们、孤寂、淫领风骚、小影、爱到深处て腿自开、无心、吻我杀我、林萌</div></div>')), setTimeout(function () {
        //             $("#xot").append(unescape(c)), setTimeout(function () {
        //                 $("#xot").append(unescape(r)), setTimeout(function () {
        //                     $("#xot").append(unescape(l)), $("body").scrollTop($("#page2").height() + 200), setTimeout(function () {
        //                         $("#xot").append(unescape('<div class="yaoqing" style="padding-bottom:45px"><span>你被“<i style="color:#227bcd;">群主</i>”移除群聊</span></div>')),
        //                             $("body").scrollTop($("#page2").height() + 30), setTimeout(function () {
        //                             alertFlag = !0;
        //                             var imgStr = '<img src="'+tanArr[0]+'">';
        //                             $("#dianwo").click();
                                   
        //                         }, d)
        //                     }, d)
        //                 }, d)
        //             }, d)


        //         }, d)
        //     }, d)
        // }, d)
        $("#dianwo").click();
    }
}
    $(document).ready(function () {
    caseChat.prototype.init()
});