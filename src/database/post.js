const createpost = (text) => {
    const user = firebase.auth().currentUser
    const f = new Date();
    const datepost = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    firebase.firestore().collection("posts").add({
            useremail: user.email,
            userid: user.uid,
            texts: text,
            date: datepost,

        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            document.getElementById('post_textarea').value = ''
        })
        .catch(function (error) {
           // console.error("Error adding document: ", error);
        })

}
//borrar post
function deletePost(postid) {
    alert('Are you sure?')
    //console.log("elimino este post"+ postid)
    firebase.firestore().collection("posts").doc(postid).delete().then(function () {
        //console.log("Document successfully deleted!");
    }).catch(function (error) {
        //console.error("Error removing document: ", error);
    });
}
//editar post
// function editPost(postid) {
//     console.log('quiero editarlo')
//     var washingtonRef = firebase.firestore().collection("posts").doc(postid);

//     return washingtonRef.update({
//             useremail: user.email,
//             userid: user.uid,
//             texts: text,
//             date: datepost,
//         })
//         .then(function () {
//             console.log("Document successfully updated!");
//         })
//         .catch(function (error) {
//             // The document probably doesn't exist.
//             console.error("Error updating document: ", error);
//         });
// }


//historypost home
const historypost = () => {
    return firebase.firestore().collection("posts").onSnapshot((querySnapshot) => {
        containerPosts.innerHTML = ''
        querySnapshot.forEach((doc) => {
            console.log(` id post ${doc.id} texto del post ${doc.data().texts},  dia ${doc.data().date}
             ,quien lo publico ${doc.data().useremail} , ${doc.data().userid}`);

            containerPosts.innerHTML += `<ul >
                 <div class='post_history' data-postid='${doc.id}'>
                   <div class='post_titulo'>
                     <h1 class='post_name'>${doc.data().useremail} </h1> 
                     <p class='post_date'>${doc.data().date} </p>
                   </div>
                   <p class='p_texts'> ${doc.data().texts} </p>
                   <span class='post_footer'>
                     <button class='btn_edit'> Edit</button>
                     <button class='btn_delete'> Delete </button>
                   </span>
                 </div>
                 </ul> `

        });
        containerPosts.querySelectorAll('.btn_edit').forEach((button) => {
            button.addEventListener('click', (e) => {

                const currElem = e.target; //referencia a un objeto que lanzo el evento
                const wrapperPostElm = currElem.closest('.post_history');
                const postId = wrapperPostElm.dataset.postid;
                const text = wrapperPostElm.querySelector('.p_texts').textContent
                //const editext = currElem.closest('.p_texts').dataset.editid
                //const textedit = currElem.closest('.p_texts').dataset.text;
                //alert(postId + 'quiero borrar')
                //editPost(postId)
                console.log( postId + text)

               // window.location.hast = '/note/5897'
            })

        })
        containerPosts.querySelectorAll('.btn_delete').forEach((button) => {
            button.addEventListener('click', (e) => {
                const currElem = e.target; //referencia a un objeto que lanzo el evento
                const postId = currElem.closest('.post_history').dataset.postid; //
                //alert(postId + 'quiero borrar')
                deletePost(postId,)
               
            })

        })

    })
}
//webhistory()
export default {
    createpost,
    historypost
}