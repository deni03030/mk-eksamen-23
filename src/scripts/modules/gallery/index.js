import Swiper, { Navigation } from 'swiper';

class Slider {
    constructor() {
        Slider.gallery();
    }

    static gallery() {
        return new Swiper('.gallery', {
            modules: [Navigation],
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            autoplay: {
                delay: 3000
            }
        });
    }
}
export default Slider;
