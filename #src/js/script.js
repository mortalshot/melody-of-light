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
        } else if (!targetElement.closest('.location') && document.querySelector('.location._active')) {
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
    // === FILTER PRICE END ===
})