    // === COMPARE PAGE START ===
    const compareProductItem = $('.compare-product__item');
    const compareProductDiameter = $('.compare-product__attribute--diameter');
    const compareProductHeight = $('.compare-product__attribute--height');
    const compareProductPlinth = $('.compare-product__attribute--plinth');
    const compareProductBulb = $('.compare-product__attribute--bulb');
    const compareProductBulbNumber = $('.compare-product__attribute--bulb-number');
    const compareProductPower = $('.compare-product__attribute--power');
    let items = [compareProductItem, compareProductDiameter, compareProductHeight, compareProductPlinth, compareProductBulb, compareProductBulbNumber, compareProductPower];

    function calcAttributeHeight(name) {
        if (name.length > 0) {
            let elementHeight = 0;

            for (let index = 0; index < name.length; index++) {
                const element = name[index];
                if (elementHeight < $(element).innerHeight()) {
                    elementHeight = $(element).innerHeight();
                }
            }

            $(name).css({ 'height': elementHeight });
        }
    }

    function getItems(list) {
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            calcAttributeHeight(element);
        }
    }

    comparePageMediaMin768 = window.matchMedia('(min-width: 768px)');

    if (comparePageMediaMin768.matches) {
        getItems(items);
    }

    if (comparePageMediaMax767.matches) {
        const compareSliders = $('.compare__mobile-sliders');

        if ($(compareSliders).length > 0) {
            const headerHeight = $('.header--mobile').innerHeight();
            const compareItemsOffset = $(compareSliders).offset().top;
            const compareItemImageHeight = $('.compare__mobile-sliders .compare-product__image').innerHeight();
            const compareSlidersHeight = $(compareSliders).innerHeight() - compareItemImageHeight;

            console.log(compareItemImageHeight);

            $(window).scroll(function () {
                let scrolled = $(this).scrollTop();

                if (scrolled + headerHeight > compareItemsOffset) {
                    $('.compare-product__image').slideUp(300);
                    $('.site__main').addClass('_compare-fixed');
                    $('.compare__mobile-attributes').css({ "padding-top": compareSlidersHeight });

                } else {
                    $('.compare-product__image').slideDown(300);
                    $('.site__main').removeClass('_compare-fixed');
                    $('.compare__mobile-attributes').css({ "padding-top": 0 });
                }
            });
        }
    }
    // === COMPARE PAGE END ===