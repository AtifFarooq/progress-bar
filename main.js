/* Based on Aaron Jack's example: https://youtu.be/WrSRGzQeN2o */

function fillBar(seconds) {
    const bar = document.querySelector('.bar');
    let atPercent = 0;
    const interval = setInterval(() => {
        bar.style.width = atPercent + '%';
        atPercent++;
        if (atPercent >= 100) {
            clearInterval(interval);
        }
    }, (seconds * 1000) / 100);
}