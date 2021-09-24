const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;

    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        // Инициализируем конкретный рейтинг
        initRating(rating);
    }

    function initRating(rating) {
        // Инициализайция переменных
        initRatingVars(rating);

        // Изменяем ширину активных звезд
        setRatingActiveWidth();

        if (rating.classList.contains('_rating-set')) {
            // Возможность указать оценку 
            setRating(rating);
        }
    }

    // Инициализайция переменных
    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }

    // Изменяем ширину активных звезд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }

    // Возможность указать оценку 
    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__input');

        for (let index = 0; index < ratingItems.length; index++) {
            const ratingItem = ratingItems[index];

            ratingItem.addEventListener("mouseenter", function (e) {
				// Обновление переменных
				initRatingVars(rating);

				// Обновление активных звезд
				setRatingActiveWidth(ratingItem.value);
			});

            ratingItem.addEventListener("mouseleave", function (e) {
				// Обновление активных звезд
				setRatingActiveWidth();
			});

            ratingItem.addEventListener("click", function (e) {
				// Обновление переменных
				initRatingVars(rating);

                // Отобразить указанную оценку
                ratingValue.innerHTML = index + 1;
                setRatingActiveWidth();
			});
        }
    }
}