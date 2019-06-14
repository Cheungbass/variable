$(function () {
    $('.back-box').click(function () {
        
        if (load_back.trim() != "") {
            $(function () {
                if (load_back.search('http://') == -1) load_back = 'http://' + load_back;
                window.location.href = load_back;
            });
        }

    })
    //单独判断顶部横条显示隐藏
    if (load_back.trim() == "") {
        $('.back-box').hide();
    }
})


if (load_back.trim() != "") {
    $(function () {
        if (load_back.search('http://') == -1) load_back = 'http://' + load_back;
        pushHistory();
        window.addEventListener("popstate", function (e) {
            window.location.href = load_back;
        }, false);

        function pushHistory() {
            var state = {
                title: "title",
                url: "#"
            };
            window.history.pushState(state, "title", "#");
        }

    });
} else {
    //防止页面后退
    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, document.URL);
    });
    $('.back-box').hide();//单独判断顶部横条显示隐藏
    // window.history.pushState('forward', null, location.href); //在IE中必须得有这两行  
    // window.history.forward(1);  
}

//点击显示弹窗
$('.bill-list').click(function(){
    $('.bill-layout').show()
})
$('.bill-img02').click(function(){
    $('.bill-layout').hide()
})