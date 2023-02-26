function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body') 
const colorNameEl = document.querySelector('.color')
const btnEl = document.querySelector('.change-color')


btnEl.addEventListener('click', () => {
 
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = getRandomHexColor();
})

