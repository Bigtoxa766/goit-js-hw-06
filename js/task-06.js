
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (e) => {
  if (e.target.value.trim().length === Number(inputEl.getAttribute('data-length'))) {
   e.target.style.borderColor = 'green';
  } else {
    e.target.style.borderColor = 'red';
  }
})


