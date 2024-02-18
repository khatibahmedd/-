const form =document.getElementById('form');

const email =document.getElementById('email');

const password =document.getElementById('password');

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

form.addEventListener('submit', e => {

  e.preventDefault();

validateInputs();

});

const setError = (element, message)=> {

const inputcontrol = element.parentElemant;

const errorDisplay = inputcontrol.querySelector('.error'); 
errorDisplay.innerText =message; 
inputcontrol.classlist.add('error');
inputcontrol.classlist.remove('success');

};

const setSuccess = element => {

const inputcontrol = element.parentElemant;

const errorDisplay = inputcontrol.querySelector('.error');
 errorDisplay.innerText ="";

inputcontrol.classlist.add('success');

inputcontrol.classlist.remove('error');

};

const validateInputs = () => {


const emailValue = email.value.trim();
const passwordValue = password.value.trim();

if(emailValue ===''){

setError(email, ' Please write a valid email');
} else {
 setSuccess(email);
}

};