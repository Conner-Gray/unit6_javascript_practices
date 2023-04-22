'use strict';

const fontSizeDownBtn = document.querySelector('.font-size-down');
const fontSizeDefaultBtn = document.querySelector('.font-default-size');
const fontSizeUpBtn = document.querySelector('.font-size-up');


const mainText = document.querySelector('p[name="main-text"]');


fontSizeUpBtn.addEventListener('click', function(){
    mainText.style.fontSize + '6rem'
});

fontSizeDefaultBtn.addEventListener('click', function(){
    mainText.style.fontSize = '4rem'
});

fontSizeDownBtn.addEventListener('click', function(){
    mainText.style.fontSize = '2rem'
});