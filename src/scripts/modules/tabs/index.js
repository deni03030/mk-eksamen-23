import cs from '../utils/cs';
import { cssClasses } from './helpers';

class OpenTabs {
    constructor(component) {
        if (component) {
            this.component = component;
            this.tabButtons = this.component.querySelectorAll(cs(cssClasses.tabBtn));
            this.tabContent = this.component.querySelectorAll(cs(cssClasses.tabCtnt));

            this.init();
        }
    }

    tabs() {
        this.tabButtons.forEach((tabButton, index) => {
            tabButton.addEventListener('click', () => {
                this.tabContent.forEach((content, i) => {
                    content.classList.toggle('active', i === index);
                });
                this.tabButtons.forEach((button, i) => {
                    button.classList.toggle('active', i === index);
                });
            });

            this.tabContent[index].classList.toggle('active', tabButton.classList.contains('active'));
        });
    }

    init() {
        this.tabs();
    }
}

export default OpenTabs;
