import { example } from './example.js';

//modales de login


// formula para los view
const init = () => {
window.addEventListener("hashchange",() => console.log(window.location.hash))
}
window.addEventListener('load',init)

//variables globales
let spa = document.getElementById('spa');
let first_page= document.getElementById("first_page");
let email = document.getElementById("email_answer").value;
let password = document.getElementById("paswword_answer").value;
let emailNew = document.getElementById("new_email").value;
let passwordNew = document.getElementById("new_password").value;
let singIn = document.getElementById("btn_sing_in");
let singInChrome = document.getElementById ("btn_sing_in_chrome");

//Crear cuenta
      function newAccount(){
          firebase.auth().createUserWithEmailAndPassword(emailNew, passwordNew)
          .catch(function(error) {

            var errorCode = error.code;
            var errorMessage = error.message;

          });
          first_page.classList.add("hide");
          spa.classList.remove('hide');
        }

  // Sign In

  singIn.addEventListener("click", () => {
    if(email === "" || password ===""){
        alert("Add your email or password");
      }else {
        firebase.auth().signInWithEmailAndPassword(email, password)
         .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
        first_page.classList.add("hide");
        spa.classList.remove('hide');

      }

  });

  /*  if(email === "" || password ==""){
      alert("Add your email or password");
    }*/

// Sing in to Google

singInChrome.addEventListener("click", ()=>{
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;

    }
    // The signed-in user info.
    var user = result.user;

  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    //...
  })

});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    first_page.classList.add("hide");
    spa.classList.remove('hide');
    // User is signed in.
  } else {
    //falta que sucede si no esta nadi\e logueado
    // No user is signed in.
  }
});
