let inputEl = document.getElementById('input');
let decrementBtn = document.querySelector('#decrement');
let resetBtn = document.querySelector('#reset');
let incrementBtn = document.querySelector('#increment');

let counter = 0;

resetBtn.addEventListener('click', () => {
    counter = 0
    inputEl.textContent = counter;
    console.log(counter);
});

decrementBtn.addEventListener('click', () => {
    inputEl.textContent = --counter ;
    console.log(counter);
});

incrementBtn.addEventListener('click', () => {
    inputEl.textContent = ++counter ;
    console.log(counter);
});

