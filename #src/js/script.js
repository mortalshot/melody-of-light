$(document).ready(function () {
    @@include('index.js')


    $(".search-form__input").click(function () {
        $('.search-results').addClass('_active');
    })

    document.addEventListener("click", documentActions);
    function documentActions(e) {
        const targetElement = e.target;
    }
})