function getUrlParam(t) {
    var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
        o = window.location.search.substr(1).match(e);
    return null != o ? o[2] : null
}
function fixDiv(t, e, o) {
    var n = 0;
    $(window).scroll(function () {
        n = document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop : document.body.scrollTop, n >= o ? t.addClass(e) : o > n && t.removeClass(e)
    })
}

function anchorMove() {
    var t = !1;
    $("a[href*=#]").click(function () {
        if (t = !0, location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = $(this.hash);
            if (e = e.length && e || $("[name=" + this.hash.slice(1) + "]"), e.length) {
                var o = e.offset().top;
                return $("html,body").animate({
                    scrollTop: o
                }, 300, function () {
                    t = !1
                }), !1
            }
        }
    }), $(window).bind("scroll", function () {
        if (!t) {
            var e = $(window).scrollTop();
            e < Math.floor($("#catelog").offset().top) ? ($("#detail_tab a").removeClass("active"), $("#detail_tab a:eq(0)").addClass("active")) : e < Math.floor($("#attention").offset().top) ? ($("#detail_tab a").removeClass("active"), $("#detail_tab a:eq(1)").addClass("active")) : e < Math.floor($("#comment").offset().top) ? ($("#detail_tab a").removeClass("active"), $("#detail_tab a:eq(2)").addClass("active")) : e < Math.floor($("#comment").offset().top) + 858 && ($("#detail_tab a").removeClass("active"), $("#detail_tab a:eq(3)").addClass("active"))
        }
    })
}

