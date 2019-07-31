var filterHTMLTag = function (msg) {
    var msg = msg.replace(/<\/?[^>]*>/g, ''); //去除HTML Tag
    msg = msg.replace(/[|]*\n/, '') //去除行尾空格
    msg = msg.replace(/&npsp;/ig, ''); //去掉npsp
    return msg;
}
/**
 * 獲取鏈接參數
 * @param variable
 * @returns {*}
 */
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

function get_goods_info() {
    $.ajax({
        //请求方式
        type: "get",
        //请求的媒体类型
        dataType: 'json',
        url: "http://www.szwyq2018.cn/index.php/admin/goods/get_goods_info?id="+ $('#goods_id').val(),
        success: function (res) {
            // console.log(res);
            // res=JSON.parse(res);
            // console.log(res);
            if(res.code ==1){

                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?" + res.content.data.goods_bdid;
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);

                this.data = res.content.data;
                var data = res.content.data;

                if(data.message_content != '')
                {
                    $('#message-content').html(data.message_content);
                }

                if(data.submit_button != '')
                {
                    $('#submit-button').html(data.submit_button);
                }

                if(data.goods_price == 'https://cash-dengue.oss-cn-hangzhou.aliyuncs.com/e-commerce/1/static/files/0.00')
                {
                    $('.pay-doc').html('免费');
                }

                if(data.goods_video == '' || !data.goods_video)
                {
                    $('.video_style').hide();
                    $('.kucungaoji').hide();
                }

                if(data.fixed_bottom_button != '')
                {
                    $('#fixed-bottom-button').html(data.fixed_bottom_button);
                }

                $('#couponTotalPrice,.danjia').text(data.goods_price);
                $('.goods_name').text(data.goods_name);
                $('title').text(data.goods_page_title);
                $('.video_style').attr('src',data.goods_video);
                $('.video_style').attr('poster',data.goods_thumb);
                $('.good-hot-wrapper').append(`${data.goods_sale}件`);
                $('.min_title').html(html_decode(data.goods_subtitle));

                if(data.goods_packages.length > 0)
                {
                    $('#goods-packages').show();

                    var _html = '';
                    $.each(data.goods_packages,function (index,value) {
                        if(index == 0)
                        {
                            $('#selected_package').html(value.id);
                            _html += '<li data="'+value.package_price+'" id="'+value.id+'" class="active" onclick="selectPackage(this)">'+value.package_name+'</li>';
                            $('#couponTotalPrice,.danjia').text(value.package_price);
                        }
                        else
                        {
                            _html += '<li data="'+value.package_price+'" id="'+value.id+'" onclick="selectPackage(this)">'+value.package_name+'</li>';
                        }
                    })
                    $('#goods-package-item').html(_html);


                }

                if(data.goods_description_list != '' && data.goods_description_list)
                {
                    var str='';
                    for(var i =0;i< data.goods_description_list.length;i++){
                        str+=`<img class="pic-module mo" src="${data.goods_description_list[i]}">`;
                    }
                    $('.info_img').html(str);
                }


            }else{

                alert('网络繁忙请稍后再试!');
            }
            // console.log(res);
            // var goods_description = res.content.data.goods_description;
            // $('.goods_description').html(html_decode(goods_description));




        },
        //请求失败，包含具体的错误信息
        error: function (e) {
            // $('.video_style').hide();
            // $('.kucungaoji').hide();
            console.log(e);
            alert('网络繁忙请稍后再试!');
            // console.log(e.status);
            // console.log(e.responseText);
        }
    });
}


/**
 * 提交訂單
 */
$('.submit-button').click(function () {
    if($('#message-content').html() != '')
    {
        alert(filterHTMLTag($('#message-content').html()));
    }

    if ($('#name').val() == '') {
        alert('请输入姓名！');
        return;
    }
    if ($('#phone').val() == '') {
        alert('请输入手机号！');
        return;
    }
    if ($('#province').val() == '') {
        alert('请选择省份！');
        return;
    }
    if ($('#city').val() == '') {
        alert('请选择城市！');
        return;
    }
    if ($('#area').val() == '') {
        alert('请选择地区！');
        return;
    }
    if ($('#addressdetail').val() == '') {
        alert('请输入详细地址！');
        return;
    }

    var reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;//验证姓名正则
    var reg_phone = /^1(3|4|5|6|7|8|9)\d{9}$/;//正则校验手机
    if (!reg.test($('#name').val())) {
        alert('收件人姓名不合法！');
        return;
    }
    if (!reg_phone.test($('#phone').val())) {
        alert('手机号码有误！');
        return;
    }

    meteor.track("shopping", {convert_id: "1637459122383884"})
    
    $.ajax({
        //请求方式
        type: "post",
        url: `http://www.szwyq2018.cn/index.php/admin/orders/add_order`,
        dataType: 'json',  // 请求方式为jsonp
        data: {
            goods_id: $('#goods_id').val(),
            goods_num: $('#package-amount').text(),
            name: $('#name').val(),
            tel: $('#phone').val(),
            province: $('#province').val(),
            city: $('#city').val(),
            district: $('#area').val(),
            detail_address: $('#addressdetail').val(),
            remark: $('#message').val(),

            goods_package_id : $('#selected_package').html(),
        },
        //请求成功
        success: function (res) {
            // res=JSON.parse(res);
            // console.log(res);
            if (res.code == 1) {
                alert('下单成功!');
            } else {
                alert(res.content.msg);
            }

        },
        //请求失败，包含具体的错误信息
        error: function (e) {
            alert('网络繁忙，请稍后重试！');
        }
    });
});

/**
 * 数量操作
 */
$('.num_down').click(function () {
    var num = $('#package-amount').text();
    num = parseInt(num);
    if(num ==1){
        return;
    }
    num=num-1;

    $('#package-amount').text(num);
    all_jiaqian(num);
});

$('.num_up').click(function () {
    var num = $('#package-amount').text();
    num = parseInt(num);
    if(num ==10){
        return;
    }
    num=num+1;
    $('#package-amount').text(num);
    all_jiaqian(num);
});


function all_jiaqian(num){
    console.log(num);
    var danjia = $('.danjia').text();
    danjia=parseInt(danjia)*num;
    $('#couponTotalPrice').text(danjia);
}


/**
 * HTML转义
 * @param str
 * @returns {string}
 */

// function html_encode(str)
// {
//     var s = "";
//     if (str.length == 0) return "";
//     s = str.replace(/&/g, "&amp;");
//     s = s.replace(/</g, "&lt;");
//     s = s.replace(/>/g, "&gt;");
//     s = s.replace(/ /g, "&nbsp;");
//     s = s.replace(/\'/g, "&#39;");
//     s = s.replace(/\"/g, "&quot;");
//     s = s.replace(/\n/g, "<br/>");
//     return s;
// }
//
function html_decode(str)
{
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br\/>/g, "\n");
    return s;
}



// console.log(html_decode('&lt;div&gt;123&lt;/div&gt;'));
// console.log(html_encode(html_decode('&lt;div&gt;123&lt;/div&gt;')));



// function (){
//
// }





