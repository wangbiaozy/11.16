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
        $this.hasClass('act') ? '' : $this.addClass('act');
    });

    $(window).on('scroll',function(){
        if($(window).scrollTop()>=$(document).height()-$(window).height()){
           $('.arrow').hide();
        }else{
            $('.arrow').show();
        }
    
    })

});