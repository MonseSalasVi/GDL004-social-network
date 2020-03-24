
const createUser = (e) => {
    e.preventDefault();
    const parent = e.target.closest('section')
    const name = parent.querySelector('[name=name]').value
    const email = parent.querySelector('[name=email]').value
    const password = parent.querySelector('[name=password]').value
    
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      
          })
          .catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
          })
      
      }
      


export {
    createUser
}