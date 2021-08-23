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
})