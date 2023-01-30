const intervals = [];
function careerNumbers() {
    const count = document.getElementsByClassName('numbers-counter');
    for (let i = 0; i < count.length; i+=1) {
        const dataVal = Number(count[i].getAttribute('data-val'));
        let upto = 0;
        intervals[i] = setInterval(() => {
            upto += 1;
            count[i].innerHTML = upto;
            if (upto === dataVal) {
                clearInterval(intervals[i]);
            }
        }, 10);
    }
}
export default careerNumbers;
