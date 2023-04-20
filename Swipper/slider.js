new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    mousewheel: {
        sensitivity: 0.8
    },

    slidesPerView: 'auto',
    slidesPerGroup: 1,

    spaceBetween: 20,

    freeMode: true,
})