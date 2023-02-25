
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (e) => {
  if (e.target.value.length < e.target.dataset.length) {
   e.target.style.borderColor = 'red';
  } else {
    e.target.style.borderColor = 'green';
  }
})

console.log(inputEl);