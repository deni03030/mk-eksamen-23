import $ from './libs/jquery.min';
import careerNumbers from './modules/career';
import { burgerButton, showSearchInput, handleMenu } from './modules/header';
import gallery from './modules/gallery';
import openTab from './modules/tabs';

$(document).ready(() => {
    careerNumbers();
    burgerButton();
    showSearchInput();
    handleMenu();
    gallery();
    openTab();
});
