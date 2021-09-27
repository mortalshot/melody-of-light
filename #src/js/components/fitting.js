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

    $('._draggable').on('click', function () {
        if (!$(this).hasClass('_hover')) {
            $('._draggable').removeClass('_hover');
            $(this).addClass('_hover');
        } else {
            $('._draggable').removeClass('_hover');
        }
    })

    $('.fitting__main-control').on('click', function () {

        if (!$('.fitting__main-item').hasClass('_hover')) {
            alert('Пожалуйста, выберите Люстру');
        } else {
            if ($(this).hasClass('fitting__main-control--minimize')) {
                $('.fitting__main-item._hover').width("-=10");
                $('.fitting__main-item._hover').height("-=10");
            } else if ($(this).hasClass('fitting__main-control--maximize')) {
                $('.fitting__main-item._hover').width("+=10");
                $('.fitting__main-item._hover').height("+=10");
            } else if ($(this).hasClass('fitting__main-control--rotate-left')) {
                let transform = $('.fitting__main-item._hover').css('transform');
                let angle = getAngle(transform);

                if (angle >= -80) {
                    angle -= 10;
                    if ($('.fitting__main-item._hover').hasClass('_flipped')) {
                        $('.fitting__main-item._hover').css({ 'transform': `rotate(${angle}deg) scale(-1, 1)` });
                    } else {
                        $('.fitting__main-item._hover').css({ 'transform': `rotate(${angle}deg) scale(1, 1)` });
                    }
                }
            } else if ($(this).hasClass('fitting__main-control--rotate-right')) {
                let transform = $('.fitting__main-item._hover').css('transform');
                let angle = getAngle(transform);

                if (angle <= 80) {
                    angle += 10;
                    if ($('.fitting__main-item._hover').hasClass('_flipped')) {
                        $('.fitting__main-item._hover').css({ 'transform': `rotate(${angle}deg) scale(-1, 1)` });
                    } else {
                        $('.fitting__main-item._hover').css({ 'transform': `rotate(${angle}deg) scale(1, 1)` });
                    }
                }
            } else if ($(this).hasClass('fitting__main-control--close')) {
                const data = $('.fitting__main-item._hover').attr('id');
                $(`.small-basket__item[data-target="#${data}"]`).removeClass('_active');
                $('.fitting__main-item._hover').removeClass('_active');
            } else if ($(this).hasClass('fitting__main-control--fluid-horizontal')) {
                let transform = $('.fitting__main-item._hover').css('transform');
                let angle = getAngle(transform);
                $('.fitting__main-item._hover').toggleClass('_flipped');

                if ($('.fitting__main-item._hover').hasClass('_flipped')) {
                    $('.fitting__main-item._hover').css({ 'transform': `rotate(${angle}deg) scale(-1, 1)` });
                } else {
                    $('.fitting__main-item._hover').css({ 'transform': `rotate(${angle}deg) scale(1, 1)` });
                }
            }
        }

    })

    function getAngle(transform) {
        let transformCss = transform;

        var values = transformCss.split('(')[1],
            values = values.split(')')[0],
            values = values.split(',');

        var a = values[0];
        var b = values[1];
        var c = values[2];
        var d = values[3];

        let angle = Math.round(Math.asin(b) * (180 / Math.PI));

        return angle;
    }
}


// === ONLINE-FITTING PAGE END ===