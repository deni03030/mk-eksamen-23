import Swiper, { Pagination, Autoplay } from 'swiper';

class HomeSwiper {
    constructor() {
        HomeSwiper.swiperView();
    }

    static swiperView() {
        const swiper = new Swiper('.slider', {
            modules: [Pagination, Autoplay],
            slidesPerView: 1,
            spaceBetween: 150,
            speed: 1000,
            direction: 'vertical',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet(index, className) {
                    return `<button class="${className}"> ${(index + 1).toString().padStart(2, '0')}</button> `;
                }
            },
            autoplay: {
                delay: 3000
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 150
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 150
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 100
                }
            }
        });

        swiper.on('slideChange', () => {
            const slideContent = document.querySelector('.swiper-slide__content');
            const activeSlide = swiper.slides[swiper.activeIndex];
            const slideIndex = activeSlide.getAttribute('data-slide');
            const activeContent = slideContent.querySelector(`[data-slide="${slideIndex}"]`);

            slideContent.querySelectorAll('.slide-content').forEach((content) => content.classList.remove('active'));
            activeContent.classList.add('active');
        });
    }
}

export default HomeSwiper;
