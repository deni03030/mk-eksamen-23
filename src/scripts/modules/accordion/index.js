function openItem() {
    const accButtons = document.querySelectorAll(".accordion__title");
    const accContent = document.querySelectorAll(".accordion__content");
    const accArrow = document.querySelectorAll(".accordion__title-arrow")
    accButtons.forEach((accButton, index) => {
        accButton.addEventListener("click", () => {
            const content = accContent[index];
            content.classList.toggle("visible");
            const arrow = accArrow[index];
            arrow.classList.toggle("visible");
        });
    });
}

export default openItem;