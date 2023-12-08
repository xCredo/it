let offset1 = 0;
const sliderLine1 = document.querySelector('.slider-line1');

document.querySelector('.slider-next1').addEventListener('click', function(){
    offset1 = offset1 + 750;
    if (offset1 > 2250) {
        offset1 = 0;
    }
    sliderLine1.style.left = -offset1 + 'px';
});

document.querySelector('.slider-prev1').addEventListener('click', function () {
    offset1 = offset1 - 750;
    if (offset1 < 0) {
        offset1 = 2250;
    }
    sliderLine1.style.left = -offset1 + 'px';
});