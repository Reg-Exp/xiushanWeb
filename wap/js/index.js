$(function () {
  // tab切换
  $('.header-nav-menu').click(function () {
    event.stopPropagation();
    $('.header-subnav').stop(true).fadeIn();
  });

  $('.header-subnav-close').click(function () {
    $('.header-subnav').stop(true).fadeOut();
  });

  $('body').click(function () {

    $('.header-subnav').stop(true).fadeOut();
  });
  $('.header-subnav-list').click(function () {
    event.stopPropagation();
  });

})

$(function () {
  $(".back-top").click(
    function () {
      $('html,body').animate({scrollTop: '0px'}, 'slow');
    })
  let minHeight = 0;
// 获取页面的最小高度，无传入值则默认为600像素
  minHeight ? minHeight = minHeight : minHeight = 600;

// 为窗口的scroll事件绑定处理函数
  $(window).scroll(function () {

    // 获取窗口的滚动条的垂直滚动距离
    var s = $(window).scrollTop();

    // 当窗口的滚动条的垂直距离大于页面的最小高度时，让返回顶部图标渐现，否则渐隐
    if (s > minHeight) {
      $("#gotoTop").fadeIn(500);
    } else {
      $("#gotoTop").fadeOut(500);
    }
    ;
  });
})



$(function () {
  // tab切换
  $('.house-title').click(function () {
    $('.header-subnav').stop(true).fadeIn();
  });

  $('.header-subnav-close').click(function () {
    $('.header-subnav').stop(true).fadeOut();
  });

  $('body').click(function () {

    $('.header-subnav').stop(true).fadeOut();
  });
  $('.header-subnav-list').click(function () {
    event.stopPropagation();
  });

})

$(function () {
  // tab切换
  $('.house-title>span').click(function () {
    let n = $(this).index();
    $(this).addClass('house-active');
    $(this).siblings().removeClass('house-active');
    $('.house-panel>.house-panel-item').eq(n).css("display", "block");
    $('.house-panel>.house-panel-item').eq(n).siblings('.house-panel-item').css("display", "none");
    ;
  })
})
