
let counterValue = 0;

const valueEl = document.querySelector('#value')
const counterEl = document.querySelector('#counter')

counterEl.firstElementChild.addEventListener('click', handleDdecrementButton)
counterEl.lastElementChild.addEventListener('click', handleIncreminantButton)

function handleDdecrementButton(){
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function handleIncreminantButton(){
  counterValue += 1;
  valueEl.textContent = counterValue;
}