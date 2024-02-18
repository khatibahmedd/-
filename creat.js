const form =document.getElementById('form');
 
const username =document.getElementById('username')

const email =document.getElementById('email');

const password =document.getElementById('password');


form.addEventListener('submit', e => {

e.preventDefault();

validateInputs();

})

const setError = (element, message)=> {

const inputcontrol = element.parentElemant;

const errorDisplay = inputcontrol.querySelector('.error'); 
errorDisplay.innerText =message; 
inputcontrol.classlist.add('error');
inputcontrol.classlist.remove('success');

}

const setSuccess = element => {

const inputcontrol = element.parentElemant;

const errorDisplay = inputcontrol.querySelector('.error');
 errorDisplay.innerText ="";

inputcontrol.classlist.add('success');

inputcontrol.classlist.remove('error');

}

const validateInputs = () => {

const usernameValue = username.value.trim();

if(usernameValue ===''){

setError(username);

}

}