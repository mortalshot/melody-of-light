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

// === REMOVE ACTIVE FUNCTION START ===
function removeActive() {
    document.body.classList.remove('lock');
    iconMenu.classList.remove('active');
    menuBody.classList.remove('active');
}
// === REMOVE ACTIVE FUNCTION END ===

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

// === HEADER__SEARCH START ===
$('.header--mobile .header__search').on('click', function (e) {
    e.preventDefault();
    $('body').addClass('lock');
    bodyLock();
    $('.header--mobile .search-results').addClass('_active');
})

$('.search-results__close').on('click', function (e) {
    e.preventDefault();
    $('body').removeClass('lock');
    bodyUnLock();
    $('.header--mobile .search-results').removeClass('_active');
})
// === HEADER__SEARCH END ===

// === LOCATION START ===
$('.header--mobile .location__button').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.location').addClass('_active');
    $('.header__burger').hide();
})
$('.header--mobile .location__dropdown-close').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.location').removeClass('_active');
    $('.header__burger').show();
})
// === LOCATION END ===

// === SHOW SUB-MENU START ===

// === SHOW SUB-MENU END ===