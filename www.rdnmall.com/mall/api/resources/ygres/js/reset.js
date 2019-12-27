//动态设置html字体
// (function(doc, win) {
// 	var docEl = doc.documentElement,
// 	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
// 	recalc = function() {
// 		var clientWidth = docEl.clientWidth;
// 		if (!clientWidth) return;
// 		docEl.style.fontSize = 25 * (clientWidth / 375) + 'px';
// 	};
// 	if (!doc.addEventListener) return;
// 	win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);




initScreen();
window.onresize = function () {
    initScreen();
}
function defaultfont() {
    var sw = document.documentElement.clientWidth;
    var pw = 750;
//  sw = sw > 750 ? 750 : sw < 320 ? 320 : sw;
    var f = 100 * sw / pw;
    document.documentElement.style.fontSize = f + 'px';
}
function initScreen() {
    defaultfont();
    setTimeout(function () {
        defaultfont();
    }, 100);
}
