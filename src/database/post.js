// import {
//     dbFirebase
// } from '../config/initFirebase.js'
//crea nuevos posts
const createpost = (text) => {
    firebase.firestore().collection("posts").add({
        texts: text
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('post_textarea').value = ''
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    })
    }

export default createpost
