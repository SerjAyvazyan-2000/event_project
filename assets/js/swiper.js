
const swiper = new Swiper('.staff-swiper', {
    slidesPerView: 4,
    spaceBetween: 40,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    speed: 3000,

    pagination: {
        el: '.services-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.staff-button-prev',
        prevEl: '.staff-button-next ',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 16
        },
        567: {
            slidesPerView: 2,

        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20,

        },

        1000: {
            slidesPerView: 3,
            spaceBetween: 30

        },
        1327: {
            slidesPerView: 4,
        },
    }


});



const eventSwiper = new Swiper('.event-swiper', {
    slidesPerView: 2,
    spaceBetween: 40,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    speed: 3000,

    pagination: {
        el: '.services-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.event-button-prev',
        prevEl: '.event-button-next ',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 16
        },
        567: {
            slidesPerView: 1,

        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20,

        },

        1000: {
            slidesPerView: 2,
            spaceBetween: 30

        },
        1327: {
            slidesPerView: 2,
        },
    }


});



const reviewsSwiper = new Swiper('.reviews-swiper', {
    slidesPerView: 2,
    spaceBetween: 40,
    pagination: {
        el: '.services-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.reviews-button-prev',
        prevEl: '.reviews-button-next ',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 50
        },


        555: {
            slidesPerView: 1.2,
            spaceBetween: 16
        },
        752: {
            slidesPerView: 1.1,
            spaceBetween: 16
        },
        825: {
            slidesPerView: 1.2,

        },
        1022: {
            slidesPerView: 1.5,
            spaceBetween: 20,

        },

        1147: {
            slidesPerView: 1.7,
            spaceBetween: 30

        },
        1327: {
            slidesPerView: 2,
        },
    }


});

