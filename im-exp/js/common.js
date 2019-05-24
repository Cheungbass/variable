if (location.origin.indexOf('app-dev') > -1) {
    var vConsole = new VConsole()
}

var config = {
    api: {
        wxLogin: location.origin + "/index.php/wechathaoyoushiyaner/weixilogin",
        wxLaunch: location.origin + "/index.php/wechathaoyoushiyaner/launch",
        wxParticipate: location.origin + "/index.php/wechathaoyoushiyaner/participant",
        wxSplitShareSign: location.origin + "/index.php/Friendlab/getSignPackage?wx=haoyoushiyaner",
    },
    wx: {
        appId: "wx23271deeeedf252c",
        scope: "snsapi_userinfo",
    },
    share: {
        title: "第x个点开的人，我xxxxxx",
        desc: "开启一场刺激心跳的实验吧～",
        link: location.origin + location.pathname,
        imgUrl: "https://dl.qingdianyuedu.com/material/web/hepaihaoyou/icon17.png",
    },
}

var common = {
    userAgent: navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? "ios" : "android",
    userInfo: {},

    Storage: function (key, value) {
        if (value === undefined) {
            return JSON.parse(localStorage.getItem(key))
        }

        localStorage.setItem(key, JSON.stringify(value))
    },

    queryParam: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
        var par = location.search.substr(1).match(reg)
        return par ? unescape(par[2]) : null
    },

    wxLogin: function (callback) {
        var code = this.queryParam("code")

        if (code) {
            var loading = weui.loading('loading...')

            var that = this
            Vue.http.get(config.api.wxLogin + '?c=' + code).then(function (res) {
                loading.hide()

                if (res.body.status == true) {
                    that.userInfo = res.body.data
                    that.Storage("user", that.userInfo)
                    that.Storage('LoginTime', Math.floor(Date.now() / 1000))
                    
                    callback()

                } else {
                    that.buryCounterOnce('errorLogin2', 'errorLogin2')
                    error.show()
                }
            }, function (err) {
                loading.hide()

                that.buryCounterOnce('errorLogin1', 'errorLogin1')
                error.show()
            })
        } else {
            this.userInfo = this.Storage("user")
            
            var loginTime = this.Storage('LoginTime')
            if (Math.floor(Date.now() / 1000) > loginTime + 86400 * 6) {
                delete this.userInfo
            }

            var existUser = this.userInfo && this.userInfo.openid
            var existCookie = document.cookie && document.cookie.indexOf('shiyaner_op') > -1
            if (existUser && existCookie) {
                callback()
            } else {
                location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.wx.appId}&redirect_uri=${encodeURIComponent(location.href)}&response_type=code&scope=${config.wx.scope}#wechat_redirect`
            }
        }
    },

    wxConfig: function (callback) {
        var that = this
        Vue.http.get(config.api.wxSplitShareSign).then(function (res) {
            if (res.body.status == true) {
                wx.config({
                    debug: false,
                    appId: res.body.data.appId,
                    timestamp: res.body.data.timestamp,
                    nonceStr: res.body.data.nonceStr,
                    signature: res.body.data.signature,
                    jsApiList: [
                        "hideMenuItems",
                        "onMenuShareTimeline",
                        "onMenuShareAppMessage",
                    ]
                })

                wx.ready(function () {
                    wx.hideMenuItems({
                        menuList: [
                            "menuItem:copyUrl",
                            "menuItem:originPage",
                            "menuItem:readMode",
                            "menuItem:openWithQQBrowser",
                            "menuItem:openWithSafari",
                            "menuItem:share:email",
                        ]
                    })
                })

                that.wxLogin(callback)

            } else {
                that.buryCounterOnce('errorConfig2', 'errorConfig2')
                error.show()
            }
        }, function (err) {
            that.buryCounterOnce('errorConfig1', 'errorConfig1')
            error.show()
        })
    },

    setShare: function (data) {
        wx.ready(function () {
            wx.onMenuShareTimeline(data)
            wx.onMenuShareAppMessage(data)
        })
    },

    // 去重计数器
    buryCounterOnce: function (t, key) {
        if (!this.Storage(key)) {
            this.Storage(key, true)

            this.buryCounter(t)
        }
    },

    // 当前实验需要修正台词
    experimentAmend: false,
    
    // 点过查看攻略
    checkedExplain: false,

    // 计数器
    buryCounter: function (t) {

        var clickType = {
            openEnter:          301, // 打开入口页
            tapEnterStart:      302, // 点击开启实验

            openCreate:         101, // 打开创作页
            openCreate2s:       108, // 打开创作页玄关动画完成
            tapOption:          105, // 点击按钮：实验项目
            tapAmend:           106, // 点击按钮：改一改 的人数
            // tapCreateDone:   102, // 点击按钮：选好了，下一步（废弃）
            tapEntrance:        103, // 点击按钮：选好了，发起实验
            // tapRestart:      104, // 点击按钮：重新选择（废弃）
            listenScroll:       107, // 监听创作页面：用户滚动屏幕

            openTask:           215, // 打开页面：进入阅读页的总次数（废弃）

            // show3rdSentence:    211, // 进入别人活动 弹出了第三句话（废弃）
            // showFistCase:       212, // 进入别人活动 弹出了第一组按钮（废弃）

            // tapStartNew:        204, // 发起人 点击按钮：发起新的活动（失效）
            tapToShare1:        205, // 发起人 点击按钮：转发本次活动


            tapToLaunch1:       218, // 小编链接 点击 发起我的心跳实验
            tapToLaunch2:       219, // 自己的链接 点击 发起新的心跳实验

            tapOKLaunch1:       216, // 小编链接 点击 确认好了，发起我的实验 的次数
            tapOKLaunch2:       217, // 自己页面 点击 确认好了，发起我的实验 的次数

            /* 进入别人的实验页面 按实验去重 */

            openParticipate:    401, // 进入别人实验页面的次数

            tapBlurPhoto1:      406, // 点击模糊照片一次
            tapBlurPhoto3:      407, // 点击模糊照片三次

            tapAskMyNum1:       411, // 未中奖 第一次点击 我是第几个进来的？ // 两个按钮互斥
            tapAskMyNum2:       412, // 中奖者 第一次点击 我是第几个进来的？
            tapWhoWin1:         413, // 未中奖 第一次点击 我中奖了吗？
            tapWhoWin2:         414, // 中奖者 第一次点击 我中奖了吗？
            tapWhoInToo:        415, // 点击 谁参与了@XXX 的活动

            tapPlayAlso2:       421, // 未中奖 点击 发起我的心跳实验
            tapPlayAlso2Win:    422, // 中奖者 点击 发起我的心跳实验
            tapPlayAlso2Qh:     423, // 未中奖 看过攻略 点击 发起我的心跳实验
            tapPlayAlso2WinQh:  424, // 中奖者 看过攻略 点击 发起我的心跳实验
            tapPlayAlso1:       425, // 未中奖 点击 查看实验攻略
            tapPlayAlso1Win:    426, // 中奖者 点击 查看实验攻略
            // tapPlayAlso1Q:      427, // 点击 查看攻略后面的 两个按钮（废弃）

            // tapGender:          431, // 点击 “我是女生”/“我是男生” 之一（废弃）
            tapChooseEvent:     432, // 点击 实验项目 之一
            tapEditWinNum:      433, // 点击 “-”、“+” 之一
            tapCustomEvent:     434, // 点击 增加我自己的实验项目
            tapCustomConfirm:   435, // 自定义 点击 确认提交
            tapOKLaunch3:        436, // 没看攻略 点击 “确认好了，发起实验” // 两条路径互斥
            tapOKLaunch3Checked: 437, // 看过攻略 点击 “确认好了，发起实验”

            /* 进入自己的实验页面 按实验去重 */

            openOwnPageFromElse: 500, // 从别人的活动 进入自己A链接的次数
            openOwnPageFromLink: 501, // 从小编链接 进入自己A链接的次数
            openOwnPage:         502, // 从自己的活动 进入自己A链接的次数
            openOwnPB:           503, // 进入自己的B链接 有访客
            openOwnPBNobody:     504, // 进入自己的B链接 10分钟之内无访客
            openOwnPBNobody10:   505, // 进入自己的B链接 超过10分钟无访客

            tapTellMe:           511, // 点击 有好友进来通知我

            tapCheckRecord:      521, // 点击 查看我的好友来访记录

            errorCreate1:        901, // 发起实验
            errorCreate2:        902,
            // errorJoin1:         903, // 进入实验（包含自己和别人）（废弃）
            // errorJoin2:         904, //                       （废弃）
            errorConfig1:        905, // 配置分享
            errorConfig2:        906,
            errorLogin1:         907, // 登录
            errorLogin2:         908,

            errorJoin1:        911, // 进入实验（包含自己和别人）直接进入
            errorJoin2:        912, // 进入实验（包含自己和别人）创作成功进入
            errorJoin3:        913, // 直接进入
            errorJoin4:        914, // 创作成功进入

            errorTapReload:    920, // 点击 重试
        }

        if (t == 'tapTellMeOnce') { // 服务端捕获失败消息：点击 有好友进来通知我 按用户去重
            Vue.http.get(location.origin + '/load/addclick/512/' + this.userInfo.openid)
            return
        }

        Vue.http.get(location.origin + "/load/addclick/3" + clickType[t] + '/' + this.userInfo.openid)
    },

    uploadLog: function (type, content) {
        Vue.http.post(location.origin + '/setting/addlog', {
            type: type,
            content: JSON.stringify(content),
        }, {
            emulateJSON: true,
        })
    },
}
