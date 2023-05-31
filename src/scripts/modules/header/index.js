import cs from '../utils/cs';
import { cssClasses } from './helpers';

class Header {
    constructor(component) {
        this.component = component;
        this.firstLevel = this.component.querySelector(cs(cssClasses.levelOne));
        this.secondLevel = this.component.querySelector(cs(cssClasses.levelTwo));

        this.firstLevelItem = this.component.querySelectorAll(cs(cssClasses.levelOneItem));
        this.secondLevelItem = this.component.querySelectorAll(cs(cssClasses.levelTwoItem));

        this.burgerMenu = this.component.querySelector(cs(cssClasses.btnBurger));
        this.btnSearch = this.component.querySelector(cs(cssClasses.buttonSearch));
        this.searchInput = this.component.querySelector(cs(cssClasses.inputSearch));

        this.toLevelTwo = this.component.querySelector(cs(cssClasses.btnItem));
        this.backToLevelOne = this.component.querySelector(cs(cssClasses.backToFirst));

        this.init();
    }

    openBurgerMenu() {
        this.burgerMenu.addEventListener('click', () => {
            const isMenuVisible = this.firstLevel.classList.contains('visible');
            this.firstLevel.classList.toggle('visible', !isMenuVisible);
            this.burgerMenu.classList.toggle('close-button', !isMenuVisible);
        });
    }

    openSearchInput() {
        this.btnSearch.addEventListener('click', () => {
            const isSearchInputVisible = this.searchInput.classList.contains('visible');
            this.searchInput.classList.toggle('visible', !isSearchInputVisible);
        });
    }

    goToNextLevel() {
        this.firstLevelItem.forEach((li) => {
            if (this.secondLevel) {
                this.toLevelTwo.addEventListener('click', () => {
                    this.secondLevel.classList.add('visible');
                    this.secondLevelItem.forEach((toLevelThree) => {
                        if (this.thirdLevel) {
                            this.toLevelThree.addEventListener('click', () => {
                                li.classList.remove('visible');
                                this.thirdLevel.classList.add('visible');
                            });
                        }
                    });
                });
            }
        });
    }

    backToPreviousLevel() {
        this.backToLevelOne.addEventListener('click', () => {
            this.secondLevel.classList.remove('visible');
            this.firstLevel.classList.add('visible');
        });
    }

    init() {
        this.openBurgerMenu();
        this.openSearchInput();
        this.goToNextLevel();
        this.backToPreviousLevel();
    }
}

export default Header;
