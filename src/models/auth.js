// entrar con tu email y password
function autEmailPass(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      let nE = window.history.length;
      history.pushState("home.js", "home", "#/Home");
      window.history.go();
    })
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
//funcion entrar con 
/*function sing_socialNewtwork(provider) {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().getRedirectResult().then(function (result) {
    if (result.credential) {
      var token = result.credential.accessToken;
      console.log(token)

    }
    var user = result.user;

  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;

  })

};*/

// Hecho por David
function sing_socialNewtwork(provider) {
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    log.info(token)
    // The signed-in user info.
    var user = result.user;
    // ...
    
    
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  
}
//firebase.auth().signInWithRedirect(provider);

// firebase.auth().getRedirectResult().then(function (result) {
//   if (result.credential) {
//     let token = result.credential.accessToken;
//   }
//   let user = result.user;

// }).catch(function (error) {
//   let errorCode = error.code;
//   let errorMessage = error.message;
//   let email = error.email;
//   let credential = error.credential;
// });

//}



export {
  autEmailPass,
  createUser,
  sing_socialNewtwork


}