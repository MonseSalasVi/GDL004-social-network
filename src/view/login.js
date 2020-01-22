import {
  autEmailPass,
  sing_socialNewtwork
} from '../models/auth.js';
const login = () => {
  const email = document.getElementById('email_answer');
  const password = document.getElementById('password_answer');

  if (email.value != "" && password.value != "") {
    console.log(email.value, password.value);
    autEmailPass(email.value, password.value);
  }
}

const singGoogle = () => {
  console.log("konda")
  let provider = new firebase.auth.GoogleAuthProvider();
  //provider = new firebase.auth.GoogleAuthProvider();
  sing_socialNewtwork(provider)

}



// login
export default () => {
  const inputEmail = document.createElement("INPUT");
  inputEmail.innerHTML = "email";
  inputEmail.setAttribute("placeholder", "email");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("id", "email_answer");
  document.body.appendChild(inputEmail);

  const inputPassword = document.createElement("INPUT");
  inputPassword.innerHTML = "password";
  inputPassword.setAttribute("placeholder", "password");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("id", "password_answer");
  document.body.appendChild(inputPassword);

  const btn = document.createElement("BUTTON");
  btn.innerHTML = "Get Started";
  btn.onclick = login;
  btn.setAttribute('id', 'btn_sing_in');
  document.body.appendChild(btn);


  //div con boton entrar con google
  const btngoogle = document.createElement("BUTTON")
  btngoogle.innerHTML = "Sign in with Google";
  btngoogle.onclick = singGoogle;
  btngoogle.setAttribute('id', 'btn_sing_in_google');
  //btn entrar con google
  const divbtns = document.createElement("div");
  divbtns.setAttribute("class", "btn_sing_in");
  divbtns.appendChild(btngoogle)




  const formu = document.createElement("div");
  formu.setAttribute('id', 'form-signIn'); // creamos el formulario
  formu.appendChild(inputEmail);
  formu.appendChild(inputPassword);
  formu.appendChild(btn);
  formu.appendChild(divbtns)
  document.body.appendChild(formu);



  return formu;


};