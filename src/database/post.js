 //import { webhistory} from './history.js'
 //     dbFirebase
 // } from '../config/initFirebase.js'
 //crea nuevos posts
 const createpost = (text) => {
     firebase.firestore().collection("posts").add({
             texts: text
         })
         .then(function (docRef) {
             console.log("Document written with ID: ", docRef.id);
             document.getElementById('post_textarea').value = ''
         })
         .catch(function (error) {
             console.error("Error adding document: ", error);
         })

 }
 const historypost = () => {
     return firebase.firestore().collection("posts").get()
         .then((querySnapshot) => {
             
             querySnapshot.forEach((doc) => {
                 
            console.log(`${doc.id} => ${doc.data().text}`);
             });
         })
 }
 //webhistory()
 export default {
     createpost,
     historypost
 }