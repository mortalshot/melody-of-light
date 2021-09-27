$(document).ready(function () {
    @@include('index.js')

    document.addEventListener("click", documentActions);
    function documentActions(e) {
        const targetElement = e.target;

        // SHOW SEARCH RESULTS START
        if (targetElement.classList.contains('search-form__input') || targetElement.classList.contains('search-form__btn')) {
            document.querySelector('.search-results').classList.toggle('_active');
        } else if (!targetElement.closest('.header__search') && document.querySelector('.search-results._active')) {
            document.querySelector('.search-results').classList.remove('_active');
        }
        // SHOW SEARCH RESULTS END

        // SHOW LOCATION DROPDOWN START
        if (targetElement.classList.contains('location__button')) {
            e.preventDefault();
            document.querySelector('.location').classList.toggle('_active');
        } else if (!targetElement.closest('.location') && document.querySelector('.location._active') && !targetElement.closest('.select2-container')) {
            document.querySelector('.location').classList.remove('_active');
        }
        if (targetElement.classList.contains('location__dropdown-close')) {
            e.preventDefault();
            document.querySelector('.location').classList.remove('_active');
        }
        // SHOW LOCATION DROPDOWN END
    }

    // === FORM PHONE MASK START ===
    $('.form__input--phone').mask("+7 (999) 999-99-99");
    // === FORM PHONE MASK END ===

    // === FORM PHONE MASK START ===
    $('.map__popup-close').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('_active');
        $(this).closest('.map__popup-form').find('.form__row').slideToggle(300);
    })
    // === FORM PHONE MASK END ===

    // === SIDEBAR SCROLL START ===
    if ($('.with-sidebar').length > 0) {
        const windowHeight = $(window).height();
        const headerHeight = $('.header__bottom').height();
        const sidebar = $('.with-sidebar__sidebar-sticky');

        if (windowHeight - headerHeight > $(sidebar).height()) {
            $(sidebar).addClass('_active');
        }
    }
    // === SIDEBAR SCROLL END ===


    // === FILTER PRICE START ===
    const priceSlider = document.querySelector('.price-filter__slider');
    if (priceSlider) {
        noUiSlider.create(priceSlider, {
            start: [489, 8982],
            connect: true,
            range: {
                'min': [0],
                'max': [8982]
            },
            format: wNumb({
                decimals: 0,
            }),
        });

        const priceStart = document.getElementById('price-start');
        const priceEnd = document.getElementById('price-end');
        var inputs = [priceStart, priceEnd]
        priceStart.addEventListener('change', setPriceValues);
        priceEnd.addEventListener('change', setPriceValues);

        function setPriceValues() {
            let priceStartValue;
            let priceEndValue;
            if (priceStart.value != '') {
                priceStartValue = priceStart.value;
            }
            if (priceEnd.value != '') {
                priceEndValue = priceEnd.value;
            }
            priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
        }

        priceSlider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = values[handle];
        });
    }

    // !need to be removed
    const priceSlider2 = document.querySelector('.price-filter__slider2');
    if (priceSlider2) {
        noUiSlider.create(priceSlider2, {
            start: [489, 8982],
            connect: true,
            range: {
                'min': [0],
                'max': [8982]
            },
            format: wNumb({
                decimals: 0,
            }),
        });

        const priceStart2 = document.getElementById('price-start2');
        const priceEnd2 = document.getElementById('price-end2');
        var inputs2 = [priceStart2, priceEnd2]
        priceStart2.addEventListener('change', setPriceValues2);
        priceEnd2.addEventListener('change', setPriceValues2);

        function setPriceValues2() {
            let priceStartValue2;
            let priceEndValue2;
            if (priceStart2.value != '') {
                priceStartValue2 = priceStart2.value;
            }
            if (priceEnd2.value != '') {
                priceEndValue2 = priceEnd2.value;
            }
            priceSlider2.noUiSlider.set([priceStartValue2, priceEndValue2]);
        }

        priceSlider2.noUiSlider.on('update', function (values, handle) {
            inputs2[handle].value = values[handle];
        });
    }
    // === FILTER PRICE END ===

    // === FANCYBOX START ===
    let lockPadding = document.querySelectorAll(".lock-padding");

    function bodyLock() {
        const lockPaddingValue = window.innerWidth - document.querySelector('.site__main').offsetWidth + 'px'; //!обратить внимание на контейнер

        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = lockPaddingValue;
            }
        }
    }

    function bodyUnLock() {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
    }

    Fancybox.bind("[data-fancybox]", {
        template: {
            closeButton: '<i class="icon-close"></i>',
            main: null,
        },
        on: {
            reveal: () => {
                bodyLock();
            },
            destroy: () => {
                bodyUnLock();
            },
        },
        dragToClose: false,
    });

    $(window).scroll(function () {
        let lockPadding = document.querySelectorAll(".lock-padding");

        function bodyLock() {
            const lockPaddingValue = window.innerWidth - document.querySelector('.site__main').offsetWidth + 'px'; //!обратить внимание на контейнер

            if (lockPadding.length > 0) {
                for (let index = 0; index < lockPadding.length; index++) {
                    const el = lockPadding[index];
                    el.style.paddingRight = lockPaddingValue;
                }
            }
        }

        function bodyUnLock() {
            if (lockPadding.length > 0) {
                for (let index = 0; index < lockPadding.length; index++) {
                    const el = lockPadding[index];
                    el.style.paddingRight = '0px';
                }
            }
        }

        Fancybox.bind("[data-fancybox]", {
            template: {
                closeButton: '<i class="icon-close"></i>',
                main: null,
            },
            on: {
                reveal: () => {
                    bodyLock();
                },
                destroy: () => {
                    bodyUnLock();
                },
            },
            dragToClose: false,
        });
    });

    $('.fancybox__close').click(function (e) {
        e.preventDefault();
        Fancybox.close();
    });
    // === FANCYBOX END ===

    // === TABLE RESIZE START ===
    if ($('.table--resizable').length > 0) {
        for (let index = 0; index < $('.table--resizable').length; index++) {
            const element = $('.table--resizable')[index];
            const tableRow1Height = $(element).find('table tr:nth-child(1)').innerHeight();
            const tableRow2Height = $(element).find('table tr:nth-child(2)').innerHeight();
            const tableRow3Height = $(element).find('table tr:nth-child(3)').innerHeight();

            if ($(element).hasClass('_active')) {
                $(element).find('.table__wrapper').css({ height: tableRow1Height + tableRow2Height + tableRow3Height });
            }
        }
    }


    $(".table__btn a").click(function (e) {
        e.preventDefault();
        const tableHeight = $(this).closest('.table--resizable').find('table').innerHeight();
        const tableRow1Height = $(this).closest('.table--resizable').find('table tr:nth-child(1)').innerHeight();
        const tableRow2Height = $(this).closest('.table--resizable').find('table tr:nth-child(2)').innerHeight();
        const tableRow3Height = $(this).closest('.table--resizable').find('table tr:nth-child(3)').innerHeight();

        if ($(this).closest('.table--resizable').hasClass('_active')) {
            $(this).closest('.table--resizable').removeClass('_active');
            $(this).closest('.table--resizable').find('.table__wrapper').animate({ height: tableHeight });
        } else {
            $(this).closest('.table--resizable').addClass('_active');
            $(this).closest('.table--resizable').find('.table__wrapper').animate({ height: (tableRow1Height + tableRow2Height + tableRow3Height) });
        }
    })
    // === TABLE RESIZE END ===

    // === SINGLE-PRODUCT-PAGE BTN FIXED START ===
    if ($('body').hasClass('single-product-page')) {
        singleProductMediaMdMax = window.matchMedia('(max-width: 767px)');

        if (singleProductMediaMdMax.matches) {
            const buyBtn = $('.product-item__buy');
            const btnOffset = $(buyBtn).offset().top;
            const headerHeight = $('.site__header').innerHeight();
            const footerOffset = $('.footer').offset().top;
            const windowHeight = $(window).innerHeight();

            if (scrolled > btnOffset && scrolled < footerOffset - windowHeight + headerHeight) {
                $('.product-item__buy--fixed').addClass('_btn-fixed');
            } else if (scrolled < btnOffset || scrolled > footerOffset - windowHeight + headerHeight) {
                $('.product-item__buy--fixed').removeClass('_btn-fixed');
            }

            $(window).scroll(function () {
                let scrolled = $(this).scrollTop();

                if (scrolled > btnOffset && scrolled < footerOffset - windowHeight + headerHeight) {
                    $('.product-item__buy--fixed').addClass('_btn-fixed');
                } else if (scrolled < btnOffset || scrolled > footerOffset - windowHeight + headerHeight) {
                    $('.product-item__buy--fixed').removeClass('_btn-fixed');
                }
            });
        }
    }
    // === SINGLE-PRODUCT-PAGE BTN FIXED END ===

    // === CART PAGE BTN FIXED  START ===
    if ($('body').hasClass('cart-page')) {
        cartPageMediaMdMax = window.matchMedia('(max-width: 767px)');

        if (cartPageMediaMdMax.matches) {
            const total = $('.cart-resume__total-outer');
            const totalOffset = $(total).offset().top;
            const resumeMargin = $('.cart--tablet .cart-resume__list').outerHeight(true) - $('.cart--tablet .cart-resume__list').innerHeight();
            const headerHeight = $('.header--mobile').innerHeight();
            const totalHeight = $(total).innerHeight();


            $(window).scroll(function () {
                let scrolled = $(this).scrollTop();

                if (scrolled + headerHeight > totalOffset - 20) {
                    $('.site__main').addClass('_fixed-total');
                    $('.cart-basket__products').css({ "padding-top": totalHeight + resumeMargin });
                } else {
                    $('.site__main').removeClass('_fixed-total');
                    $('.cart-basket__products').css({ "padding-top": 0 });
                }
            });
        }
    }
    // === CART PAGE BTN FIXED  END ===
})