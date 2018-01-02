

function setCountDown(e, n, i, t) {
    if (!(e >= n)) {
        var s = i > e ? i : n,
            a = 0;
        e >= i && (a = 1);
    }
}
$(document).ready(function () {
    CourseVerify.isMycoursePath(), $("#j-free-alert").css({
        top: ($(window).height() - 500) / 2,
        left: ($(window).width() - 580) / 2
    }), $("#detail_tab .tab").click(function () {
        $("#detail_tab .tab").removeClass("active"), $(this).addClass("active")
    }), fixDiv($("#detail_tab"), "fixed_pc", 858);
    var e = $("#j-stime").data("stime"),
        n = $("#j-sellEnd-time").data("sellend"),
        i = $("#j-sellStart-time").data("sellstart"),
        t = $("#sellEndTime").val(),
        s = ($("#sellStartTime").val(), $("#currentLesson").val()),
        a = $("#id").val(),
        o = $("#isPriceZero").val(),
        r = $("#goodsno").val(),
        d = $("#courseId").val(),
        c = $("#j-timetable"),
        l = $("#j-comment-ul"),
        m = $("#precourseId").val(),
        u = parseInt($("#quota").val()),
        v = parseInt($("#usedQuota").val()),
        f = $("#j-audition-data").val();
    setCountDown(e, n, i, function () {
        isLogin(o, r, d)
    }), anchorMove(), setLessonTimeTable(c, a, s), m && 0 != m ? e >= t || v >= u ? setComment(l, a) : setComment(l, m) : setComment(l, a), $("#j-buy, #j-speedy-buy").click(function () {
        $("#j-gototop").click(), isLogin(o, r, d)
    }), setRemind(a), f && ($("#j-audition-btn").hover(function () {
        $(this).addClass("hover")
    }, function () {
        $(this).removeClass("hover")
    }).click(function () {
        $("#j-audition-shade-iframe").attr({
            src: f
        }), $("#j-audition-shade-hd").show(), setBoxMiddle($(".audition_shade_con"))
    }), $("#j-audition-shade-close-btn").click(function () {
        $("#j-audition-shade-iframe").attr({
            src: ""
        }), $("#j-audition-shade-hd").hide(), $("body").css({
            overflow: "visible"
        })
    }));
    var j = $(".course_container").width() - $("#detail_tab").width() - 2;
    $("#j-tab-buy").width(j);
    var h = $("#needDelay").val(),
        p = $("#deliveryTime").val();
    if (1 == h && p - 432e5 > e) {
        var b = $("#delivery").val();
        $("#j-delay-time").html(b), $(".j-delivery-time-item").click(function () {
            $(".j-delivery-time-item").removeClass("select"), $(this).addClass("select"), $("#j-mail-delivery").val($(this).data("delay"))
        })
    } else $("#j-delivery-time-row").hide(), $("#j-mail-delivery").val(0)
});