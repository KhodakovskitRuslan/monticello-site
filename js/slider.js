'use strict'
// slider-1

$(document).ready(function () {
  $('.slider').slick({
    vertical: true,
    verticalSwiping: true,
    dots: true,
    arrows: false,
    // autoplay: true,
    // speed: 1500,
    // autoplaySpeed: 4000,
    infinite: true,
    adaptiveHeight: true,

  })
});


// Slider-2 

$(document).ready(function () {
  $('.slider-2').slick({
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 751,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })
});