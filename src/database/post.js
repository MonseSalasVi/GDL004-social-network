const createpost = (text) => {
    const user = firebase.auth().currentUser
    const f = new Date();
    const datepost = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    if(text === ''){
        alert('You have not written a post')
    } else {
    firebase.firestore().collection("posts").add({
            useremail: user.email,
            userid: user.uid,
            texts: text,
            date: datepost,
        })
        .then(function (docRef) {
            document.getElementById('post_textarea').value = ''
        })
    }
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
function editPost(postid, textedit) {
    document.getElementById('post_textarea').value = textedit
    const btn_guardar = document.getElementById('btn_guardar')
    btn_guardar.style.display = 'none'
    const btneditar = document.getElementById('btn_editar')
    btneditar.innerHTML = 'Save'
    btneditar.style.display = 'inline';
    btneditar.addEventListener('click', edit)

    function edit() {
        const washingtonRef = firebase.firestore().collection("posts").doc(postid);
        const textoEditado = document.getElementById('post_textarea').value
        return washingtonRef.update({
                // useremail: user.email,
                // userid: user.uid,
                texts: textoEditado,
                //date: datepost,
            })
            .then(function () {
                //console.log("Document successfully updated!");
                document.getElementById('post_textarea').value = ''
                btneditar.style.display = 'none'
                btn_guardar.style.display = 'inline'
            })

    }
}


//historypost Profile !! donde pueden editar o eliminar sus posts
const historypost = () => {
    const user = firebase.auth().currentUser
    if(!user){
        return
    }
    
    return firebase.firestore().collection("posts").where('userid','==',user.uid).onSnapshot((querySnapshot) => {
        containerPosts.innerHTML = ''
        querySnapshot.forEach((doc) => {

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
                editPost(postId, text)
            })

        })
        containerPosts.querySelectorAll('.btn_delete').forEach((button) => {
            button.addEventListener('click', (e) => {
                const currElem = e.target; //referencia a un objeto que lanzo el evento
                const postId = currElem.closest('.post_history').dataset.postid; //
                //alert(postId + 'quiero borrar')
                deletePost(postId)

            })

        })

    })
}
//historia del home, sin botones de editar y eliminar
const historypostHome = () => {
    return firebase.firestore().collection("posts").onSnapshot((querySnapshot) => {
        containerPosts.innerHTML = ''
        querySnapshot.forEach((doc) => {
            // console.log(` id post ${doc.id} texto del post ${doc.data().texts},  dia ${doc.data().date}
            //      ,quien lo publico ${doc.data().useremail} , ${doc.data().userid}`);

            containerPosts.innerHTML += `<ul >
                     <div class='post_history' data-postid='${doc.id}'>
                       <div class='post_titulo'>
                         <h1 class='post_name'>${doc.data().useremail} </h1> 
                         <p class='post_date'>${doc.data().date} </p>
                       </div>
                       <p class='p_texts'> ${doc.data().texts} </p>
                     </div>
                     </ul> `

        });
    })
}

export default {
    createpost,
    historypost,
    historypostHome
}