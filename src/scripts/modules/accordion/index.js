import cs from '../utils/cs';
import { cssClasses } from './helpers';

class Accordion {
    constructor(component) {
        if (component) {
            this.component = component;
            this.accButtons = this.component.querySelectorAll(cs(cssClasses.buttons));
            this.accContent = this.component.querySelectorAll(cs(cssClasses.contents));
            this.accArrows = this.component.querySelectorAll(cs(cssClasses.arrows));

            this.init();
        }
    }

    openAccordionItem() {
        this.accButtons.forEach((accButton, index) => {
            accButton.addEventListener('click', () => {
                const content = this.accContent[index];
                content.classList.toggle('visible');
                const arrow = this.accArrows[index];
                arrow.classList.toggle('visible');
            });
        });
    }

    init() {
        this.openAccordionItem();
    }
}
export default Accordion;
