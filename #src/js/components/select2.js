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