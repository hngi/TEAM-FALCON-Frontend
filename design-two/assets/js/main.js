// For reviews on room page
$('.reviews-row').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// For suites section on home Page
$('.suites-row').owlCarousel({
    loop:true,
    margin:0,
    dots: false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
