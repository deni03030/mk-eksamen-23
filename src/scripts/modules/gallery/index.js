import Swiper, { Navigation } from 'swiper';

function gallery() {
    return new Swiper('.gallery', {
        modules: [Navigation],
        slidesPerView: 2.5,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 90,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 90,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 90,
            },
        }
    });

}

export default gallery;
