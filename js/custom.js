$(document).ready(function () {
  $('#slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
        }
      },
      {
      breakpoint: 600,
      settings: {
      slidesToShow: 2,
      slidesToScroll: 2
      }
      },
      {
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
      }
    ]
  });  
  $('.gallery-slider').slick({
    centerMode: true,
    centerPadding: '260px',
    slidesToShow: 3,
    dots: true,
    arrows:false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});


		