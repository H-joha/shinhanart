$(function () {
  // 헤더 스크롤
  // $(window).on('scroll', function () {
  //   var st = $(this).scrollTop();

  //   if (st > 0) {
  //     $('#header').addClass('fixed');
  //   } else {
  //     $('#header').removeClass('fixed');
  //   }
  // });

  // 헤더 데탑 전체메뉴
  $('#header .all_menu').hide();

  $('#header .btn_wrap .btn_menu').on('click', function () {
    $(this).addClass('on');
    $('#header').addClass('on');
    $('#header .btn_wrap .btn_close').addClass('on');
    $('#header .all_menu').show();
  });
  $('#header .btn_wrap .btn_close').on('click', function () {
    $('#header .all_menu').hide();
    $(this).removeClass('on');
    $('#header').removeClass('on');
    $('#header .btn_wrap .btn_menu').removeClass('on');
  });

  // 헤더 타블렛 전체메뉴
  $('#header .m_all_menu .m_gnb .depth02').hide();

  $('#header .btn_m_wrap .btn_menu').on('click', function () {
    $('#header .m_all_menu').slideDown();
    $('#header .btn_m_wrap .btn_close').addClass('on');
  });

  $('#header .btn_m_wrap .btn_close').on('click', function () {
    $('#header .m_all_menu').slideUp();
    $('#header .btn_m_wrap .btn_close').removeClass('on');
  });

  $('#header .m_all_menu .m_gnb>li>a').on('click', function (e) {
    e.preventDefault();
    $(this).next().slideToggle().parent().siblings().find('.depth02').slideUp();
  });

  // 섹션 풀페이지
  $('#fullpage').fullpage({
    autoScrolling: true,

    // 풀페이지 해제
    responsiveWidth: 1201,
    responsiveHeight: 650,

    onLeave: function (index, nextIndex, direction) {
      if (index == 1 && direction == 'down') {
        $('#header').addClass('fixed');
      } else if (index == 2 && direction == 'up') {
        $('#header').removeClass('fixed');
      }
    },
  });

  // 뉴스 섹션
  function mainNews() {
    var visualSlider = new Swiper('.visual_slider', {
      loop: true,
      autoplay: {
        delay: 5000,
      },

      on: {
        slideChange: function () {
          var idx = visualSlider.realIndex;
          $('.main_visual .visual_slider .pagination .btn_paging').eq(idx).addClass('active').siblings().removeClass('active');
        },
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });

    var newsSlider = new Swiper('.news_slider', {
      loop: true,
      autoplay: {
        delay: 5000,
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });

    // 뉴스 슬라이더 일시정지 버튼
    var btnFlag = true;

    $('.main_news .news_slider .pagination_wrap .btn_pause').on('click', function () {
      if (btnFlag) {
        $(this).addClass('on');
        $(this).html('PLAY');
        newsSlider.autoplay.stop();
      } else {
        $(this).removeClass('on');
        $(this).html('STOP');
        newsSlider.autoplay.start();
      }
      btnFlag = !btnFlag;
    });
  }
  mainNews();

  // 어바웃 섹션
  function mainAbout() {
    var aboutSlider = new Swiper('.about_slider', {
      loop: true,
      autoplay: {
        delay: 5000,
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // 브랜드 슬라이더 일시정지 버튼
    var btnFlag = true;

    $('.main_about .about_slider .pagination_wrap .btn_pause').on('click', function () {
      if (btnFlag) {
        $(this).addClass('on');
        $(this).html('PLAY');
        aboutSlider.autoplay.stop();
      } else {
        $(this).removeClass('on');
        $(this).html('STOP');
        aboutSlider.autoplay.start();
      }
      btnFlag = !btnFlag;
    });
  }
  mainAbout();

  // 브랜드 섹션
  var brandSlider = new Swiper('.brand_slider', {
    loop: true,

    slidesPerView: 'auto',
    spaceBetween: 10,

    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
