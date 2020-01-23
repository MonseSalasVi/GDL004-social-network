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