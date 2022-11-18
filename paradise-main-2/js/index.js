
$(document).ready(function () {
    $('#hb-homeslider3').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        dotsClass: 'hb-sliderdots',
        navClass: ['hb-prev', 'hb-next'],
        navContainerClass: 'hb-slidernav',
        navText: ['<span ><i class="bi bi-arrow-left"></i></span>', '<span ><i class="bi bi-arrow-right"></i></span>'],
    
    });
});



/////////////
$(document).ready(function () {
    $('.slider-1').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
});

///////////////

$(document).ready(function () {

    $('.fancybox').fancybox();


    $("#fancybox-manual-a").click(function () {
        $.fancybox.open('1_b.jpg');
    });

    $("#fancybox-manual-b").click(function () {
        $.fancybox.open({
            href: 'iframe.html',
            type: 'iframe',
            padding: 5
        });
    });

});
