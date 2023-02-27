function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const collectionEl = document.querySelector('#controls')
const btnCreateEl = document.querySelector('button[data-create]')
const btnDestroyEl = document.querySelector('button[data-destroy]')
const boxesEl = document.querySelector('#boxes')

btnDestroyEl.addEventListener('click', () => (boxesEl.innerHTML = ""))
btnCreateEl.addEventListener('click', createBoxes)


function createBoxes() {
  let amount = collectionEl.firstElementChild.value;
  let defaultSize = 30;

  for (let i = 0; i < amount; i+=1) {
    let boxSize = i * 10 + defaultSize;
   
    const markup = `<div class="box" 
    style="background:${getRandomHexColor()}"; 
    width:${boxSize}px;
    height; ${boxSize}px></div>`;

    boxesEl.insertAdjacentHTML('afterbegin', markup)
  }
  
}
  
