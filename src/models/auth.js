<<<<<<< HEAD
// entrar con tu email y password
function autEmailPass(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      let nE = window.history.length;
      history.pushState("home.js", "home", "#/Home");
      window.history.go();
=======

 function autEmailPass(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).then(result =>{
      history.pushState("home.js", "home","#/Home");
     window.history.go();
>>>>>>> 168cee15b87709b816a32949de3de45fc2c25b62
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
     
      // [END_EXCLUDE]
    });
}
//crear cuenta con tu email y password
function createUser(suemail, supassword) {
  firebase.auth().createUserWithEmailAndPassword(suemail, supassword).catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    history.pushState("home.js", "home", "#/Home");
    window.history.go();
  });
}
<<<<<<< HEAD
//funcion entrar con 
function sing_socialNewtwork(provider) {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
      var token = result.credential.accessToken;
    }
    var user = result.user;
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;

  })
};



export {
  autEmailPass,
  createUser,
  sing_socialNewtwork
}
=======
//funcion entrar con
function sing_socialNewtwork(provider){    
    firebase.auth().signInWithRedirect(provider);  
    firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
      let token = result.credential.accessToken;
      
    }
    let user = result.user; 
   
   })
    .catch(function (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    let email = error.email;
    let credential = error.credential;
    
  });
}
export {
  autEmailPass,
  createUser,
  sing_socialNewtwork}


>>>>>>> 168cee15b87709b816a32949de3de45fc2c25b62
