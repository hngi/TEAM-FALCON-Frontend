$(document).ready(function () {
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.fade').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        speed: 1,
        touchMove: false,
        cssEase: 'linear',
        nextArrow: '<i class="fas fa-long-arrow-alt-right nextArrowBtn"></i>',
        prevArrow: '<i class="fas fa-long-arrow-alt-left prevArrowBtn"></i>',
    });
    $(document).on("click", ".smallnav img", function () {
        var di = $(this).data("index");
        $('.fade').slick('slickGoTo', di);

    });
});