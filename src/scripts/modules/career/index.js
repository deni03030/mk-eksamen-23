import cs from '../utils/cs';
import { cssClasses } from './helpers';

class Counter {
    constructor(component) {
        if (component) {
            this.component = component;
            this.counts = this.component.querySelectorAll(cs(cssClasses.counterNumbers));

            this.init();
        }
    }

    careerNumbers() {
        const intervals = [];
        for (let i = 0; i < this.counts.length; i += 1) {
            const dataVal = Number(this.counts[i].getAttribute('data-val'));
            let upto = 0;
            intervals[i] = setInterval(() => {
                upto += 1;
                this.counts[i].innerHTML = `+${upto}`;
                if (upto === dataVal) {
                    clearInterval(intervals[i]);
                }
            }, 10);
        }
    }

    init() {
        this.careerNumbers();
    }
}
export default Counter;
