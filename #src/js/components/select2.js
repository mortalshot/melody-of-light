$('.location__dropdown-select').select2({
    width: '100%',
    placeholder: "Введите название города",
    allowClear: false,

    language: {
        noResults: function () {
            return "Результатов не найдено"
        },
    },
});
$('.location__dropdown-select').on('select2:select', function (e) {
    $('.location').removeClass('_active');
});



$('#product-sorting').select2({
    minimumResultsForSearch: -1,
    width: '200px',
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