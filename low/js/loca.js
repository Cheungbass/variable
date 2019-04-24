function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2])
    }
    return null
}


 domain01 = unescape(atob(getUrlParam('dd')));
window.location.href = "http:"+domain01+"/?share_id="+getUrlParam('share_id')