import $ from './libs/jquery.min';
import careerNumbers from './modules/career';
import { burgerButton, showSearchInput, handleMenu } from './modules/header';

$(document).ready(() => {
    careerNumbers();
    burgerButton();
    showSearchInput();
    handleMenu();
});
