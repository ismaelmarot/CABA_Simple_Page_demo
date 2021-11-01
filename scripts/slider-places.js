const slider = document.getElementById('slider');

let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.getElementById('id-btn-left');
const btnRight = document.getElementById('id-btn-right');

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function moveImgRight(){
    let sliderSectionFirst = document.querySelectorAll('.slider-section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all .5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    },500);
};

function moveImgLeft(){
    let sliderSection = document.querySelectorAll('.slider-section');
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all .5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft = '-100%';
    },500);
};

btnRight.addEventListener('click',moveImgRight);
btnLeft.addEventListener('click',moveImgLeft);

setInterval(function(){
    moveImgRight();
},8000);
