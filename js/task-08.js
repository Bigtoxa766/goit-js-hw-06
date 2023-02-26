const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', handleFormInput)

function handleFormInput (e) {
  e.preventDefault();

  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;

  const formData = { email, password }
  console.log(formData)

  // const formData = new FormData(e.target)

  // formData.forEach((value, name) => {
  //   console.log('name: ', name)
  //   console.log('value: ', value)
  // })
  
  if (e.target.elements.email.value === '' || e.target.elements.password.value.trim() === '') {
    alert('Всі поля повинні бути заповнені')
  }
  
  e.target.reset();
}