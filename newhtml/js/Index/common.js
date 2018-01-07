$(function(){
  $(".tellbox").hover(function(){
    $(".r-tell").css({"right":"40px"});
  },function(){
    $(".r-tell").css({"right":"-195px"});
  });

  $(".ewmbox").hover(function(){
    $(".r-weixin").css({"right":"40px"});
  },function(){
    $(".r-weixin").css({"right":"-284px"});
  });

  $(".tab-nav li").click(function(){
    var index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".tab-content .box").eq(index).show().siblings().hide();
  });
});
