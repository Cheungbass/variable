(function ($) {
    'use strict';
    function __dealCssEvent(eventNameArr, callback) {
        var events = eventNameArr,
            i, dom = this, len = events.length; // jshint ignore:line
        function fireCallBack(e) {
            if (e.target !== this) return;
            callback.call(this, e);
            for (i = 0; i < len; i++) {
                dom.off(events[i], fireCallBack);
            }
        }
        if (callback) {
            for (i = 0; i < len; i++) {
                dom.on(events[i], fireCallBack);
            }
        }
    }
    $.fn.animationEnd = function (callback) {
        __dealCssEvent.call(this, ['webkitAnimationEnd', 'animationend'], callback);
        return this;
    };
    /* jshint ignore:start */
    $.requestAnimationFrame = function (callback) {
        if (window.requestAnimationFrame) return window.requestAnimationFrame(callback);
        else if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame(callback);
        else if (window.mozRequestAnimationFrame) return window.mozRequestAnimationFrame(callback);
        else {
            return window.setTimeout(callback, 1000 / 60);
        }
    };
    $.cancelAnimationFrame = function (id) {
        if (window.cancelAnimationFrame) return window.cancelAnimationFrame(id);
        else if (window.webkitCancelAnimationFrame) return window.webkitCancelAnimationFrame(id);
        else if (window.mozCancelAnimationFrame) return window.mozCancelAnimationFrame(id);
        else {
            return window.clearTimeout(id);
        }
    };
    /* jshint ignore:end */

    //$.open 自定义动画打开
    $.fn.open = function (callback) {
        var _this = this;
        if (!this.hasClass("in"))
            $.requestAnimationFrame(function () {
                _this.removeClass('out').show().addClass("in").animationEnd(function () {
                    callback && callback(_this);
                });
            });
        return this;
    };
    //$.close 自定义动画关闭
    $.fn.close = function (destroy, callback) {
        if (typeof destroy === 'function') callback = destroy, destroy = false;
        var _this = this;
        if (!this.hasClass("out"))
            _this.removeClass('in').addClass("out").animationEnd(function () {
                _this.css('visibility', 'hidden').hide();
                callback && callback(_this);
                destroy && _this.off().remove();
            });
        return this;
    };



    // 导航动画
    var nav = $('#navbarNav');
    nav.on('show.bs.collapse', function () {
        nav.parent().addClass('show');
    })
        .on('hidden.bs.collapse', function () {
            nav.parent().removeClass('show');
        });

    // 导航隐藏及展示
    var navbar = $('.navbar');
    var isUping = true;
    function goDown() {
        if (isUping) return;
        isUping = true;
        navbar.open();
    }
    function goUp() {
        if (!isUping) return;
        isUping = false;
        navbar.close();
    }

    // 页面滚动
    var doc = $(document);
    var lastPos = doc.scrollTop();
    $(document).on('scroll', function () {
        var nowPos = doc.scrollTop();
        // console.log('nowPos', nowPos);
        // var dis = Math.abs(nowPos - lastPos);
        // if (dis > 0) {
        // if (nowPos > lastPos ) goUp();
        // else goDown();
        if (nowPos <= 100) goDown();
        else goUp();
        // }
        lastPos = nowPos;
    });

    setTimeout(function () {
        $(".need_trans").addClass('transition');
    }, 0);
})($);

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
}(function ($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if (!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function (options) {
        return this.each(function () {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = (function (originalEmit) {
        return function (type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    })(Hammer.Manager.prototype.emit);
}));
