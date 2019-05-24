var imgIndex = '';//url上的变量
 //星座判断
 function getConstellation(m,d){ 
    var s ="01020304050607080910111201"
     //var s="魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
    var arr=[20,19,21,21,21,22,23,23,23,23,22,22];
    return s.substr(m*2-(d<arr[m-1]?2:0),2);
}
//点击判断
$('.star-startBtn').click(function(){
    var myday = $('.star-input').val();
    //test日期
    var dataTest  = /^[0-1]?[0-9]{1}[0-3]?[0-9]{1}$/;
    if(dataTest.test(myday) && myday.length == 4){
        var mm = myday.substring(0,2);
        var dd = myday.substring(2,4);
        //url上的变量
        imgIndex = getConstellation(mm,dd)
        $('.content1').hide();
        $('.content').show();
    } else {
        weui.alert('例如5月21日出生，则输入0521',{ title: '您输入的日期格式有误' });
    }
});
$("._btn01").click(function(){
    $('.content').hide();
    $('.content1').show();
})
//点击第一题 第1题消失
$('.list1').click(function(){
    $(this).addClass('leftright01-list-active');
    setTimeout(function(){
        $('.star-box1').hide();
        $('.star-box2').show();
    },300);
})
//点击第2题 第2题消失
$('.list2').click(function(){
    $(this).addClass('leftright02-list-active');
    setTimeout(function(){
        $('.star-box2').hide();
        $('.star-box3').show();
    },300);
})
//点击第3题 第3题消失
$('.list3').click(function(){
    $(this).addClass('leftright02-list-active');
    setTimeout(function(){
        $('.star-box3').hide();
        $('.star-box4').show();
    },300);
})
//点击第4题 第4题消失
$('.list4').click(function(){
    $(this).addClass('leftright02-list-active');
    setTimeout(function(){
        $('.star-box4').hide();
        $('.star-box5').show();
    },300);
})
//点击第5题 第5题消失
$('.list5').click(function(){
    $(this).addClass('leftright02-list-active');
    setTimeout(function(){
        $('.star-box5').hide();
        $('.star-box6').show();
    },300);
})
//点击第6题 跳转
$('.list6').click(function(){
    $(this).addClass('leftright02-list-active');
    setTimeout(function(){
        window.location.href = indexUrl;
    },300);
})

function handleInputOnBlur (event) {
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollTop + 1);
      document.body.scrollTop >= 1 && window.scrollTo(0, document.body.scrollTop - 1);
    }, 10)
  }

$('._btn01').click(function(){
    $('.content').hide();
    $('.content1').show();
})