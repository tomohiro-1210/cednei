$(function () {
    // 高さ変更による着色
    $(window).on('scroll', function () {
        if ($('.top-logo').height() < $(this).scrollTop()) {
            $('.l-header').addClass('change-color');
      } else {
            $('.l-header').removeClass('change-color');
      }
    });

    // ハンバーガーメニューの解除
    $('.l-header__menu-trigger').on('click', function(){
        $(this).toggleClass('open');
        $('.open-menu').toggleClass('open');
      });
      
    $('.open-menu__link').on('click', function(){
        $('.l-header__menu-trigger').toggleClass('open');
        $('.open-menu').toggleClass('open');
      });

    // スライダー
    $('.treatment__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      dots: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 5000,
      cssEase: "linear",
    });

  });