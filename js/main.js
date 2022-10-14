$(function (){
  var mixer = mixitup('.portfolio__inner');
  $('.slider__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>'
  });
});