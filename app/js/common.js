$(function() {


//-------------------------скорость якоря---------------------------------------
  $(".price__list").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 90}, 'slow', 'swing');
  });
//------------------------------acardeon---------------------------
  $(".block__header").on("click", function(){

    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
      $(".block__content").slideUp("slow");
    }
    else {
      $(".block__content").slideUp("slow");
      $(this).parent().removeClass('active');
      $(this).parent().addClass('active');
      $(".block__content").slideDown("slow");
    }
  });
  
//---------------------------tabs-----------------------
  $('.tabs__wrap').hide();
  $('.tabs__wrap:first').show();
  $('.tabs .list a:first').addClass('active');
   $('.tabs .list a').click(function(event){
    event.preventDefault();
    $('.tabs .list a').removeClass('active');
    $(this).addClass('active');
    $('.tabs__wrap').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });
 
//---------------------------tabs2-----------------------
  $('.contacts__wrap').hide();
  $('.contacts__wrap:first').show();
  $('.contacts .price__list a:first').addClass('active');
   $('.contacts-tabs .price__list a').click(function(event){
    event.preventDefault();
    $('.contacts-tabs .price__list a').removeClass('active');
    $(this).addClass('active');
    $('.contacts__wrap').hide();
     var selectTab = $(this).attr('href');
    $(selectTab).fadeIn();
  });

//------------------------------гамбургер-----------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('hamburger--active');
    $('nav').toggleClass('nav--active');
    $('header').toggleClass('header--menu');
  });

//----------------------------------------fixed----------------------------------
  $(window).scroll(function(){
      if($(this).scrollTop()>1){
          $('.header').addClass('header--active');
          $('.header__logo').addClass('header__logo--active');
      }
      else if ($(this).scrollTop()<1){
          $('.header').removeClass('header--active');
          $('.header__logo').removeClass('header__logo--active');
      }
  });
  
});

//----------------------------------------preloader----------------------------------

  $(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
  });

//-------//
$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('.tarifs__slider').slick({
  dots: true,
  infinite: true,
  // autoplay: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});