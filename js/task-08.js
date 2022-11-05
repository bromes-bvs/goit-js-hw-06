const loginFormRef = document.querySelector('.login-form');

loginFormRef.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  //   console.log(formElements);

  const email = formElements.email.value;
  const password = formElements.password.value;
  if (email === '' || password === '') {
    alert('Все поля должны быть заполнены');
    return;
  }
  const formData = { email, password };
  console.log(formData);
  loginFormRef.reset();

  return formData;
}
