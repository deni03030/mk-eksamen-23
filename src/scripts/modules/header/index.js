function burgerButton() {
    const menu = document.querySelector('#mobile__menu-list');
    const buttonB = document.querySelector(".burger-button");
    buttonB.addEventListener('click', function () {
        const isMenuVisible = menu.classList.contains("visible");
        menu.classList.toggle("visible", !isMenuVisible)
        buttonB.classList.toggle("close-button", !isMenuVisible)
    });
}

function showSearchInput() {
    const searchButton = document.querySelector('.searching-button');
    const searchInput = document.querySelector('.searching-input');

    searchButton.addEventListener('click', function () {
        const isSearchInputVisible = searchInput.classList.contains("visible");
        searchInput.classList.toggle("visible", !isSearchInputVisible);
    });
}

function nextLevel() {
    const firstLevelLi = document.querySelectorAll('.first-level__menu-item');

    firstLevelLi.forEach(function (li) {
        const secondLevel = li.querySelector('.second-level');
        const itemButton = li.querySelector('.mobile__item-button');
        const secondLevelLi = li.querySelectorAll('.second-level__menu-item');

        if (secondLevel) {
            itemButton.addEventListener('click', function () {
                secondLevel.classList.add("visible");
                secondLevelLi.forEach(function (secondLi) {
                    const thirdLevel = secondLi.querySelector('.third-level')
                    const btnToThird = secondLi.querySelector('.second-levele__button-third');

                    if (thirdLevel) {
                        btnToThird.addEventListener('click', function () {
                            li.classList.remove("visible");
                            thirdLevel.classList.add("visible");
                        });
                    }
                });
            });
        }
    });
}


function goBack() {
    const backToSecond = document.querySelector('.third-level__button');
    const backToFirst = document.querySelector('.second-level__button');
    const firstLevel = document.querySelector('#mobile__menu-list');
    const secondLevel = document.querySelector('.second-level');
    const thirdLevel = document.querySelector('.third-level');

    backToSecond.addEventListener('click', function () {
        thirdLevel.classList.remove("visible");
        secondLevel.classList.add("visible");
    });

    backToFirst.addEventListener('click', function () {
        secondLevel.classList.remove("visible");
        firstLevel.classList.add("visible");
    });
};

function handleMenu() {
    nextLevel();
    goBack();
};
export { burgerButton, showSearchInput, handleMenu };
