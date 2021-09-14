const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__menu');
const header = document.querySelector('.header');
const nav = document.querySelector('.header__body');
const aimSection = document.querySelectorAll('menu-aim');
const menuItem = document.querySelectorAll('.menu__item');
const menuTarget = document.querySelectorAll('.menu__item--target a');
const headerMenuLink = document.querySelectorAll('.header__menu .menu-item a');

// === SHOW MENU ON MOBILE DEVICES START ===
if (iconMenu) {
    iconMenu.addEventListener('click', function () {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    })
}
// === SHOW MENU ON MOBILE DEVICES END ===

// === ACTIVE STATE OF THE MENU WHEN SCROLLING THE PAGE START ===
// let navHeight = $(nav).outerHeight();

// window.addEventListener('orientationchange', function () {
//     navHeight = $(nav).outerHeight();
// }, false);

// $(menuTarget).on('click', function () {
//     const id = $(this).attr('href');
//     $('body,html').animate({ scrollTop: $(id).offset().top - navHeight - 30 }, 1000);

//     if (iconMenu.classList.contains('active')) {
//         removeActive();
//     }
// });

// $(window).on('scroll', function () {
//     const position = $(this).scrollTop();

//     navHeight = $(nav).outerHeight();

//     section.each(function () {
//         const top = $(this).offset().top - navHeight - 40,
//             bottom = top + $(this).outerHeight();

//         if (position >= top && position <= bottom) {
//             $(nav).find(headerMenuLink).removeClass('active');
//             section.removeClass('active');

//             $(this).addClass('active');
//             $(nav).find('.header__menu .menu-item a[href="#' + $(this).attr('id') + '"]').addClass('active');
//         }
//     });
// });
// === ACTIVE STATE OF THE MENU WHEN SCROLLING THE PAGE END ===

// === REMOVE ACTIVE FUNCTION START ===
function removeActive() {
    document.body.classList.remove('lock');
    iconMenu.classList.remove('active');
    menuBody.classList.remove('active');
}
// === REMOVE ACTIVE FUNCTION END ===

// === SHOW SUB-MENU START ===
// const isMobile = {
//     Android: function () {
//         return navigator.userAgent.match(/Android/i);
//     },
//     BlackBerry: function () {
//         return navigator.userAgent.match(/BlackBerry/i);
//     },
//     iOS: function () {
//         return navigator.userAgent.match(/iPhone|iPad|iPod/i);
//     },
//     Opera: function () {
//         return navigator.userAgent.match(/Opera Mini/i);
//     },
//     Windows: function () {
//         return navigator.userAgent.match(/IEMobile/i);
//     },
//     any: function () {
//         return (
//             isMobile.Android()
//             || isMobile.BlackBerry()
//             || isMobile.iOS()
//             || isMobile.Opera()
//             || isMobile.Windows()
//         );
//     }
// };

// if (isMobile.any()) {
//     document.body.classList.add('_touch');

//     let menuArrows = document.querySelectorAll('.menu__arrow');
//     if (menuArrows.length > 0) {
//         for (let index = 0; index < menuArrows.length; index++) {
//             const menuArrow = menuArrows[index];
//             menuArrow.addEventListener('click', function (e) {
//                 menuArrow.parentElement.classList.toggle('active');
//             });
//         }

//         const mediaQueryMenu = window.matchMedia('(max-width: 575px)');
//         if (mediaQueryMenu.matches) {
//             $(menuArrows).click(function () {
//                 $(this).closest(menuItem).find('.menu__sub-list').slideToggle(300);
//             });
//         }
//     }

// } else {
//     document.body.classList.add('_pc');
// }
// === SHOW SUB-MENU END ===


// === HEADER FIXED START ===
const navOffset = $('.header__bottom').offset().top;
let scrolled = $(this).scrollTop();

if (!$('body').hasClass('checkout-page')) {
    if (scrolled > navOffset) {
        $('.site__wrap').addClass('nav-fixed');
        $('.header__bottom').addClass('lock-padding');
    } else if (scrolled < navOffset) {
        $('.site__wrap').removeClass('nav-fixed');
        $('.header__bottom').removeClass('lock-padding');
    }

    $(window).scroll(function () {
        let scrolled = $(this).scrollTop();

        if (scrolled > navOffset) {
            $('.site__wrap').addClass('nav-fixed');
            $('.header__bottom').addClass('lock-padding');
        } else if (scrolled < navOffset) {
            $('.site__wrap').removeClass('nav-fixed');
            $('.header__bottom').removeClass('lock-padding');
        }
    });
}

// === HEADER FIXED END ===

// === SHOW SUB-MENU START ===

// === SHOW SUB-MENU END ===