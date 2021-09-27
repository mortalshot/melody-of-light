// === ONLINE-FITTING PAGE START ===
const formBg = document.getElementById('fitting-bg');
const formImage = document.getElementById('fitting-upload');

$('.fitting__slider-image').click(function () {
    const imageSrc = $(this).find('img').attr('src');
    $('.fitting__main-bg').css({ 'background-image': 'url(' + imageSrc + ')' })
})

if ($(formImage).length > 0) {
    formImage.addEventListener('change', () => {
        uploadFile(formImage.files[0]);
    });
}

function uploadFile(file) {
    // провераяем тип файла
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        alert('Разрешены только изображения.');
        formImage.value = '';
        return;
    }
    // проверим размер файла (<2 Мб)
    if (file.size > 2 * 1024 * 1024) {
        alert('Файл должен быть менее 2 МБ.');
        return;
    }

    var reader = new FileReader();
    reader.onload = function (e) {
        formBg.style.backgroundImage = `url(${e.target.result})`;
    };

    reader.onerror = function (e) {
        alert('Ошибка');
    };
    reader.readAsDataURL(file);
}

$('.small-basket__item').click(function () {
    $(this).toggleClass('_active');
    let target = $(this).data('target');
    $(target).toggleClass('_active');
})

$('.fitting__sidebar-close').click(function (e) {
    e.preventDefault();
    $('.fitting__sidebar').addClass('_active');
})

$('.fitting__sidebar-back').click(function (e) {
    e.preventDefault();
    $('.fitting__sidebar').removeClass('_active');
})


if ($('._draggable').length > 0) {
    $('._draggable').draggable();

    $('.fitting__main-control').click(function () {

        if (!$(this).hasClass('_active')) {
            $('.fitting__main-control').removeClass('_active');
            $(this).addClass('_active');

            if ($(this).hasClass('fitting__main-control--fluid-horizontal')) {
                $('._draggable').draggable('enable');
            } else {
                $('._draggable').draggable('disable');
            }
        }
    })

    $('._draggable').on('click', function () {
        let transform = $(this).css('transform');


        if ($('.fitting__main-control._active').hasClass('fitting__main-control--minimize')) {
            $(this).width("-=10");
            $(this).height("-=10");
        } else if ($('.fitting__main-control._active').hasClass('fitting__main-control--maximize')) {
            $(this).width("+=10");
            $(this).height("+=10");
        } else if ($('.fitting__main-control._active').hasClass('fitting__main-control--rotate-left')) {
            var values = transform.split('(')[1],
                values = values.split(')')[0],
                values = values.split(',');

            var a = values[0]; // 0.866025
            var b = values[1]; // 0.5
            var c = values[2]; // -0.5
            var d = values[3]; // 0.866025

            let angle = Math.round(Math.asin(b) * (180 / Math.PI));


            if (angle >= -80) {
                angle -= 10;
                $(this).css({ 'transform': `rotate(${angle}deg)` });
            }
        }
        else if ($('.fitting__main-control._active').hasClass('fitting__main-control--rotate-right')) {
            var values = transform.split('(')[1],
                values = values.split(')')[0],
                values = values.split(',');

            var a = values[0]; // 0.866025
            var b = values[1]; // 0.5
            var c = values[2]; // -0.5
            var d = values[3]; // 0.866025

            let angle = Math.round(Math.asin(b) * (180 / Math.PI));


            if (angle <= 80) {
                angle += 10;
                $(this).css({ 'transform': `rotate(${angle}deg)` });
            }
        }
        else if ($('.fitting__main-control._active').hasClass('fitting__main-control--close')) {
            const data = $(this).attr('id');
            $(`.small-basket__item[data-target="#${data}"]`).removeClass('_active');
            $(this).removeClass('_active');
        }
    })

}

function getAngle() {

}
// === ONLINE-FITTING PAGE END ===