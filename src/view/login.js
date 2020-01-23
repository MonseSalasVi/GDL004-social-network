import  {autEmailPass, sing_socialNewtwork} from '../models/auth.js';


import {btnSingInUp} from './commonElements.js';



const login =()=>{
    const email= document.getElementById('email_answer').value;
    const password= document.getElementById('password_answer').value;
    if (firebase.auth().currentUser) {
      
      firebase.auth().signOut();
      
    } else {
     
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
     if (email !="" && password !=""){
      autEmailPass(email, password)
      
    }
  }
  
} 
const singGoogle = () => {
  console.log("konda")
  const provider = new firebase.auth.GoogleAuthProvider();
  //provider = new firebase.auth.GoogleAuthProvider();
  sing_socialNewtwork(provider)
  history.pushState("home.js", "home", "#/Home");
  window.history.go();
  
}
export default () => {
const welcomeName = document.createElement("h1");
welcomeName.innerHTML ="WELCOME"
const inputEmail = document.createElement("INPUT");
inputEmail.innerHTML = "email";
inputEmail.setAttribute("placeholder", "Email@gmail.com");
inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("id", "email_answer");
inputEmail.setAttribute("class", "inputs form__field ");
document.body.appendChild(inputEmail);

const inputPassword= document.createElement("INPUT");
inputPassword.innerHTML = "password";
inputPassword.setAttribute("placeholder", "******");
inputPassword.setAttribute("id", "password_answer");
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("class", "inputs form__field ")
document.body.appendChild(inputPassword);

const btn = document.createElement("BUTTON");   
btn.innerHTML = "Get Started";                   
btn.onclick = login;
btn.setAttribute('id', 'btn_sing_in');
btn.setAttribute('class', 'btn')
document.body.appendChild(btn);   

  //div con boton entrar con google
  const btngoogle = document.createElement("BUTTON")
  btngoogle.innerHTML = "Sing in with GoogleChrome";
  btngoogle.onclick = singGoogle;
  btngoogle.setAttribute('id', 'btn_sing_in_google');
  btngoogle.setAttribute('class', 'btn')
  //btn entrar con google
  const divbtns = document.createElement("div");
  divbtns.setAttribute("class", "btn_sing_in");
  divbtns.appendChild(btngoogle);

const container = document.createElement("section");
container.setAttribute("class", "container_grid_login");
const formu = document.createElement("div");
formu.setAttribute('id', 'form-signIn');// creamos el formulario
formu.setAttribute("class", "login_container form__group")

formu.appendChild(welcomeName);
formu.appendChild(inputEmail);
formu.appendChild(inputPassword);
formu.appendChild(btn);

formu.appendChild(divbtns)
container.appendChild(formu);
document.body.appendChild(container)
 

btnSingInUp();

return container; //añadimos el formulario...

};


