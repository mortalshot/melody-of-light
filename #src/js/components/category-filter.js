$('.filter .form__checkbox input').on('change', function () {
    const dataName = $(this).data('name');

    if ($(this).is(':checked')) {
        const textName = $(this).closest('label').find('.filter__text').text();

        $('.category__tags').append(`
        <div class="category__tag" data-id="${dataName}">
            <label class="category__tag-inner">
                <input type="checkbox" name="Квадратная" checked>
                <span>${textName} <i class="icon-close"></i></span>
            </label>
        </div>
        `);
    } else {
        console.log('unchecked');
        $(`[data-id="${dataName}"]`).remove();
    }
})

$('body').on('click', '.category__tag-inner', function () {
    const dataName = $(this).closest('.category__tag').data('id');
    const input = $(`[data-name="${dataName}"]`)[0];
    $(input).prop('checked', false);
    $(this).closest('.category__tag').remove();

})

$('.filter .form__radio input').on('change', function () {
    const textName = $(this).closest('label').find('.filter__text').text();
    const dataName = $(this).data('name');
    const propName = $(this).prop('name');

    $(`.category__tag input[name="${propName}"]`).closest('.category__tag').remove();

    $('.category__tags').append(`
    <div class="category__tag" data-id="${dataName}">
        <label class="category__tag-inner">
            <input type="radio" name="${propName}" checked>
            <span>${textName} <i class="icon-close"></i></span>
        </label>
    </div>
    `);
})