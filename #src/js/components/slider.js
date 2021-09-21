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
            1920: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
};

if ($('.product-gallery__main').length > 0) {
    mainBanners = new Swiper('.product-gallery__main', {
        slidesPerView: 1,
        spaceBetween: 20,
        watchOverflow: true,
        lazy: {
            loadOnTransitionStart: true,
            loadPrevNext: true,
        },
        preloadImages: true,

        thumbs: {
            swiper: {
                el: `.product-gallery__thumbnail`,
                slidesPerView: 4,
                spaceBetween: 16,
                lazy: {
                    loadOnTransitionStart: true,
                    loadPrevNext: true,
                },
                preloadImages: true,

                breakpoints: {
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 16,
                    },
                },
            }
        },
    });
};

if ($('.recently-widget__swiper').length > 0) {
    mainBanners = new Swiper('.recently-widget__swiper', {
        slidesPerView: 1.3,
        spaceBetween: 12,
        watchOverflow: true,

        navigation: {
            prevEl: '.recently-widget__swiper .swiper-button-prev',
            nextEl: '.recently-widget__swiper .swiper-button-next',
        },

        breakpoints: {
            575: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 16,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 4,
            },
            1366: {
                slidesPerView: 4,
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

if ($('.compare__items').length > 0) {
    mainBanners = new Swiper('.compare__items', {
        slidesPerView: 3,
        spaceBetween: 20,
        watchOverflow: true,

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 3,
            },
            1920: {
                slidesPerView: 4,
            },
        },
    });
};

// COMPARE PAGE START
comparePageMediaMax767 = window.matchMedia('(max-width: 767px)');

if (comparePageMediaMax767.matches) {
    if ($('.compare__mobile-slider').length > 0) {
        let compareAttributesLeft = new Swiper('.compare__attributes-slider--left .swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            watchOverflow: true,
            obeserver: true,
            obeserveParents: true,
            observeSlideChildren: true,
            allowTouchMove: false,
        });
        let compareAttributesRight = new Swiper('.compare__attributes-slider--right .swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            watchOverflow: true,
            obeserver: true,
            obeserveParents: true,
            observeSlideChildren: true,
            allowTouchMove: false,
            initialSlide: 1,
        });

        let compareProductsLeft = new Swiper('.compare__mobile-slider--left .swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            watchOverflow: true,

            pagination: {
                el: ".compare__mobile-slider--left .swiper__bullets",
                type: "bullets",
            },

            controller: {
                control: compareAttributesLeft,
            },
        });

        let leftTotalFraction = $('.compare__mobile-slider--left .swiper__fraction-total');
        let leftCurrentFraction = $('.compare__mobile-slider--left .swiper__fraction-current');
        $(leftTotalFraction)[0].innerHTML = compareProductsLeft.slides.length;

        compareProductsLeft.on('slideChange', function () {
            let currentSlide = ++compareProductsLeft.realIndex;
            $(leftCurrentFraction)[0].innerHTML = currentSlide;
        })


        let compareProductsRight = new Swiper('.compare__mobile-slider--right .swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            watchOverflow: true,
            initialSlide: 1,

            pagination: {
                el: ".compare__mobile-slider--right .swiper__bullets",
                type: "bullets",
            },

            controller: {
                control: compareAttributesRight,
            },
        });

        let rightTotalFraction = $('.compare__mobile-slider--right .swiper__fraction-total');
        let rightCurrentFraction = $('.compare__mobile-slider--right .swiper__fraction-current');
        $(rightTotalFraction)[0].innerHTML = compareProductsRight.slides.length;

        compareProductsRight.on('slideChange', function () {
            let currentSlide = ++compareProductsRight.realIndex;
            $(rightCurrentFraction)[0].innerHTML = currentSlide;
        })
    };
}
// COMPARE PAGE END

// ONLINE-FITTING PAGE START
if ($('.fitting__main-slider').length > 0) {
    fittingThumbnails = new Swiper('.fitting__main-slider .swiper', {
        slidesPerView: 2,
        spaceBetween: 8,
        watchOverflow: true,
        lazy: true,
        preloadImages: true,

        mousewheel: {
            sensitivity: 1,
            eventsTarget: ".fitting__main-slider",
        },
    });
};
// ONLINE-FITTING PAGE END
