function openTab() {
    const tabButtons = document.querySelectorAll(".tablinks");
    const tabContent = document.querySelectorAll(".tabcontent");

    tabButtons.forEach((tabButton, index) => {
        tabButton.addEventListener("click", () => {
            tabContent.forEach((content, i) => {
                content.classList.toggle("active", i === index);
            });
            tabButtons.forEach((button, i) => {
                button.classList.toggle("active", i === index);
            });
        });

        tabContent[index].classList.toggle(
            "active",
            tabButton.classList.contains("active")
        );
    });
}


export default openTab;