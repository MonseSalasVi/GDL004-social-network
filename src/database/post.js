// import userMethod from '../config/setUp';
// const  {  setUp: [{email_user = user.email}]  } = userMethod;
//import { webhistory} from './history.js'
//     dbFirebase
// } from '../config/initFirebase.js'
//crea nuevos posts
//import date from '../views/home'
const createpost = (text) => {
    const user = firebase.auth().currentUser
    console.log(user)
    const f = new Date();
    const datepost = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    firebase.firestore().collection("posts").add({
            userId: user.uid,
            texts: text,
            date: datepost,

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
    return firebase.firestore().collection("posts").onSnapshot((querySnapshot) => {
        containerPosts.innerHTML = ''
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().texts}`);

            containerPosts.innerHTML += `
                 <ul>
                 
                 <div class='post'>
                   <div class='post_titulo'>
                     <div class='post_name'> nameUS</div>
                     <div class='post_date'> dia</div>
                   </div>
                   <div class='post_container'> container</div>
                   <div class='post_footer'>
                     <button class='btn_post'> Edit</button>
                     <button class='btn_post'> Delete </button>
                   </div>
                 </div>
               
                     
                 </ul> `
        });
        containerPosts.querySelectorAll('div').forEach((div) => {
            div.addEventListener('click', (e) => {
                const currDiv = e.target;
                const postId = currDiv.dataset.postid;
                alert(postId)
            })
        })
    })
}
//webhistory()
export default {
    createpost,
    historypost
}




{
    /* <div class='h_post' data-postid='${doc.id}'>
                         ${doc.id} ${doc.data().texts}
                         </div> */
}