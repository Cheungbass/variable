var events = [
    "陪你一起过520",
    "你陪我过520",
    "做你一天情人",

    "做你一天女朋友",
    "做你一天男朋友",
    "陪你聊一小时天",

    "喊你起床一周",
    "哄你睡觉",
    "唱歌给你听",

    "回答你三个问题",
    "告诉你一个秘密",
    "给你发私密照",

    "和你一起吃饭",
    "陪你看电影",
    "陪你逛一天街",

    "请你喝奶茶",
    "陪你喝酒",
    "陪你去泡吧",

    "给你介绍对象",
    "等你给我介绍对象",
    "给你一个拥抱",

    "给你写一封信",
    "陪你去旅游",
    "带你开黑",
]

var HomeView = Vue.component("home", {
    template: "#homeTemp",
})

var EnterView = Vue.component("enter", {
    template: "#enterTemp",
    data() {
        return {
            showEnter: false,
        }
    },
    mounted() {
        common.buryCounter('openEnter')

        var that = this
        setTimeout(function () {
            that.showEnter = true
        }, 1000)
    },
    methods: {
        start: function () {
            common.buryCounter('tapEnterStart')
        }
    }
})

var TaskView = Vue.component("task", {
    template: "#taskTemp",
    props: ["id", "t"],
    data() {
        return {
            showResult: false,
            showFinger: false,
            showCustom: false,
            showShare: false,

            isOwner: false,
            isWinner: false,
            users: {},
            contents: null,
            questions: {},
            progress: 0,
            timeLine: [],
            options: [],

            events: null,
            selectEvent: null,
            showWinNum: false,
            eventWinNum: 5,
            eventSuccess: false,
            showExplain: false,

            allowCustom: true,
            inputBadText: common.Storage('inputBadText') || 0,
        }
    },
    mounted() {
        if (this.t > 1) {
            if (this.t == 3) {
                common.Storage('fromXiaoBianBLink', true)
            }

            this.create()

        } else {
            this.get()
        }
    },
    methods: {
        create: function () {
            this.showResult = true

            common.userInfo.self = true
            this.users[common.userInfo.openid] = common.userInfo

            this.users.helper = {
                headimgurl: 'https://dl.qingdianyuedu.com/material/web/hepaihaoyou/helper4.png',
                nickname: '小助手',
            }

            this.launchScript()

            this.timeLine = [
                {
                    id: 'helper',
                    content: common.userInfo.nickname + '，欢迎来到心跳实验，看看谁在微信里偷偷关注着你⬇️⬇️⬇️',
                },
            ]

            this.contents = [
                ['Ql1'],
            ]

            this.loadContent()
        },

        get: function () {
            var that = this
            Vue.http.post(config.api.wxParticipate, {
                eid: this.id,
            }, {
                emulateJSON: true,
            }).then(function (res) {
                if (res.body.status == true) {
                    var data = res.body

                    that.showResult = true

                    var experiment = data.data.experiment

                    that.isOwner = experiment.openid == common.userInfo.openid

                    that.users.helper = {
                        headimgurl: 'https://dl.qingdianyuedu.com/material/web/hepaihaoyou/helper4.png',
                        nickname: '小助手',
                    }

                    for (var i in data.data.users) {
                        var user = data.data.users[i]
                        that.users[user.openid] = user
                    }

                    common.userInfo.self = true
                    that.users[common.userInfo.openid] = common.userInfo

                    ////////////////////////////////////////////////////////////////////////////////////////////////
                    var owner = that.users[experiment.openid]
                    if (owner.nickname == common.userInfo.nickname) {
                        experiment.openid = common.userInfo.openid
                        that.isOwner = true

                        for (var i in data.data.list) {
                            var item = data.data.list[i]

                            if (item.openid == experiment.openid) {
                                data.data.list.splice(i, 1)
                                data.data.count -= 1
                                break
                            }
                        }
                    }
                    ////////////////////////////////////////////////////////////////////////////////////////////////

                    that.launchScript()

                    var members = data.data.list
                    var mcount = data.data.count
                    if (that.isOwner) {
                        that.ownScript(experiment, members, mcount)
                    } else {
                        that.joinScript(experiment, members, mcount)
                    }

                    that.loadContent()

                    common.setShare({
                        title: '第' + experiment.num + '个点开的人，' + JSON.parse(experiment.content).title,
                        desc: config.share.desc,
                        link: config.share.link + '#/task/' + experiment.id + '/0',
                        imgUrl: config.share.imgUrl,
                        success: function (res) {
                            if (that.showShare) {
                                that.showShare = false
                            }
                        }
                    })
                } else {
                    var t = common.queryParam(that.id) == null ? 1 : 2
                    common.buryCounterOnce('errorJoin' + (t + 2), 'errorJoin' + (t + 2))

                    // common.uploadLog('20' + t, document.cookie)

                    error.show()
                }
            }, function (err) {
                var t = common.queryParam(that.id) == null ? 1 : 2
                common.buryCounterOnce('errorJoin' + t, 'errorJoin' + t)

                // common.uploadLog('21' + t, document.cookie)

                error.show()
            })
        },

        launchScript: function () {
            var Al1 = [
                {
                    type: 'customChange',
                    id: 'helper',
                    content: '主人，请选择一个喜欢的实验项目，也可以自己写哦～',
                },
                {
                    type: 'events',
                    content: events,
                },
                {
                    id: 'helper',
                    content: '好的主人，你的心跳实验已经准备就绪，请确认后发起实验⬇️⬇️⬇️',
                },
                {
                    type: 'winNum',
                },
            ]
            this.questions.Al1 = Al1

            var Ql1 = [
                {
                    key: 'Ql1',
                    id: common.userInfo.openid,
                    content: '发起' + (this.isOwner ? '新' : '我') + '的心跳实验',
                }
            ]
            this.questions.Ql1 = Ql1.concat(Al1)

            var Qh1 = [
                {
                    key: 'Qh1',
                    id: common.userInfo.openid,
                    content: '查看实验攻略',
                },
                {
                    type: 'explain',
                },
                {
                    id: common.userInfo.openid,
                    content: '知道了，发起我的心跳实验',
                }
            ]
            this.questions.Qh1 = Qh1.concat(Al1)
        },

        ownScript: function (experiment, members, mcount) {

            var now = Date.parse(Date()) / 1000
            var create = Date.parse(experiment.addtime.split('-').join('/')) / 1000

            if (this.t == 1) {
                if (mcount > 0) {
                    common.buryCounterOnce('openOwnPB', 'openOwnPB' + this.id)

                    var winId, start = mcount - members.length + 1
                    for (var i in members) {
                        var num = start + Number(i)

                        var item = members[i]
                        item = {
                            id: item.openid,
                            num: num,
                            time: item.addtime,
                        }

                        if (num == experiment.num) {
                            winId = item.id

                            item.sColor = true
                        }

                        members[i] = item
                    }

                    var content
                    if (now - create >= 600 && !winId) {
                        content = '提醒：本次心跳实验还没有人"中奖"，可以继续转发分享，让更多好友参与哦～'
                    } else {
                        content = '提醒：每一个好友都能看到总人数，可以转发本次活动使人数变多！'
                    }

                    this.contents = [
                        {
                            type: 'aside',
                            content: experiment.addtime,
                        },
                        {
                            id: common.userInfo.openid,
                            content: '第' + experiment.num + '个点开的人，' + JSON.parse(experiment.content).title + '。',
                        },
                        {
                            id: 'helper',
                            content: '@' + common.userInfo.nickname + '，你发起的活动已经有' + mcount + '个人点开⬇️⬇️⬇️',
                        },
                        {
                            type: 'ownMember',
                            id: 'helper',
                            content: members,
                        },
                        {
                            id: 'helper',
                            content: content,
                            sColor: true,
                        },
                        ['继续分享本次实验', 'Ql1'],
                    ]

                } else if (now - create < 600) {
                    common.buryCounterOnce('openOwnPBNobody', 'openOwnPBNobody' + this.id)

                    this.contents = [
                        {
                            id: 'helper',
                            content: common.experimentAmend
                                    ? '亲爱的' + common.userInfo.nickname + '，你的心跳实验“' + JSON.parse(experiment.content).title + '”已经成功创建，稍后可以到这里查看好友来访记录。' 
                                    : '亲爱的' + common.userInfo.nickname + '，你的心跳实验“' + JSON.parse(experiment.content).title + '”已经成功预约，有好友进来我马上通知你☺️',
                        },
                        {
                            id: 'helper',
                            content: '请问还要不要试一下新的心跳实验项目？',
                            sColor: true,
                        },
                        ['Ql1', '继续分享本次实验'],
                    ]

                } else {
                    common.buryCounterOnce('openOwnPBNobody10', 'openOwnPBNobody10' + this.id)

                    this.contents = [
                        {
                            id: 'helper',
                            content: '亲爱的' + common.userInfo.nickname + '，你的心跳实验“' + JSON.parse(experiment.content).title + '”还没有好友访问，请确认有没有成功分享给微信好友或者朋友圈。',
                        },
                        {
                            id: 'helper',
                            content: '可以点击下面按钮继续分享本次实验。',
                            sColor: true,
                        },
                        ['分享本次心跳实验', 'Ql1'],
                    ]
                }

            } else {
                // 8:00~11:59创建的实验
                var hour = new Date(experiment.addtime.split('-').join('/')).getHours()
                var condition = hour >= 8 && hour <= 11

                if (common.Storage('fromXiaoBianBLink') || condition) {
                    common.experimentAmend = true

                    this.t = 1

                    this.ownScript(experiment, members, mcount)

                    return
                }

                var from = common.queryParam('eid' + this.id)
                if (from == 3) {
                    common.buryCounterOnce('openOwnPageFromLink', 'openOwnPage' + this.id)
                } else if (from == 2) {
                    common.buryCounterOnce('openOwnPage', 'openOwnPage' + this.id)
                } else if (from == 1) {
                    common.buryCounterOnce('openOwnPageFromElse', 'openOwnPage' + this.id)
                }

                if (!common.Storage('tapTellMe')) {
                    this.questions.Qm1 = [
                        {
                            key: 'Qm1',
                            id: common.userInfo.openid,
                            content: '有好友进来通知我',
                        },
                        {
                            type: 'photo',
                            id: 'helper',
                            content: {
                                url: 'https://dl.qingdianyuedu.com/material/web/hepaihaoyou/qrcode3-3.png',
                                style: {
                                    width: '242px',
                                    height: '213px',
                                },
                            },
                        },
                    ]

                    this.contents = [
                        {
                            id: 'helper',
                            content: common.userInfo.nickname + '，你的心跳实验“' + JSON.parse(experiment.content).title + '”已经发起成功！👏',
                        },
                        {
                            id: 'helper',
                            content: '你可以去@好友实验1站，预约实时的好友来访通知。',
                            sColor: true,
                        },
                        ['Qm1', 'Ql1', '继续分享本次实验'],
                    ]

                } else {
                    if (mcount > 0 && now - create < 900) {
                        this.questions.Qm2 = [
                            {
                                key: 'Qm2',
                                id: common.userInfo.openid,
                                content: '查看我的好友来访记录',
                            },
                            {
                                type: 'photo',
                                id: 'helper',
                                content: {
                                    url: 'https://dl.qingdianyuedu.com/material/web/hepaihaoyou/qrcode3-3.png',
                                    style: {
                                        width: '242px',
                                        height: '213px',
                                    },
                                },
                            },
                        ]

                        this.contents = [
                            {
                                id: 'helper',
                                content: '亲爱的' + common.userInfo.nickname + '，你的心跳实验“' + JSON.parse(experiment.content).title + '”已经有' + mcount + '个好友参与，你可以联系小助手查看详细的好友来访记录。',
                            },
                            ['Qm2', 'Ql1'],
                        ]

                    } else {
                        this.t = 1

                        this.ownScript(experiment, members, mcount)
                    }
                }
            }
        },

        joinScript: function (experiment, members, mcount) {
            common.buryCounterOnce('openParticipate', 'openParticipate' + this.id)

            var owner = this.users[experiment.openid]

            var winNum = Number(experiment.num)

            var winId, userNum, start = mcount - members.length + 1
            for (var i in members) {
                var num = start + Number(i)

                var item = members[i]
                item = {
                    id: item.openid,
                    num: num,
                    time: item.addtime,
                    content: this.users[item.openid].nickname,
                }

                if (num == winNum) {
                    winId = item.id

                    item.content = '中奖'
                    item.sColor = true
                }

                if (item.id == common.userInfo.openid) {
                    userNum = num

                    item.content = '我'
                    item.sColor = true
                }

                members[i] = item
            }

            var A1 = '你是第' + userNum + '个进来的，'
            if (userNum == 1) {
                A1 += '来太早了😭😭😭'

            } else if (userNum == 2) {
                A1 += '来太早了哈😂'

            } else if (winNum - userNum == 2) {
                A1 += '只来早了两个，差一丢丢就中奖了！😢'

            } else if (winNum - userNum == 1) {
                A1 += '竟然只早了一个！真是太可惜了...😢'

            } else if (winNum == userNum) {
                A1 += '哇，你竟然中奖了！！🎉'

                this.isWinner = true

            } else if (userNum - winNum == 1) {
                A1 += '竟然只晚了一个！真是太可惜了...😢'

            } else if (userNum - winNum == 2) {
                A1 += '竟然只晚了两个，差一丢丢就中奖了！😢'

            } else if (winNum - userNum > 2) {
                A1 += '来早了一点哈哈😂'

            } else if (userNum - winNum > 2 && userNum - winNum < 5) {
                A1 += '来晚了一点，差一丢丢就中奖了😢'

            } else if (userNum - winNum >= 5) {
                A1 += '来得好晚啊，别人早就已经中奖啦～😢'
            }
            A1 = {
                id: 'helper',
                content: A1,
            }

            var Q1 = [
                {
                    key: 'Q1',
                    id: common.userInfo.openid,
                    content: '我是第几个进来的？',
                },
                A1,
            ]

            var Q2 = [
                {
                    key: 'Q2',
                    id: common.userInfo.openid,
                    content: '我中奖了吗？',
                },
                A1,
            ]

            // if (this.isWinner) {
            //     var content = {
            //         type: 'photo',
            //         id: owner.openid,
            //         content: {
            //             url: 'https://dl.qingdianyuedu.com/material/web/hepaihaoyou/fish.png',
            //             style: {
            //                 width: '242px',
            //                 height: '230px',
            //             },
            //         },
            //     }
            //     Q1.push(content)
            //     Q2.push(content)
            // }

            var A32
            if (userNum == winNum) {
                A32 = '@' + common.userInfo.nickname + '，你是不是锦鲤附身了😂😂😂，快去发起你自己的心跳实验吧😘'
            } else if (userNum < 4) {
                A32 = '@' + common.userInfo.nickname + '，你是我的第' + ['一', '二', '三'][userNum - 1] + '名！快去发起你自己的心跳实验吧😘'
            } else {
                A32 = '@' + common.userInfo.nickname + '，看上面，我还能看到你们进来的时间😎，快去发起你自己的心跳实验吧😘'
            }

            var Q3 = [
                {
                    key: 'Q3',
                    id: common.userInfo.openid,
                    content: '还有谁进来了？',
                },
                {
                    type: members.length < 4 ? 'ownMember' : 'joinMember',
                    id: 'helper',
                    mcount: mcount,
                    content: members.slice(-20),
                },
                {
                    id: owner.openid,
                    content: A32,
                }
            ]

            this.questions.Q1 = Q1
            this.questions.Q2 = Q2
            this.questions.Q3 = Q3

            this.timeLine = [
                {
                    id: 'helper',
                    content: common.userInfo.nickname + '，这是@' + owner.nickname + ' 的心跳实验，请揭晓答案⬇️⬇️⬇️',
                },
            ]

            this.contents = [
                ['Q1', 'Q2'],
                ['Q3', 'Ql1'],
                ['Ql1', 'Qh1'],
            ]
        },

        loadContent: function () {
            if (this.contents.length <= this.progress) {
                return
            }

            var content = this.contents[this.progress]

            if (content instanceof Array) {
                for (var i in content) {
                    var question = content[i]

                    if (question.slice(0, 1) == 'Q') {

                        if (question == 'Q1' || question == 'Q3') {
                            this.showFinger = true
                        }

                        question = this.questions[question]
                    }

                    if (question) {
                        this.options.push(question)
                    }
                }

            } else if (content.type == 'events') {
                this.events = content.content

            } else if (content.type == 'winNum') {
                this.showWinNum = true

            } else if (content.type == 'explain') {
                this.showExplain = true

            } else {
                if (content.type == 'customChange') {

                    if (common.Storage('allowCustom')) {
                        this.allowCustom = true

                    } else if (this.t == 2) {
                        common.Storage('allowCustom', true)
                        this.allowCustom = true

                    } else {
                        common.Storage('allowCustom', true)
                        this.allowCustom = false
                    }

                    if (this.allowCustom && this.inputBadText < 3) {
                        content.content = '主人，请选择一个喜欢的实验项目，也可以自己写哦～'
                    } else {
                        content.content = '主人，请选择一个喜欢的实验项目。'
                    }
                }

                this.timeLine.push(content)
            }

            this.$nextTick(function () {
                window.scrollTo(0, document.body.scrollHeight)
            })

            this.progress++

            this.autoPlay(content)
        },

        autoPlay: function (content) {
            if (this.contents.length <= this.progress || this.options.length || this.events || this.showWinNum || this.showExplain) {
                return
            }

            var interval
            if (content.type == 'photo') {
                interval = 0.5
            } else if (content.type == 'ownMember' || content.type == 'joinMember') {
                interval = 1 + content.content.length * 0.1
            } else {
                interval = content.content.length / 16
            }

            var that = this
            setTimeout(function () {
                that.loadContent()
            }, 1000 * interval)
        },

        optionSelect: function (index) {
            if (this.showFinger) {
                this.showFinger = false
            }

            var option = this.options[index]

            if (option instanceof Array) {
                var select = option[0].key

                if (select == 'Q1') {
                    common.buryCounterOnce(this.isWinner ? 'tapAskMyNum2' : 'tapAskMyNum1', "Q1Q2" + this.id)

                } else if (select == 'Q2') {
                    common.buryCounterOnce(this.isWinner ? 'tapWhoWin2' : 'tapWhoWin1', "Q1Q2" + this.id)

                } else if (select == 'Q3') {
                    common.buryCounterOnce('tapWhoInToo', "tapWhoInToo" + this.id)

                } else if (select == 'Qh1') {
                    if (this.isWinner) {
                        common.buryCounterOnce('tapPlayAlso1Win', "tapPlayAlso1Win" + this.id)
                    } else {
                        common.buryCounterOnce('tapPlayAlso1', "tapPlayAlso1" + this.id)
                    }

                    common.checkedExplain = true

                } else if (select == 'Ql1') {
                    if (this.t > 1) {
                        common.buryCounter('tapToLaunch1')
                    } else if (this.isOwner) {
                        common.buryCounter('tapToLaunch2')
                    } else if (this.isWinner) {
                        common.buryCounterOnce('tapPlayAlso2Win', "tapPlayAlso2Win" + this.id)
                    } else {
                        common.buryCounterOnce('tapPlayAlso2', "tapPlayAlso2" + this.id)
                    }
                } else if (select == 'Qm1') {
                    common.Storage('tapTellMe', true)
                    common.buryCounterOnce('tapTellMe', "tapTellMe" + this.id)
                    common.buryCounterOnce('tapTellMeOnce', "tapTellMeOnce")
                } else if (select == 'Qm2') {
                    common.buryCounterOnce('tapCheckRecord', "tapCheckRecord" + this.id)
                }

                this.contents = this.contents.slice(0, this.progress).concat(option, this.contents.slice(this.progress))

                this.questions[select] = undefined

                this.options = []

                this.loadContent()

            } else if (option == '继续分享本次实验' || option == '分享本次心跳实验') {
                this.toShare()
            }
        },

        toLaunch: function () {
            this.showExplain = false

            if (this.isWinner) {
                common.buryCounterOnce('tapPlayAlso2WinQh', "tapPlayAlso2WinQh" + this.id)
            } else {
                common.buryCounterOnce('tapPlayAlso2Qh', "tapPlayAlso2Qh" + this.id)
            }

            this.loadContent()
        },

        chooseEvent: function (event) {
            this.events = null

            this.selectEvent = event

            if (this.t == 2) {

            } else if (this.isOwner) {

            } else {
                common.buryCounterOnce('tapChooseEvent', "tapChooseEvent" + this.id)
            }

            var title = event.custom ? '自定义项目：' : '选择项目：'
            var content = event.event.replace("你", "Ta")
            this.contents.splice(this.progress, 0, {
                id: common.userInfo.openid,
                content: title + content,
            })

            this.loadContent()
        },

        editWinNum: function (add) {
            if (add) {
                if (this.eventWinNum < 20) {
                    this.eventWinNum += 1
                }
            } else {
                if (this.eventWinNum > 3) {
                    this.eventWinNum -= 1
                }
            }

            if (this.t == 2) {

            } else if (this.isOwner) {

            } else {
                common.buryCounterOnce('tapEditWinNum', "tapEditWinNum" + this.id)
            }
        },

        submit: function () {
            var loading = weui.loading("loading...")

            if (this.t > 1) {
                common.buryCounter('tapOKLaunch1')

            } else if (this.isOwner) {
                common.buryCounter('tapOKLaunch2')

            } else if (common.checkedExplain) {
                common.checkedExplain = false

                common.buryCounterOnce('tapOKLaunch3Checked', "tapOKLaunch3" + this.id)
            } else {
                common.buryCounterOnce('tapOKLaunch3', "tapOKLaunch3" + this.id)
            }

            var parameters = {
                num: this.eventWinNum,
                is_custom: this.selectEvent.custom,
                content: JSON.stringify({
                    title: this.selectEvent.event
                }),
            }
            // if (this.t == 2) {
            //     parameters.redpacket = '76a3d07a4ed3e07068f7'
            // }

            var that = this
            Vue.http.post(config.api.wxLaunch, parameters, {
                emulateJSON: true,
            }).then(function (res) {
                loading.hide()

                if (res.body.status == true) {
                    var data = res.body

                    common.setShare({
                        title: '第' + that.eventWinNum + '个点开的人，' + that.selectEvent.event,
                        desc: config.share.desc,
                        link: config.share.link + '#/task/' + data.data.eid + '/0',
                        imgUrl: config.share.imgUrl,
                        success: function (res) {
                            var from = that.t == 2 ? 3 : that.isOwner ? 2 : 1
                            location.href = config.share.link + '?eid' + data.data.eid + '=' + from + '#/task/' + data.data.eid + '/0'
                        }
                    })

                    that.eventSuccess = true
                    that.showShare = true

                } else if (res.body.info == "敏感词") {
                    that.showWinNum = false

                    that.inputBadText++
                    common.Storage('inputBadText', that.inputBadText)

                    ShowTextAlert('你的实验项目不合格，请重新选择实验项目。')

                    that.contents = that.contents.concat(that.questions.Al1)

                    that.loadContent()

                } else {
                    common.buryCounterOnce('errorCreate2', 'errorCreate2')
                    weui.alert("网络出错Err02，请稍后再试")
                }
            }, function (err) {
                loading.hide()

                common.buryCounterOnce('errorCreate1', 'errorCreate1')
                weui.alert("网络出错Err01，请稍后再试")
            })
        },

        toShare: function () {
            common.buryCounter('tapToShare1')

            this.showShare = true
        },

        hideShare: function () {
            if (this.eventSuccess) {
                return
            }

            this.showShare = false
        },

        customShow: function () {
            this.showCustom = true

            var input = document.getElementById("customOption")
            var that = this
            input.onfocus = function () {
                that.$nextTick(function () {
                    window.scrollTo(0, document.body.scrollHeight)
                })
            }
            input.focus()

            common.buryCounterOnce('tapCustomEvent', "tapCustomEvent" + this.id)
        },

        customHide: function () {
            this.showCustom = false

            var input = document.getElementById("customOption")
            var that = this
            input.onblur = function () {
                that.$nextTick(function () {
                    window.scrollTo(0, document.body.scrollHeight)
                })
            }
            input.blur()
        },

        customDone: function () {
            this.customHide()

            var input = document.getElementById("customOption")

            if (!input.value.length) {
                ShowTextAlert('请输入项目内容')
                return
            }

            this.chooseEvent({custom: 1, event: input.value.slice(0, 20)})
            input.value = ''

            common.buryCounterOnce('tapCustomConfirm', "tapCustomConfirm" + this.id)
        },

        clickExample: function (e) {
            var input = document.getElementById("customOption")
            var that = this
            input.onblur = function () {
                that.$nextTick(function () {
                    input.focus()
                })
            }
            input.value = e.target.innerText
        },
    }
})

var router = new VueRouter({
    routes: [
        {
            name: "index",
            path: "/",
            component: HomeView,
        },
        {
            name: "enter",
            path: "/enter",
            component: EnterView,
        },
        {
            name: "task",
            path: "/task/:id/:t",
            component: TaskView,
            props: true,
        },
    ]
})

router.afterEach(function (to, from) {
    common.setShare(config.share)
})

common.wxConfig(function () {
    var app = new Vue({
        el: "#app",
        router,
    })
})
