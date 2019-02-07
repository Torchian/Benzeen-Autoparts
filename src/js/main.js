$(document).ready(function () {

    var headerNav = $('nav.navbar');

    // Header Navbar
    $(window).scroll(function (event) {
        headerScroll();
    });
    headerScroll();

    function headerScroll() {
        scroll = $(window).scrollTop();

        if (scroll > 0) {
            headerNav.addClass('scrolled');
        } else {
            headerNav.removeClass('scrolled');
        }
    }

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 5,
        slidesPerView: 5,
        breakpoints: {
            640: {
                slidesPerView: 4,
            },
        },
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            950: {
                spaceBetween: 20,
            },
            800: {
                slidesPerView: 2,
            },
            520: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Hero Slider
    var swiperHero = new Swiper('.swiper-container-hero', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Homepage Reviews
    var swiperCustomerReview = new Swiper('.swiper-container-customer-review', {
        autoplay: true,
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            991: {
                slidesPerView: 3,
            },
            800: {
                slidesPerView: 2,
            },
            520: {
                slidesPerView: 1,
            },
            320: {
                spaceBetween: 10,
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Product page Reviews
    var swiperReview = new Swiper('.swiper-container-review', {
        loop: true,
        autoplay: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

});