function setCookie(a, b, c, d, e, f) {
    document.cookie = a + "=" + escape(b) + (c ? "; expires=" + c : "") + (d ? "; path=" + d : "") + (e ? "; domain=" + e : "") + (f ? "; secure" : "")
}
function replace_specialChar(a) {
    var b, c;
    for (b = 0; b < spChars.length; b++)
        c = new RegExp("(\\" + spChars[b] + ")","g"),
        a = a.replace(c, spToChars[b]);
    return /^[A-Za-z\s\.,]+$/.test(a) && (a = a.replace(/\s+/g, " ")),
    a = a.replace(/[^\x09\x0A\x0D\x20-\uD7FF\uE000-\uFFFD\u10000-\u10FFFF]/gi, ""),
    $.trim(a)
}
function pushHistory() {
    if ("miniprogram" !== window.__wxjs_environment && !window.IsPar && window == window.top) {
        var a = {
            title: "title",
            url: "#"
        };
        window.history.pushState(a, "title", "")
    }
}
function clickJp(a) {
    window._czc && _czc.push(["_trackEvent", "未完成填写", "点击"]);
    var b = a.getAttribute("vhref");
    return window.location = b,
    !0
}
function show_zhezhao_tip(a) {
    var b, c, d, e, f, g, h;
    if (a) {
        if ($("#zhezhaotip")[0])
            return;
        b = "",
        c = "",
        "miniprogram" === window.__wxjs_environment && (c = "&minip=1"),
        b = "<div style='width: 100%;height:67px;text-align: center;'><a href='javascript:' onclick='return clickJp(this);' vhref='/newsojiang/mobile/getaward.aspx?sType=3&activity=" + activityId + c + "' style='font-size: 14px;color: #ff7b8f;display:block;'>" + "<div style='text-align: center;padding-top:10px' ><img src='/images/mobile/liwu.png' alt='' height='16px' width='16px' style='top: 2px;position: relative;margin-right:4px;' />抽取奖品</div>" + "<div style='font-size: 12px;color: #adadad;margin-top:4px;'>注满能量，再来填写吧！</div></a>" + "</div>",
        d = "<div style='width:100%; background-color: #ffffff;'><img src='//image.wjx.com/images/mobile/bg.png' alt='' height='156px' width='300px' ><div style='border-bottom: 1px solid #D9E4FF;height:126px'><div style='margin:30px auto 0; background-color: #1D66F0; font-size: 16px; color: #fff; line-height: 40px; height:40px;width:200px; border-radius: 22px;text-align: center;' onclick='show_zhezhao_tip(false);'>继续填写</div><div style='margin:16px auto 0; background-color: #EBF2FF; font-size: 16px; color: #C0C0C0; line-height: 40px; height:40px;width:200px; border-radius: 22px;text-align: center;' onclick='closeTipWindow(true);'>残忍拒绝</div></div></div>",
        e = "<div class='popuptip' style='width:300px;background:#fff;border-radius: 10px;margin: auto;position: absolute; z-index: 9999;overflow: hidden;height:380px;'>" + d + b + "</div>",
        $("body").append('<div style="z-index:999;top: 0px;left: 0px;position: fixed;width: 100%;height: 100%;" id="zhezhaotip"><div style="position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;opacity: 0.5;background-color: #000;"></div>' + e + "</div>"),
        f = $("html").height(),
        g = $(window).height(),
        h = 100,
        h = g > f ? g : f,
        $("#zhezhaotip").height(h),
        $(".popuptip").css("left", ($(window).width() - $(".popuptip").width()) / 2),
        $(".popuptip").css("top", ($(window).height() - $(".popuptip").height()) / 2),
        hasShowTip || window._czc && _czc.push(["_trackEvent", "未完成填写", "加载"]),
        setLastPop(),
        hasShowTip = !0
    } else
        $("#zhezhaotip").remove()
}
function closeTipWindow(a) {
    var b = "确认不再填写问卷吗？";
    1 == langVer && (b = "Would you like to leave?"),
    window.WeixinJSBridge ? a ? document.referrer ? window.location.href = document.referrer : WeixinJSBridge.call("closeWindow") : confirmnew(b, function() {
        document.referrer ? window.location.href = document.referrer : WeixinJSBridge.call("closeWindow")
    }) : (needGoOut = !0,
    show_zhezhao_tip(!1),
    window.close && window.close(),
    window.history.back())
}
function setLastPop() {}
function checkCanPop() {
    return window.localStorage ? localStorage["wjxuserpub"] ? !1 : window.location.href.indexOf("?pvw=1") > -1 || window.location.href.indexOf("&pvw=1") > -1 ? !1 : window.isVip ? !1 : 1 == langVer ? !1 : window.canAward ? !0 : !1 : !1
}
function listenTpPopState() {
    window.addEventListener("popstate", function() {
        if (isPageRun) {
            var b = "/m/" + activityId + ".aspx?ptfpar=1";
            window.tpScrollTop && (b += "&tptop=" + (window.tpScrollTop || 0)),
            window.location = b
        }
    })
}
function setMatrixFill() {
    (!curMatrixError || curMatrixFill.fillvalue) && $("#divMatrixRel").hide()
}
function setChoice(a) {
    if (-1 != a.selectedIndex) {
        $(a).parents(".ui-select").hasClass("initStyle") && $(a).parents(".ui-select").removeClass("initStyle"),
        $(a.parentNode).find("span").first().html(a.options[a.selectedIndex].text);
        var b = $(a.parentNode).prev("input");
        b.val(a.value),
        b.trigger("change")
    }
}
function showMatrixHeader(a, b) {
    var c, d, e, g, i, j, k, l, m, n, p, q, r;
    if (("6" == $(b).attr("type") || "5" == $(b).attr("type")) && !window.IsPar) {
        if (c = $(a).offset(),
        d = c.top - 9,
        e = c.left,
        g = $(a).width(),
        "6" == $(b).attr("type")) {
            if ("6" == $(a).attr("mode"))
                return;
            d = c.top - 9,
            $(window).width(),
            i = $(a).parent().parent(),
            j = $("td", i).index($(a).parent()),
            k = $("table.matrix-rating", b)[0],
            l = k.rows[0].cells[j],
            m = $(l).text(),
            n = 12 * m.length,
            (n - $(a).width()) / 2,
            e = c.left + g / 2
        } else
            !$(a).attr("mode") || "2" != $(a).attr("mode") && "3" != $(a).attr("mode") && "4" != $(a).attr("mode") ? $(a).attr("mode") && "6" == $(a).attr("mode") ? ($(window).width(),
            c = $(a).offset(),
            d = c.top - 9,
            m = $(a).attr("title"),
            n = 12 * m.length,
            e = c.left + g / 2) : (p = $(a).height(),
            19 == p && (p = 24),
            d = c.top - 9,
            m = $(a).attr("title"),
            n = 12 * m.length,
            e = c.left + g / 2) : ($(window).width(),
            c = $(a).offset(),
            d = c.top - 9,
            m = $(a).attr("title"),
            n = 12 * m.length,
            e = c.left + g / 2);
        $("#divMatrixHeader").html(m),
        q = $("#divMatrixHeader").outerHeight(),
        r = $("#divMatrixHeader").outerWidth(),
        d -= q,
        e -= r / 2,
        $("#divMatrixHeader")[0].referTopic = getTopic($(b)),
        $("#divMatrixHeader").css("top", d + "px").css("left", e + "px").show()
    }
}
function showMatrixFill(a, b) {
    var c, d, e, f, g;
    if (b) {
        if (curMatrixError)
            return;
        curMatrixError = a
    }
    curMatrixFill = a,
    c = a.fillvalue || "",
    $("#matrixinput").val(c),
    d = $(a).attr("req"),
    e = "请注明...",
    d = a.getAttribute("req"),
    d && (e = "请注明...[必填]"),
    1 == langVer && (e = "Please specify"),
    matrixinput.setAttribute("placeholder", e),
    f = $(a).offset(),
    g = f.top - $(a).height() + 45,
    $("#divMatrixRel").css("top", g + "px").css("left", "0").show()
}
function refresh_validate() {
    imgCode && "none" != tCode.style.display && "none" != imgCode.style.display && (imgCode.src = "/wjx/join/AntiSpamImageGen.aspx?q=" + activityId + "&t=" + (new Date).valueOf()),
    submit_text && (submit_text.value = ""),
    imgVerify && imgVerify.onclick(),
    window.useAliVerify && (isCaptchaValid = !1,
    captchaOjb && captchaOjb.reload())
}
function processRadioInput(a, b) {
    a.prevRadio && a.prevRadio.itemText && a.prevRadio != b && (a.prevRadio.itemText.pvalue = a.prevRadio.itemText.value,
    a.prevRadio.itemText.value = ""),
    b.itemText && b != a.prevRadio && (b.itemText.value = b.itemText.pvalue || ""),
    a.prevRadio = b
}
function addClearHref(a) {
    if (!window.isKaoShi) {
        if (a.hasClearHref)
            return a.clearHref.style.display = "",
            void 0;
        var b = document.createElement("a");
        b.title = validate_info_submit_title2,
        b.style.color = "#999999",
        b.style.marginLeft = "25px",
        b.innerHTML = "[" + type_radio_clear + "]",
        b.href = "javascript:void(0);",
        a.hasClearHref = !0,
        $(".field-label", a).append(b),
        a.clearHref = b,
        b.onclick = function() {
            clearFieldValue(a),
            referTitle(a),
            this.style.display = "none",
            jumpAny(!1, a),
            saveAnswer(a)
        }
    }
}
function referTitle(a, b) {
    var c, d, e, f;
    if (a[0]._titleTopic)
        for (c = "",
        void 0 == b ? $("input:checked", a).each(function() {
            var b = $(this).parent().next().html();
            c && (c += "&nbsp;"),
            c += b
        }) : c = b,
        d = 0; d < a[0]._titleTopic.length; d++)
            e = a[0]._titleTopic[d],
            f = document.getElementById("spanTitleTopic" + e),
            f && (f.innerHTML = c)
}
function emptyTitle() {
    var a, b;
    needTip() || (a = window.location.host,
    b = a.indexOf(".wjx.cn") > -1 || a.indexOf(".wjx.top") > -1,
    b && (isWeiXin || window.top != window) && $("title").text(""))
}
function checkPeiE(a, b) {
    var c, d, e, f, g, h, i, j, k, l, m;
    if (!hasPeiEFull) {
        if (c = "",
        d = "",
        b && "1" == a.attr("req") && "1" == a.attr("peie") && "" == a[0].style.display && (e = !0,
        $(b, a).each(function() {
            var a = this.disabled;
            return a ? void 0 : (e = !1,
            !1)
        }),
        e && (hasPeiEFull = !0,
        f = a.attr("id").replace("div", ""),
        window.cityPeiEQues)))
            for (g = cityPeiEQues.split(";"),
            h = 0; h < g.length; h++)
                if (i = g[h].split("|"),
                3 == i.length && f == i[0]) {
                    d = i[2],
                    c = i[1];
                    break
                }
        b && "1" == a.attr("req") && "1" == a.attr("haspeie") && "" == a[0].style.display && (e = !0,
        $(b, a).each(function() {
            var b, c, d, f, a = $(this).attr("attrpeie");
            return a ? (b = a.split(";"),
            d = b[0].split("|"),
            c = "div" + d[0],
            f = $("#" + c + " input[type='radio']"),
            0 == f.length && (f = $("#" + c + " input[type='checkbox']")),
            0 == f.length && (f = $("#" + c + " input[type='hidden']")),
            b.length < f.length ? (e = !1,
            !1) : void 0) : (e = !1,
            !1)
        }),
        e && (hasPeiEFull = !0)),
        j = 0,
        "1" == a.attr("qingjing") && "" == a[0].style.display && "1" == a.attr("full") && (hasPeiEFull = !0,
        j = 1),
        hasPeiEFull && (k = "此问卷配额已满，暂时不能填写！",
        window.isPromoteing && (l = a.attr("id").replace("div", ""),
        m = "/handler/endwjxactivitypromote.ashx?ActivityId=" + activityId + "&sjts=" + prsjts + "&sjsign=" + prsjsign + "&city=" + c + "&ruletype=" + d + "&quid=" + l,
        window.cityPeiEQues && (m += "&citypeie=" + encodeURIComponent(window.cityPeiEQues)),
        $.ajax({
            type: "GET",
            url: m,
            async: !1,
            success: function() {}
        })),
        j && (k = "此问卷情景题配额已满，不能填写。"),
        $(divTip).html(k).show())
    }
}
function viewTpDetail(a, b) {
    return a = window.event || a,
    tpScrollTop = $(window).scrollTop(),
    location.href = "/m/" + activityId + ".aspx?tpii=" + b + "&ftppar=1&tptop=" + tpScrollTop,
    a.preventDefault(),
    a.stopPropagation(),
    !1
}
function voteData() {
    var a = 0
      , b = $(window).height()
      , c = $(window).width()
      , d = (b - 60) / 2 + a
      , e = (c - 300) / 2;
    0 > e && (e = 0),
    $("#captchaWrap").css({
        left: e + "px",
        top: d + "px",
        display: "block",
        position: "fixed"
    }),
    $("#captchaOut").css({
        left: "0px",
        top: "0px",
        display: "block",
        height: "100%",
        width: "100%",
        position: "fixed",
        background: "rgba(0,0,0,0.8)"
    }),
    $("#captcha").fadeIn("fast").css({
        "padding-left": 0,
        display: "flex",
        "justify-content": "center"
    }),
    $("#captchaTit").show(),
    $("#captchaOut").unbind("click"),
    $("#captchaWrap").click(function(a) {
        a.stopPropagation()
    }),
    $("#captchaOut").click(function(a) {
        a.stopPropagation(),
        $(this).hide()
    })
}
function isIosSystem() {
    var c, a = navigator.userAgent;
    return navigator.appVersion,
    c = !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    c ? !0 : void 0
}
function isYoukuVideo(a) {
    return a = a.toLowerCase(),
    a.indexOf("player.youku.com") > -1 || a.indexOf("v.qq.com") > -1 || a.indexOf("/wjx/join/") > -1 ? !0 : void 0
}
function iosIframeVideoHack() {
    var b, c, a = isIosSystem();
    if (!a)
        return !1;
    for (b = document.getElementsByTagName("iframe"),
    c = 0; c < b.length; c++)
        if (isYoukuVideo(b[c].src))
            return !0;
    return !1
}
function adjustVideoHeight(a) {
    var b, c, d, e, f;
    if (!a.hasAdjust)
        for (a.hasAdjust = !0,
        b = a.getElementsByTagName("iframe"),
        c = 0; c < b.length; c++)
            "2" == b[c].getAttribute("video") && (b[c].style.width = "100%",
            d = b[c].clientWidth,
            e = b[c].parentNode,
            e && "none" == e.style.display && (d = Math.min($(window).width(), 400) - 50),
            f = parseInt(d) / 640 * parseInt(b[c].height) + 15,
            f > 15 && b[c].setAttribute("style", "height:" + parseInt(f) + "px !important"))
}
function replaceImg(a) {
    var b = "http://pubimageqiniu.paperol.cn"
      , c = "//pubnewfr.paperol.cn";
    0 == a.src.indexOf("http://pubssl.sojump.com") || 0 == a.src.indexOf("https://pubssl.sojump.com") || 0 == a.src.indexOf("http://pubimage.sojump.com") || 0 == a.src.indexOf("http://pubimage.sojump.cn") || 0 == a.src.indexOf("http://pubssl.sojump.cn") ? a.src = a.src.replace("http://pubssl.sojump.com", b).replace("https://pubssl.sojump.com", b).replace("http://pubimage.sojump.com", b).replace("http://pubimage.sojump.cn", b).replace("http://pubssl.sojump.cn", b) : (0 == a.src.indexOf("http://pubalifr.sojump.com") || 0 == a.src.indexOf("https://pubalifr.sojump.com") || 0 == a.src.indexOf("https://pubali.sojump.com") || 0 == a.src.indexOf("http://pubali.sojump.com") || 0 == a.src.indexOf("http://pubali.sojump.cn") || 0 == a.src.indexOf("http://pubalifr.sojump.cn") || 0 == a.src.indexOf("https://pubali.sojump.cn") || 0 == a.src.indexOf("https://pubalifr.sojump.cn")) && (a.src = a.src.replace("http://pubalifr.sojump.com", c).replace("https://pubalifr.sojump.com", c).replace("http://pubali.sojump.com", c).replace("https://pubali.sojump.com", c).replace("http://pubali.sojump.cn", c).replace("https://pubali.sojump.cn", c).replace("http://pubalifr.sojump.cn", c).replace("https://pubalifr.sojump.cn", c))
}
function showAnswer(a, b) {
    var c, d;
    if (window.isChuangGuan && "1" == a.attr("ceshi")) {
        if (2 == window.isChuangGuan)
            return canNext(a, b),
            void 0;
        c = $(a)[0],
        c.confirmButton || (d = document.createElement("a"),
        d.style.marginTop = "5px",
        d.className = "sumitbutton cancle",
        c.insertBefore(d, c.lastChild),
        c.confirmButton = d,
        d.innerHTML = "确认",
        fixBottom(),
        d.onclick = function() {
            var a, d, e, f, g, h;
            (hasConfirmBtn || confirm("确认后答案将无法修改，确认吗？")) && (c.hasConfirm = !0,
            hasConfirmBtn = !0,
            a = !0,
            d = "",
            e = "",
            b.each(function() {
                var b = "1" == this.getAttribute("ans")
                  , c = $("input", this)[0]
                  , f = $(".label", this).html();
                /^[A-Z][\.、．\s]/.test(f) && (f = f.substring(0, 1)),
                b ? (c.checked ? (e && (e += ","),
                e += f) : a = !1,
                d && (d += ","),
                d += f) : c.checked && (a = !1,
                e && (e += ","),
                e += f)
            }),
            c.correctAnswer || (f = document.createElement("div"),
            f.style.marginTop = "10px",
            c.insertBefore(f, c.lastChild),
            c.correctAnswer = f),
            g = a ? "<span style='color:green;'>回答正确</span>" : "<span style='color:red;'>回答错误(" + e + ")，正确答案为：" + d + "</span>",
            c.correctAnswer.innerHTML = g,
            h = document.getElementById("divjx" + c.id.replace("div", "")),
            h && (h.style.display = ""),
            fixBottom())
        }
        )
    }
}
function restoreAnswer() {
    var b, c, d, e, f, g, h, i, j, a = null;
    if (window.joinIdnew && window.answertext)
        a = window.answertext;
    else {
        // if (!window.localStorage)
        //     return null;
        // if (b = localStorage["wjxtempanswerid"],
        // b != activityId)
        //     return null;
        // if (window.randomMode)
        //     return;
        // if (c = "wjxtempanswer",
        // a = localStorage[c],
        // !a)
        //     return null;
        // if (d = localStorage["wjxtempanswerdat"],
        // !d)
        //     return null;
        // if (e = window.qBeginDate || 0,
        // 0 > d - e)
        //     return null
    }
    // for (f = a.split(spChars[1]),
    // g = new Array,
    // h = 0; h < f.length; h++)
    //     i = f[h].split(spChars[0]),
    //     j = new Object,
    //     j._value = i[1],
    //     j._topic = i[0],
    //     g.push(j);
    // return g
}
function saveAnswer(a) {
    var b, c, e, f, g, h, i, j, k;
    // if (window.localStorage && (b = window.isSingleVote && window.isMultipleChoice && !window.touPiaoItemIndex,
    // (window.needSaveJoin || b) && !window.randomMode))
    //     try {
    //         for (c = "wjxtempanswer",
    //         localStorage[c],
    //         e = restoreAnswer(),
    //         null == e && (e = new Array),
    //         f = getTopic(a),
    //         g = new Object,
    //         h = $(a).attr("type"),
    //         g._topic = f,
    //         g._value = "",
    //         getAnswer(a, g, h, !0),
    //         i = !1,
    //         j = 0; j < e.length; j++)
    //             if (e[j]._topic == g._topic) {
    //                 i = !0,
    //                 e[j]._value = g._value;
    //                 break
    //             }
    //         for (i || e.push(g),
    //         e.sort(function(a, b) {
    //             return a._topic - b._topic
    //         }),
    //         k = "",
    //         j = 0; j < e.length; j++)
    //             j > 0 && (k += spChars[1]),
    //             k += e[j]._topic,
    //             k += spChars[0],
    //             k += e[j]._value;
    //         saveSubmitAnswer(k)
    //     } catch (l) {}
}
function saveSubmitAnswer(a) {
    window.localStorage && (localStorage.setItem("wjxtempanswer", a),
    localStorage.setItem("wjxtempanswerid", activityId),
    localStorage.setItem("wjxtempanswerdat", (new Date).getTime()),
    localStorage.setItem("wjxfirstloadtime", fisrtLoadTime),
    localStorage.setItem("wjxsavepage", cur_page))
}
function clearAnswer() {
    if (window.localStorage) {
        var a = localStorage["wjxtempanswerid"];
        a == activityId && (localStorage.removeItem("wjxtempanswer"),
        localStorage.removeItem("wjxtempanswerid"),
        localStorage.removeItem("wjxtempanswerdat"),
        localStorage.removeItem("wjxfirstloadtime"),
        localStorage.removeItem("wjxlastcosttime"))
    }
}
function loadAnswer() {
    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, a = restoreAnswer();
    if (null != a) {
        for (ktimes++,
        localStorage["wjxfirstloadtime"] && (lastCostTime = localStorage["wjxtempanswerdat"] - localStorage["wjxfirstloadtime"],
        localStorage["wjxlastcosttime"] && (lastCostTime += parseInt(localStorage["wjxlastcosttime"])),
        localStorage.setItem("wjxlastcosttime", lastCostTime)),
        isLoadingAnswer = !0,
        b = 0,
        window.joinIdnew || (b = localStorage["wjxsavepage"]),
        c = 0; c < a.length; c++)
            if (d = a[c]._topic,
            e = a[c]._value,
            e && (f = $("#div" + d),
            "none" != f[0].style.display))
                switch (cur_page = f[0].pageIndex || 0,
                g = $(f).attr("type")) {
                case "1":
                    h = $("input", f),
                    h.val(e).trigger("blur"),
                    h.parent().hasClass("getLocalBtn") && h.parent().prev().text(e).show();
                    break;
                case "2":
                    $("textarea", f).val(e).trigger("blur");
                    break;
                case "3":
                    i = e.split(spChars[2]),
                    $("input", f).each(function() {
                        if ("radio" == this.type && this.value == i[0]) {
                            if (i[1]) {
                                var a = $(this).attr("rel");
                                a && $("#" + a).val(i[1])
                            }
                            f[0].prevRadio = this,
                            $(this.parentNode.parentNode).trigger("click")
                        }
                    });
                    break;
                case "4":
                    j = e.split(spChars[3]),
                    $("input", f).each(function() {
                        var a, b, c, d;
                        if ("checkbox" != this.type)
                            return !0;
                        for (a = this.value,
                        b = 0; b < j.length; b++)
                            if (c = j[b].split(spChars[2]),
                            c[0] == a) {
                                c[1] && (d = $(this).attr("rel"),
                                d && ($("#" + d).val(c[1])[0].pvalue = c[1])),
                                $(this.parentNode.parentNode).trigger("click");
                                break
                            }
                    });
                    break;
                case "5":
                    $(".rate-off", f).each(function() {
                        this.getAttribute("val") == e && $(this).parent().trigger("click")
                    });
                    break;
                case "7":
                    $("select", f).val(e).trigger("change");
                    break;
                case "11":
                    j = e.split(","),
                    $("input", f).each(function() {
                        var a, b, c, d;
                        if ("hidden" != this.type)
                            return !0;
                        for (a = this.value,
                        b = 0; b < j.length; b++)
                            if (c = j[b].split(spChars[2]),
                            c[0] == a) {
                                c[1] && (d = $(this).attr("rel"),
                                d && ($("#" + d).val(c[1])[0].pvalue = c[1])),
                                $(this.parentNode).trigger("click");
                                break
                            }
                    });
                    break;
                case "8":
                    k = $("input", f),
                    k.val(e),
                    l = f.attr("hasjump"),
                    l && $(k).trigger("change");
                    break;
                case "21":
                    for (j = e.split(spChars[3]),
                    m = $("input", f),
                    n = 0; n < j.length; n++)
                        o = j[n].split(spChars[2]),
                        p = parseInt(o[0]) - 1,
                        $(m[p]).val(o[1]);
                    updateCart(f);
                    break;
                case "12":
                case "9":
                    for (q = e.split(spChars[2]),
                    r = new Object,
                    n = 0; n < q.length; n++)
                        s = q[n].split(spChars[4]),
                        2 == s.length && (r[s[0]] = s[1]);
                    l = f.attr("hasjump"),
                    $("input", f).each(function(a) {
                        var c, d, e, b = $(this);
                        return "12" == g && window.hasReferClient && (c = this.parentNode.parentNode.parentNode,
                        c && "none" == c.style.display) ? !0 : (d = b.attr("rowid"),
                        e = d ? r[d] : q[a],
                        b.val(e),
                        b.next().hasClass("textEdit") && e && b.next().removeClass("initStyle").children(".textCont").html(e).css({
                            display: "inline"
                        }),
                        "指定选项" == b.attr("verify") && b.val() && b.next().find("select").val(b.val()).trigger("change"),
                        $(b).trigger("change"),
                        void 0)
                    });
                    break;
                case "13":
                    f[0].fileName = e || "",
                    e && $(".uploadmsg", f).html("文件已经成功上传！");
                    break;
                case "10":
                    for (q = e.split(spChars[2]),
                    r = new Object,
                    n = 0; n < q.length; n++)
                        s = q[n].split(spChars[4]),
                        2 == s.length && (r[s[0]] = s[1]);
                    t = "input",
                    u = !1,
                    "1" == f.attr("select") && (t = "select",
                    u = !0),
                    l = f.attr("hasjump"),
                    $("table", f).each(function() {
                        var b, c, d, e, g, a = this;
                        return (window.hasReferClient || f.attr("zizeng")) && (b = a.parentNode,
                        b && "none" == b.style.display) ? !0 : (c = a.parentNode.getAttribute("rowid"),
                        d = r[c],
                        e = d.split(spChars[3]),
                        g = 0,
                        $(t, this).each(function() {
                            if (this.value = e[g] || "",
                            !u) {
                                var a = $(this);
                                "指定选项" == a.attr("verify") && a.val() && a.next().find("select").val(a.val()).trigger("change")
                            }
                            u ? $(this).trigger("change") : l && $(this).trigger("change"),
                            g++
                        }),
                        void 0)
                    });
                    break;
                case "6":
                    for (q = e.split(","),
                    r = new Object,
                    n = 0; n < q.length; n++)
                        s = q[n].split(spChars[4]),
                        2 == s.length && (r[s[0]] = s[1]);
                    for (v = $(f).attr("ischeck"),
                    w = $("table.matrix-rating", f),
                    x = w[0].rows,
                    n = 0; n < x.length; n++)
                        y = x[n],
                        z = y.getAttribute("tp"),
                        "d" == z && (window.hasReferClient && "none" == y.style.display || (A = parseInt(y.getAttribute("rowindex")) + 1,
                        s = q[A],
                        $(".rate-off", y).each(function() {
                            var b, c, d, a = $(this).attr("dval");
                            if (v)
                                for (b = r[A].split(";"),
                                c = 0; c < b.length; c++)
                                    d = b[c].split(spChars[2]),
                                    a == d[0] && (d[1] && (this.fillvalue = d[1]),
                                    $(this).trigger("click"));
                            else
                                b = r[A].split(spChars[2]),
                                a == b[0] && (b[1] && (this.fillvalue = b[1]),
                                $(this).trigger("click"))
                        })))
                }
        cur_page = 0,
        b && b >= cur_page + 1 && (pageHolder[0].style.display = "none",
        cur_page = b - 1,
        localStorage.setItem("wjxsavepage", b),
        show_next_page(!0)),
        isLoadingAnswer = !1
    }
}
function needTip() {
    if (window.divTip && "" == divTip.style.display) {
        $("img", divTip)[0] && (divTip.style.background = "none",
        divTip.style.color = "#333");
        var a = $.trim($(divTip).text());
        if (a)
            return !0
    }
    return !1
}
function checkAnswer() {
    var b, a = window.isSingleVote && window.isMultipleChoice && !window.touPiaoItemIndex;
    window.needSaveJoin || a || window.joinIdnew ? loadAnswer() : window.isSingleVote || needTip() || (b = restoreAnswer(),
    b && $("#divLoadAnswer").show().html('<b style="color:red;">提示：</b>您上次作答没有成功提交，<a href="javascript:" onclick="loadAnswer();" style="color: #ff6666;text-decoration: underline;">加载上次答案</a>'))
}
function hideAward() {
    confirmnew("确认不再领取吗？", function() {
        window.localStorage && (vkey = "award_" + activityId,
        localStorage.removeItem(vkey),
        localStorage.removeItem(vkey + "name"),
        localStorage.removeItem(vkey + "tip")),
        $("#divContent").show().prev().hide(),
        initSlider()
    })
}
function processAward() {
     var b, c, d, e, f, a = "join_" ;
    document.cookie && -1 != document.cookie.indexOf(a + "=") && (a = "award_" + activityId,
    b = "",
    c = "",
    window.localStorage && (b = localStorage[a],
    c = localStorage[a + "name"]),
    b && 0 == b.indexOf("http") && (d = localStorage[a + "tip"],
    e = "",
    d && (e = " onclick='alert(\"" + d + "\");return true;' "),
    f = "<div style='margin:10px 12px;'>恭喜您抽中了" + c + "，如已领取请忽略！<br/><div style='text-align:center;'><a href='" + b + "'" + e + " class='button white' target='_blank' style='color:#fff; background:#e87814;'>立即领取</a></div><div style='margin-top:18px;text-align:center;'><a href='javascript:' onclick='hideAward();' style='color:#666;font-size:14px;'>不领取，重新填写问卷</a></div></div>",
    $("#divContent").before(f),
    $("#divContent").hide()))
}
function postHeight() {
    var a, b;
    if (window != window.top)
        try {
            if (a = parent.postMessage ? parent : parent.document.postMessage ? parent.document : null,
            null != a)
                return b = $("body").height(),
                a.postMessage("heightChanged," + b, "*")
        } catch (c) {}
}
function saveMatrixFill(a, b) {
    var c, d, e, f;
    window.needSaveJoin && (c = a.parentNode.parentNode,
    d = c.getAttribute("fid"),
    d && (e = "",
    b ? $(".rate-on", c).each(function() {
        if (e && (e += ";"),
        e += $(this).attr("dval"),
        this.fillvalue) {
            var a = replace_specialChar(this.fillvalue).replace(/;/g, "；").replace(/,/g, "，");
            e += spChars[2] + a
        }
    }) : (e = $(a).attr("dval"),
    a.fillvalue && (f = replace_specialChar(a.fillvalue).replace(/;/g, "；").replace(/,/g, "，"),
    e += spChars[2] + f)),
    $("#" + d).val(e)))
}
function saveLikert(a) {
    var b = $("a.rate-on", a);
    0 == b.length ? $("input:hidden", a).val("") : $("input:hidden", a).attr("value", $(b[b.length - 1]).attr("val"))
}
function setTableWidth(a) {
    var b, c, d, e;
    "none" != $(a)[0].style.display && "6" == $(a).attr("type") && (b = $("table.matrix-rating", a),
    1 != langVer && b[0] && b[0].rows[0] && b[0].rows[0].cells.length <= 11 || (c = b.outerWidth(),
    d = parseInt($(a).css("marginLeft")) + parseInt($(a).css("paddingLeft")),
    e = $("#divContent").outerWidth() - 2 * d,
    c > e && (b.parent("div").css({
        width: e,
        "overflow-x": "auto",
        "-webkit-overflow-scrolling": "touch"
    }),
    b.find("th").css("padding", "5px 8px"),
    b[0].addEventListener("touchmove", function() {
        $("#divMatrixHeader").hide()
    }, !1))))
}
function initRate(a, b) {
    $(".rate-off", a).parent().bind("click", function(c) {
        var f, g, h, i, j, k, l, m, n, o, p, q, r, d = $(a).attr("ischeck"), e = $("a", this)[0];
        d ? (f = !0,
        g = $(a).attr("maxvalue"),
        g && !$(e).hasClass("rate-on") && (h = $("a.rate-on", this.parentNode),
        g - h.length <= 0 && (f = !1)),
        f && ($(e).toggleClass("rate-on"),
        $(e).toggleClass("rate-onchk"),
        $(e).trigger("change"))) : CheckMax(e, b) && (i = $(this.parentNode).find("a.rate-off"),
        i.removeClass("rate-on"),
        j = $(e).attr("mode"),
        j ? (i.removeClass("rate-on" + j),
        k = e,
        i.each(function() {
            return $(this).toggleClass("rate-on"),
            $(this).toggleClass("rate-on" + j),
            this == k ? !1 : void 0
        })) : ($(e).toggleClass("rate-on"),
        $(e).text() || (i.removeClass("rate-ontxt"),
        $(e).toggleClass("rate-ontxt"))),
        $(e).trigger("change")),
        $(e).hasClass("rate-on") ? (j = $(e).attr("mode"),
        j || (l = $(e).attr("needfill"),
        l && !isLoadingAnswer && (showMatrixFill(e),
        c.stopPropagation()),
        !l && curMatrixError && curMatrixError != e && (curMatrixError = null)),
        showMatrixHeader(e, a)) : curMatrixError && curMatrixError == e && (curMatrixError = null),
        "5" == a.attr("type") && (displayRelationByType(a, "a.rate-off", 4),
        displayItemRelationRaidoCheck(a, "a.rate-off", 4)),
        jump(a, e),
        m = !1,
        b && (n = $(e).attr("dval"),
        o = $(e).parent().parent().parent(),
        "tbody" == o[0].tagName.toLocaleLowerCase() && (p = o.find("tr.trlabel").eq(0),
        q = p.find("th"),
        q.eq(n - 1) && (r = q.eq(n - 1).attr("itemmax"),
        r && r > 0 && (m = !0)))),
        !m && "1" == a.attr("req") || d || addClearHref(a),
        $("span.error", a).is(":visible") && validateQ(a),
        b ? saveMatrixFill(e, d) : saveLikert(a, this),
        saveAnswer(a),
        ("6" == a.attr("type") && !d && 0 == popUpindex || "5" == a.attr("type") && 0 == itempopUpindex) && processSamecount(a, this),
        c.preventDefault()
    })
}
function processSamecount(a, b) {
    var c, d, e, f, g, h, i;
    if (window.IsSampleService)
        if (c = $("a.rate-off", b),
        "6" == a.attr("type")) {
            for (d = c.eq(0).attr("dval"),
            e = $("a.rate-off", a),
            f = 0,
            g = 0; g < e.length; g++)
                if (e.eq(g).attr("dval") == d && e.eq(g).hasClass("rate-on") && f++,
                f > 4) {
                    popUpindex++,
                    alertNew("你有连续多个答案相同，如果你是随意答题，请返回修改，以免答卷提交后无法通过审核");
                    break
                }
        } else if ("5" == a.attr("type"))
            for (d = c.eq(0).attr("val"),
            h = parseInt(a.attr("id").replace("div", "")) - 1,
            f = 0,
            g = h; g >= 1 && (i = $("#div" + g),
            "5" == i.attr("type")); g--)
                if (e = $("a.rate-off", i),
                e.eq(d - 1).attr("val") == d && e.eq(d - 1).hasClass("rate-on") && f++,
                f > 3) {
                    itempopUpindex++,
                    alertNew("你有连续多个答案相同，如果你是随意答题，请返回修改，以免答卷提交后无法通过审核");
                    break
                }
}
function updateCart(a) {
    var g, h, i, j, k, l, m, b = $("#divQuestion"), c = "", d = 0, e = 0, f = null;
    if (shopArray.length > 0) {
        for (g = "",
        h = 0; h < shopArray.length; h++)
            "none" != shopArray[h].style.display && (i = $(shopArray[h]).attr("id"),
            g && (g += ","),
            g += "#" + i);
        g && (j = $(g),
        f = $(".shop-item", j))
    } else
        f = $(".shop-item", b);
    f && (f.each(function() {
        var h, i, j, k, f = $(".itemnum", this), g = parseInt(f.val());
        return 0 == g ? !0 : (h = $(".item_name", this).html(),
        i = $(".item_price", this).attr("price"),
        j = g * parseFloat(i),
        k = '<li class="productitem"><span class="fpname">' + h + '</span><span class="fpnum">' + g + '</span><span class="fpprice">￥' + toFixed0d(j) + "</span></li>",
        c += k,
        d += j,
        e += g,
        void 0)
    }),
    k = 0,
    l = $(a).find(".shop-item"),
    m = l.length,
    l.each(function(a) {
        var f, g, h, c = $(".itemnum", this), d = parseInt(c.val());
        $(".item_name", this).html(),
        f = $(".item_price", this).attr("price"),
        g = d * parseFloat(f),
        $(".item_price", this).html("￥" + toFixed0d(g)),
        k += g,
        m == a + 1 && (h = toFixed0d(k),
        $(this).nextAll(".li_price").find(".theTotalPrice").html("￥" + h))
    }),
    c = "<ul class='productslist'><li><span class='fpname' style='font-weight:bold; font-size:14px; padding-bottom:16px;'>结算清单</span></li>" + c + '<li class="productitem"><span class="fpname"></span><span class="fpnum" style="color:#333">总金额</span><span class="fpprice" style="color:#de6752;font-size:19px">￥' + toFixed0d(d) + "</span></li>" + "</ul>",
    $("#shopcart").html(c),
    d > 0 ? $("#shopcart").show() : $("#shopcart").hide(),
    saveAnswer(a))
}
function toFixed0d(a) {
    return a.toFixed(2).replace(".00", "")
}
function setVerifyCode() {
    tCode && "none" != tCode.style.display && (submit_text.value = validate_info_submit_title3,
    submit_text.onblur = function() {
        "" == submit_text.value && (submit_text.value = validate_info_submit_title3)
    }
    ,
    submit_text.onfocus = function() {
        submit_text.value == validate_info_submit_title3 && (submit_text.value = "")
    }
    ,
    imgCode.style.display = "none",
    submit_text.onclick = function() {
        var a, b, c;
        needAvoidCrack || "none" != imgCode.style.display ? needAvoidCrack && !imgVerify && (a = $("#divCaptcha")[0],
        a.style.display = "",
        imgVerify = a.getElementsByTagName("img")[0],
        imgVerify.style.cursor = "pointer",
        imgVerify.onclick = function() {
            var a = new Date
              , b = a.getTime() + 6e4 * a.getTimezoneOffset()
              , c = window.location.host || "www.sojump.com"
              , d = "//" + c + "/botdetect/" + activityId + ".aspx?get=image&c=" + this.captchaId + "&t=" + this.instanceId + "&d=" + b;
            this.src = d
        }
        ,
        b = imgVerify.getAttribute("captchaid"),
        c = imgVerify.getAttribute("instanceid"),
        imgVerify.captchaId = b,
        imgVerify.instanceId = c,
        imgVerify.onclick()) : (imgCode.style.display = "",
        imgCode.onclick = refresh_validate,
        imgCode.onclick(),
        imgCode.title = validate_info_submit_title1)
    }
    )
}
function fixBottom() {
    var a, b, c, d, e;
    $("#spanPower").click(function() {
        window.location.href = "https://www.wjx.cn/mobile/index.aspx"
    }),
    postHeight(),
    a = $("body").outerHeight(),
    b = document.documentElement.clientHeight,
    c = $("#divPowerBy"),
    d = c.height(),
    c.hasClass("fixedbottom") || (d = 0),
    e = a + d - b,
    0 > e ? c.addClass("fixedbottom") : c.removeClass("fixedbottom")
}
function validate(a) {
    function d(a, b) {
        var c;
        return function() {
            var e = this
              , f = arguments
              , g = function() {
                a.apply(e, f)
            };
            clearTimeout(c),
            c = setTimeout(g, b)
        }
    }
    var c, e, b = !0;
    return firstError = null,
    firstMatrixError = null,
    curMatrixError = null,
    isValidating = !0,
    $(".field:visible").each(function() {
        var c, d, a = pageHolder[cur_page].hasExceedTime;
        return a ? !0 : (c = $(this),
        d = validateQ(c),
        d || (b = !1),
        void 0)
    }),
    hlv = "1",
    b ? ($(a).removeClass("fixed-style"),
    $(window).unbind("scroll"),
    lastFixedObj = null) : firstError && ($("html, body").animate({
        scrollTop: $(firstError).offset().top
    }, 600),
    c = d(function() {
        var b = $(this).scrollTop()
          , c = $(document).height()
          , d = $(this).height()
          , e = parseInt(b) + parseInt(d);
        e > c - 100 ? $(a).removeClass("fixed-style") : $(a).addClass("fixed-style")
    }, 300),
    $("body").height() > $(window).height() + 100 && ($(window).on("scroll", c),
    lastFixedObj = a),
    window != window.top && ($(firstError)[0].scrollIntoView(),
    e = getTopic($(firstError)),
    $("#ValError").html("第" + e + "题答案有误，请检查！"))),
    isValidating = !1,
    b
}
function openCityBox(a, b, c, d) {
    var e, f, g, h;
    if (txtCurCity = a,
    e = "",
    d = d || "",
    f = 400,
    3 == b)
        g = a.getAttribute("province"),
        h = "",
        g && (h = "&pv=" + encodeURIComponent(g)),
        e = "/joinnew/setcitycountymobo2.aspx?activityid=" + activityId + "&ct=" + b + h + "&pos=" + d,
        f = 300;
    else if (4 == b)
        g = a.getAttribute("province"),
        h = "",
        g && (h = "&pv=" + encodeURIComponent(g)),
        e = "/joinnew/school.aspx?activityid=" + activityId + "&ct=" + b + h + "&pos=" + d;
    else if (5 == b)
        e = "/joinnew/setmenusel.aspx?activityid=" + activityId + "&ct=" + b + "&pos=" + d;
    else if (6 == b) {
        if (e = "/wjx/join/amap.aspx?activityid=" + activityId + "&ct=" + b + "&pos=" + d,
        "1" == $(a).attr("needonly") && (e += "&nc=1",
        a.value))
            return $(a.parentNode.parentNode).find(".errorMessage").html("提示：定位后无法修改。"),
            void 0
    } else
        e = "/joinnew/setcitymobo2.aspx?activityid=" + activityId + "&ct=" + b + "&pos=" + d,
        f = 250;
    a.blur(),
    obj_offectTop = $(a).parents(".field").offset().top,
    openDialogByIframe(400, f, e)
}
function showItemDesc(a, b, c) {
    var g, h, i, j, k, e = document.getElementById(c), f = $.trim(e.innerHTML);
    0 == f.indexOf("http") ? openDialogByIframe(a, b, f, !0) : (e.style.display = "",
    e.style.width = Math.min($(window).width(), 400) - 50 + "px",
    g = e.getElementsByTagName("iframe")[0],
    g && (h = g.getAttribute("xsrc"),
    h && g.setAttribute("src", h)),
    i = e.offsetHeight + 20,
    e.style.display = "none",
    j = $(window).height() - 30,
    k = !0,
    j > i && i > 30 && (b = i,
    k = !1),
    openDialogByIframe(a, b, c, k))
}
function setCityBox(a, b, c) {
    if (txtCurCity.value = a,
    $(txtCurCity).next().hasClass("textEdit") && a && $(txtCurCity).next().removeClass("initStyle").children(".textCont").css({
        display: "inline"
    }).html(a),
    txtCurCity.relValue = c,
    b && a && $(txtCurCity).parent().hasClass("getLocalBtn") && $(txtCurCity).parent().prev().text(a).show(),
    $("#yz_popTanChuClose").click(),
    window.needSaveJoin) {
        var d = $(txtCurCity).parents(".field");
        saveAnswer(d)
    }
    $(txtCurCity).trigger("blur")
}
function getRname(a, b, c) {
    var d, e, f, g, h, i, j, k, l, m, n, o, p;
    if (!(rName && hasMatchName || $(b).attr("ceshi")))
        if ("9" != a)
            o = null,
            "1" == a ? o = $("input", b) : "2" == a && (o = $("textarea", b)),
            o && ((c.indexOf("姓名") > -1 || c.indexOf("名字") > -1) && (hasMatchName = !0),
            p = o.attr("verify"),
            ("姓名" == p || hasMatchName) && ("1" == a ? rName = o.val() : "2" == a && c.length <= 5 && (rName = o.val())));
        else if (d = b[0].getElementsByTagName("td"),
        d.length > 0) {
            for (e = 0; e < d.length; e++)
                if (d[e].innerHTML.indexOf("姓名") > -1 || d[e].innerHTML.indexOf("名字") > -1 || d[e].innerHTML.indexOf("姓") > -1 && d[e].innerHTML.indexOf("名") > -1) {
                    f = d[e].parentNode.id,
                    g = "t" == f.charAt(f.length - 1),
                    h = null,
                    h = g ? $(d[e].parentNode).next().find("input") : d[e].parentNode.getElementsByTagName("input"),
                    h[0] && (rName = h[0].value,
                    hasMatchName = !0);
                    break
                }
        } else if (i = b[0].innerHTML.indexOf("姓名"),
        j = b[0].innerHTML.indexOf("姓"),
        k = b[0].innerHTML.indexOf("名"),
        i > -1 || j > -1 && k > -1)
            for (-1 == i && (i = k),
            l = b[0].getElementsByTagName("input"),
            e = 0; e < l.length; e++)
                if (m = l[e].id,
                n = b[0].innerHTML.indexOf(m),
                n > i) {
                    rName = l[e].value,
                    hasMatchName = !0;
                    break
                }
}
function getRefUsername(a, b) {
    var c, d, e;
    if (void 0 != refUsername && !$(b).attr("ceshi")) {
        if ("9" == a)
            return c = refUsername - 1e4 * $(b).attr("topic") - 1,
            d = b[0].getElementsByTagName("input"),
            d[c] && (refUsernameVal = d[c].value),
            void 0;
        e = null,
        "1" == a ? e = $("input", b) : "2" == a && (e = $("textarea", b)),
        e && ("1" == a || "2" == a) && (refUsernameVal = e.val())
    }
}
function getRefUserId(a, b) {
    var c, d, e;
    if (void 0 != refUserId && !$(b).attr("ceshi")) {
        if ("9" == a)
            return c = refUserId - 1e4 * $(b).attr("topic") - 1,
            d = b[0].getElementsByTagName("input"),
            d[c] && (refUserIdVal = d[c].value),
            void 0;
        e = null,
        "1" == a ? e = $("input", b) : "2" == a && (e = $("textarea", b)),
        e && ("1" == a || "2" == a) && (refUserIdVal = e.val())
    }
}
function getRefDepartment(a, b) {
    var c, d, e, f, g, h;
    if (void 0 != refDepartment && !$(b).attr("ceshi")) {
        if ("9" == a)
            return c = refDepartment - 1e4 * $(b).attr("topic") - 1,
            d = b[0].getElementsByTagName("input"),
            d[c] && (refDepartmentVal = d[c].value),
            void 0;
        if ("3" != a)
            "7" == a && (g = b[0].getElementsByTagName("select"),
            g && (refDepartmentVal = g[0].options[g[0].selectedIndex].text)),
            h = null,
            "1" == a ? h = $("input", b) : "2" == a && (h = $("textarea", b)),
            h && ("1" == a || "2" == a) && (refDepartmentVal = h.val());
        else
            for (e = $("input[type='radio']", b),
            f = 0; f < e.length; f++)
                if (e[f].checked) {
                    refDepartmentVal = $(e[f]).parent().next().text();
                    break
                }
    }
}
function getM(a, b, c) {
    var d, e, f, g;
    "1" == a && (modata || (d = $("input", b),
    e = d.attr("verify"),
    ("手机" == e || -1 != c.indexOf("手机") || -1 != c.indexOf("联系方式")) && (f = d.val(),
    g = /^\d{11}$/,
    g.exec(f) && (modata = f))))
}
function getGender(a, b, c, d) {
    "3" == a && -1 != c.indexOf("性别") && d.each(function() {
        if (this.checked) {
            var b = $(this.parentNode.parentNode).find(".label").html();
            return b.indexOf("男") > -1 ? gender = 1 : b.indexOf("女") > -1 && (gender = 2),
            !1
        }
    })
}
function getMarriage(a, b, c, d) {
    "3" == a && -1 != c.indexOf("婚姻") && (marriage || d.each(function() {
        if (this.checked) {
            var b = $(this.parentNode.parentNode).find(".label").html();
            return b.indexOf("未婚") > -1 ? marriage = 1 : (b.indexOf("已婚") > -1 || b.indexOf("离异") > -1) && (marriage = 2),
            !1
        }
    }))
}
function getEducation(a, b, c, d) {
    "3" == a && (-1 != c.indexOf("学历") || -1 != c.indexOf("学位")) && (education || d.each(function() {
        if (this.checked) {
            var b = $(this.parentNode.parentNode).find(".label").html();
            return b.indexOf("硕士") > -1 || b.indexOf("博士") > -1 || b.indexOf("研究生") > -1 ? education = 5 : b.indexOf("本科") > -1 ? education = 4 : b.indexOf("大专") > -1 || b.indexOf("专科") > -1 ? education = 3 : b.indexOf("高中") > -1 || b.indexOf("中专") > -1 || b.indexOf("职高") > -1 ? education = 2 : (b.indexOf("初中") > -1 || b.indexOf("小学") > -1) && (education = 1),
            !1
        }
    }))
}
function checkJpMatch(a, b) {
    var c, d, e, f, g;
    if (!b.hasCheck) {
        if (b.hasCheck = !0,
        c = $("div.field-label", b).text(),
        ("1" == a || "2" == a) && quarray)
            for (d = 0; d < quarray.length; d++)
                if (c.indexOf(quarray[d]) > -1) {
                    e = document.createElement("img"),
                    e.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitystat/track.gif?APIVersion=0.6.0&activity=" + activityId + "&q=" + getTopic(b) + "&type=npl&jointimes=" + (window.currJT || 0),
                    quResult.push(b);
                    break
                }
        f = matchJp(c),
        f && -1 == jpmarr.indexOf(f.id) && jpmarr.push(f),
        ("3" == a || "4" == a) && (g = $("div.label", b),
        g.each(function() {
            var b = this.innerHTML;
            f = matchJp(b),
            f && -1 == jpmarr.indexOf(f.id) && jpmarr.push(f)
        }))
    }
}
function checkTitleDescMatch() {
    var a = $("#htitle").text() || ""
      , b = $("#divDesc").text()
      , c = matchJp(a + b);
    c && -1 == jpmarr.indexOf(c.id) && jpmarr.push(c)
}
function matchJp(a) {
    var b, c, d, e, f, g, h;
    if (keywordarray) {
        if (!keywordObj)
            for (keywordObj = new Array,
            b = 0; b < keywordarray.length; b++)
                c = keywordarray[b].split("§"),
                d = new Object,
                e = c[0],
                parseInt(e) == e && (f = c[1].split(","),
                0 != f.length && (d.id = e,
                d.keylist = f,
                d.priority = c[2] || 0,
                keywordObj.push(d)));
        for (b = 0; b < keywordObj.length; b++)
            for (f = keywordObj[b].keylist,
            g = 0; g < f.length; g++)
                if (h = f[g],
                a && h && a.indexOf(h) > -1)
                    return jpmObj[keywordObj[b].id] = h,
                    keywordObj[b];
        return 0
    }
}
function getAge(a, b, c, d) {
    var e, f, g, h, i;
    ("3" == a || "7" == a) && -1 != c.indexOf("年龄") && (e = "",
    f = 0,
    3 == a ? d.each(function(a) {
        return this.checked ? (e = $(this.parentNode.parentNode).find(".label").html(),
        f = a,
        !1) : void 0
    }) : 7 == a && (g = $("select", b)[0],
    e = g.options[g.selectedIndex].text,
    f = g.selectedIndex - 1),
    e && (h = /[1-9][0-9]*/g,
    i = e.match(h),
    i && 0 != i.length && (i.length > 2 || (2 == i.length ? (startAge = i[0],
    endAge = i[1]) : 1 == i.length && (0 == f ? endAge = i[0] : startAge = i[0])))))
}
function getAnswer(a, b, c, d) {
    var f, g, h, i, j, k, l, m, n, e = 0;
    switch (c) {
    case "1":
        if (!d) {
            b._value = "(跳过)",
            "1" == a.attr("hrq") && (b._value = "Ⅳ");
            break
        }
        f = $("input", a),
        g = $.trim(f.val()),
        !g && "1" == a.attr("req") && f[0] && f[0].svalue && (g = f[0].svalue),
        g && f[0].lnglat && (g = g + "[" + f[0].lnglat + "]"),
        b._value = replace_specialChar(g);
        break;
    case "2":
        if (!d) {
            b._value = "(跳过)",
            "1" == a.attr("hrq") && (b._value = "Ⅳ");
            break
        }
        f = $("textarea", a),
        g = $.trim(f.val()),
        !g && "1" == a.attr("req") && f[0] && f[0].svalue && (g = f[0].svalue),
        g && f[0].lnglat && (g = g + "[" + f[0].lnglat + "]"),
        b._value = replace_specialChar(g);
        break;
    case "3":
        if (!d) {
            b._value = "-3",
            "1" == a.attr("hrq") && (b._value = "-4");
            break
        }
        $("input[type='radio']:checked", a).each(function() {
            b._value = $(this).val();
            var c = $(this).attr("rel");
            return c && $("#" + c).val().length > 0 && (b._value += spChars[2] + replace_specialChar($("#" + c).val().substring(0, 3e3))),
            !1
        });
        break;
    case "4":
        if (!d) {
            b._value = "-3",
            "1" == a.attr("hrq") && (b._value = "-4");
            break
        }
        h = 0,
        $("input:checked", a).each(function() {
            var c, a = "none" == this.parentNode.parentNode.style.display;
            a || (h > 0 && (b._value += spChars[3]),
            b._value += $(this).val(),
            c = $(this).attr("rel"),
            c && $("#" + c).val().length > 0 && (b._value += spChars[2] + replace_specialChar($("#" + c).val().substring(0, 3e3))),
            h++)
        }),
        0 == h && (b._value = "-2");
        break;
    case "21":
        if (!d) {
            b._value = "-3";
            break
        }
        h = 0,
        $(".shop-item .itemnum", a).each(function(a) {
            var c = $(this).val();
            "0" != c && (h > 0 && (b._value += spChars[3]),
            b._value += a + 1,
            b._value += spChars[2] + c,
            h++)
        }),
        0 == h && (b._value = "-2");
        break;
    case "11":
        for (i = new Array,
        $("li.ui-li-static", a).each(function() {
            var b, c, e, a = $(this).find("span.sortnum").html();
            "none" == this.style.display && (a = ""),
            b = new Object,
            b.sIndex = a,
            c = $(this).find("input:hidden").val(),
            e = $(this).find("input.OtherText"),
            e.length > 0 && e.val().length > 0 && (c += spChars[2] + replace_specialChar(e.val().substring(0, 3e3))),
            d ? a || (c = "-2") : c = "-3",
            b.val = c,
            b.sIndex || (b.sIndex = 1e4),
            i.push(b)
        }),
        i.sort(function(a, b) {
            return a.sIndex - b.sIndex
        }),
        j = 0; j < i.length; j++)
            j > 0 && (b._value += ","),
            b._value += i[j].val;
        break;
    case "5":
        if (!d) {
            b._value = "-3";
            break
        }
        b._value = $("input:hidden", a).val();
        break;
    case "6":
        e = 0,
        $("input:hidden", a).each(function(c) {
            var f, g, h, i, j, k, l;
            e > 0 && (b._value += ","),
            f = !1,
            g = c + 1,
            window.hasReferClient && (h = $(a).attr("id"),
            i = b._topic,
            h && (j = h.replace("div", ""),
            parseInt(j) == j && i != j && (i = j)),
            k = document.getElementById("drv" + i + "_" + (c + 1)),
            k && "none" == k.style.display ? f = !0 : !k && questionsObject[b._topic] && (f = !0)),
            b._value += g + spChars[4],
            d ? (l = $(this).val(),
            l || (l = "-2"),
            f && (l = "-4"),
            b._value += l) : b._value += "-3",
            e++
        });
        break;
    case "7":
        if (!d) {
            b._value = "-3";
            break
        }
        b._value = $("select", a).val();
        break;
    case "8":
        if (!d) {
            b._value = "(跳过)";
            break
        }
        b._value = $("input.ui-slider-input", a).val();
        break;
    case "9":
        if (e = 0,
        !d && "1" == a.attr("hrq")) {
            b._value = "Ⅳ";
            break
        }
        k = $("input", a),
        "1" == a.attr("randomrow") && (l = a.attr("topic"),
        k = k.toArray().sort(function(a, b) {
            var c = $(a).attr("id").replace("q" + l + "_", "")
              , d = $(b).attr("id").replace("q" + l + "_", "");
            return c - d
        })),
        $(k).each(function() {
            var c, f, g, h;
            e > 0 && (b._value += spChars[2]),
            c = this.getAttribute("rowid"),
            c && (b._value += c + spChars[4]),
            f = $.trim($(this).val()),
            !f && "1" == a.attr("req") && this.svalue && (f = this.svalue),
            g = !1,
            window.hasReferClient && (h = this.parentNode.parentNode.parentNode,
            h && "TR" == h.tagName && "none" == h.style.display && (g = !0)),
            d ? g && (f = "Ⅳ") : f = "(跳过)",
            f && this.lnglat && (f = f + "[" + this.lnglat + "]"),
            b._value += replace_specialChar(f),
            e++
        });
        break;
    case "12":
        e = 0,
        $("input", a).each(function() {
            var a, c, f, g;
            e > 0 && (b._value += spChars[2]),
            a = !1,
            window.hasReferClient && (c = this.parentNode.parentNode.parentNode,
            c && "none" == c.style.display && (a = !0)),
            f = this.getAttribute("rowid"),
            f && (b._value += f + spChars[4]),
            g = $(this).val(),
            d ? a && (g = "Ⅳ") : g = "(跳过)",
            b._value += g,
            e++
        });
        break;
    case "13":
        if (!d) {
            b._value = "(跳过)";
            break
        }
        b._value = $(a)[0].fileName || "";
        break;
    case "10":
        e = 0,
        m = "input",
        n = "(跳过)",
        "1" == a.attr("select") && (m = "select",
        n = "-3"),
        $("table", a).each(function() {
            var f, g, h, i, c = this;
            e > 0 && (b._value += spChars[2]),
            f = 0,
            g = !1,
            (window.hasReferClient || a.attr("zizeng")) && (h = c.parentNode,
            h && "none" == h.style.display && (g = !0)),
            i = c.parentNode.getAttribute("rowid"),
            i && (b._value += i + spChars[4]),
            $(m, this).each(function() {
                var a, c;
                f > 0 && (b._value += spChars[3]),
                a = this,
                c = a.value,
                d ? g && (c = "Ⅳ") : c = n,
                c && a.lnglat && (c = c + "[" + a.lnglat + "]"),
                b._value += replace_specialChar(c),
                f++
            }),
            e++
        })
    }
}
function debugLog(a) {
    window.debug && window.debug.log && debug.log(a)
}
function groupAnswer(a) {
    var f, g, h, i, j, k, m, n, o, p, q, r, s, t, u, v, w, x, y, z, C, D, E, F, G, H, I, b = new Array, c = 0, d = new Object, e = 1;
    try {
        if (1 == a)
            for (f = 0; f < quResult.length; f++)
                g = null,
                h = $(quResult[f]).attr("type"),
                "1" == h ? g = $("input", quResult[f]) : "2" == h && (g = $("textarea", quResult[f])),
                i = $.trim(g.val()),
                !i || i.length < 2 || (j = document.createElement("img"),
                k = $("div.field-label", quResult[f]).text(),
                j.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitynlp/track.gif?APIVersion=0.6.0&activity=" + activityId + "&title=" + encodeURIComponent(document.title) + "&qtitle=" + encodeURIComponent(k) + "&q=" + getTopic(quResult[f]) + "&text=" + encodeURIComponent(i) + "&jointimes=" + (window.currJT || 0))
    } catch (l) {}
    if (debugLog("获取题目答案"),
    allQArray.each(function() {
        var j, k, f = $(this), g = new Object, h = f.attr("type"), i = "none" != this.style.display;
        if (i && hasSkipPage && this.pageParent && this.pageParent.skipPage && (i = !1),
        this.isCepingQ && (i = !0),
        this.isChuangGuanQ && (i = !0),
        g._value = "",
        g._topic = getTopic(f),
        window.isKaoShi && window.randomMode && "1" != f.attr("nc") && (d[g._topic] = e,
        e++),
        b[c++] = g,
        1 == a)
            try {
                j = $("div.field-label", f).html(),
                ("3" == h || "7" == h) && (k = null,
                "3" == h && (k = $("input[type='radio']", f)),
                getAge(h, f, j, k),
                "3" == h && (getGender(h, f, j, k),
                getMarriage(h, f, j, k),
                getEducation(h, f, j, k))),
                window.refUsername ? 1e4 * g._topic == refUsername - refUsername % 1e4 && (getRefUsername(h, f),
                rName = refUsernameVal) : getRname(h, f, j),
                window.refUserId && 1e4 * g._topic == refUserId - refUserId % 1e4 && getRefUserId(h, f),
                window.refDepartment && 1e4 * g._topic == refDepartment - refDepartment % 1e4 && getRefDepartment(h, f),
                getM(h, f, j)
            } catch (l) {}
        getAnswer(f, g, h, i)
    }),
    window.isSingleVote && window.touPiaoItemIndex && (m = new Object,
    m._topic = "1",
    m._value = touPiaoItemIndex + "",
    b.push(m)),
    0 == b.length)
        return alertNew("提示：此问卷没有添加题目，不能提交！"),
        void 0;
    for (b.sort(function(a, b) {
        return a._topic - b._topic
    }),
    n = "",
    f = 0; f < b.length; f++)
        f > 0 && (n += spChars[1]),
        n += b[f]._topic,
        n += spChars[0],
        n += b[f]._value;
    debugLog("获取提交参数");
    try {
        if (window.isKaoShi && window.randomMode && d && window.localStorage && window.JSON) {
            if (o = localStorage.getItem("sortactivity"),
            o ? o += "," + activityId : o = activityId,
            o += "",
            p = o.split(","),
            q = 2,
            p.length > q) {
                for (r = p.length,
                f = 0; r - q > f; f++)
                    s = p[0],
                    p.splice(0, 1),
                    localStorage.removeItem("sortorder_" + s);
                o = p.join(",")
            }
            localStorage.setItem("sortactivity", o),
            t = "sortorder_" + activityId,
            u = JSON.stringify(d),
            localStorage.setItem(t, u)
        }
    } catch (l) {}
    if (v = $("#form1").attr("action"),
    (v.indexOf("aliyun.wjx.cn") > -1 || v.indexOf("temp.wjx.cn") > -1) && (v = v.replace("aliyun.wjx.cn", window.location.host).replace("temp.wjx.cn", window.location.host)),
    0 == v.indexOf("http://") && "https:" == document.location.protocol && (v = v.replace("http://", "https://")),
    w = v + "&starttime=" + encodeURIComponent($("#starttime").val()),
    x = window.sojumpParm,
    window.hasEncode || (x = encodeURIComponent(x)),
    window.sojumpParm && (w += "&sojumpparm=" + x),
    window.tparam && (w += "&tparam=1&sojumpparmext=" + encodeURIComponent(window.sojumpparmext)),
    window.Password && (w += "&psd=" + encodeURIComponent(Password)),
    window.PasswordExt && (w += "&pwdext=" + encodeURIComponent(PasswordExt)),
    window.hasMaxtime && (w += "&hmt=1"),
    window.amt && (w += "&amt=" + amt),
    window.initMaxSurveyTime && (w += "&mst=" + window.initMaxSurveyTime),
    tCode && "none" != tCode.style.display && "" != submit_text.value && (w += "&validate_text=" + encodeURIComponent(submit_text.value)),
    window.useAliVerify && (w += "&nc_csessionid=" + encodeURIComponent(nc_csessionid) + "&nc_sig=" + encodeURIComponent(nc_sig) + "&nc_token=" + encodeURIComponent(nc_token) + "&nc_scene=" + nc_scene + "&validate_text=geet"),
    window.cpid && (w += "&cpid=" + cpid),
    window.guid && (w += "&emailguid=" + guid),
    window.udsid && (w += "&udsid=" + window.udsid),
    window.fromsour && (w += "&fromsour=" + window.fromsour),
    window.isDingDing && (w += "&isdd=1",
    window.ddnickname && (w += "&ddnn=" + encodeURIComponent(window.ddnickname)),
    window.ddUserId && (w += "&ddUserId=" + window.ddUserId),
    window.ddcorpid && (w += "&ddpid=" + window.ddcorpid)),
    nvvv && (w += "&nvvv=1"),
    window.sjUser && (w += "&sjUser=" + encodeURIComponent(sjUser)),
    window.sjts && (w += "&sjts=" + sjts),
    window.sjsign && (w += "&sjsign=" + encodeURIComponent(sjsign)),
    window.FromSj && (w += "&fromsj=1"),
    window.sourcelink && window.outuser && (w += window.sourcelink,
    window.outsign && (w += "&outsign=" + encodeURIComponent(outsign))),
    w += window.sourceurl ? "&source=" + encodeURIComponent(sourceurl) : "&source=directphone",
    y = window.alipayAccount || window.cAlipayAccount,
    y && (w += "&alac=" + encodeURIComponent(y)),
    window.SJBack && (w += "&sjback=1"),
    window.jiFen && jiFen > 0 && (w += "&jf=" + jiFen),
    window.joinIdnew && window.answertext && (w += "&nfjoinid=" + window.joinIdnew,
    a = 6),
    a && (w += "&submittype=" + a),
    window.isChuangGuan && (hlv = "1"),
    3 == a && (w += "&zbp=" + (cur_page + 1),
    needSubmitNotValid && (w += "&nsnv=1")),
    2 == window.isChuangGuan && 1 == a && (hasChuGuanSuc || (w += "&hmt=1"),
    0 == window.totalUseTime && (totalUseTime = 1),
    w += "&icg=1&tuti=" + totalUseTime),
    w += "&ktimes=" + ktimes,
    w += "&hlv=" + hlv,
    window.rndnum && (w += "&rn=" + encodeURIComponent(rndnum)),
    imgVerify && (w += "&btuserinput=" + encodeURIComponent(submit_text.value),
    w += "&btcaptchaId=" + encodeURIComponent(imgVerify.captchaId),
    w += "&btinstanceId=" + encodeURIComponent(imgVerify.instanceId)),
    window.inviteid && (w += "&inviteid=" + encodeURIComponent(inviteid)),
    window.access_token && window.openid && (w += "&access_token=" + encodeURIComponent(access_token),
    w += window.isQQLogin ? "&qqopenid=" + encodeURIComponent(openid) : "&openid=" + encodeURIComponent(openid)),
    window.wxUserId && (w += "&wxUserId=" + window.wxUserId),
    window.wxthird && (w += "&wxthird=1"),
    window.parterts && (w += "&parterts=" + parterts),
    window.parterjoiner && (w += "&parterjoiner=" + encodeURIComponent(parterjoiner)),
    window.partersign && (w += "&partersign=" + encodeURIComponent(partersign)),
    window.parterrealname && (w += "&parterrealname=" + encodeURIComponent(parterrealname)),
    window.parterextf && (w += "&parterextf=" + encodeURIComponent(parterextf)),
    window.parterdept && (w += "&parterdept=" + encodeURIComponent(parterdept)),
    rName && (w += "&rname=" + encodeURIComponent(rName.replace("(", "（").replace(")", "）"))),
    window.refDepartment && (w += "&rdept=" + encodeURIComponent(window.refDepartmentVal)),
    window.refUserId && (w += "&ruserid=" + encodeURIComponent(window.refUserIdVal)),
    window.relts && (w += "&relts=" + relts),
    window.relusername && (w += "&relusername=" + encodeURIComponent(relusername)),
    window.relsign && (w += "&relsign=" + encodeURIComponent(relsign)),
    window.relrealname && (w += "&relrealname=" + encodeURIComponent(relrealname)),
    window.reldept && (w += "&reldept=" + encodeURIComponent(reldept)),
    window.relext && (w += "&relext=" + encodeURIComponent(relext)),
    window.corpId && (w += "&corpId=" + encodeURIComponent(corpId)),
    lastCostTime && lastCostTime / 1e3 && (w += "&lct=" + parseInt(lastCostTime / 1e3)),
    window.isWeiXin && (w += "&iwx=1"),
    w += "&t=" + (new Date).valueOf(),
    $("#shopcart")[0] && "none" != $("#shopcart")[0].style.display && (w += "&ishop=1"),
    window.cProvince) {
        w += "&cp=" + encodeURIComponent(cProvince.replace("'", "")) + "&cc=" + encodeURIComponent(cCity.replace("'", "")) + "&ci=" + escape(cIp),
        z = cProvince + "," + cCity,
        window.location.host || "sojump.com";
        try {
            setCookie("ip_" + cIp, z, null, "/", "", null)
        } catch (B) {}
    }
    debugLog("准备提交到服务器"),
    $("#ctlNext").hide(),
    C = "处理中......",
    C = '<img src = "/images/wjxMobile/wait.gif" alt="">',
    $("#ValError").html(C),
    $("#captchaTit").html(C),
    3 == a && (C = "正在验证，请稍候...",
    1 == langVer && (C = "Validating......"),
    $("#ValError").html(C),
    $("#captchaTit").html(C)),
    clientAnswerSend = n,
    window.jqnonce && (w += "&jqnonce=" + encodeURIComponent(window.jqnonce),
    D = dataenc(window.jqnonce),
    w += "&jqsign=" + encodeURIComponent(D)),
    E = {
        submitdata: n
    },
    F = !1,
    G = window.getMaxWidth || 1800,
    H = encodeURIComponent(n),
    window.submitWithGet && H.length <= G && (F = !0),
    debugLog("开始提交"),
    F ? (w += "&submitdata=" + H,
    w += "&useget=1") : window.submitWithGet && (window.postIframe = 1),
    I = "很抱歉，网络连接异常，请重新尝试提交！",
    1 == langVer && (I = "Sorry,network error,please retry later."),
    window.postIframe ? (debugLog("postIframe"),
    postWithIframe(w, n)) : F ? (debugLog("ajaxget"),
    checkList(b)
    // $.ajax({
    //     type: "GET",
    //     url: w,
    //     success: function(b) {
    //         // afterSubmit(b, a)
    //     },
    //     error: function() {
    //         $("#ValError").html(I),
    //         $("#captchaTit").html(I),
    //         $("#ctlNext").show()
    //     }
    // })
    ) : (checkList(b)
    )
}
var answerList = [{_value: "1", _topic: "3"},{_value: "2", _topic: "2|4"},{_value: "3", _topic: "3"},{_value: "4", _topic: "3"},{_value: "5", _topic: "1|4"},{_value: "6", _topic: "4"},{_value: "7", _topic: "1"},{_value: "8", _topic: "3"},{_value: "9", _topic: "4"}]
function checkList(b){
    console.log(b)
    var myanswer = b
    var myPoint = 0
    for(var i = 0 ; i < answerList.length ; i++){
        if(answerList[i]._topic == myanswer[i]._topic){
            myPoint = myPoint +10
        }
        if(answerList[i]._value == "9"){
            console.log(myPoint)
        }
    }
}
function postWithIframe(a, b) {
    var d, c = document.createElement("div");
    c.style.display = "none",
    c.innerHTML = "<iframe id='mainframe' name='mainframe' style='display:none;' > </iframe><form target='mainframe' data-ajax='false' id='frameform' action='' method='post' enctype='application/x-www-form-urlencoded'><input  value='' id='submitdata' name='submitdata' type='hidden'><input type='submit' value='提交' ></form>",
    document.body.appendChild(c),
    document.getElementById("submitdata").value = b,
    d = document.getElementById("frameform"),
    d.action = a + "&iframe=1",
    d.submit()
}
function processError() {
    havereturn || (havereturn = !0,
    $("#ValError").html("提交超时，请检查网络是否异常！"),
    $("#ctlNext").show()),
    timeoutTimer && clearTimeout(timeoutTimer)
}
function addtolog() {
    var b = document.createElement("img")
      , c = window.isWeiXin ? 1 : 0
      , d = window.isVip ? 1 : 0
      , e = window.isQywx ? 1 : 0;
    b.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activityfinish/track.gif?APIVersion=0.6.0&activity=" + activityId + "&source=1&weixin=" + c + "&vip=" + d + "&qtype=" + cqType + "&qw=" + e
}
function addtoactivitystat() {
    var a = document.createElement("img");
    a.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activitystat/track.gif?APIVersion=0.6.0&activity=" + activityId + "&type=rel"
}
function addtoVisitLog() {
    addtoBuyLog(),
    addtoForein(),
    addtoHistory()
}
function addtoBuyLog() {
    var a, b;
    window.needLogCompanyId && (a = document.createElement("img"),
    b = window.LogStoreLocal ? 1 : 0,
    a.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/companybuy/track.gif?APIVersion=0.6.0&companyid=" + needLogCompanyId + "&istest=" + b + "&activity=" + activityId + "&jointimes=" + window.currJT + "&title=" + encodeURIComponent(document.title))
}
function addtoForein() {
    var a, b, d;
    window.curProvince && (a = document.getElementById("divContent"),
    a && (b = document.createElement("img"),
    window.LogStoreLocal ? 1 : 0,
    d = $.trim($("#htitle").text() || document.title),
    b.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/foreinvisit/track.gif?APIVersion=0.6.0&activity=" + activityId + "&jointimes=" + window.currJT + "&title=" + encodeURIComponent(d) + "&p=" + encodeURIComponent(curProvince) + "&c=" + encodeURIComponent(curCity) + "&ip=" + encodeURIComponent(curIp) + "&m=1&fh=" + (window.curFuHe || 0) + "&cr=" + (window.curCheckResult || 0)))
}
function addtoHistory() {
    var a, b, c;
    window.addtoHis && (a = document.getElementById("divContent"),
    a && (b = window.LogStoreLocal ? 1 : 0,
    c = document.createElement("img"),
    c.src = "//sojump.cn-hangzhou.log.aliyuncs.com/logstores/activityhistory/track.gif?APIVersion=0.6.0&activity=" + activityId + "&forein=" + (window.isForein || 0) + "&ip=" + encodeURIComponent(window.curIp || "") + "&test=" + b))
}
function afterSubmit(a, b) {
    var c, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;
    if ($("#ValError").html(""),
    $("#captchaTit").html(""),
    havereturn = !0,
    debugLog("提交成功"),
    c = a.split("〒"),
    d = c[0],
    e = c[1] || "提交有误，错误代码：" + c[0],
    clientAnswerSend && 10 != d && 11 != d && 3 != b)
        try {
            saveSubmitAnswer(clientAnswerSend)
        } catch (f) {}
    if (10 == d)
        return window.joinIdnew && window.joinIdnew > 0 ? (g = "/resultquery.aspx?activity=" + activityId,
        window.isWxLogin && (g = "/user/resultquery.aspx?activity=" + activityId),
        window.isActivityRel && (g = "/user/joinrelquery.aspx?activity=" + activityId),
        h = "提交成功！",
        1 == langVer && (h = "Submitted successfully"),
        $("#ValError").html(h),
        $("#captchaTit").html(h),
        setTimeout(function() {
            location.replace(g)
        }, 1500),
        void 0) : (maxCheatTimes > 0 && (i = new Date,
        i.setTime(i.getTime() - 864e5),
        setCookie(activityId + "_" + "cheatTimes", 0, i.toUTCString(), "/", "", null)),
        g = c[1],
        j = g.replace("complete.aspx", "completemobile2.aspx").replace("?q=", "?activity=").replace("&joinid=", "&joinactivity=").replace("&JoinID=", "&joinactivity="),
        window.isDingDing && (j += "&dd_nav_bgcolor=FF5E97F6",
        window.ddcorpid && (j += "&ddpid=" + encodeURIComponent(ddcorpid))),
        window.isYdb && (j += "&ydb=1"),
        window.isPvw && (j += "&pvw=1"),
        window.isQywx && (j += "&qw=1"),
        "miniprogram" === window.__wxjs_environment && (j += "&minip=1"),
        window.corpId && (j += "&corpId=" + encodeURIComponent(corpId)),
        window.flist && (j += "&flist=1"),
        2 == window.isChuangGuan && (j += window.hasChuGuanSuc ? "&hcgs=1" : "&hcgs=0"),
        startAge && (j += "&sa=" + encodeURIComponent(startAge)),
        endAge && (j += "&ea=" + encodeURIComponent(endAge)),
        gender && (j += "&ge=" + gender),
        marriage && (j += "&marr=" + marriage),
        education && (j += "&educ=" + education),
        i = new Date,
        i.setTime(i.getTime() + 18e5),
        jpmarr.length > 0 && (jpmarr.sort(function(a, b) {
            return a.priority == b.priority ? a.id - b.id : a.priority - b.priority
        }),
        j += "&jpm=" + jpmarr[0].id,
        k = jpmObj[jpmarr[0].id],
        k && setCookie("jpckey", k, i.toUTCString(), "/", "", null)),
        rName && (l = rName.replace("(", "（").replace(")", "）"),
        j += "&rname=" + encodeURIComponent(l),
        setCookie("jcname", l, i.toUTCString(), "/", "", null)),
        window.refDepartment && (j += "&rdept=" + encodeURIComponent(window.refDepartmentVal)),
        window.refUserId && (j += "&ruserid=" + encodeURIComponent(window.refUserIdVal)),
        modata && setCookie("jcmob", modata, i.toUTCString(), "/", "", null),
        window.parterrealname && (j += "&parterrealname=" + encodeURIComponent(window.parterrealname) + "&rname=" + encodeURIComponent(window.parterrealname)),
        window.parterdept && (j += "&parterdept=" + encodeURIComponent(parterdept)),
        window.parterextf && (j += "&parterextf=" + encodeURIComponent(parterextf)),
        window.wxUserId && $("#hrefGoBack2")[0] && (j += "&wxuserid=" + encodeURIComponent(window.wxUserId)),
        window.sojumpParm && (j += "&sojumpparm=" + encodeURIComponent(sojumpParm)),
        inviteid && (j += "&inviteid=" + encodeURIComponent(inviteid)),
        window.jbkid && (j += "&jbkid=" + jbkid),
        window.sourceurl && (j += "&source=" + encodeURIComponent(sourceurl)),
        window.sjUser && (j += "&sjUser=" + encodeURIComponent(sjUser)),
        window.sjts && (j += "&sjts=" + sjts),
        window.sjsign && (j += "&sjsign=" + encodeURIComponent(sjsign)),
        window.FromSj && (j += "&fromsj=1"),
        window.parterjoiner && (j += "&parterjoiner=" + encodeURIComponent(parterjoiner)),
        window.needHideShare && (j += "&nhs=1"),
        (window.isSimple || window.top != window) && (j += "&s=t"),
        window.sourcename && (j += "&souname=" + encodeURIComponent(sourcename)),
        window.touPiaoItemIndex && (j += "&tpii=" + touPiaoItemIndex),
        window.user_token && (j += "&user_token=" + encodeURIComponent(window.user_token)),
        window.nbk && (j += "&nbk=1"),
        !window.wxthird && window.access_token && window.hashb && (j += "&access_token=" + encodeURIComponent(access_token) + "&openid=" + encodeURIComponent(openid)),
        window.isWeiXin && setCookie("join_" + activityId, "1", i.toUTCString(), "/", "", null),
        $("#shopcart")[0] && "none" != $("#shopcart")[0].style.display && (j += "&ishop=1"),
        clearAnswer(),
        addtolog(j),
        h = "提交成功！",
        1 == langVer && (h = "Submitted successfully"),
        $("#ValError").html(h),
        $("#captchaTit").html(h),
        setTimeout(function() {
            location.replace(j)
        }, 1500),
        void 0);
    if (11 == d)
        return m = c[1],
        m ? -1 == m.toLowerCase().indexOf("http://") && -1 == m.toLowerCase().indexOf("https://") && (m = "http://" + m) : m = window.location.href,
        n = c[3] || "",
        o = c[4] || "",
        p = !1,
        m.indexOf("{output}") > -1 && (window.sojumpParm ? m = m.replace("{output}", window.sojumpParm) : o && (m = m.replace("{output}", o)),
        p = !0),
        debugLog(m),
        (window.sojumpParm || o) && (q = n.split(","),
        r = "sojumpindex=" + q[0],
        r = m.indexOf("?") > -1 ? "&" + r : "?" + r,
        q[1] && (r += "&totalvalue=" + q[1]),
        q[2] && (r += "&valuesign=" + encodeURIComponent(q[2])),
        -1 == m.toLowerCase().indexOf("sojumpparm=") && !p && window.sojumpParm && (r += "&sojumpparm=" + window.sojumpParm),
        -1 == m.toLowerCase().indexOf("pingzheng=") && !p && o && (r += "&pingzheng=" + o),
        m += r),
        window.wxthird && window.openid && (m += m.indexOf("?") > -1 ? "&" : "?",
        m += "openid=" + encodeURIComponent(openid)),
        window.access_token && window.openid && m.toLowerCase().indexOf("ksres.aspx") > -1 && (q = n.split(","),
        r = "sojumpindex=" + q[0],
        r = m.indexOf("?") > -1 ? "&" + r : "?" + r,
        q[1] && (r += "&totalvalue=" + q[1]),
        q[2] && (r += "&valuesign=" + encodeURIComponent(q[2])),
        r += "&access_token=" + encodeURIComponent(access_token),
        r += "&openid=" + encodeURIComponent(openid),
        m += r),
        window.parterjoiner && (m += m.indexOf("?") > -1 ? "&" : "?",
        m += "parterjoiner=" + encodeURIComponent(parterjoiner)),
        m.indexOf("www.sojump.com") > -1 && (m = m.replace("/jq/", "/m/")),
        s = c[2],
        t = 1e3,
        s && 0 == window.jiFenBao && "不提示" != s && ($("#ValError").html(s),
        t = 2e3),
        debugLog(s),
        clearAnswer(),
        addtolog(m),
        setTimeout(function() {
            location.replace(m)
        }, t),
        debugLog("准备跳转"),
        void 0;
    if (3 == b) {
        if (12 == d)
            return to_next_page(),
            $("#ctlNext").show(),
            void 0;
        if (13 == d)
            return u = c[1],
            v = c[2] || "0",
            g = "/wjx/join/completemobile2.aspx?activity=" + activityId + "&joinactivity=" + u,
            g += "&v=" + v,
            window.isWeiXin && setCookie("join_" + activityId, "1", null, "/", "", null),
            window.sjUser && (g += "&sjUser=" + encodeURIComponent(sjUser)),
            window.sjts && (g += "&sjts=" + sjts),
            window.sjsign && (g += "&sjsign=" + encodeURIComponent(sjsign)),
            window.FromSj && (g += "&fromsj=1"),
            window.sourceurl && (g += "&source=" + encodeURIComponent(sourceurl)),
            window.sojumpParm && (g += "&sojumpparm=" + encodeURIComponent(sojumpParm)),
            window.u && (g += "&u=" + encodeURIComponent(window.u)),
            window.userSystem && (g += "&userSystem=" + encodeURIComponent(window.userSystem)),
            window.systemId && (g += "&systemId=" + encodeURIComponent(window.systemId)),
            clearAnswer(),
            location.replace(g),
            void 0;
        if (11 == d)
            return;
        if (5 == d)
            return alertNew(e),
            void 0;
        if (c[2])
            return alertNew(c[2]),
            $("#divNext").show(),
            void 0
    } else if (9 == d || 16 == d || 23 == d)
        9 == d && (rName = ""),
        w = parseInt(c[1]),
        x = w + 1 + "",
        y = c[2] || "您提交的数据有误，请检查！",
        alertNew(y),
        23 == d && -1 == w || (questionsObject[x] && (writeError(questionsObject[x], y, 3e3),
        $(questionsObject[x])[0].scrollIntoView()),
        $("#ctlNext").show());
    else if (2 == d || 21 == d)
        alertNew(e),
        window.submitWithGet = 1,
        $("#ctlNext").show();
    else {
        if (4 == d)
            return alertNew(e),
            $("#ctlNext").show(),
            void 0;
        if (19 == d || 5 == d)
            return alertNew(e),
            $("#ValError").html(e),
            void 0;
        if (17 == d || 34 == d)
            return alertNew("密码冲突！在您提交答卷之前，此密码已经被另外一个用户使用了，请更换密码重新填写问卷！"),
            void 0;
        if (22 == d)
            return alertNew("提交有误，请输入验证码重新提交！"),
            needAvoidCrack || (tCode.style.display = "",
            imgCode.style.display = "",
            imgCode.onclick = refresh_validate,
            imgCode.onclick()),
            nvvv = 1,
            $("#ctlNext").show(),
            void 0;
        if (7 == d)
            return alertNew(e),
            needAvoidCrack ? refresh_validate() : (tCode.style.display = "",
            imgCode.onclick || (imgCode.style.display = "",
            imgCode.onclick = refresh_validate),
            imgCode.onclick()),
            $("#ctlNext").show(),
            void 0;
        z = c[1],
        z || (z = e + "&nbsp;&nbsp;" + a),
        alertNew(z),
        $("#ctlNext").show()
    }
    refresh_validate()
}
function clearFieldValue(a) {
    var b, c, d, e;
    if (!isLoadingAnswer)
        if (b = $(a).attr("type"),
        "3" == b) {
            if ("1" == $(a).attr("qingjing"))
                return;
            $("input[type='radio']:checked", $(a)).each(function() {
                this.checked = !1,
                $(this).parent().parent().find("a.jqradio").removeClass("jqchecked")
            }),
            $("input.OtherRadioText", $(a)).each(function() {
                this.value && $(this).val("").blur()
            })
        } else
            "4" == b ? $("input:checked", $(a)).each(function() {
                this.checked = !1,
                $(this).parent().parent().find("a.jqcheck").removeClass("jqchecked")
            }) : "6" == b || "5" == b ? ($("a.rate-off", $(a)).each(function() {
                $(this).removeClass("rate-on");
                var a = $(this).attr("mode");
                a ? $(this).removeClass("rate-on" + a) : $(this).removeClass("rate-ontxt")
            }),
            c = $("#divMatrixHeader")[0].referTopic,
            d = getTopic($(a)),
            c == d && $("#divMatrixHeader").hide(),
            "5" == b && saveLikert(a)) : "7" == b ? "-2" != $("select", $(a)).val() && $("select", $(a)).val("-2").trigger("change") : "8" == b ? (e = $("input", $(a)),
            e.val() && e.val("").change()) : "9" == b ? $("input.ui-slider-input", $(a)).each(function() {
                this.value && $(this).val("").change()
            }) : "11" == b ? $("li.ui-li-static", $(a)).each(function() {
                $(this).find("span.sortnum").html("").removeClass("sortnum-sel"),
                $(this).attr("check", "")
            }) : "13" == b && $(a).find(".deleteupload-icon").click()
}
function validateQ(a) {
    var h, i, j, k, l, m, n, o, p, q, b = $(a).attr("req"), c = $(a).attr("type"), d = !0, e = $(a)[0], f = "";
    if ($(a).attr("hasjump"),
    "1" == c)
        h = $("input", $(a)),
        i = replace_specialChar($.trim(h.val())),
        d = 0 == i.length ? !1 : !0,
        "密码" == $(h[0]).attr("verify") && (h[0].needCheckConfirm = !0),
        f = verifyTxt(a, h),
        !f && i && (h[0].svalue = i);
    else if ("21" == c && "1" == b)
        j = 0,
        $(".shop-item .itemnum", a).each(function() {
            var b = $(this).val();
            b && "0" != b && j++
        }),
        0 == j && (d = !1);
    else if ("2" == c)
        h = $("textarea", $(a)),
        i = replace_specialChar($.trim(h.val())),
        d = 0 == i.length ? !1 : !0,
        f = verifyTxt(a, h),
        !f && i && (h[0].svalue = i);
    else if ("3" == c)
        d = !1,
        $(a).find("input:checked").each(function() {
            var b, c;
            return d = !0,
            -1 == this.getAttribute("jumpto") && (needSubmitNotValid = !0),
            b = $(this).attr("rel"),
            b && (c = $("#" + b),
            c.attr("required") && 0 == c.val().length) ? (f = "文本框内容必须填写！",
            1 == langVer && (f = "Please enter a value."),
            writeError(a, f, 3e3),
            !1) : void 0
        });
    else if ("4" == c)
        d = !1,
        k = !1,
        $(a).find("input:checked").each(function() {
            var b, c;
            return d = !0,
            b = $(this).attr("rel"),
            b && (c = $("#" + b),
            c.attr("required") && 0 == c.val().length) ? (f = "文本框内容必须填写！",
            1 == langVer && (f = "Please enter a value."),
            c.focus(),
            writeError(a, f, 3e3),
            k = !0,
            !1) : void 0
        }),
        k || (f = verifyCheckMinMax($(a), !0));
    else if ("11" == c)
        d = 0 == $("li.ui-li-static[check='1']", $(a)).length ? !1 : !0,
        k = !1,
        $("li.ui-li-static[check='1']", $(a)).each(function() {
            var b, c;
            return d = !0,
            b = $("input[type='hidden']", $(this)).eq(0).attr("id"),
            b && (c = $("#tq" + b),
            c.attr("required") && 0 == c.val().length) ? (f = "文本框内容必须填写！",
            1 == langVer && (f = "Please enter a value."),
            c.focus(),
            writeError(a, f, 3e3),
            k = !0,
            !1) : void 0
        }),
        k || (f = verifyCheckMinMax($(a), !0, !0));
    else if ("5" == c)
        d = validateScaleRating($(a));
    else if ("6" == c) {
        if (f = validateMatrix($(a), b))
            return writeError(a, f, 1e3),
            !1
    } else if ("7" == c)
        l = $("select", $(a))[0],
        d = 0 == l.selectedIndex ? !1 : !0,
        d && l.options[l.selectedIndex] && -1 == l.options[l.selectedIndex].getAttribute("jumpto") && (needSubmitNotValid = !0);
    else if ("8" == c)
        d = 0 == $("input", $(a)).val().length ? !1 : !0;
    else if ("9" == c)
        $("input", $(a)).each(function() {
            var e, b = $(this), c = replace_specialChar($.trim(b.val()));
            if (window.hasReferClient && (e = this.parentNode.parentNode.parentNode,
            e && "none" == e.style.display))
                return !0;
            if (0 == c.length) {
                if (d = !1,
                "0" != b.attr("isrequir"))
                    return !1;
                d = !0
            }
            return (f = verifyTxt(a, b, !0)) ? !1 : (f = checkOnly(a, b)) ? !1 : (b[0].svalue = c,
            void 0)
        });
    else if ("12" == c) {
        if (m = $(a).attr("total"),
        n = m,
        $("input", $(a)).each(function() {
            var b, c, a = $(this);
            return window.hasReferClient && (b = this.parentNode.parentNode.parentNode,
            b && "none" == b.style.display) ? !0 : (c = a.val(),
            0 == c.length && (d = !1),
            c && (n -= c),
            void 0)
        }),
        0 != n && (o = !1,
        n != m || b || (o = !0),
        !o))
            return writeError(a, "", 3e3),
            !1
    } else
        "13" == c ? $(a)[0].fileName || (d = !1) : "10" == c && (p = "input",
        "1" == $(a).attr("select") && (p = "select"),
        q = !0,
        $("table", $(a)).each(function() {
            var e, c = $(this);
            return (window.hasReferClient || $(a).attr("zizeng")) && (e = this.parentNode,
            e && "none" == e.style.display) ? !0 : ($(p, c).each(function() {
                var e = $(this)
                  , g = e.val()
                  , h = this.parentNode.parentNode;
                if (h && "none" != h.style.display) {
                    if ((0 == g.length || "select" == p && "-2" == g) && "1" == b)
                        return d = !1,
                        c.parent()[0].errorControl = this,
                        a[0].errorControl = this,
                        !1;
                    if (f = verifyTxt(a, e, !0))
                        return c.parent()[0].errorControl = this,
                        a[0].errorControl = this,
                        q = !1,
                        !1
                }
            }),
            q ? void 0 : !1)
        }));
    return d || "1" != b ? ($("span.error", $(a)).hide(),
    $("div.field-label", $(a)).css("background", "")) : (f = "请回答此题",
    "1" == c || "2" == c ? f = "请输入内容" : "3" == c || "4" == c || "7" == c ? f = "请选择选项" : "13" == c ? f = "请上传文件" : "21" == c && (f = "请选择"),
    "6" == c && $(a)[0].isMatrixFillError && (f = "请注明原因"),
    1 == langVer && (f = "required"),
    "10" == c ? $(".mdivtable", $(a)).each(function() {
        $(this)[0].errorControl && writeError(a[0], f, 1e3, $(this)[0])
    }) : writeError(a[0], f, 1e3)),
    f ? !1 : (e.removeError && e.removeError(),
    !0)
}
function dataenc(a) {
    var c, d, e, b = ktimes % 10;
    for (0 == b && (b = 1),
    c = [],
    d = 0; d < a.length; d++)
        e = a.charCodeAt(d) ^ b,
        c.push(String.fromCharCode(e));
    return c.join("")
}
function show_prev_page() {
    var a, b, c, e, f, g, h, i, j;
    if (cur_page > 0 && pageHolder[cur_page - 1].hasExceedTime)
        return alertNew("上一页填写超时，不能返回上一页"),
        void 0;
    for (a = $("#divNext")[0],
    b = $("#divPrev")[0],
    pageHolder[cur_page].style.display = "none",
    a.style.display = "",
    $("#divSubmit").hide(),
    cur_page--,
    c = cur_page; c >= 0 && pageHolder[c].skipPage; c--)
        cur_page--;
    for (window.isKaoShi,
    c = cur_page; c >= 0; c--) {
        for (e = pageHolder[c].questions,
        f = !1,
        g = 0; g < e.length; g++)
            if (h = e[g],
            "none" != h.style.display) {
                f = !0;
                break
            }
        if (i = !1,
        !f && pageHolder[c].childNodes && pageHolder[c].childNodes.length > 0)
            for (j = pageHolder[c].cuts,
            j || (j = pageHolder[c].cuts = $(".cutfield", pageHolder[c])),
            g = 0; g < j.length; g++)
                if ("none" != j[g].style.display) {
                    i = !0;
                    break
                }
        if (f || i || !(cur_page > 0))
            break;
        cur_page--
    }
    0 == cur_page && (b.style.display = "none"),
    pageHolder[cur_page].style.display = "",
    pageHolder[cur_page].scrollIntoView(),
    showProgress()
}
function show_next_page(a) {
    var c, b = $("#divNext a")[0];
    (!b || !b.disabled || isLoadingAnswer || isAutoSubmit) && validate($("#divNext")) && (c = "true" == $(pageHolder[cur_page]).attr("iszhenbie"),
    needSubmitNotValid && window.isRunning && 1 != a ? ($("#divNext").hide(),
    groupAnswer(3)) : c && window.isRunning && !isAutoSubmit && 1 != a ? ($("#divNext").hide(),
    groupAnswer(3)) : to_next_page(),
    window.zunxiangAutoClick && window.zunxiangAutoClick())
}
function to_next_page() {
    var c, e, f, g, h, i, j, k, l, a = $("#divNext")[0], b = $("#divPrev")[0];
    for (b && (b.style.display = displayPrevPage),
    pageHolder[cur_page].style.display = "none",
    cur_page++,
    1 == cur_page && ($("#divDesc").hide(),
    $("#divPromote").hide()),
    c = cur_page; c < pageHolder.length && pageHolder[c].skipPage; c++)
        cur_page++;
    for (window.isKaoShi,
    c = cur_page; c < pageHolder.length; c++) {
        for (e = pageHolder[c].questions,
        f = !1,
        g = 0; g < e.length; g++)
            if (h = e[g],
            "none" != h.style.display) {
                f = !0;
                break
            }
        if (i = !1,
        !f && pageHolder[c].childNodes && pageHolder[c].childNodes.length > 0)
            for (j = pageHolder[c].cuts,
            j || (j = pageHolder[c].cuts = $(".cutfield", pageHolder[c])),
            g = 0; g < j.length; g++)
                if ("none" != j[g].style.display) {
                    i = !0;
                    break
                }
        if (f || i || !(cur_page < pageHolder.length - 1))
            break;
        cur_page++
    }
    for (k = !0,
    c = cur_page + 1; c < pageHolder.length; c++)
        pageHolder[c].skipPage || (k = !1);
    a && (cur_page >= pageHolder.length - 1 || k ? (a.style.display = "none",
    $("#divSubmit").show()) : cur_page < pageHolder.length - 1 && (a.style.display = "")),
    cur_page >= pageHolder.length && (cur_page = 0),
    pageHolder[cur_page].style.display = "",
    window.bindUploadMultipleFn && bindUploadMultipleFn(pageHolder[cur_page]),
    initSlider(),
    l = document.getElementById("divMaxTime"),
    l && "" == l.style.display ? $("body,html").animate({
        scrollTop: 0
    }, 100) : pageHolder[cur_page].scrollIntoView(),
    showProgress(),
    window.hasPageTime && processMinMax(),
    2 == window.isChuangGuan && ($("#divSubmit").hide(),
    timeLimit()),
    fixBottom(),
    $("#divMatrixHeader").hide(),
    adjustVideoHeight(pageHolder[cur_page])
}
function processSearch() {
    var a, b, c;
    document.referrer && (a = document.referrer,
    b = !1,
    a && (a.indexOf("baidu.com") > -1 || a.indexOf("google.com") > -1 || a.indexOf("so.360.cn") > -1 || a.indexOf(".so.com") > -1 || a.indexOf(".sogou.com") > -1 || a.indexOf(".soso.com") > -1 || a.indexOf(".haoso.com") > -1 || a.indexOf(".sm.cn") > -1) && (b = !0),
    b && (c = "<a href='https://www.wjx.cn/mobile/publicsurveys.aspx' style='color:#66beff;'>搜索更多相关问卷模板</a>",
    document.title && (document.title.indexOf("员工满意度") > -1 ? c = "<a href='https://www.wjx.cn/mobile/app/mydreport.aspx' style='color:#66beff;'>员工满意度典型应用</a>" : document.title.indexOf("员工敬业度") > -1 && (c = "<a href='https://www.wjx.cn/mobile/app/jydreport.aspx' style='color:#66beff;'>员工敬业度典型应用</a>")),
    $("#divSearch").show().html(c)))
}
function initSlider() {
    if (window.hasSlider) {
        var a = new Array;
        $(pageHolder[cur_page].questions).each(function() {
            var d, e, f, g, h, b = $(this), c = b.attr("type");
            if (("8" == c || "12" == c || "9" == c || "10" == c) && (d = getTopic(b),
            e = document.getElementById("divRef" + d),
            f = e && "" == e.style.display,
            !f))
                for (g = $("input.ui-slider-input:visible", b),
                h = 0; h < g.length; h++)
                    a.push(g[h])
        }),
        bindSlider(0, a)
    }
}
function bindSlider(a, b) {
    var c = b.length;
    c > a && setTimeout(function() {
        $(b[a]).rangeslider({
            polyfill: !1
        }),
        bindSlider(a + 1, b)
    }, 10)
}
function initqSlider(a) {
    var b, c, d;
    window.hasSlider && (b = $(a),
    c = b.attr("type"),
    d = "8" == c || "12" == c || "9" == c || "10" == c,
    d && initEleSlider(a))
}
function initEleSlider(a) {
    if (!a.hasInitSlider) {
        var b = $("input.ui-slider-input:visible", a);
        b.rangeslider && 0 != b.length && (b.rangeslider({
            polyfill: !1
        }),
        a.hasInitSlider = !0)
    }
}
function showProgress() {
    var a, b, c, d;
    1 != totalPage && (a = cur_page + 1,
    a > totalPage && (a = totalPage),
    b = a + "/" + totalPage,
    c = "页",
    1 == langVer && (c = " Page"),
    $(".pagepercent").html(b + c),
    d = 100 * a / totalPage,
    $(".pagebar").width(d + "%"))
}
function verifyCheckMinMax(a, b, c, d) {
    var h, i, j, e = a.attr("minvalue"), f = a.attr("maxvalue"), g = a[0];
    if (0 == e && 0 == f)
        return "";
    if (h = 0,
    h = c ? $("li.ui-li-static[check='1']", a).length : $("input:checked", a).length,
    0 != h || a.attr("req")) {
        if (i = "",
        0 == langVer && (i = "&nbsp;&nbsp;&nbsp;您已经选择了" + h + "项"),
        j = !0,
        f > 0 && h > f) {
            if (d)
                return 0 == langVer && alertNew("此题最多只能选择" + f + "项"),
                11 == a.attr("type") && "text" == $(d)[0].type ? $(d).parent().parent().trigger("click") : $(d).trigger("click"),
                "";
            0 == langVer ? i += ",<span style='color:red;'>多选择了" + (h - f) + "项</span>" : i = validate_info + validate_info_check4 + f + type_check_limit5,
            j = !1
        } else
            e > 0 && e > h && (0 == langVer ? i += ",<span style='color:red;'>少选择了" + (e - h) + "项</span>" : i = validate_info + validate_info_check5 + e + type_check_limit5,
            j = !1,
            !c && 1 == h && $("input:checked", a).parents(".ui-checkbox").hasClass("huchi") && (j = !0));
        return g.errorMessage || (g.errorMessage = $(".errorMessage", a)[0]),
        j ? (g.errorMessage.innerHTML = "",
        "") : (b ? writeError(a[0], i, 3e3) : g.errorMessage.innerHTML = i,
        i)
    }
}
function checkOnly(a, b) {
    var f, g, h, i, j, k, l, c = $(b), d = c[0], e = c.attr("needonly");
    return e ? "地图" == c.attr("verify") ? "" : (f = c.val()) ? f.length > 50 ? "" : (g = getTopic(a),
    h = c.attr("rowid"),
    h ? g = 1e4 * parseInt(g) + parseInt(h) : (i = c.attr("gapindex"),
    i && (g = 1e4 * parseInt(g) + parseInt(i))),
    j = "/joinnew/AnswerOnlyHandler.ashx?q=" + activityId + "&at=" + encodeURIComponent(f) + "&qI=" + g + "&o=true&t=" + (new Date).valueOf(),
    k = $(a)[0],
    l = "",
    d.errorOnly || (d.errorOnly = new Object),
    d.errorOnly[f] ? (l = validate_only,
    k.verifycodeinput && (k.verifycodeinput.parentNode.style.display = "none"),
    !k.errorControl && g - 1e4 > 0 && (k.errorControl = d),
    writeError(k, l, 3e3),
    l) : ($.ajax({
        type: "GET",
        url: j,
        async: !1,
        success: function(a) {
            return "false1" == a ? (l = validate_only,
            d.errorOnly[f] = 1,
            k.verifycodeinput && (k.verifycodeinput.parentNode.style.display = "none"),
            !k.errorControl && g - 1e4 > 0 && (k.errorControl = d),
            writeError(k, l, 3e3),
            l) : ""
        }
    }),
    void 0)) : "" : ""
}
function verifyTxt(a, b, c) {
    var j, k, d = $.trim($(b).val()), e = $(b).attr("verify"), f = $(b).attr("minword"), g = $(b).attr("maxword"), h = $(a)[0], i = "";
    return d ? (j = null,
    "10" == a.attr("type") && (j = $(b).parents(".mdivtable").length > 0 ? !0 : !1),
    k = null,
    j && (k = $(b).parents(".mdivtable")[0]),
    j ? k.removeError && k.removeError(!0) : h.removeError && h.removeError(),
    i = verifyMinMax(d, e, f, g),
    i || (i = verifydata(d, e, $(b)[0])),
    i ? (c && (h.errorControl = $(b)[0]),
    j && (k.errorControl = $(b)[0]),
    writeError(h, i, 3e3, k),
    i) : (i || !h.needsms || h.issmsvalid || (i = "提示：您的手机号码没有通过验证，请先验证",
    writeError(h, i, 3e3)),
    i)) : i
}
function validateMatrix(a, b) {
    var d, f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = $("table.matrix-rating", $(a)), e = "";
    for ($(a)[0].isMatrixFillError = !1,
    f = c[0].rows,
    g = 0; g < f.length; g++)
        if (h = f[g],
        i = h.getAttribute("tp"),
        "d" == i && (!window.hasReferClient || "none" != h.style.display))
            if (j = $(h).attr("fid"),
            k = $("a.rate-on", $(h)),
            d = "",
            0 != k.length) {
                if (d = $(k[k.length - 1]).attr("dval"),
                l = $(a).attr("ischeck")) {
                    if (d = "",
                    m = $(a).attr("minvalue"),
                    n = $(a).attr("maxvalue"),
                    m && k.length - m < 0) {
                        e = validate_info + validate_info_check5 + m + type_check_limit5,
                        $(a)[0].errorControl = $(h).prev("tr")[0];
                        break
                    }
                    if (n && k.length - n > 0) {
                        e = validate_info + validate_info_check4 + n + type_check_limit5,
                        $(a)[0].errorControl = $(h).prev("tr")[0];
                        break
                    }
                    if (o = !0,
                    $(k).each(function() {
                        var b, c, f;
                        return d && (d += ";"),
                        d += $(this).attr("dval"),
                        b = $(this).attr("needfill"),
                        b && (c = this.fillvalue || "",
                        c = replace_specialChar(c).replace(/;/g, "；").replace(/,/g, "，"),
                        d += spChars[2] + c,
                        f = $(this).attr("req"),
                        f && !c) ? (e = "请回答此题",
                        1 == langVer && (e = "required"),
                        $(a)[0].isMatrixFillError = !0,
                        showMatrixFill(this, 1),
                        o = !1,
                        !1) : void 0
                    }),
                    !o)
                        break
                } else if (p = $(k[k.length - 1]).attr("mode"),
                !p && (q = $(k[k.length - 1]).attr("needfill"),
                q && (r = k[k.length - 1].fillvalue || "",
                r = replace_specialChar(r).replace(/;/g, "；").replace(/,/g, "，"),
                d += spChars[2] + r,
                s = $(k[k.length - 1]).attr("req"),
                s && !r))) {
                    e = "请回答此题",
                    1 == langVer && (e = "required"),
                    $(a)[0].isMatrixFillError = !0,
                    showMatrixFill(k[k.length - 1], 1);
                    break
                }
                $("#" + j, $(a)).attr("value", d)
            } else if ($("#" + j, $(a)).val(""),
            "1" == b) {
                e = "请回答此题",
                1 == langVer && (e = "required"),
                $(a)[0].errorControl = $(h).prev("tr")[0];
                break
            }
    return e
}
function validateScaleRating(a) {
    var b = !0
      , c = $("table.scale-rating", $(a));
    return c = $("a.rate-on", c),
    0 == c.length ? (b = !1,
    $("input:hidden", $(a)).val("")) : ($("input:hidden", $(a)).attr("value", $(c[c.length - 1]).attr("val")),
    -1 == c.attr("jumpto") && (needSubmitNotValid = !0)),
    b
}
function jump(a, b) {
    var e, f, c = $(a), d = c.attr("hasjump");
    d && (e = c.attr("type"),
    f = c.attr("anyjump"),
    f > 0 ? jumpAnyChoice(a) : 0 == f && "3" != e && "5" != e && "7" != e ? jumpAnyChoice(a) : jumpByChoice(a, b))
}
function jumpAnyChoice(a, b) {
    var f, c = $(a), d = c.attr("type"), e = !1;
    "1" == d ? e = $("input", c).val().length > 0 : "2" == d ? e = $("textarea", c).val().length > 0 : "3" == d ? e = $("input[type='radio']:checked", c).length > 0 : "4" == d ? e = $("input[type='checkbox']:checked", c).length > 0 : "5" == d ? e = $("a.rate-on", c).length > 0 : "6" == d ? e = $("a.rate-on", c).length > 0 : "7" == d ? e = -2 != $("select", c).val() : "8" == d ? e = $("input", c).val().length > 0 : "9" == d || "12" == d ? $("input", c).each(function() {
        var a = $(this).val();
        a.length > 0 && (e = !0)
    }) : "10" == d ? (f = "1" == c.attr("select"),
    f ? $("select", c).each(function() {
        var a = $(this).val();
        -2 != a && (e = !0)
    }) : $("input", c).each(function() {
        var a = $(this).val();
        a.length > 0 && (e = !0)
    })) : "11" == d ? e = $("li[check='1']", c).length > 0 : "13" == d && (e = c[0].fileName ? !0 : !1),
    jumpAny(e, a, b)
}
function jumpByChoice(a, b) {
    var e, f, g, c = $(a).attr("type"), d = $(a)[0];
    "-2" == b.value ? processJ(d.indexInPage - 0, 0, !1, d.pageIndex) : "-1" == b.value || "" == b.value ? processJ(d.indexInPage - 0, 0, !1, d.pageIndex) : ("3" == c || "5" == c || "7" == c) && (e = b.value || $(b).attr("val"),
    parseInt(e) == e && (f = $(b).attr("jumpto"),
    f || (f = 0),
    g = f - 0,
    processJ(d.indexInPage - 0, g, !1, d.pageIndex)))
}
function jumpAny(a, b, c) {
    var f, g, h, d = $(b);
    d.attr("type"),
    f = d.attr("hasjump"),
    g = d.attr("anyjump") - 0,
    h = d[0],
    f && (a ? processJ(h.indexInPage - 0, g, c, h.pageIndex) : processJ(h.indexInPage - 0, 0, c, h.pageIndex))
}
function processJ(a, b, c, d) {
    var i, j, k, l, n, o, p, e = a + 1, f = d, g = 1 == b || -1 == b, h = 0;
    for (i = d; i < pageHolder.length; i++) {
        for (j = pageHolder[i].questions,
        g && (f = i),
        !h && j[a] && (h = parseInt(getTopic(j[a]))),
        k = e; k < j.length; k++)
            l = getTopic(j[k]),
            (l == b || g) && (f = i),
            "1" != $(j[k]).attr("nhide") && (b > l || g ? j[k].style.display = "none" : (relationNotDisplayQ[l] || relationItemNotDisplayQ[l] || (j[k].style.display = ""),
            n = $(j[k]).attr("hasjump"),
            n && !c && clearFieldValue(j[k])));
        for (pageHolder[i].cuts || (pageHolder[i].cuts = $(".cutfield", pageHolder[i])),
        k = 0; k < pageHolder[i].cuts.length; k++)
            o = pageHolder[i].cuts[k],
            g && (o.style.display = "none"),
            l = o.getAttribute("qtopic"),
            l && (o.getAttribute("relation") || h && h >= l || e >= l || (b > l || g ? o.style.display = "none" : (p = o.getAttribute("topic"),
            relationNotDisplayQ[p] || (o.style.display = ""))));
        e = 0
    }
    fixBottom()
}
function GetBacktoServer() {
    str = window.location.pathname,
    index = str.lastIndexOf("/"),
    page = str.substr(index + 1, str.length - index),
    data = readCookie("history"),
    null != data && data.toLowerCase() != page.toLowerCase() && (window.location.href = window.location.href)
}
function readCookie(a) {
    var b, c, d, e;
    for (b = a + "=",
    c = document.cookie.split(";"),
    d = 0; d < c.length; d++) {
        for (e = c[d]; " " == e.charAt(0); )
            e = e.substring(1, e.length);
        if (0 == e.indexOf(b))
            return e.substring(b.length, e.length)
    }
    return null
}
function removeError(a) {
    this.errorMessage && (this.errorMessage.innerHTML = "",
    window != window.top && $("#ValError").html(""),
    this.removeError = null,
    2 != window.isChuangGuan && (a ? this.parentNode.style.border = "solid 1px #fff" : this.style.border = "solid 1px #fff"),
    this.errorControl && (this.errorControl.style.background = "",
    this.errorControl = null),
    fixBottom())
}
function writeError(a, b, c, d) {
    return a = $(a)[0],
    2 != window.isChuangGuan && (a.style.border = "dashed 1px #de6752"),
    d ? objErrorInfo(d, b, c) : objErrorInfo(a, b, c),
    firstError || (firstError = a),
    fixBottom(),
    !1
}
function objErrorInfo(a, b) {
    if (a.errorMessage)
        a.errorMessage.innerHTML = b;
    else {
        var d = $(".errorMessage", $(a));
        a.errorMessage = d[0],
        !firstError && isValidating && (d.css("left", "50%"),
        d.animate({
            left: 0
        }, 200)),
        a.errorMessage.innerHTML = b
    }
    a.errorMessage.style.lineHeight = $(a.errorMessage).height() > 38 ? "24px" : "38px",
    a.removeError = removeError,
    a.errorControl && (a.errorControl.style.background = "#FBD5B5")
}
function verifydata(a, b, c) {
    var d, e;
    if (!b)
        return "";
    if (d = null,
    "email" == b.toLowerCase() || "msn" == b.toLowerCase())
        return d = /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
        d.exec(a) ? "" : validate_email;
    if ("日期" == b || "生日" == b || "入学时间" == b)
        return "";
    if ("固话" == b)
        return d = /^((\d{4}-\d{7})|(\d{3,4}-\d{8}))(-\d{1,4})?$/,
        d.exec(a) ? "" : validate_phone.replace("，请注意使用英文字符格式", "");
    if ("手机" == b)
        return d = /^\d{11}$/,
        d.exec(a) ? "" : validate_mobile.replace("，请注意使用英文字符格式", "");
    if ("密码" == b)
        return checkPassword(a, c);
    if ("确认密码" == b) {
        if (c && c.firstPwd && c.firstPwd.value != a)
            return "两次密码输入不一致！"
    } else {
        if ("电话" == b)
            return d = /(^\d{11}$)|(^((\d{4}-\d{7})|(\d{3,4}-\d{8}))(-\d{1,4})?$)/,
            d.exec(a) ? "" : validate_mo_phone.replace("，请注意使用英文字符格式", "");
        if ("汉字" == b)
            return d = /^[\u4e00-\u9fa5·]+$/,
            d.exec(a) ? "" : validate_chinese;
        if ("姓名" == b)
            return d = /^[\u4e00-\u9fa5·]{2,10}$/,
            d.exec(a) ? "" : "姓名必须为2到10个汉字";
        if ("英文" == b)
            return d = /^[A-Za-z]+$/,
            d.exec(a) ? "" : validate_english;
        if ("网址" == b || "公司网址" == b)
            return d = /^https?:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
            e = /^www.[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
            d.exec(a) || e.exec(a) ? "" : validate_reticulation;
        if ("身份证号" == b)
            return d = /^\d{15}(\d{2}[A-Za-z0-9])?$/,
            d.exec(a) ? "" : validate_idcardNum;
        if ("学号" == b) {
            if (d = /^\d+$/,
            !d.exec(a))
                return validate_num.replace("，请注意使用英文字符格式", "")
        } else if ("数字" == b) {
            if (d = /^(\-)?\d+$/,
            !d.exec(a))
                return validate_num.replace("，请注意使用英文字符格式", "")
        } else if ("小数" == b) {
            if (d = /^(\-)?\d+(\.\d+)?$/,
            !d.exec(a))
                return validate_decnum
        } else if ("qq" == b.toLowerCase())
            return d = /^\d+$/,
            e = /^\w+([-+.]\w+)*@\w+([-.]\\w+)*\.\w+([-.]\w+)*$/,
            d.exec(a) || e.exec(a) ? "" : validate_qq
    }
    return ""
}
function checkPassword(a, b) {
    var f, c = /([a-zA-Z0-9!@#$%^&*()_?<>{}]){8,20}/, d = /[a-zA-Z]+/, e = /[0-9]+/;
    return b && b.confirmPwd && b.needCheckConfirm && (f = b.confirmPwd.value,
    f != a) ? "两次密码输入不一致！" : c.test(a) && d.test(a) && e.test(a) ? "" : c.test(a) ? d.test(a) ? e.test(a) ? "" : "密码中必须包含数字" : "密码中必须包含字母" : "密码长度在8-20位"
}
function verifyMinMax(a, b, c, d) {
    if ("数字" == b || "小数" == b) {
        var e = /^(\-)?\d+$/;
        if ("小数" == b && (e = /^(\-)?\d+(\.\d+)?$/),
        !e.exec(a))
            return "小数" == b ? validate_decnum : validate_num.replace("，请注意使用英文字符格式", "");
        if (0 != a && (a = a.replace(/^0+/, "")),
        "" != c) {
            if ("数字" == b && parseInt(a) - parseInt(c) < 0)
                return validate_num2 + c;
            if ("小数" == b && parseFloat(a) - parseFloat(c) < 0)
                return validate_num2 + c
        }
        if ("" != d) {
            if ("数字" == b && parseInt(a) - parseInt(d) > 0)
                return validate_num1 + d;
            if ("小数" == b && parseFloat(a) - parseFloat(d) > 0)
                return validate_num1 + d
        }
    } else {
        if ("" != d && a.length - d > 0)
            return validate_info_wd3.format(d, a.length);
        if ("" != c && a.length - c < 0)
            return validate_info_wd4.format(c, a.length)
    }
    return ""
}
function getTopic(a) {
    return $(a).attr("topic")
}
function relationItemJoin(a) {
    var b, c;
    "none" != a.style.display && (b = $(a),
    c = b.attr("type"),
    "3" == c ? $("input:checked", b).length > 0 && displayItemRelationRaidoCheck(b, "input[type=radio]", 1) : "4" == c ? $("input:checked", b).length > 0 && displayItemRelationRaidoCheck(b, "input[type=checkbox]", 2) : "7" == c && $("select", b)[0].selectedIndex > 0 && displayItemRelationRaidoCheck(b, "option", 5))
}
function relationJoin(a) {
    var b, c;
    "none" != a.style.display && (b = $(a),
    c = b.attr("type"),
    "3" == c ? $("input:checked", b).length > 0 && displayRelationByType(b, "input[type=radio]", 1) : "4" == c ? $("input:checked", b).length > 0 && displayRelationByType(b, "input[type=checkbox]", 2) : "7" == c && $("select", b)[0].selectedIndex > 0 && displayRelationByType(b, "option", 5))
}
function displayItemRelationRaidoCheck(a, b, c) {
    var d = getTopic(a);
    ItemrelationQs[d] && (a.hasDisplayByItemRelation = new Object,
    $(b, a).each(function(e) {
        var i, j, k, f = !1, g = this.value, h = d + "," + g;
        3 == c ? (g = $(this).find("input[type=hidden]").eq(0).attr("value"),
        $(this).attr("check") && (f = !0)) : 4 == c ? (g = $(this).attr("val"),
        i = -1,
        j = $("a.rate-on", a),
        j[0] && $(j[0]).attr("mode") && (i = j.length - 1),
        -1 == i && $(this).hasClass("rate-on") ? f = !0 : e == i && (f = !0)) : 1 != c && 2 != c || !this.checked || (f = !0),
        h = d + "," + g,
        displayByItemRelation(a, h, f),
        k = d + ",-" + g,
        -1 != ItemrelationGroup.indexOf(d) && (ItemrelationGroupHT[k] || ItemrelationGroupHT[k.replace(",", ",-")],
        displayByItemRelation(a, k, f, !0)),
        ItemrelationHT[k] && displayByItemRelationNotSelect(a, k, f, b, c)
    }))
}
function displayByItemRelation(a, b, c, d) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, e = getTopic(a);
    if (-1 != ItemrelationGroup.indexOf(e) && (f = "",
    g = ItemrelationGroupHT[b] || ItemrelationGroupHT[b.replace(",", ",-")]))
        for (h in g)
            if (i = new Object,
            j = g[h],
            $("#" + j)) {
                k = $("#" + j)[0],
                l = k.getAttribute("itemrelation"),
                l && (f = -1 != l.indexOf("|") ? "|" : "$"),
                m = l.split(f);
                for (n in ItemrelationGroupHT)
                    for (o in ItemrelationGroupHT[n])
                        j == ItemrelationGroupHT[n][o] && (p = n.split(",")[0],
                        i[p] || (i[p] = new Array),
                        i[p].push("q" + n.replace(",", "_")));
                if (q = !1,
                "$" == f) {
                    q = !1;
                    for (r in i)
                        if (s = !1,
                        t = isOrChooseLogic(m, r),
                        s = t ? checkOneQusOrItemRelation(i[r]) : checkOneQusAndItemRelation(i[r])) {
                            q = !0;
                            break
                        }
                } else {
                    q = !0;
                    for (r in i)
                        if (s = !1,
                        t = isOrChooseLogic(m, r),
                        s = t ? checkOneQusOrItemRelation(i[r]) : checkOneQusAndItemRelation(i[r]),
                        !s) {
                            q = !1;
                            break
                        }
                }
                u = q ? "" : "none",
                checkDisplayques(j, u),
                q || loopHideItemRelation(j)
            }
    if (v = ItemrelationHT[b])
        for (w = 0; w < v.length; w++)
            x = v[w],
            a.hasDisplayByItemRelation[x] || (y = $("#" + x)[0].parentNode.parentNode,
            "ui-radio" != y.className && "ui-checkbox" != y.className && "ui-li-static" != y.className && (y = $("#" + x)[0].parentNode.parentNode.parentNode.parentNode),
            c || "none" == y.style.display ? c && (checkDisplayques(x, ""),
            d || (a.hasDisplayByItemRelation[x] = "1"),
            relationNotDisplayItem[x] && (relationNotDisplayItem[x] = "")) : loopHideItemRelation(v[w]))
}
function displayByItemRelationNotSelect(a, b, c, d) {
    var g, h, i, j, k, l, m, n, o, p, q, r, s, t, f = ItemrelationHT[b];
    if (f)
        for (g = 0; g < f.length; g++)
            if (h = c,
            i = f[g],
            !a.hasDisplayByItemRelation[i] && $("#" + i)) {
                if (j = $("#" + i)[0],
                k = j.getAttribute("itemrelation"),
                k.indexOf(";") > -1 && (l = !1,
                m = k.split(","),
                2 == m.length)) {
                    for (n = m[1].split(";"),
                    o = new Object,
                    p = 0; p < n.length; p++)
                        q = n[p].replace("-", ""),
                        o[q] = "1";
                    for (r = $(d, a),
                    p = 0; p < r.length; p++)
                        if (s = r[p].value,
                        o[s] && r[p].checked) {
                            l = !0;
                            break
                        }
                    h = l ? !0 : !1
                }
                t = j.parentNode.parentNode,
                "ui-radio" != t.className && "ui-checkbox" != t.className && "ui-li-static" != t.className && (t = j.parentNode.parentNode.parentNode.parentNode),
                h && "none" != t.style.display ? loopHideItemRelation(i) : h || (checkDisplayques(i, ""),
                a.hasDisplayByItemRelation[i] = "1",
                relationNotDisplayItem[i] && (relationNotDisplayItem[i] = ""))
            }
}
function loopHideItemRelation(a) {
    var b, c, d, e, f, g, h, i, j, k, l, m, n;
    if (!isLoadQues && (b = a.split("_"),
    2 == b.length)) {
        if (c = b[0].replace("q", ""),
        d = ItemrelationQs[c])
            for (e = 0; e < d.length; e++)
                loopHideItemRelation(d[e], !1);
        if (clearItemOption(a),
        f = questionsObject[c],
        jumpAny(!1, f),
        g = $("#" + a)[0]) {
            if (h = !0,
            i = $("#" + a).attr("itemrelation"),
            i && "0" != i && -1 != i.indexOf("$")) {
                j = new Object;
                for (k in ItemrelationGroupHT)
                    for (l in ItemrelationGroupHT[k])
                        a == ItemrelationGroupHT[k][l] && (m = k.split(",")[0],
                        j[m] || (j[m] = new Array),
                        j[m].push("q" + k.replace(",", "_")));
                n = checkDisplay(j),
                n && (h = !1)
            }
            h && (checkDisplayques(a, "none"),
            "" == relationNotDisplayItem[a] && (relationNotDisplayItem[a] = "1"))
        }
    }
}
function clearItemOption(a) {
    var c, d, b = $("#" + a);
    b && b[0].checked && (c = b.attr("type"),
    "radio" == c ? (b[0].checked = !1,
    b.parent().parent().find("a.jqradio").removeClass("jqchecked")) : "checkbox" == c ? (b[0].checked = !1,
    b.parent().parent().find("a.jqcheck").removeClass("jqchecked")) : "hidden" == c && (d = b.parent().parent().parent().parent(),
    $("li.ui-li-static", d).each(function() {
        $(this).find("span.sortnum").html("").removeClass("sortnum-sel"),
        $(this).attr("check", "")
    })))
}
function checkDisplayques(a, b) {
    var d, e, f, g, h, i, j, k, l, m, n;
    if ($("#" + a),
    d = $("#" + a)[0].parentNode.parentNode,
    -1 == d.className.indexOf("ui-radio") && -1 == d.className.indexOf("ui-checkbox") && -1 == d.className.indexOf("ui-li-static") && (d = $("#" + a)[0].parentNode.parentNode.parentNode.parentNode),
    d.style.display != b && (d.style.display = b,
    e = a.replace("q", "").split("_"),
    2 == e.length && (f = $("#div" + e[0]),
    f && !relationNotDisplayQ[e[0]]))) {
        if ("" == b)
            "none" == f[0].style.display && (f[0].style.display = "");
        else {
            for (g = f.attr("type"),
            h = "div.ui-radio",
            "4" == g ? h = "div.ui-checkbox" : "11" == g && (h = "li.ui-li-static"),
            i = "none",
            j = $("#div" + e[0] + " " + h),
            k = 0; k < j.length; k++)
                if ("" == j[k].style.display) {
                    i = "";
                    break
                }
            f[0].style.display = i
        }
        if (relationQs[e[0]]) {
            if (l = e[0],
            !relationQs[l])
                return;
            m = 1,
            n = "",
            g = f[0].getAttribute("type"),
            "3" == g ? (m = 1,
            n = "input[type=radio]") : "4" == g ? (m = 2,
            n = "input[type=checkbox]") : "11" == g && (m = 3,
            n = "li.ui-li-static"),
            displayRelationByType(f, n, m)
        }
    }
}
function displayRelationByType(a, b, c) {
    var e, f, d = getTopic(a);
    relationQs[d] && (a.hasDisplayByRelation = new Object,
    e = -1,
    4 == c && (f = $("a.rate-on", a),
    f[0] && $(f[0]).attr("mode") && (e = f.length - 1)),
    $(b, a).each(function(f) {
        var i, j, g = !1, h = "";
        1 == c || 2 == c || 5 == c ? h = this.value : 3 == c ? h = $("input[type=hidden]", this).val() : 4 == c && (h = $(this).attr("val")),
        i = d + "," + h,
        3 == c && $(this).attr("check") ? g = !0 : 4 == c ? -1 == e && $(this).hasClass("rate-on") ? g = !0 : f == e && (g = !0) : 1 != c && 2 != c || !this.checked ? 5 == c && this.selected && (g = !0) : g = !0,
        displayByRelation(a, i, g),
        j = d + ",-" + h,
        -1 != relationGroup.indexOf(d) && (relationGroupHT[j] || relationGroupHT[j.replace(",", ",-")],
        displayByRelation(a, j, g, !0)),
        relationHT[j] && displayByRelationNotSelect(a, j, g, b, c)
    }),
    fixBottom())
}
function checkDisplay(a) {
    var c, d, e, f, g, h, i, j, k, l, m, n, b = !1;
    for (c in a)
        for (d = 0; d < a[c].length; d++)
            if (e = a[c][d].replace("-", ""),
            f = a[c][d].replace("q", "").split("_"),
            g = document.getElementById(e),
            h = document.getElementById("q" + f[0]),
            i = document.getElementById("div" + f[0]),
            j = $(i).attr("type"),
            k = $(i).attr("qingjing"),
            1 == k) {
                if ("" == i.style.display && g && g.checked) {
                    b = !0;
                    break
                }
            } else {
                if (l = !1,
                g && "11" == j && (l = "1" == g.parentNode.parentNode.getAttribute("check") ? !0 : !1),
                g && "11" != j && f[1] > 0 == g.checked) {
                    b = !0;
                    break
                }
                if (g && "11" == j && f[1] > 0 == l) {
                    b = !0;
                    break
                }
                if (g || 5 != j) {
                    if (!g && h && f[1] == h.value) {
                        b = !0;
                        break
                    }
                } else if (m = $("a.rate-on", i),
                n = "",
                m.length > 0 && (n = $(m[m.length - 1]).attr("val")),
                f[1] == n) {
                    b = !0;
                    break
                }
            }
    return b
}
function checkOneQusOrItemRelation(a) {
    var c, d, e, f, g, h, i, j, k, l, m, n, b = !1;
    for (c = 0; c < a.length; c++)
        if (d = a[c].replace("-", ""),
        e = a[c].replace("q", "").split("_"),
        f = document.getElementById(d),
        g = !1,
        h = document.getElementById("div" + e[0]),
        i = $(h).attr("type"),
        j = h.getAttribute("qingjing"),
        1 == j) {
            if ("" == h.style.display && f && f.checked) {
                b = !0;
                break
            }
        } else {
            if (e[1] < 0 && (g = "11" == i ? $(h).find("li[check='1']").length > 0 : "5" == i ? $(h).find("a.rate-on").length > 0 : $(h).find("input:checked").length > 0),
            k = document.getElementById("q" + e[0]),
            l = !1,
            f)
                "11" == i ? l = "1" == f.parentNode.parentNode.getAttribute("check") ? !0 : !1 : "11" != i && f.checked && (l = !0);
            else if ("5" == i)
                m = $("a.rate-on", h),
                n = "",
                m.length > 0 && (n = $(m[m.length - 1]).attr("val")),
                e[1] == n && (l = !0);
            else if (k && e[1] == k.value) {
                b = !0;
                break
            }
            if (e[1] > 0 == l) {
                if (b = !0,
                e[1] < 0 && !g) {
                    b = !1;
                    break
                }
                break
            }
        }
    return b
}
function checkOneQusAndItemRelation(a) {
    var c, d, e, f, g, h, i, j, k, l, m, b = !0;
    for (c = 0; c < a.length; c++) {
        if (d = a[c].replace("-", ""),
        e = a[c].replace("q", "").split("_"),
        f = document.getElementById(d),
        g = !1,
        h = document.getElementById("div" + e[0]),
        i = $(h).attr("type"),
        e[1] < 0 && (g = "11" == i ? $(h).find("li[check='1']").length > 0 : "5" == i ? $(h).find("a.rate-on").length > 0 : $(h).find("input:checked").length > 0),
        j = document.getElementById("q" + e[0]),
        k = !1,
        f)
            "11" == i ? k = "1" == f.parentNode.parentNode.getAttribute("check") ? !0 : !1 : "11" != i && f.checked && (k = !0);
        else if ("5" == i)
            l = $("a.rate-on", h),
            m = "",
            l.length > 0 && (m = $(l[l.length - 1]).attr("val")),
            e[1] == m && (k = !0);
        else if (j && e[1] == j.value) {
            b = !0;
            break
        }
        if (e[1] > 0 != k) {
            b = !1;
            break
        }
        if (e[1] < 0 && !g) {
            b = !1;
            break
        }
    }
    return b
}
function displayByRelation(a, b, c, d) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, e = getTopic(a);
    if (-1 != relationGroup.indexOf(e) && (f = "",
    g = relationGroupHT[b] || relationGroupHT[b.replace(",", ",-")]))
        for (h in g) {
            i = new Object,
            j = getTopic(g[h]),
            k = g[h].getAttribute("relation"),
            k && (f = -1 != k.indexOf("|") ? "|" : "$"),
            l = k.split(f);
            for (m in relationGroupHT)
                for (n in relationGroupHT[m])
                    j == getTopic(relationGroupHT[m][n]) && (o = m.split(",")[0],
                    i[o] || (i[o] = new Array),
                    i[o].push("q" + m.replace(",", "_")));
            if (p = !1,
            "$" == f) {
                p = !1;
                for (q in i)
                    if (r = !1,
                    s = isOrChooseLogic(l, q),
                    r = s ? checkOneQusOrItemRelation(i[q]) : checkOneQusAndItemRelation(i[q])) {
                        p = !0;
                        break
                    }
            } else {
                p = !0;
                for (q in i)
                    if (r = !1,
                    s = isOrChooseLogic(l, q),
                    r = s ? checkOneQusOrItemRelation(i[q]) : checkOneQusAndItemRelation(i[q]),
                    !r) {
                        p = !1;
                        break
                    }
            }
            t = questionsObject[j],
            t ? (u = p ? "" : "none",
            checkDisplayItemques(t[0], u),
            p ? (loopShowRelation(t),
            initqSlider(t[0]),
            setTableWidth(t[0])) : loopHideRelation(t)) : (v = document.getElementById("divCut" + j.replace("c", "")),
            v && (v.style.display = p ? "" : "none")),
            window.zunxiangParas && j && window.zunxiangSetDefauts("q" + j, j, !1)
        }
    if (w = relationHT[b])
        for (x = 0; x < w.length; x++)
            y = getTopic(w[x]),
            a.hasDisplayByRelation[y] || (c || "none" == w[x].style.display ? c && (checkDisplayItemques(w[x], ""),
            "1" == w[x].getAttribute("qingjing") && displayRelationByType($(w[x]), "input[type=radio]", 1),
            "1" == w[x].getAttribute("isshop") && updateCart(w[x]),
            initqSlider(w[x]),
            setTableWidth(w[x]),
            d || (a.hasDisplayByRelation[y] = "1"),
            relationNotDisplayQ[y] && (relationNotDisplayQ[y] = "")) : loopHideRelation(w[x]))
}
function displayByRelationNotSelect(a, b, c, d, e) {
    var g, h, i, j, k, l, m, n, o, p, q, r, s, f = relationHT[b];
    if (f)
        for (g = 0; g < f.length; g++)
            if (h = c,
            i = getTopic(f[g]),
            !a.hasDisplayByRelation[i]) {
                if (j = f[g].getAttribute("relation"),
                j.indexOf(";") > -1 && (k = !1,
                l = j.split(","),
                2 == l.length)) {
                    for (m = l[1].split(";"),
                    n = new Object,
                    o = 0; o < m.length; o++)
                        p = m[o].replace("-", ""),
                        n[p] = "1";
                    for (q = $(d, a),
                    o = 0; o < q.length; o++)
                        if (r = !1,
                        s = "",
                        (1 == e || 2 == e || 5 == e) && (s = q[o].value),
                        3 == e && (s = $("input[type=hidden]", q[o]).val()),
                        3 == e && $(q[o]).attr("check") ? r = !0 : 1 != e && 2 != e || !q[o].checked || (r = !0),
                        n[s] && r) {
                            k = !0;
                            break
                        }
                    h = k ? !0 : !1
                }
                h && "none" != f[g].style.display ? loopHideRelation(f[g]) : h || (checkDisplayItemques(f[g], ""),
                initqSlider(f[g]),
                setTableWidth(f[g]),
                a.hasDisplayByRelation[i] = "1",
                relationNotDisplayQ[i] && (relationNotDisplayQ[i] = ""))
            }
}
function loopShowRelation(a) {
    var d, b = getTopic(a), c = relationQs[b];
    if (c)
        for (d = 0; d < c.length; d++)
            loopShowRelation(c[d], !1);
    "1" == $(a).attr("qingjing") && displayRelationByType($(a), "input[type=radio]", 1),
    "1" == $(a).attr("isshop") && updateCart($(a))
}
function loopHideRelation(a) {
    var b, c, d, e, f, g, h, i, j, k, l;
    if (!isLoadQues) {
        if (b = getTopic(a),
        c = relationQs[b])
            for (d = 0; d < c.length; d++)
                loopHideRelation(c[d], !1);
        if (clearFieldValue(a),
        jumpAny(!1, a),
        e = $(a)[0]) {
            if (f = !0,
            g = $(a).attr("relation"),
            g && "0" != g && -1 != g.indexOf("$")) {
                h = new Object;
                for (i in relationGroupHT)
                    for (j in relationGroupHT[i])
                        b == getTopic(relationGroupHT[i][j]) && (k = i.split(",")[0],
                        h[k] || (h[k] = new Array),
                        h[k].push("q" + i.replace(",", "_")));
                l = checkDisplay(h),
                l && (f = !1)
            }
            f && (checkDisplayItemques(e, "none"),
            "1" == e.getAttribute("isshop") && updateCart(e),
            "" == relationNotDisplayQ[b] && (relationNotDisplayQ[b] = "1"))
        }
    }
}
function checkDisplayItemques(a, b, c, d) {
    var e, f, g, h;
    if (a.style.display != b) {
        if (a.style.display = b,
        e = a.getAttribute("id").replace("div", ""),
        relationNotDisplayQ[e] = "none" == b ? "1" : "",
        "" == b)
            return a.uploader && a.uploader.refresh(),
            void 0;
        f = getTopic(a),
        ItemrelationQs[f] && (g = 1,
        c = "",
        d = a.getAttribute("type"),
        "3" == d ? (g = 1,
        c = "input[type=radio]") : "4" == d ? (g = 2,
        c = "input[type=checkbox]") : "11" == d && (g = 3,
        c = "li.ui-li-static"),
        h = $("#div" + f),
        displayItemRelationRaidoCheck(h, c, g))
    }
}
function checkHuChi(a, b) {
    var d, e, f, c = $(".huchi", a)[0];
    c && (d = $(b),
    $("input:checked", d)[0] && (e = $(".ui-checkbox", a),
    f = d.hasClass("huchi"),
    e.each(function() {
        var a, c;
        return this == b ? !0 : (a = $(this),
        $("input:checked", a)[0] ? (f ? a.trigger("click") : (c = a.hasClass("huchi"),
        c && a.trigger("click")),
        void 0) : !0)
    })))
}
function autoSubmit(a) {
    var b, c, d, e;
    if (isAutoSubmit = !0,
    needTip())
        return alertNew($(divTip).text()),
        void 0;
    if (b = $("#divNext a")[0],
    b && (b.disabled = !1),
    window.hasSurveyTime && (c = $(pageHolder[cur_page]).attr("maxtime"),
    !c || c - initMaxSurveyTime >= 0 || 1 >= maxSurveyTime))
        for (d = 0; totalPage - 1 > cur_page && (pageHolder[cur_page].hasExceedTime = !0,
        show_next_page(),
        d++,
        !(d > totalPage)); )
            ;
    ktimes++,
    divMaxTime.style.display = "none",
    $("body").css("padding-top", "0px"),
    pageHolder || (pageHolder = $("fieldset.fieldset")),
    pageHolder[cur_page].hasExceedTime = !0,
    totalPage - 1 > cur_page ? (show_next_page(),
    isAutoSubmit = !1) : (pageHolder[cur_page].style.display = "none",
    b && b.initVal && (b.innerHTML = b.initVal),
    !window.hasSurveyTime && 2 != window.isChuangGuan || "none" != tCode.style.display || window.useAliVerify || !window.hasAnswer || a ? (e = "提示：您的作答时间已经超过最长时间限制，请直接提交答卷！",
    1 == langVer && (e = "Time is up,please submit!"),
    2 == window.isChuangGuan && ((window.useAliVerify || "none" != tCode.style.display) && ($("#divSubmit").show().css("padding-top", "30px").parent().css("background", "#fff").css("margin", "0 2px"),
    $("#divQuestion").css("border", "none").css("margin", "0 2px").css("border-radius", "0")),
    e = hasChuGuanSuc ? "恭喜您闯关成功" : "提示：闯关失败！"),
    a && (e = a),
    $("#ValError").html(e)) : (hlv = "1",
    isAutoSubmit = !1,
    groupAnswer(1))),
    isAutoSubmit = !1
}
function CheckMax(a, b) {
    var c, d, e, f, g, h, i, j, k, l;
    if (!b)
        return !0;
    if (c = $(a).attr("dval"),
    d = $(a).parent().parent().parent(),
    "tbody" != d[0].tagName.toLocaleLowerCase())
        return !0;
    if (e = d.find("tr.trlabel").eq(0),
    f = e.find("th"),
    !f.eq(c - 1))
        return !0;
    if (g = f.eq(c - 1).attr("itemmax"),
    g && g > 0) {
        for (h = d.find("a.rate-off"),
        i = 0,
        j = 0; j < h.length && (h.eq(j).hasClass("rate-on") && h.eq(j).attr("dval") == c && i++,
        !(i >= g)); j++)
            ;
        if (i >= g)
            return k = f.eq(c - 1).text(),
            l = "提示：列选项“" + k + "”最多只允许选择" + g + "次",
            1 == langVer && (l = 'Column "' + k + '" can choose at most ' + g + " times."),
            alertNew(l),
            !1
    }
    return !0
}
function elagerImg(a, b) {
    var c, d, e, f, g, h, i, j, k;
    a = a || window.event,
    a.stopPropagation && a.stopPropagation(),
    c = $(b).parent().attr("pimg"),
    c || (c = $(b).parent().find("img").attr("src")),
    d = "#outdiv",
    e = "#indiv",
    f = "#bigimg",
    g = "#preView_wrap",
    h = d,
    i = document.documentElement.clientWidth || document.body.clientWidth,
    j = document.documentElement.clientHeight || document.body.clientHeight,
    k = $(document).scrollTop(),
    $(f).unbind("load"),
    $(f).attr("src", c).load(function() {
        var l, m, a = this.width, b = this.height, c = a / b;
        h = b > j ? ".icon_close" : d,
        $(g).addClass("flex"),
        a > i ? (l = "2%",
        b = i / c,
        a = .96 * i,
        m = (j - b) / 2,
        0 > m && (m = 10,
        $(g).removeClass("flex"),
        b = .96 * j)) : (.8 * i > a && (a = .8 * i),
        .4 * j > b && (b = .4 * j),
        l = (i - a) / 2,
        m = (j - b) / 2,
        0 > m && (b = .96 * j,
        m = "2%",
        $(g).removeClass("flex"))),
        $(e).css({
            left: l,
            top: m
        }),
        $(g).css({
            width: a,
            height: b
        }),
        $(d).fadeIn("fast"),
        $("body").addClass("noscorrl"),
        $(h).click(function() {
            $(d).fadeOut("fast"),
            $("body").removeClass("noscorrl"),
            $(document).scrollTop(k),
            $(f).attr("src", ""),
            $(h).unbind("click")
        })
    })
}
function openDialogByIframe(a, b, c, d) {
    var f, g, h, i, j, k, l, e = "absolute";
    (window.IsPar || window != window.top && $(window).height() > 812) && (e = "fixed"),
    f = $(window).width(),
    g = $(document).height(),
    "divImgPop" == c || c.indexOf("divVCode") > -1 || "divTimeUp" == c ? b += 30 : (a = Math.min(f, 400) - 30,
    0 == c.indexOf("divDesc_") ? b += 30 : -1 == c.indexOf("setcity") && (b = Math.min($(window).height(), 400) - 20),
    (c.indexOf("amap.aspx") > -1 || c.indexOf("school.aspx") > -1 || d) && (b = $(window).height() - 30,
    a = $(window).width() - 20),
    "fixed" == e && b > 600 && (b = 600,
    obj_offectTop -= 300,
    obj_offectTop = 0 >= obj_offectTop ? 20 : obj_offectTop)),
    $("body").append("<div id='yz_popIframeDiv'></div>"),
    h = document.getElementById(c),
    i = "<div id='yz_popTanChu' style='border-radius: 8px;'><div style='position:relative;'><a id='yz_popTanChuClose' style='background:url(/images/bt_closed.gif) no-repeat;width:30px;height:30px;margin:-15px -18px 0 0;display:inline;float:right;cursor:pointer;position:absolute;right:0;'></a></div>",
    i += h ? "<div id='yz_popdivData' style='padding:10px;height:" + (b - 30) + "px;overflow:auto;width:" + a + "px;'></div>" : "<iframe id='yz_popwinIframe' frameborder='0' hspace='0' src=" + c + " style='border-radius:8px;'></iframe>",
    i += "</div>",
    $("body").append(i),
    $("#yz_popIframeDiv").css({
        width: f,
        height: g,
        background: "#000",
        position: e,
        zIndex: "100",
        left: "0",
        top: "0"
    }),
    $("#yz_popIframeDiv").fadeTo(0, .5),
    j = $(window).width() / 2 - a / 2,
    k = $(window).height() / 2 - b / 2 + $(window).scrollTop(),
    $("#yz_popTanChu").css({
        width: a,
        height: b,
        left: j,
        top: k,
        background: "#fff",
        position: e,
        zIndex: 200
    }),
    "fixed" == e && $("#yz_popTanChu").css({
        top: obj_offectTop
    }),
    h && $("#yz_popdivData").html(h.innerHTML),
    l = b,
    $("#yz_popwinIframe").css({
        width: a,
        height: l,
        "border-bottom": "1px #ccc solid",
        background: "#ffffff"
    }),
    $("#yz_popTanChuClose,#yz_popIframeDiv").click(function() {
        "1" != $("#yz_popTanChu").attr("selectnoclose") && ($("#yz_popIframeDiv").remove(),
        $("#yz_popTanChu").remove())
    })
}
function closeAlert() {
    var a = document.getElementById("alert_box");
    a.style.display = "none",
    a.callback && a.callback()
}
function alertNew(a, b) {
    if (window != window.top)
        return alert(a),
        b && b(),
        void 0;
    var c = document.getElementById("alert_box");
    c ? document.getElementById("pop_box_msg").innerHTML = a : (c = document.createElement("div"),
    c.id = "alert_box",
    alertHtml = "<div style='position:fixed;*position: absolute;width:100%;height:100%;opacity:0.5;filter:alpha(opacity=50);background-color:black;z-index:99998;top:0px;left:0px;'></div><div style='min-height: 160px;width:320px;margin-left:-160px;margin-top: -80px;position:fixed;*position: absolute;z-index:99999;top:50%;left:50%;background-color:white;border-radius:4px;'><div style='font-size:18px;color:#000;font-weight:600;padding: 26px 0px 10px;width:100%;text-align:center;border-radius:8px 8px 0 0;vertical-align: middle;z-index: 1;'><div>系统提示</div></div><div style='width: 100%;border-radius: 0 0 8px 8px; z-index: 1;'><div style='min-height: 50px;padding:6px 10px 10px;font-size: 15px;line-height: 22px;text-align: center;' id='pop_box_msg'>" + a + "</div>" + "<div style='width:100%;height: 50px;text-align:center;border-top:1px solid #D2D3D5;'><button style='display:inline-block;width:100%;font-size:18px;height:50px;box-sizing:border-box;line-height:50px;color:#3296FA;text-align: center;text-decoration: none;border: none;background: none;outline:none;cursor:pointer;' onclick='closeAlert();'>确定</button></div>" + "</div></div>",
    c.innerHTML = alertHtml,
    document.body.appendChild(c)),
    c.style.display = "",
    c.callback = b || ""
}
function closeConfirm() {
    var a = document.getElementById("confirm_box");
    a.style.display = "none",
    a.callback && a.callback()
}
function closeNo() {
    var a = document.getElementById("confirm_box");
    a.style.display = "none",
    a.callback2 && a.callback2()
}
function displaypeie(a, b, c) {
    "1" == a.attr("haspeie") && ($(b, a).each(function(a) {
        var d, e, f, g, h, i, j, k, l, b = $(this).attr("attrpeie");
        if (b && (d = !1,
        3 == c ? (val = $(this).find("input[type=hidden]").eq(0).attr("value"),
        $(this).attr("check") && (d = !0)) : 4 == c ? -1 == selIndex && $(this).hasClass("rate-on") ? d = !0 : a == selIndex && (d = !0) : 1 != c && 2 != c || !this.checked || (d = !0),
        !d))
            for (e = b.split(";"),
            a = 0; a < e.length; a++)
                f = e[a].split("|"),
                3 == f.length && (g = "q" + f[0] + "_" + f[1],
                h = document.getElementById(g),
                h && (h.disabled = !1,
                i = h.parentNode.parentNode,
                "ui-radio" != i.className && "ui-checkbox" != i.className && "ui-li-static" != i.className && (i = h.parentNode.parentNode.parentNode.parentNode),
                i && (j = i.getElementsByTagName("div"),
                j.length > 0 && (k = j[j.length - 1],
                l = k.getElementsByTagName("span"),
                l.length > 0 && k.removeChild(l[0])))))
    }),
    $(b, a).each(function(a) {
        var d, e, f, g, h, i, j, k, l, b = $(this).attr("attrpeie");
        if (b && (d = !1,
        3 == c ? (val = $(this).find("input[type=hidden]").eq(0).attr("value"),
        $(this).attr("check") && (d = !0)) : 4 == c ? -1 == selIndex && $(this).hasClass("rate-on") ? d = !0 : a == selIndex && (d = !0) : 1 != c && 2 != c || !this.checked || (d = !0),
        d))
            for (e = b.split(";"),
            a = 0; a < e.length; a++)
                f = e[a].split("|"),
                3 == f.length && (g = "q" + f[0] + "_" + f[1],
                h = document.getElementById(g),
                h && (h.disabled = !0,
                i = h.parentNode.parentNode,
                "ui-radio" != i.className && "ui-checkbox" != i.className && "ui-li-static" != i.className && (i = h.parentNode.parentNode.parentNode.parentNode),
                i && (j = i.getElementsByTagName("div"),
                j.length > 0 && (k = j[j.length - 1],
                l = k.getElementsByTagName("span"),
                0 == l.length && (k.innerHTML = k.innerHTML + "<span>（" + f[2] + "）</span>")))))
    }))
}
function isOrChooseLogic(a, b) {
    var d, e, f, c = !0;
    for (d = 0; d < a.length; d++)
        if (e = a[d].split(",")[0],
        e == b) {
            f = a[d].split(",")[1],
            c = -1 != f.indexOf("-") ? -1 != f.indexOf(".") ? !0 : !1 : -1 != f.indexOf(".") ? !1 : !0;
            break
        }
    return c
}
function otherTextEvent(a, b) {
    var c = $(a)
      , d = c.val().trim();
    d && b[0].removeError && b[0].removeError()
}
var curfilediv, isUploadingFile, cur_page, hasSkipPage, prevControl, pageHolder, curMatrixFill, curMatrixError, imgVerify, questionsObject, allQArray, shopArray, hasPeiEFull, hasConfirmBtn, itempopUpindex, popUpindex, firstError, firstMatrixError, needSubmitNotValid, lastFixedObj, isValidating, txtCurCity, prevScrollTop, obj_offectTop, startAge, endAge, rName, gender, marriage, education, modata, hasMatchName, quResult, clientAnswerSend, havereturn, timeoutTimer, nvvv, ktimes, isAutoSubmit, amt, curField = null, relationHT = new Array, relationQs = new Object, relationGroup = new Array, relationGroupHT = new Object, relationNotDisplayQ = new Object, relationItemNotDisplayQ = new Object, ItemrelationHT = new Array, ItemrelationGroup = new Array, ItemrelationQs = new Object, ItemrelationGroupHT = new Object, relationNotDisplayItem = new Object, spChars = ["$", "}", "^", "|", "!", "<"], spToChars = ["ξ", "｝", "ˆ", "¦", "！", "&lt;"], prevInputControl = null, isLoadingAnswer = !1, lastCostTime = 0, hasClickQ = !1, needGoOut = !1, hasShowTip = !1, keywordarray = "", keywordObj = null, quarray = "", hlv = "1", jpmarr = new Array, jpmObj = new Object, isLoadQues = !1, isPageRun = !1;
$(function() {
    return $.support.leadingWhitespace || (window.location.href = window.location.href.replace("/m/", "/jq/")),
    window.addEventListener && !window.IsPar && window == window.top ? window.touPiaoItemIndex ? (window.addEventListener("pageshow", function() {
        isPageRun = !1,
        setTimeout(function() {
            isPageRun = !0
        }, 500),
        listenTpPopState()
    }),
    pushHistory(),
    void 0) : (window.addEventListener("load", function() {
        setTimeout(function() {
            window.addEventListener("popstate", function() {
                if (hasClickQ) {
                    if (needGoOut)
                        return window.history.back(),
                        void 0;
                    pushHistory();
                    var b = checkCanPop();
                    b ? show_zhezhao_tip(!0) : closeTipWindow()
                }
            }, !1)
        }, 500)
    }),
    void 0) : void 0
}),
String.prototype.format = function() {
    var a = arguments;
    return this.replace(/\{(\d+)\}/g, function(b, c) {
        return a[c]
    })
}
,
curfilediv = null,
isUploadingFile = !1,
cur_page = 0,
hasSkipPage = !1,
prevControl = null,
pageHolder = null,
curMatrixFill = null,
curMatrixError = null,
imgVerify = null,
questionsObject = new Object,
allQArray = null,
shopArray = new Array,
hasPeiEFull = !1,
$(function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O;
    for ($("#htitle").height() > 40 && $("#htitle").css("font-size", "20px"),
    a = document.title,
    $(window).scroll(function() {
        var c = $("#toptitle").offset().top + 48
          , d = $(this).scrollTop();
        d > c ? $("title").text(a) : emptyTitle()
    }),
    emptyTitle(),
    pageHolder = $("fieldset.fieldset"),
    b = iosIframeVideoHack() ? " touchend" : "",
    b && $("#divNext a").bind("touchend", function(a) {
        show_next_page(),
        a.preventDefault()
    }),
    c = 0; c < pageHolder.length; c++)
        for (d = "true" == $(pageHolder[c]).attr("skip"),
        d && (pageHolder[c].skipPage = !0,
        hasSkipPage = !0),
        e = $(".field", pageHolder[c]),
        pageHolder[c].questions = e,
        f = 0,
        g = 0; g < e.length; g++)
            e[g].indexInPage = f,
            e[g].pageIndex = c,
            hasSkipPage && (e[g].pageParent = pageHolder[c]),
            f++;
    if ($("#divMatrixRel").bind("click", function(a) {
        a.stopPropagation()
    }),
    $(document).bind("click", function() {
        setMatrixFill(),
        postHeight()
    }),
    $("#matrixinput").on("keyup blur focus", function(a) {
        var b, c, d, e;
        curMatrixFill && (b = $(this).val(),
        curMatrixFill.fillvalue = b,
        "blur" != a.type && "keyup" != a.type || !curMatrixFill.fillvalue || (c = $(curMatrixFill).parents(".field")[0],
        c.removeError && c.removeError()),
        window.needSaveJoin && (d = $(curMatrixFill).parents(".field"),
        e = d.attr("ischeck"),
        saveMatrixFill(curMatrixFill, e),
        saveAnswer(d)))
    }),
    keywordarray = (window.awardkeylist || "").split("┋"),
    window.qukeylist && (quarray = qukeylist.split("|")),
    checkTitleDescMatch(),
    h = !1,
    i = new Array,
    allQArray = $(".field"),
    j = !1,
    allQArray.each(function() {
        var c, d, e, f, g, k, l, m, n, o, p, q, r, s, t, u, v, w, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, a = $(this);
        if (this.onmouseover = function() {
            ktimes++
        }
        ,
        c = a.attr("type"),
        a.bind("click" + b, function() {
            var d = "1" == c || "2" == c || "9" == c || "10" == c && !a.attr("select");
            !d && this.removeError && this.removeError(),
            "10" == c && a.attr("select") && $(this).find(".mdivtable").each(function() {
                var a = $(this);
                a[0].removeError && a[0].removeError(!0)
            }),
            !hasClickQ  && pushHistory(),
            hasClickQ = !0;
            try {
                checkJpMatch(c, this)
            } catch (e) {}
            window.loadGeetest && window.loadGeetest(),
            window.scrollup && scrollup.Stop()
        }),
        d = getTopic(a),
        questionsObject[d] = a,
        e = a.attr("isshop"),
        e && shopArray.push(this),
        f = a.attr("relation"),
        g = a.attr("hasitemrelation"),
        k = "",
        f && "0" != f) {
            if (k = -1 != f.indexOf("|") ? "|" : "$",
            -1 != f.indexOf(k)) {
                l = f.split(k);
                for (m in l)
                    if (n = l[m],
                    n && -1 != n.indexOf(",")) {
                        for (o = n.split(","),
                        p = o[0],
                        q = ";",
                        -1 != o[1].indexOf(".") && (q = "."),
                        r = o[1].split(q),
                        s = 0; s < r.length; s++)
                            t = p + "," + r[s],
                            r[s] - 0 < 0 && !j && r.length > 1 && (j = !0),
                            relationGroupHT[t] || (relationGroupHT[t] = new Array),
                            relationGroupHT[t].push(this);
                        relationQs[p] || (relationQs[p] = new Array),
                        relationQs[p].push(this),
                        relationGroup.push(p)
                    }
            } else {
                for (o = f.split(","),
                p = o[0],
                q = ";",
                -1 != o[1].indexOf(".") && (q = "."),
                r = o[1].split(q),
                s = 0; s < r.length; s++)
                    t = p + "," + r[s],
                    relationGroupHT[t] || (relationGroupHT[t] = new Array),
                    relationGroupHT[t].push(this);
                relationQs[p] || (relationQs[p] = new Array),
                relationQs[p].push(this),
                relationGroup.push(p)
            }
            relationNotDisplayQ[d] = "1"
        } else
            "0" == f && (relationNotDisplayQ[d] = "1");
        if ("1" == g) {
            for (u = $("input[type='radio']", a),
            0 == u.length && (u = $("input[type='checkbox']", a)),
            0 == u.length && (u = $("input[type='hidden']", a)),
            v = "none",
            m = 0; m < u.length; m++)
                if (w = u.eq(m).attr("itemrelation"),
                w && "" != w) {
                    if (k = -1 != w.indexOf("|") ? "|" : "$",
                    y = u.eq(m).attr("id"),
                    "" != k && -1 != w.indexOf(k)) {
                        for (z = w.split(k),
                        A = 0; A < z.length; A++)
                            if (n = z[A],
                            n && -1 != n.indexOf(",")) {
                                for (o = n.split(","),
                                p = o[0],
                                q = ";",
                                -1 != o[1].indexOf(".") && (q = "."),
                                r = o[1].split(q),
                                s = 0; s < r.length; s++)
                                    t = p + "," + r[s],
                                    ItemrelationGroupHT[t] || (ItemrelationGroupHT[t] = new Array),
                                    ItemrelationGroupHT[t].push(y);
                                ItemrelationQs[p] || (ItemrelationQs[p] = new Array),
                                ItemrelationQs[p].push(y),
                                -1 == ItemrelationGroup.indexOf(p) && ItemrelationGroup.push(p)
                            }
                    } else {
                        for (o = w.split(","),
                        p = o[0],
                        q = ";",
                        -1 != o[1].indexOf(".") && (q = "."),
                        r = o[1].split(q),
                        s = 0; s < r.length; s++)
                            t = p + "," + r[s],
                            ItemrelationGroupHT[t] || (ItemrelationGroupHT[t] = new Array),
                            ItemrelationGroupHT[t].push(y);
                        ItemrelationQs[p] || (ItemrelationQs[p] = new Array),
                        ItemrelationQs[p].push(y),
                        -1 == ItemrelationGroup.indexOf(p) && ItemrelationGroup.push(p)
                    }
                    relationNotDisplayItem[y] = "1"
                } else
                    "none" != v || relationNotDisplayQ[d] || (v = "");
            a[0].style.display = v,
            window.joinIdnew && window.joinIdnew > 0 && "none" == v && !relationItemNotDisplayQ[d] && (relationItemNotDisplayQ[d] = "1")
        }
        return B = a.attr("titletopic"),
        B && (C = questionsObject[B],
        C && (C[0]._titleTopic || (C[0]._titleTopic = new Array),
        C[0]._titleTopic.push(d),
        D = a.find(".field-label")[0],
        D && (D.innerHTML = D.innerHTML.replace("[q" + B + "]", "<span id='spanTitleTopic" + d + "' style='text-decoration:underline;'></span>")))),
        "1" == a.attr("hrq") ? !0 : ("1" == c ? (u = $("input", a),
        u[1] && (u[0].confirmPwd = u[1],
        u[1].firstPwd = u[0],
        $(u[1]).on("keyup", function() {
            this.firstPwd.needCheckConfirm = !0,
            verifyTxt(a, $(this))
        }),
        u = $(u[0])),
        u.on("keyup blur click", function() {
            verifyTxt(a, u),
            prevInputControl = this,
            window.hasAnswer = !0,
            jump(a, this),
            referTitle(a, this.value),
            saveAnswer(a)
        }),
        window.needSaveJoin && u.change(function() {
            saveAnswer(a)
        }),
        u.blur(function() {
            checkOnly(a, u),
            lastFixedObj && $(lastFixedObj).addClass("fixed-style")
        }),
        u.focus(function() {
            lastFixedObj && $(lastFixedObj).removeClass("fixed-style")
        }),
        E = $("textarea", a),
        E[0] && (F = E.prev("a")[0],
        F.par = a[0],
        E[0].par = a[0],
        a[0].needsms = !0,
        G = E.parent().parent().find(".errorMessage")[0],
        a[0].mobileinput = u[0],
        a[0].verifycodeinput = E[0],
        F.onclick = function() {
            if (!this.disabled) {
                var a = this.par;
                return a.mobileinput.value = $.trim(a.mobileinput.value),
                /^\d{11}$/.test(a.mobileinput.value) ? (a.issmsvalid && a.mobile == a.mobileinput.value || this.isSending || E[1] && (!this.repeat || confirm("您输入的手机号码“" + a.mobileinput.value + "”确认准确无误吗？")) && F.sendActivitySms("0000"),
                void 0) : (alertNew("请输入正确的手机号码"),
                void 0)
            }
        }
        ,
        F.sendActivitySms = function(a) {
            var b, c, d;
            this.isSending = !0,
            this.disabled = !0,
            b = this.par,
            c = this,
            d = "/joinnew/AnswerSmsHandler.ashx?q=" + activityId + "&mob=" + escape(b.mobileinput.value) + "&valcode=" + a + "&t=" + (new Date).valueOf(),
            $.ajax({
                type: "GET",
                url: d,
                async: !1,
                success: function(a) {
                    var b = "";
                    "true" == a ? (b = "成功发送。如未收到，请检查手机号是否正确！",
                    c.repeat = 1,
                    c.resent(),
                    E[0].readOnly = !1) : "fast" == a ? (b = "发送频率过快",
                    c.resent()) : b = "no" == a ? "发布者短信数量不够" : "fail" == a ? "短信发送失败，每天最多发送5次！" : "error" == a ? "手机号码不正确" : "nopub" == a ? "问卷未运行，不能填写" : a,
                    b.indexOf("图形验证码") > -1 && (c.disabled = !1),
                    G.innerHTML = b,
                    c.isSending = !1
                }
            })
        }
        ,
        F.resent = function() {
            var a = this
              , b = 60
              , c = setInterval(function() {
                b--,
                57 > b && (a.isSending = !1),
                b > 0 ? a.innerHTML = "重发(" + b + "秒)" : (a.innerHTML = "发送验证码",
                a.disabled = !1,
                clearInterval(c))
            }, 1e3)
        }
        ,
        E[0].onchange = E[0].onblur = function() {
            var b, c, a = $.trim(this.value);
            return 6 != a.length ? (G.innerHTML = "提示：请输入6位数字！",
            void 0) : /^\d+$/.exec(a) ? (b = this.par,
            b.issmsvalid && b.mobile == b.mobileinput.value || b.prevcode != a && (b.prevcode = a,
            c = "/joinnew/AnswerSmsValidateHandler.ashx?q=" + activityId + "&mob=" + escape(b.mobileinput.value) + "&code=" + escape(a) + "&t=" + (new Date).valueOf(),
            $.ajax({
                type: "GET",
                url: c,
                async: !1,
                success: function(a) {
                    b.issmsvalid = !1;
                    var c = "";
                    "true" == a ? (b.issmsvalid = !0,
                    b.mobile = b.mobileinput.value,
                    c = "成功通过验证",
                    writeError(b, "", 1e3)) : "send" == a ? c = "请先发送验证码，每天最多发送5次！" : "no" == a ? c = "验证码输入错误超过5次，无法再提交" : "error" == a && (c = "验证码输入错误，连续输错5次将无法提交"),
                    G.innerHTML = c
                }
            })),
            void 0) : (G.innerHTML = "提示：请输入6位数字！",
            void 0)
        }
        )) : "2" == c ? (u = $("textarea", a),
        u.on("keyup blur click", function() {
            verifyTxt(a, u),
            prevInputControl = this,
            window.hasAnswer = !0,
            jump(a, this),
            referTitle(a, this.value),
            saveAnswer(a)
        }),
        u.blur(function() {
            checkOnly(a, u),
            lastFixedObj && $(lastFixedObj).addClass("fixed-style")
        }),
        u.focus(function() {
            lastFixedObj && $(lastFixedObj).removeClass("fixed-style")
        })) : "9" == c ? (H = $("input", a),
        H.on("keyup blur change", function() {
            $(this),
            prevInputControl = this,
            msg = verifyTxt(a, $(this), !0),
            jump(a, this),
            referTitle(a, this.value),
            saveAnswer(a),
            fixBottom()
        }),
        H.blur(function() {
            checkOnly(a, $(this)),
            lastFixedObj && $(lastFixedObj).addClass("fixed-style")
        }),
        H.focus(function() {
            lastFixedObj && $(lastFixedObj).removeClass("fixed-style")
        }),
        I = $(".textEdit .textCont", a),
        I.unbind("click"),
        I.click(function(a) {
            var b, c;
            return a.stopPropagation(),
            b = $(this).parent(".textEdit").attr("verify"),
            "城市单选" == b || "城市多选" == b || "省市区" == b || "高校" == b || "地图" == b || "日期" == b || "生日" == b || "入学时间" == b ? (c = $(this).parent().prev(),
            c.hasClass("ui-input-text") || (c = $(this).parent().prev().prev()),
            c.trigger("click"),
            !1) : ($(this).css({
                width: 24
            }).parent().removeClass("initStyle"),
            !1)
        }),
        I.blur(function() {
            "" == $(this).text().trim() && $(this).css({
                display: "inline-block",
                width: 72
            }).parent(".textEdit").addClass("initStyle");
            var a = $(this).parent(".textEdit").prev();
            a.hasClass("ui-input-text") || (a = $(this).parent(".textEdit").prev().prev()),
            a.val($(this).text().trim()).trigger("keyup")
        }),
        I.on("keydown input", function(a) {
            if (a = a || window.event,
            13 == a.keyCode)
                return !1;
            if (!$(this).attr("contenteditable"))
                return !1;
            "" != $(this).text().trim() && $(this).css({
                display: "inline"
            }).parent().removeClass("initStyle");
            var b = $(this).parent(".textEdit").prev();
            b.hasClass("ui-input-text") || (b = $(this).parent(".textEdit").prev().prev()),
            b.val($(this).text().trim()).trigger("keyup")
        })) : "8" == c ? $("input", a).change(function() {
            jump(a, this),
            saveAnswer(a)
        }) : "12" == c ? $("input", a).change(function() {
            var h, i, b = null, c = $(a).attr("total"), d = $("input:visible", a), e = count = d.length, f = c, g = this;
            d.each(function() {
                $(this).val() ? (count--,
                f -= $(this).val()) : g != this && (b = this)
            }),
            b || d.each(function(a) {
                return a == e - 1 ? (b = this,
                !1) : void 0
            }),
            1 == count && b && f > 0 && ($(b).val(f).change(),
            f = 0),
            msg = "",
            0 != f && 0 == count && (h = parseInt($(b).val()) + f,
            h >= 0 ? b != this ? ($(b).val(h).change(),
            f = 0) : 2 == d.length && (i = c - $(b).val(),
            $(d[0]).val(i).change(),
            f = 0) : msg = "，<span style='color:red;'>" + sum_warn + "</span>"),
            0 == f && d.each(function() {
                $(this).val() || $(this).val("0").change()
            }),
            $(".relsum", a).html(sum_total + "<img src=\"/images/wjxmobile/prompt@2x.png\" alt=''><b>" + c + "</b>" + sum_left + "<span style='color:red;font-bold:true;'>" + (c - f) + "</span>" + msg),
            jump(a, this),
            saveAnswer(a)
        }) : "13" == c ? h = !0 : "3" == c ? (J = $("div.ui-radio", a),
        J.each(function() {
            var a, b;
            window.hasTouPiao && (a = this.getAttribute("htp"),
            a && (b = document.getElementById("spanPiao" + d + "_" + a),
            b && !b.needHide && (b.style.display = "")))
        }),
        checkPeiE(a, "input[type='radio']"),
        J.bind("click", function(b) {
            var d, e, c = $(this);
            a[0] && a[0].hasConfirm || (d = c.find("input[type='radio']")[0],
            d.disabled || (window.hasAnswer = !0,
            $(a).find("div.ui-radio").each(function() {
                var a = $(this);
                a.find("input[type='radio']")[0].checked = !1,
                a.find("a.jqradio").removeClass("jqchecked")
            }),
            d.checked = !0,
            e = c.find("input.OtherRadioText")[0],
            e && (d.itemText = e),
            processRadioInput(a[0], d),
            c.find("a.jqradio").addClass("jqchecked"),
            displayItemRelationRaidoCheck(a, "input[type=radio]", 1),
            displayRelationByType(a, "input[type=radio]", 1),
            referTitle(a),
            jump(a, d),
            displaypeie(a, "input[type=radio]", 1),
            "1" != a.attr("req") && addClearHref(a),
            showAnswer(a, J, !0),
            saveAnswer(a),
            1 != c.attr("desc") && b.preventDefault()))
        }),
        K = a.attr("qingjing"),
        K && i.push(a),
        L = $("input.OtherRadioText", a),
        L.bind("click", function(a) {
            var b, c, d, e;
            $(this.parentNode.parentNode.parentNode).find("div.ui-radio").each(function() {
                $(this).find("input[type='radio']")[0].checked = !1,
                $(this).find("a.jqradio").removeClass("jqchecked")
            }),
            prevInputControl = this,
            b = $(this).attr("rel"),
            c = $("#" + b)[0],
            c.checked = !0,
            d = $("#" + b).parent().parent(),
            d.find("a.jqradio").addClass("jqchecked"),
            c.itemText = this,
            e = $(this).parents("div.field"),
            processRadioInput(e[0], c),
            displayItemRelationRaidoCheck(e, "input[type=radio]", 1),
            displayRelationByType(e, "input[type=radio]", 1),
            jump(e, c),
            displaypeie(e, "input[type=radio]", 1),
            saveAnswer(e),
            a.stopPropagation(),
            a.preventDefault()
        }),
        L.bind("blur keyup", function(b) {
            otherTextEvent(this, a),
            window.needSaveJoin && "blur" == b.type && saveAnswer(a)
        })) : "7" == c ? (M = $("select", a),
        M.bind("change", function(b) {
            $("span", this.parentNode).html(this.options[this.selectedIndex].text),
            displayRelationByType(a, "option", 5),
            jump(a, this.options[this.selectedIndex]);
            var c = this.options[this.selectedIndex].text;
            -2 == this.value && (c = ""),
            referTitle(a, c),
            saveAnswer(a),
            b.preventDefault()
        }),
        M[0].selectedIndex > 0 && $("span", M[0].parentNode).html(M[0].options[M[0].selectedIndex].text)) : "10" == c ? (N = "1" == a.attr("select"),
        O = a.attr("zizeng"),
        P = a.attr("maxvalue"),
        Q = a.attr("minvalue"),
        R = "<div class='errorMessage'></div>",
        S = "",
        T = a.find(".mdivtable"),
        O ? (U = a.find(".select_title"),
        V = a.find(".mdivtable:last"),
        T.each(function(a) {
            a >= Q && $(this).hide(),
            S = "<div style='display: none;' class='delete-icon'></div>" + R,
            $(this).addClass("zizeng").append(S)
        }),
        U.each(function(a) {
            a >= Q && $(this).hide()
        }),
        W = "增加",
        1 == langVer && (W = "Add"),
        V.after("<div class='increase-btn'><i class='increase-icon'></i>" + W + "</div>"),
        T.find(".delete-icon").on("click", function() {
            var a = $(this).parent(".mdivtable")
              , b = a.attr("rowid");
            b == P && $(this).parents(".field").find(".increase-btn").removeClass("disable-style"),
            a.hide().prev().hide(),
            b - Q > 1 && a.prev().prev().find(".delete-icon").show()
        }),
        $(".increase-btn", a).on("click", function() {
            var b = a.find(".mdivtable:visible")
              , c = b.next().show().next().show();
            c.last().find(".delete-icon").show().parent().prev().prev().find(".delete-icon").hide(),
            c.last().attr("rowid") == P && $(this).addClass("disable-style")
        })) : T.each(function() {
            S = R,
            $(this).append(S)
        }),
        N && $("select", a).bind("change", function() {
            $("span", this.parentNode).html(this.options[this.selectedIndex].text),
            jump(a, this),
            saveAnswer(a)
        }),
        $("input", a).bind("focus", function() {
            lastFixedObj && $(lastFixedObj).removeClass("fixed-style")
        }).bind("keyup change blur", function() {
            var e, f, g, h, c = $(this), d = c.val();
            prevInputControl = this,
            e = c.attr("isdigit"),
            f = "1" == e || "2" == e,
            f ? "1" == e && parseInt(d) != d ? c.val("") : "2" == e && parseFloat(d) != d ? c.val("") : (g = c.attr("min"),
            g && 0 > d - g && c.val(""),
            h = c.attr("max"),
            h && d - h > 0 && c.val("")) : msg = verifyTxt(a, $(this), !0),
            jump(a, this),
            saveAnswer(a)
        })) : "5" == c ? initRate(a) : "6" == c ? (initRate(a, !0),
        setTableWidth(a)) : "4" == c ? (X = $("div.ui-checkbox", a),
        X.each(function() {
            var a, b;
            window.hasTouPiao && (a = this.getAttribute("htp"),
            a && (b = document.getElementById("spanPiao" + d + "_" + a),
            b && (b.style.display = "")))
        }),
        checkPeiE(a, "input[type='checkbox']"),
        X.bind("click", function(b) {
            var d, e, c = $(this);
            a[0] && a[0].hasConfirm || (d = c.find("input[type='checkbox']")[0],
            d.disabled || (d.checked = !d.checked,
            window.hasAnswer = !0,
            d.checked ? c.find("a.jqcheck").addClass("jqchecked") : c.find("a.jqcheck").removeClass("jqchecked"),
            checkHuChi(a, this),
            displayItemRelationRaidoCheck(a, "input[type=checkbox]", 2),
            displayRelationByType(a, "input[type='checkbox']", 2),
            verifyCheckMinMax(a, !1, !1, this),
            jump(a, d),
            displaypeie(a, "input[type=checkbox]", 2),
            window.createItem && createItem(a),
            e = c.find("input.OtherText")[0],
            e && (d.checked ? e.value = e.pvalue || "" : (e.pvalue = e.value,
            e.value = "")),
            referTitle(a),
            showAnswer(a, X),
            saveAnswer(a),
            b.preventDefault()))
        }),
        Y = $("input.OtherText", a),
        Y.bind("click", function(a) {
            var d, e, f, g, b = $(this).attr("rel"), c = $("#" + b)[0];
            return prevInputControl = this,
            d = $(this).parents("div.field"),
            e = d.attr("maxvalue"),
            e && (f = $("input:checked", d).length,
            f > e || f == e && !c.checked) ? ($(this).blur(),
            a.stopPropagation(),
            a.preventDefault(),
            void 0) : (c.checked = !0,
            c.itemText = this,
            g = $("#" + b).parents(".ui-checkbox"),
            g.find("a.jqcheck").addClass("jqchecked"),
            this.pvalue && !this.value && (this.value = this.pvalue),
            checkHuChi(d, g[0]),
            displayItemRelationRaidoCheck(d, "input[type=checkbox]", 2),
            displayRelationByType(d, "input[type=checkbox]", 2),
            jump(d, c),
            displaypeie(d, "input[type=checkbox]", 2),
            verifyCheckMinMax(d, !1),
            window.createItem && createItem(d),
            saveAnswer(d),
            a.stopPropagation(),
            a.preventDefault(),
            void 0)
        }),
        Y.bind("blur keyup", function(b) {
            otherTextEvent(this, a),
            window.needSaveJoin && "blur" == b.type && saveAnswer(a)
        })) : "21" == c ? $(".shop-item", a).each(function() {
            var b = $(".itemnum", this)
              , c = $(".item_left", this);
            $(".add", this).bind("click", function(d) {
                var g, h, e = !1, f = 0;
                c[0] && (e = !0,
                f = parseInt(c.attr("num"))),
                g = parseInt(b.val()),
                e && g >= f ? (h = "库存只剩" + f + "件，不能再增加！",
                0 >= f && (h = "已售完，无法添加"),
                alertNew(h)) : (b.val(g + 1),
                updateCart(a)),
                d.preventDefault()
            }),
            b.bind("focus", function() {
                "0" == b.val() && b.val("")
            }),
            b.bind("blur change", function(d) {
                var e, f, g, h, i, j;
                return b.val() || b.val("0"),
                e = /^[0-9]+$/,
                e.test(b.val()) || b.val("0"),
                f = parseInt(b.val()),
                !f || 0 > f ? (b.val("0"),
                updateCart(a),
                void 0) : (g = !1,
                h = 0,
                c[0] && (g = !0,
                h = parseInt(c.attr("num"))),
                g && f > h && (i = "库存只剩" + h + "件，不能超过库存！",
                0 >= h && (i = "已售完，无法添加"),
                alertNew(i),
                j = h,
                0 > j && (j = 0),
                b.val(j)),
                updateCart(a),
                d.preventDefault(),
                void 0)
            }),
            $(".remove", this).bind("click", function(c) {
                var d = parseInt(b.val());
                d > 0 && (b.val(d - 1),
                updateCart(a)),
                c.preventDefault()
            })
        }) : "11" == c && ($("li.ui-li-static", a).bind("click", function(b) {
            var d, c = $(this).find("input.OtherText")[0];
            $(this).attr("check") ? (d = $(this).find("span").html(),
            $(this.parentNode).find("li[check='1']").each(function() {
                var a = $(this).find("span.sortnum").html();
                a - d > 0 && $(this).find("span.sortnum").html(a - 1)
            }),
            $(this).find("span.sortnum").html("").removeClass("sortnum-sel"),
            $(this).attr("check", ""),
            c && (c.pvalue = c.value,
            c.value = "")) : (d = $(this.parentNode).find("li[check='1']").length + 1,
            $(this).find("span.sortnum").html(d).addClass("sortnum-sel"),
            $(this).attr("check", "1"),
            c && c.pvalue && (c.value = c.pvalue || "")),
            displayRelationByType(a, "li.ui-li-static", 3),
            displayItemRelationRaidoCheck(a, "li.ui-li-static", 3),
            verifyCheckMinMax(a, !1, !0, this),
            jump(a, this),
            displaypeie(a, "li.ui-li-static", 3),
            window.createItem && createItem(a, !0),
            saveAnswer(a),
            b.preventDefault()
        }),
        Z = $("input.OtherText", a),
        Z.bind("click", function(b) {
            var c, d, e, f;
            b.stopPropagation(),
            b.preventDefault(),
            c = $(this).attr("rel"),
            d = $("#" + c).eq(0).parent("li.ui-li-static"),
            e = d.eq(0).parent("ul.ui-controlgroup"),
            1 != d.attr("check") && (f = e.find("li[check='1']").length + 1,
            d.find("span.sortnum").html(f).addClass("sortnum-sel"),
            d.attr("check", "1")),
            displayItemRelationRaidoCheck(a, "li.ui-li-static", 3),
            displayRelationByType(a, "li.ui-li-static", 3),
            verifyCheckMinMax(a, !1, !0, this),
            jump(a, this),
            displaypeie(a, "li.ui-li-static", 3),
            window.createItem && createItem(a, !0),
            saveAnswer(a),
            b.preventDefault()
        }),
        Z.bind("blur keyup", function(b) {
            otherTextEvent(this, a),
            window.needSaveJoin && "blur" == b.type && saveAnswer(a)
        })),
        void 0)
    }),
    j && addtoactivitystat(),
    window.totalCut && window.totalCut > 0)
        for (g = 0; g < window.totalCut; g++) {
            if (k = "divCut" + (g + 1),
            l = $("#" + k),
            m = l.attr("relation"),
            n = "",
            m && "0" != m)
                if (n = -1 != m.indexOf("|") ? "|" : "$",
                -1 != m.indexOf(n)) {
                    o = m.split(n);
                    for (c in o)
                        if (p = o[c],
                        p && -1 != p.indexOf(",")) {
                            for (q = p.split(","),
                            r = q[0],
                            s = ";",
                            -1 != q[1].indexOf(".") && (s = "."),
                            t = q[1].split(s),
                            u = 0; u < t.length; u++)
                                v = r + "," + t[u],
                                relationGroupHT[v] || (relationGroupHT[v] = new Array),
                                relationGroupHT[v].push(l[0]);
                            relationQs[r] || (relationQs[r] = new Array),
                            relationQs[r].push(l[0]),
                            -1 == relationGroup.indexOf(r) && relationGroup.push(r)
                        }
                } else {
                    for (q = m.split(","),
                    r = q[0],
                    s = ";",
                    -1 != q[1].indexOf(".") && (s = "."),
                    t = q[1].split(s),
                    relationNotDisplayQ[l.attr("topic")] = "1",
                    u = 0; u < t.length; u++)
                        v = r + "," + t[u],
                        relationGroupHT[v] || (relationGroupHT[v] = new Array),
                        relationGroupHT[v].push(l[0]);
                    -1 == relationGroup.indexOf(r) && relationGroup.push(r),
                    relationQs[r] || (relationQs[r] = new Array),
                    relationQs[r].push(l[0])
                }
            w = l.attr("titletopic"),
            w && (x = questionsObject[w],
            x && (x[0]._titleTopic || (x[0]._titleTopic = new Array),
            y = l.attr("topic"),
            x[0]._titleTopic.push(y),
            z = l[0].childNodes[0],
            z && (z.innerHTML = z.innerHTML.replace("[q" + w + "]", "<span id='spanTitleTopic" + y + "' style='text-decoration:underline;'></span>"))))
        }
    for (isLoadQues = !0,
    A = 0; A < pageHolder.length; A++)
        for (e = pageHolder[A].questions,
        g = 0; g < e.length; g++)
            y = getTopic(e[g]),
            relationQs[y] && relationJoin(e[g]),
            ItemrelationQs[y] && relationItemJoin(e[g]),
            B = $(e[g]).attr("refered"),
            B && window.createItem && createItem(e[g]);
    for (isLoadQues = !1,
    C = 0; C < i.length; C++)
        D = i[C],
        "" == D[0].style.display && displayRelationByType(D, "input[type=radio]", 1);
    for (A = 0; A < pageHolder.length; A++)
        for (e = pageHolder[A].questions,
        g = 0; g < e.length; g++)
            checkPeiE($(e[g]));
    if (null != $("#ctlNext") && $("#ctlNext").on("click", function() {
        var a, b;
        if (debugLog("准备提交答卷"),
        !this.disabled) {
            if (window.IsPar)
                return a = window.parent.document.getElementById("skin-peeler-panel"),
                a && (a.style.display = "none"),
                alertNew("此问卷为预览状态，不能提交", function() {
                    a && (a.style.display = "block")
                }),
                void 0;
            if (needTip())
                return alertNew($(divTip).text()),
                void 0;
            if ($("#action").val("1"),
            debugLog("验证提交数据"),
            b = validate($(this).parent())) {
                if ((!window.isSingleVote || window.isMultipleChoice) && $("html, body").animate({
                    scrollTop: $(document).height()
                }, 600),
                debugLog("判断是否需要验证码"),
                window.useAliVerify) {
                    if (!isCaptchaValid)
                        return !window.isSingleVote || window.isMultipleChoice && !window.touPiaoItemIndex ? $("#captcha").fadeIn("fast") : window.isMultipleChoice && window.ftppar ? confirmnew("您可对多个选项进行投票，但点击此页投票只能投票此选项（不能再投票其他选项）", function() {
                            voteData()
                        }, function() {
                            var a = "/m/" + activityId + ".aspx?ptfpar=1";
                            window.tpScrollTop && (a += "&tptop=" + (window.tpScrollTop || 0)),
                            window.location = a
                        }) : voteData(),
                        void 0
                } else if (tCode && "none" != tCode.style.display && ("" == submit_text.value || submit_text.value == validate_info_submit_title3))
                    return alertNew(validate_info_submit1, function() {
                        try {
                            submit_text.focus(),
                            submit_text.click()
                        } catch (a) {}
                    }),
                    void 0;
                debugLog("进入提交函数"),
                groupAnswer(1)
            }
        }
    }),
    setVerifyCode(),
    initSlider(),
    totalPage > 1 ? ($("#divSubmit").hide(),
    $("#divNext")[0].style.display = "",
    showProgress()) : $("#divSubmit").show(),
    2 == window.isChuangGuan && ($("#divSubmit").hide(),
    window.divFengMian || startChuangGuan(!1)),
    !window.isSingleVote || window.isMultipleChoice || window.touPiaoItemIndex ? window.touPiaoItemIndex && ($("#divAwardNotify").hide(),
    $("#ValError").hide()) : $("#ctlNext").hide(),
    fixBottom(),
    $(window).load(function() {
        fixBottom()
    }),
    window.cepingCandidate) {
        for (E = cepingCandidate.split("&nbsp;&nbsp;&nbsp;"),
        F = new Object,
        G = 0; G < E.length; G++)
            H = E[G].replace(/(\s*)/g, "").replace(/&/g, "").replace(/\\/g, "").replace("&nbsp;", "").toLowerCase(),
            F[H] = "1";
        I = $("#div1"),
        window.allowPart ? ($("input[type=checkbox]", I).each(function() {
            var c, a = $(this).parent().parent(), b = a.find(".label")[0];
            return b ? (c = b.innerHTML,
            c = c.replace(/(\s*)/g, "").replace(/&amp;/g, "").replace(/\\/g, "").replace("&nbsp;", "").toLowerCase(),
            F[c] || a.css("display", "none"),
            void 0) : !0
        }),
        I[0] && (I[0].style.display = "")) : ($("input[type=checkbox]", I).each(function() {
            var c, a = $(this).parent().parent(), b = a.find(".label")[0];
            return b ? (c = b.innerHTML,
            c = c.replace(/(\s*)/g, "").replace(/&amp;/g, "").replace(/\\/g, "").replace("&nbsp;", "").toLowerCase(),
            F[c] && (this.checked = !0),
            void 0) : !0
        }),
        I[0] && (createItem(I, !1),
        I[0].style.display = "none",
        I[0].isCepingQ = "1"))
    }
    for (processAward(),
    checkAnswer(),
    window.hasPageTime && (window.divFengMian || processMinMax()),
    J = document.getElementsByTagName("img"),
    g = 0; g < J.length; g++)
        J[g].onerror = function() {
            this.onerror = null,
            replaceImg(this)
        }
        ,
        replaceImg(J[g]);
    processSearch(),
    pageHolder[0] && divContent && "none" != divContent.style.display ? adjustVideoHeight(pageHolder[0]) : window.touPiaoItemIndex && divContent && adjustVideoHeight(divContent),
    $("#ctlNext").on("mouseover", function() {
        ktimes++
    }),
    K = document.getElementById("divContent"),
    !K && needTip() ? $("img", divTip)[0] || ($("#divWorkError").show(),
    $("#divWorkError").css({
        "z-index": 2e3
    }),
    $("body").css({
        "min-height": "667px"
    }),
    L = "提示信息",
    1 == langVer && (L = "Message"),
    M = '<div style="padding-top: 66px; text-align: center;"><div style="margin-bottom: 20px;"><i style="width: 85px; height: 85px;display: inline-block;position: static;background-image: url(/images/weixin/new-mobile/failure@2x.png?v=1); background-size: 85px 85px;"></i></div><div style="margin-bottom: 25px; padding: 0 20px;"><h2 style="margin-bottom: 5px; font-weight: 400; font-size: 20px;">' + L + "</h2>" + '<p style="font-size: 14px; color: #999999;">' + window.divTip.innerHTML + "</p>" + "</div>" + "</div>",
    N = checkCanPop(),
    N && window.divTip && divTip.innerHTML.indexOf("被停止") > -1 && (O = "",
    "miniprogram" === window.__wxjs_environment && (O = "&minip=1"),
    M += "<div style='margin:40px 20px 0 20px;border-top: dashed 1px #dadcdd;'><div style='font-size: 14px;font-weight: 400;color: #F64141;line-height: 40px;margin: 14px auto;text-align: center;'>恭喜您获得1次抽奖机会！</div><div style='text-align: center;margin-top:20px;'> <a href='/newsojiang/mobile/getaward.aspx?stype=1&activity=" + activityId + O + "' style='width:140px; background:linear-gradient(180deg,rgba(255,149,104,1) 0%,rgba(255,100,34,1) 100%); border-radius:5px;font-size:16px;color:#ffffff;padding:10px 36px 10px 36px'>立即抽奖</a></div></div>",
    window._czc && _czc.push(["_trackEvent", "问卷暂停显示抽奖", "加载"])),
    $("#divWorkError").html(M)) : K && needTip() && $("#tipHeight").show().height($(divTip).innerHeight() + "px"),
    addtoVisitLog()
}),
hasConfirmBtn = !1,
itempopUpindex = 0,
popUpindex = 0,
firstError = null,
firstMatrixError = null,
needSubmitNotValid = !1,
lastFixedObj = null,
isValidating = !1,
txtCurCity = null,
prevScrollTop = 0,
obj_offectTop = 0,
startAge = 0,
endAge = 0,
rName = "",
gender = 0,
marriage = 0,
education = "",
modata = "",
hasMatchName = !1,
quResult = new Array,
clientAnswerSend = "",
havereturn = !1,
timeoutTimer = null,
nvvv = 0,
ktimes = 0,
isAutoSubmit = !1,
amt = 0,
$(function() {
    function a() {
        var c, a = document.getElementsByTagName("input"), b = document.getElementsByTagName("textarea");
        for (c = 0; c < a.length; c++)
            a[c].onpaste = function() {
                return !1
            }
            ;
        for (c = 0; c < b.length; c++)
            b[c].onpaste = function() {
                return !1
            }
    }
    function b() {
        window.localStorage && localStorage.setItem("wjxlastanswer" + activityId, (new Date).getTime())
    }
    function c() {
        hasSurveyTime = !0,
        hasMaxtime = !0;
        var a = document.getElementById("yz_popdivData");
        a && "none" != a.style.display && $("#yz_popTanChuClose").click(),
        window.amt = 2,
        autoSubmit("由于您超过" + maxOpTime + "秒没有任何操作，系统为防止作弊不允许再作答！")
    }
    var d, e, f, g, i, j;
    window.isKaoShi && (a(),
    window.maxOpTime && (d = !1,
    window.localStorage && (e = localStorage["wjxlastanswer" + activityId],
    e && (f = (new Date).getTime(),
    g = (f - e) / 6e4,
    10 > g && (d = !0,
    c(),
    $("#divSubmit").hide()))),
    d || (document.onclick = document.onkeyup = document.onscroll = document.onmousemove = function() {
        i = new Date
    }
    ,
    i = new Date,
    j = setInterval(function() {
        var a = new Date
          , d = parseInt((a - i) / 1e3)
          , e = maxOpTime + 5 - d
          , f = document.getElementById("divTimeUp");
        0 >= e ? (clearInterval(j),
        b(),
        c()) : 5 >= e && f && ("none" == f.style.display && openDialogByIframe(300, 40, "divTimeUp"),
        document.getElementById("divTimeUpTip").innerHTML = "<span style='color:red;'>" + e + "</span>秒后无操作，将不允许再作答！")
    }, 1e3))))
}),
window.confirmnew = function(a, b, c) {
    var e, d = document.getElementById("confirm_box");
    return d ? document.getElementById("pop_box_msg2").innerHTML = a : (d = document.createElement("div"),
    d.id = "confirm_box",
    e = "<div style='position:fixed;*position: absolute;width: 100%;height: 100%;opacity: 0.5;filter: alpha(opacity=50);background-color: black;z-index: 99998;top: 0px;left: 0px;'></div><div style='min-height: 180px;width:90%;transform: translateX(-50%);margin-top: -90px;position: fixed;z-index: 99999;top: 50%;left: 50%;background-color: white;border-radius: 8px;'><div style='font-size:18px;color:#000;font-weight:600;padding:26px 20px 10px;width:100%;text-align:center;border-radius:8px 8px 0 0;vertical-align: middle;z-index: 1;'><div>系统提示</div></div><div style='width: 100%;border-radius: 0 0 8px 8px; z-index: 1;'><div style='min-height:66px;padding:6px 20px 10px;font-size: 15px;line-height: 22px;text-align: center;' id='pop_box_msg2'>" + a + "</div>" + "<div style='width:100%;height:50px;text-align:center;border-top:1px solid #D2D3D5;'>" + "<button style='background:none;display:inline-block;width: 50%;height:50px;font-size:18px;line-height:50px;color:#313233;text-align: center;text-decoration: none;border: none;' onclick='closeNo();'>取消</button><button style='display:inline-block;width: 50%;font-size:18px;height:50px;box-sizing:border-box;line-height:50px;color:#3296FA;text-align: center;text-decoration: none;border: none;border-left:1px solid #D2D3D5;background: none;' onclick='closeConfirm();'>确定</button></div>" + "</div></div>",
    d.innerHTML = e,
    document.body.appendChild(d)),
    d.style.display = "",
    d.callback = b || "",
    d.callback2 = c || "",
    d
}
,
$(function() {
    function a() {
        var a = navigator.userAgent
          , b = !!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        b && $("input,select,textarea").blur(function() {
            setTimeout(function() {
                var a, b;
                window.IsPar || top.location != self.location ? (a = window.parent.document.documentElement.scrollTop || window.parent.document.body.scrollTop || 0,
                window.parent.scrollTo(0, Math.max(a - 1, 0))) : (b = document.documentElement.scrollTop || document.body.scrollTop || 0,
                window.scrollTo(0, Math.max(b - 1, 0)))
            }, 100)
        })
    }
    a()
});
