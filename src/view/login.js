import  {autEmailPass} from '../models/auth.js';

const login =()=>{
    const email= document.getElementById('email_answer');
    const password= document.getElementById('password_answer');
    
     if (email.value !="" && password.value !=""){
     console.log(email.value, password.value);
      autEmailPass(email.value, password.value);
    } 
}

// login
export default () => {
const inputEmail = document.createElement("INPUT");
inputEmail.innerHTML = "email";
inputEmail.setAttribute("placeholder", "email");
//inputEmail.setAttribute("value", '');
inputEmail.setAttribute("id", "email_answer");
document.body.appendChild(inputEmail);

const inputPassword= document.createElement("INPUT");
inputPassword.innerHTML = "password";
inputPassword.setAttribute("placeholder", "password");
inputPassword.setAttribute("id", "password_answer");
document.body.appendChild(inputPassword);

const btn = document.createElement("BUTTON");   
btn.innerHTML = "Log In";                   
btn.onclick = login;
btn.setAttribute('id', 'btn_sing_in');
document.body.appendChild(btn);   
//btn.setAttribute("onclick", "hey()")

const formu = document.createElement("div");
formu.setAttribute('id', 'form-signIn');// creamos el formulario
//formu.action = "#/Home";
//formu.method = "POST";
const control = document.createElement["input"];// creamos un control
//control.setAttribute("type", "text");
//control.setAttribute("name", "email_");
// lo añadimos al form
formu.appendChild(inputEmail);
formu.appendChild(inputPassword);
formu.appendChild(btn);
document.body.appendChild(formu);
 

return formu; //añadimos el formulario...
 /*

const viewLogin = `  `;
const divElemt = document.createElement('div');
divElemt.innerHTML = viewLogin;
return divElemt;
*/
// singup Monse

   
};



