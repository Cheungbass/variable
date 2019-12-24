/**
 */
(function($) {
    'use strict';
    
    var PopUp = function(ele, option) {
        this.opt = $.extend({}, option);
        this.$ele = $(ele);
        this.init().addChild().bindEvents();
        return this;
    };

    //实例化
    PopUp.prototype = {
        init: function() {
            var data = this.$ele.data();
            $.extend(this.opt, data);
            return this;
        },
        addChild: function() {
            if (this.$poper) return this;
            var dom = '<div class="poper fadeAnime">' + 
                '<div class="poper-mask"></div>' +
                '<div data-icon="&#xe10f;" class="poper-close"></div>' + 
                '<img class="image" src="' + this.opt.href + '">' +
                '</div>';
            this.$poper = $(dom);
            this.$ele.append(this.$poper)
            this.$poperMask = this.$ele.find('.poper-mask');
            this.$poperClose = this.$ele.find('.poper-close');
            console.log(this.$poperClose);
            return this;
        },
        bindEvents: function() {
            var _this = this;
            this.$ele.on("click", function(e) {
                e.stopPropagation();
                _this.show();
            });
           
            this.$poperMask.on("click", function(e) {
                e.stopPropagation();
                _this.hide();
            });

            this.$poperClose.on("click", function(e) {
                e.stopPropagation();
                _this.hide();
            });
        },
        show() {
            this.$poper.open();
        },
        hide() {
            this.$poper.close();
        }
    };

    //数量实例化 $().popup; 
    $.fn.popup = function(option) {
        return this.each(function() {
            var $this = $(this),
                id = $this.data('popup'), //缓存数据id
                data = $.fn.popup.popupData[id],
                options = typeof option == 'object' && option;

            if (!data) {
                id = $.fn.popup.popupData.index++;
                data = $.fn.popup.popupData[id] = new PopUp(this, options);
                $this.data('popup', id);
            }

            if (typeof option == 'string') data[option]();
        });
    }
    $.fn.popup.popupData = {index: 0};
    $.fn.popup.Constructor = PopUp;

    //默认要实例化的元素
    $('.popup').popup();
})($);