import Counter from './modules/career';
import Slider from './modules/gallery';
import OpenTabs from './modules/tabs';
import HomeSwiper from './modules/swiper-accent';
import SlideChanger from './modules/video-gallery';
import Accordion from './modules/accordion';
import Header from './modules/header/index';
import News from './modules/news-pagination';

document.addEventListener('DOMContentLoaded', () => {
    const selector = document.querySelector('.header-mobile');
    const header = new Header(selector);

    const accSelector = document.querySelector('.accordion');
    const accordion = new Accordion(accSelector);

    const gallerySelector = document.querySelector('.gallery');
    const slider = new Slider(gallerySelector);

    const counterSelector = document.querySelector('.career');
    const counter = new Counter(counterSelector);

    const tabsSelector = document.querySelector('.tabs-menu__container');
    const openTabs = new OpenTabs(tabsSelector);

    const slideChangerSelector = document.querySelector('.video-gallery');
    const slideChanger = new SlideChanger(slideChangerSelector);

    const homeSwiperSelector = document.querySelector('.slider');
    const homeSwiper = new HomeSwiper(homeSwiperSelector);

    News();
});
