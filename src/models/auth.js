//quien esta logeado

firebase.auth().onAuthStateChanged(function (user) {

  if (user) {
    // User is signed in.
    var name = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    //Agregar usuario a la coleccion de data
    db.collection("users").add({
        name: "",
        userEmail: email,
        photoURL: photoURL
      })
      .then(function (docRef) {
        //console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });


    location.hash = "#/Home";
  } else if (!user) {
    location.hash = "#/Login";
  } else {
    location.hash = "#/FormCount";
  }
});


//crear cuenta con tu email y password
function createUser(suemail, supassword) {
  firebase.auth().createUserWithEmailAndPassword(suemail, supassword).then(function () {


    })
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
    })

}

function autEmailPass(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password).then(result => {
      history.pushState("home.js", "home", "#/Home");
      window.history.go();
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        //errorSpan.innerHTML = "Your email is incorrect";
        //alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      //console.log(error);

    });
}

//funcion entrar con
function sing_socialNewtwork(provider) {
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
      let credential = error.credential
    });
}
function signOutU() {  
  firebase.auth().signOut()
    .then(function () {
    })
    .catch(function (error) {
      //console.log(error)
    });
}


export {
  autEmailPass,
  createUser,
  sing_socialNewtwork,
  signOutU,
}