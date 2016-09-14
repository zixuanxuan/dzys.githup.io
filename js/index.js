$(function(){
  $(".log-out").click(function () {
    $(".user-wapper").hide();
    $(".user").hide();
    $(".login").show();
  })

  // 首页
   var len = $(".slider li").length;
   var index = 0;
   var h = $(".news-title ul li:first").height();
   var showTitle = function () {
     $(".slider").stop(true, false).animate({
          "marginTop": -h * index + "px"
     },800);
   }
   var adTimer = setInterval(function () {
          showTitle(index);
            index++;
            if (index == len) {
                index = 0;
            }
        },2400);
        $(".news-next").click(function () {
          clearInterval(adTimer);
          showTitle(index);
          index--;
          if (index < 0) {
              index=2;
          }
        })
        $(".news-last").click(function () {
          clearInterval(adTimer);
          showTitle(index);
          index++;
          if (index == len) {
              index = 0;
          }
        })

  //  关于我们
  $(".about-list1").click(function () {
      $(".about-pic1").addClass("about-pic1-active");
      $(".about-pic2").removeClass("about-pic2-active");
      $(".about-pic3").removeClass("about-pic3-active");
  })
  $(".about-list2").click(function () {
      $(".about-pic2").addClass("about-pic2-active");
      $(".about-pic1").removeClass("about-pic1-active");
      $(".about-pic3").removeClass("about-pic3-active");
  })
  $(".about-list3").click(function () {
      $(".about-pic3").addClass("about-pic3-active");
      $(".about-pic1").removeClass("about-pic1-active");
      $(".about-pic2").removeClass("about-pic2-active");
  })

  $(".about-list li").click(function () {
      $(".about-list li").css({
        "background": "#fff",
        "color": "#000"
      });
      $(".about-list li").eq($(this).index()).css({
        "background": "#36bbc7",
        "color": "#fff"
      });
  });

  // 招贤纳士
  $(".join-list li").click(function () {
      $(".join-list li").css({
        "background": "#fff",
        "color": "#000"
      });
      $(".join-list li").eq($(this).index()).css({
        "background": "#36bbc7",
        "color": "#fff"
      });
      $(".join-info").hide();
      $(".join-info").eq($(this).index()).show();
  })

});
