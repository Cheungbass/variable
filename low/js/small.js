if (load_back.trim() == "") {
    disable_back();
    $('.back-box').hide()
} else {

    if (load_back.search('http://') == -1) load_back = 'http://' + load_back;
    $(function () {
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
}
$('.back-box').click(function () {
    var load_back1 = load_back;
    if (load_back1.trim() != "") {
        $(function () {
            if (load_back1.search('http://') == -1) load_back1 = 'http://' + load_back1;
            window.location.href = load_back1;

        });
    } else {

    }
})

$('.js_global_dialog_submit_btn').click(function () {
    $('#js_mod_dialog').hide()
})
function initPage() {
    var objLoading = document.getElementById("LoadingBar");
    if (objLoading != null) {
        objLoading.style.display = "none";
    }
}
window.onload = initPage()


function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate() + 2;
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
var dataNow = getNowFormatDate();
$('#dataNow').html(dataNow)