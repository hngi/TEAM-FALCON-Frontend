
$('.post-wrapper').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite:true,
  centerMode:false,
  autoplay: false,
  autoplaySpeed: 2000,
  nextArrow:$('.next'),
  prevArrow:$('.prev')
});
$('.post-wrapper').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
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

