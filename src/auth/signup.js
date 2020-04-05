const createUser = (e) => {
  e.preventDefault();
  const parent = e.target.closest('section')
  const name_ = parent.querySelector('[name=name]').value
  const email = parent.querySelector('[name=email]').value
  const password = parent.querySelector('[name=password]').value
  const errorSpan = document.getElementById("formError");
  if (name_ === "") {
    errorSpan.innerHTML = "Your name";
    document.getElementById("name").style.borderColor = "Red";
  }
  if (email === "") {
    errorSpan.innerHTML = "Your email or password is incorrect";
    document.getElementById("emailSP").style.borderColor = "Red";
  }
  if (password === "") {
    document.getElementById("passwordSP").style.borderColor = "Red";
  }

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function (res) {
      //console.log(res, 'Hola')
    })
    .catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      //console.log(errorCode, errorMessage)
    })

}

const log_in = (e) => {
  const parent = e.target.closest('section')
  const email = parent.querySelector('[name=email]').value
  const password = parent.querySelector('[name=password]').value
  const errorSpan = document.getElementById("formError");
  if (email === "") {
    errorSpan.innerHTML = "Your email or password is incorrect";
    document.getElementById("email").style.borderColor = "Red";
  }
  if (password === "") {
    document.getElementById("password").style.borderColor = "Red";
  }

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