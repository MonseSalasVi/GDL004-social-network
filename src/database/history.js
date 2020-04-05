// const history =  document.getElementById('history')

// function webhistory() {

//     firebase.firestore().collection("users").get().then((querySnapshot) => {
//         history.innerHTML = ''
//         querySnapshot.forEach((doc) => {
//             console.log(`${doc.id} => ${doc.data()}`);
//             history.innerHTML += `
//             <div> <div><h1> ${doc.id} </h1>  <p>date </p> <div>
//             <div> <textarea> doc.data().text </textarea> </div>
//             </div>
//             ` 
//         });
//     });
// }

// export {webhistory}