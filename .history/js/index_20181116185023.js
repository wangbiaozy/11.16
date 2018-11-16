(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
$(function () {
    //直播秀点赞
    $('.zan').on('click',function(){
        var $this = $(this);
        var _num = parseInt($this.siblings('span').text());
        $this.hasClass('act') ? '' : $(this).siblings().text(_num+1) && $this.addClass('act');
    });

});