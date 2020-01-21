import { createUser } from '../models/auth.js';
const singup = () => {
   // const suname = document.getElementById('su_name').value
    //const sulastname = document.getElementById('su_lastname').value
    const suemail = document.getElementById('su_email').value
    const supassword = document.getElementById('su_password').value

    if (suemail != "" || supassword != "") {
        //console.log(sumail + supassword)
        createUser(suemail, supassword)

    }
};
//sing up
export default () => {
    //ionput para nombre
    const inputsu_name = document.createElement("input");
    inputsu_name.innerHTML = "su_name";
    inputsu_name.setAttribute("placeholder", "First name")
    inputsu_name.setAttribute("id", "su_name");
    document.body.appendChild(inputsu_name);
    //input para apellido
    const inputsu_lastname = document.createElement("input");
    inputsu_lastname.innerHTML = "su_lastname";
    inputsu_lastname.setAttribute("placeholder", "First lastname")
    inputsu_lastname.setAttribute("id", "su_lastname");
    document.body.appendChild(inputsu_lastname);
    //input para email
    const inputsu_email = document.createElement("input");
    inputsu_email.innerHTML = "su_email";
    inputsu_email.setAttribute("placeholder", "Email address")
    inputsu_email.setAttribute("id", "su_email");
    document.body.appendChild(inputsu_email);
    //input para contrase;a
    const inputsu_password = document.createElement("input");
    inputsu_password.innerHTML = "su_password";
    inputsu_password.setAttribute("placeholder", "Email address")
    inputsu_password.setAttribute("id", "su_password");
    document.body.appendChild(inputsu_password);
    //boton para regristarse
    const btn = document.createElement("BUTTON");
    btn.innerHTML = "Sing up";
    btn.onclick = singup;
    btn.setAttribute('id', 'btn_sing_up');
    document.body.appendChild(btn);
    //div que lo contiene
    const divsingup = document.createElement("div");
    divsingup.setAttribute('id', 'divsingup');
    const control = document.createElement["input"];
    divsingup.appendChild(inputsu_name);
    divsingup.appendChild(inputsu_lastname);
    divsingup.appendChild(inputsu_email);
    divsingup.appendChild(inputsu_password);
    divsingup.appendChild(btn);
    document.body.appendChild(divsingup);

    return divsingup;
};