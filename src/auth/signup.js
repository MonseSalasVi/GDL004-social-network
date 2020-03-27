const createUser = (e) => {
  e.preventDefault();
  const parent = e.target.closest('section')
  const name_ = parent.querySelector('[name=name]').value
  const email = parent.querySelector('[name=email]').value
  const password = parent.querySelector('[name=password]').value

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function () {})
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
    })

}

const log_in = (e) => {
  const parent = e.target.closest('section')
  const email = parent.querySelector('[name=email]').value
  const password = parent.querySelector('[name=password]').value
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}



const log_out = (e) => {
  firebase.auth().signOut()
    .then(function () {})
    .catch(function (error) {})
}



export {
  createUser,
  log_out,
  log_in
}