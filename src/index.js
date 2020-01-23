/* import {autEmailPass} from './models/auth.js';
const formulario= document.getElementById('form-signIn');
const btnLogIn = document.getElementById('btn_sing_in');
const email = document.getElementById('email_answer');
const password = document.getElementById('password_answer');




const login =()=>{
  if (email.value !='' && password.value !=''){
    signInEmail(email.value, password.value);
  }
}
//document.querySelector('#btn_sing_in').addEventListener("click", login);
//document.querySelector('#btn_sing_in').addEventListener("click", hey);
//singIn.addEventListener("click", hey);
hey_btn.addEventListener("click", hey);
/*
//Crear cuenta

function newAccount() {
  firebase.auth().createUserWithEmailAndPassword(emailNew, passwordNew)
    .catch(function (error) {

}
 */
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

