
const inputEl = document.querySelector('#name-input')
const outputEl = document.querySelector('#name-output')

const handleNameGreet = (e) => {
  if (e.target.value.trim() === '') {
    outputEl.textContent = 'Anonymous'
  } else {
    outputEl.textContent = e.target.value;
  }
}

inputEl.addEventListener('input', handleNameGreet)