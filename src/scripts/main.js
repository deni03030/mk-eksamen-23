import $ from './libs/jquery.min';
import careerNumbers from './modules/career';
import { burgerButton, showSearchInput, handleMenu } from './modules/header';
import gallery from './modules/gallery';
import openTab from './modules/tabs';
import swiperHome from './modules/swiper-accent';
import videoGallery from './modules/video-gallery';
import openItem from './modules/accordion';

$(document).ready(() => {
    careerNumbers();
    burgerButton();
    showSearchInput();
    handleMenu();
    gallery();
    openTab();
    swiperHome();
    videoGallery();
    openItem();
});
