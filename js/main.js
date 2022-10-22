$(function (){

  $(".header__menu a, .address__link").on("click", function (event){
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.menu__btn, .header__menu-link').on('click', function (){
    $('.header__inner').toggleClass('header__inner--active');
  });
  
  $('.slider__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-right.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-left.svg" alt=""></button>'
  });
  
  var mixer = mixitup('.portfolio__inner');
});