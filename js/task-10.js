function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const collectionEl = document.querySelector('#controls')
const btnCreateEl = document.querySelector('button[data-create]')
const btnDestroyEl = document.querySelector('button[data-destroy]')
const boxesEl = document.querySelector('#boxes')
const inputEl = document.querySelector('input[type=number]')

btnDestroyEl.addEventListener('click', resetInput)
btnCreateEl.addEventListener('click', createBoxes)

function resetInput() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}

function createBoxes() {
  let amount = collectionEl.firstElementChild.value;
  let boxSize = 30;
  const boxesArr = [];

  for (let i = 0; i < amount; i+=1) {
    const createdBox = document.createElement('div');
    createdBox.style.height = boxSize + 'px';
    createdBox.style.width = boxSize + 'px';
    createdBox.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    boxesArr.push(createdBox)

  }

  boxesEl.append(...boxesArr)
  
}
  
