'use strict';

const checkboxes = document.getElementsByTagName("input");

for (let each of checkboxes) {
    each.addEventListener('change', () => {
        each.parentNode.style.backgroundColor = (each.checked ? "black" : "white")
    })
}
