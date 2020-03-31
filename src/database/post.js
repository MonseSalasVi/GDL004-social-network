// import {
//     dbFirebase
// } from '../config/initFirebase.js'

const createpost = (text) => {
    firebase.firestore().collection("posts").add({
        texts: text
    })
}

export default createpost
