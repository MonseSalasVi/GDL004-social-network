
 function autEmailPass(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      console.log('ya entre');
      console.log(window.location.hostname);
      console.log(window.location.pathname);
      let nE= window.history.length;
      console.log(nE);
     history.pushState("home.js", "home","#/Home");
     window.history.go();
    })
}

function createUser(suemail, supassword){
  firebase.auth().createUserWithEmailAndPassword(suemail, supassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("yalo creeaste")
    history.pushState("home.js", "home","#/Home");
     window.history.go();
    // ...
  });
  
}

export {autEmailPass,createUser}