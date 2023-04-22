'use strict';

const bgColorPicker = document.querySelector("#backgroundColorPicker");
const bubColorPicker = document.querySelector("#bubblesColorPicker");
const bubbles = document.getElementsByClassName('bubbles');
const bgArea = document.getElementsByClassName('area')[0];

bgColorPicker.addEventListener('change', function(){
    bgArea.style.backgroundColor = backgroundColorPicker.value
});


const bubbleArray = Array.from(bubbles);
bubColorPicker.addEventListener('change', function(){
    bubbleArray.forEach(bubble => bubble.style.backgroundColor = bubColorPicker.value)
    
})
