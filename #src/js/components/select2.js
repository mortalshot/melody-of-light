$('.header--desktop .location__dropdown-select').select2({
    width: '100%',
    placeholder: "Введите название города",
    allowClear: false,
    dropdownParent: $('.header--desktop .location__dropdown-select2'),

    language: {
        noResults: function () {
            return "Результатов не найдено"
        },
    },
});
$('.header--desktop .location__dropdown-select').on('select2:select', function (e) {
    $('.location').removeClass('_active');
    var data = e.params.data;
    const text = data.text;
    $('.location__button span').html(text);
});

$('.header--mobile .location__dropdown-select').select2({
    width: '100%',
    placeholder: "Введите название города",
    allowClear: false,
    dropdownParent: $('.header--mobile .location__dropdown-select2'),

    language: {
        noResults: function () {
            return "Результатов не найдено"
        },
    },
});
$('.header--mobile .location__dropdown-select').on('select2:select', function (e) {
    $('.location').removeClass('_active');
    var data = e.params.data;
    const text = data.text;
    $('.location__button span').html(text);
    $('.header__burger').show();
});



let productSorting = $('#product-sorting').select2({
    minimumResultsForSearch: -1,
    width: '200px',
});

productSorting.on("select2:selecting", function (e) {
    e.preventDefault();
    const productList = $('#product-sorting').find('option');
    const selectList = $('.select2-results__options').find('li');

    console.log(productList);

    for (let index = 0; index < selectList.length; index++) {
        const productElement = productList[index];
        const selectItem = selectList[index];

        const elementValue = $(productElement).attr('value');
        $(selectItem).data('url', elementValue);
    }

    $('.select2-results__option').click(function (e) {
        window.location.href = $(this).data('url');
    })
});

$('.category__sorting-label').click(function () {
    $('#product-sorting').select2('open');
})

$('#product-results').select2({
    minimumResultsForSearch: -1,
    width: '84px',
});

$('.category__pagination-label').click(function () {
    $('#product-results').select2('open');
})

$('#product-results2').select2({
    minimumResultsForSearch: -1,
    width: '84px',
});

$('#product-results-2').click(function () {
    $('#product-results2').select2('open');
})

// checkout
$('.checkout__select-city').select2({
    width: '100%',
    placeholder: "Введите название города",
    allowClear: true,

    language: {
        noResults: function () {
            return "Результатов не найдено"
        },
    },
});

$('.checkout__select-point').select2({
    width: '100%',
    placeholder: "Выберите пункт выдачи",
    allowClear: false,

    language: {
        noResults: function () {
            return "Результатов не найдено"
        },
    },
});