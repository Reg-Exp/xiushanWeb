$(function () {
  // tab切换
  $('.public-title-container>.public-title').click(function () {
    let n = $(this).index();
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.mingsheng>.mingsheng-panel').eq(n).css("display", "block");
    $('.mingsheng>.mingsheng-panel').eq(n).siblings('.mingsheng-panel').css("display", "none");
    ;
  })
})
$(function () {
  // tab切换
  $('.public-title-container>.public-title').click(function () {
    let n = $(this).index();
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('.job-tab-panel>.job-list').eq(n).css("display", "block");
    $('.job-tab-panel>.job-list').eq(n).siblings('.job-list').css("display", "none");
    ;
  })
})
$(function () {
  // tab切换
  $('.operation-image-container').click(function () {
    event.stopPropagation();
    $(this).siblings('.operation-container').stop(true).fadeIn();
    $(this).parent('.operation-panel').siblings().children('.operation-image-container').siblings('.operation-container').stop(true).fadeOut();

  })
  $('html').click(function () {
    $('.operation-container').stop(true).fadeOut();
  })
})
$(function () {
  // tab切换
  $('.public-nav-item').click(function () {
    event.stopPropagation();
    $(this).children('.nav-item-sub').stop(true).fadeIn();
    $(this).siblings().children('.nav-item-sub').stop(true).fadeOut();

  })
  $('html').click(function () {
    $('.nav-item-sub').stop(true).fadeOut();
  })
})
$(function () {
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
})

$(function () {

  $('.xiushan-operation-downlode').click(function () {

    $('.mask').stop(true).fadeIn();
    $('.pop').stop(true).fadeIn();

  })
  $('.header-close').click(function () {

    $('.mask').stop(true).fadeOut();
    $('.pop').stop(true).fadeOut();

  })
  $('.mask').click(function () {
    $(this).stop(true).fadeOut();
    $('.pop').stop(true).fadeOut();
  })
})

$(function () {
  var navbool = true;
  $('.more-nav').click(function () {
    if(navbool){
      $(this).children('.subnav').stop(true).fadeIn();
      navbool = false;
    }else{
      $(this).children('.subnav').stop(true).fadeOut();
      navbool = true;
    }


  })
})
