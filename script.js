const form = document.querySelector('#form');

form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
}

const passwordAgain = document.querySelector('#password-again');

passwordAgain.addEventListener('keyup', confirmPassword);

function confirmPassword(e) {
  const pw = document.querySelector('#password').value;
  // console.log(pw, e.target.value);
  if (pw === e.target.value) {
    e.target.style.border = "1px solid green";
  } else {
    e.target.style.border = "1px solid red";
  }
}
