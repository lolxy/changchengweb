// 左侧菜单切换
$(".menu-list li").each(function(){
  var h2 = $(this).find("h2");
  h2.click(function(){
    h2.parent().siblings().removeClass("current");
    h2.parent().siblings().find("h2").removeClass("on");
    if(h2.hasClass("on")){
      h2.removeClass("on");
      h2.parent().removeClass("current");
    }else{
      h2.addClass("on");
      h2.parent().addClass("current");
    }
  });
});
