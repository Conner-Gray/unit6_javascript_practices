'use strict';

const circleSlider = document.querySelector("#circleSlider");
const theCircle = document.querySelectorAll(".wave");

const circleArray = Array.from(theCircle);

circleSlider.addEventListener('change', function(){
    const newSize = circleSlider.value;
    circleArray.forEach(circle => {
        circle.style.height = `${newSize}vh`;
        circle.style.width = `${newSize}vh`;
}); 
    });
    