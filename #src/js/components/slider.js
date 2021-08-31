if ($('.main-banners__swiper').length > 0) {
    mainBanners = new Swiper('.main-banners__swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        watchOverflow: true,
        autoHeight: true,

        pagination: {
            el: '.main-banners__swiper .swiper-pagination',
        },

        mousewheel: {
            sensitivity: 1,
            eventsTarget: ".main-banners__swiper",
        },

        breakpoints: {
            992: {
                slidesPerView: 1.4,
                spaceBetween: 20,
                autoHeight: false,
            }
        },
    });
};

if ($('.category-widget__swiper').length > 0) {
    mainBanners = new Swiper('.category-widget__swiper', {
        slidesPerView: 2.2,
        spaceBetween: 8,
        watchOverflow: true,

        navigation: {
            prevEl: '.category-widget__swiper .swiper-button-prev',
            nextEl: '.category-widget__swiper .swiper-button-next',
        },

        breakpoints: {
            575: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2.3,
            },
            1200: {
                slidesPerView: 4.1,
            },
            1920: {
                slidesPerView: 5,
            },
            2560: {
                slidesPerView: 6,
            },
        },
    });
};

if ($('.sale-widget__swiper').length > 0) {
    mainBanners = new Swiper('.sale-widget__swiper', {
        slidesPerView: 1.3,
        spaceBetween: 12,
        watchOverflow: true,

        navigation: {
            prevEl: '.sale-widget__swiper .swiper-button-prev',
            nextEl: '.sale-widget__swiper .swiper-button-next',
        },

        breakpoints: {
            450: {
                slidesPerView: 1.7,
            },
            575: {
                slidesPerView: 2.2,
            },
            768: {
                slidesPerView: 1.7,
            },
            992: {
                slidesPerView: 2.1,
            },
            1200: {
                slidesPerView: 2.6,
            },
            1366: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1920: {
                slidesPerView: 4,
            },
            2560: {
                slidesPerView: 5,
            },
        },
    });
};

if ($('.reviews-widget__list').length > 0) {
    mainBanners = new Swiper('.reviews-widget__list', {
        slidesPerView: 1,
        spaceBetween: 12,
        watchOverflow: true,

        pagination: {
            el: '.reviews-widget__list .swiper-pagination',
        },

        breakpoints: {
            575: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    });
};