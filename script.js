
let email = document.getElementById('email')
let btn = document.getElementById('btn')
let emailError = document.getElementById('email-error')

// hide error message when writing new email
email.addEventListener('keypress', (e)=>{
  emailError.style.display = 'none';
  email.style.backgroundColor = 'inherit';
  email.style.color = 'inherit';
});
email.addEventListener('focus', (e)=>{
  emailError.style.display = 'none';
  email.style.backgroundColor = 'inherit';
  email.style.color = 'inherit';
});

btn.addEventListener('click',(e)=>{
  e.preventDefault();
  // verify email
  if(!validateEmail(email)){
    // show error message
    email.style.backgroundColor = 'rgb(255, 208, 203)';
    email.style.color = '#FF5A65';
    emailError.style.display = 'block';
  } else{
    // if everything's right show success message
    document.querySelector('.content').style.display = 'none';
    document.querySelector('.success').style.display = 'flex';
  }
});

document.getElementById('dismiss').addEventListener('click', (e)=>{
  email.value = null;
  document.querySelector('.content').style.display = 'flex';
  document.querySelector('.success').style.display = 'none';
});

function validateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    return true;
  } else {
    return false;
  }

}