var CourseVerify = {};
CourseVerify.isMycoursePath = function () {
    var o = getUrlParam("path"),
        e = $(".page_state").val();
    "course" == o ? "web" == e ? window.location.href = "/account/login.html?rFrom=4" : "wap" == e && ($(".back_btn").off("click"), $(".j-touch").attr({
        href: "/course/list/0/1.html"
    }), $(".explain_state").html("登录"), $(".explain_addr").html("请登录后进入我的课程"), $("#countdown_explain").show(), CourseVerify.getExplainCountDown()) : "live" == o ? "web" == e ? window.location.href = "/account/login.html?rFrom=6" : "wap" == e && ($(".back_btn").off("click"), $(".j-touch").attr({
        href: "/course/detail-" + getUrlParam("courseId") + ".html?path=live"
    })) : "lesson" == o && ("web" == e ? window.location.href = "/account/login.html?rFrom=6" : "wap" == e && ($(".back_btn").off("click"), $(".j-touch").attr({
        href: "/course/detail-" + getUrlParam("courseId") + ".html?path=live"
    })))
};