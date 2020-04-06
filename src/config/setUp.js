import initFirebase from './initFirebase.js';

function setUp(){
    
    initFirebase();
    firebase.firestore();
    firebase.auth().onAuthStateChanged(function (user) {
    
        if (user) {
          // User is signed in.
          const name = user.displayName;
          const email_user = user.email;
          const emailVerified = user.emailVerified;
          const photoURL = user.photoURL;
          const isAnonymous = user.isAnonymous;
          const uid = user.uid;
          const providerData = user.providerData;
          
          location.hash = "#/Home";
        } else if (!user) {
          location.hash = "#/Login";
        } else {
          location.hash = "#/FormCount";  
        }
        
      });
      
}

export default setUp;