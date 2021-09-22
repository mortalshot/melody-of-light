$('.form__password-show input').on('change', function () {
    if ($(this).is(':checked')) {
        $(this).closest('.form__password').find('.form__input--password').attr("type", "text");
        $(this).closest('.form__password').addClass('_active');
    } else {
        $(this).closest('.form__password').find('.form__input--password').attr("type", "password");
        $(this).closest('.form__password').removeClass('_active');
    }
})