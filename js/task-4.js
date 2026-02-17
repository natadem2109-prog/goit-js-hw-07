const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const formData = {
    email: formElements.email.value.trim(),
    password: formElements.password.value.trim(),};
  if (!formData.email || !formData.password) {
    alert('All form fields must be filled in');
    return;}
  console.log(formData);
  event.currentTarget.reset();
});

