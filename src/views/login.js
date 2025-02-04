import {
    log_in
} from '../auth/signup.js'

export default () => {
    //texto
    const count_title = document.createElement('h1')
    count_title.innerHTML = 'Sing In'

    //input mail
    const mail_SI = document.createElement('input')
    mail_SI.setAttribute('placeholder', 'Mail')
    mail_SI.setAttribute('class', 'inputs')
    mail_SI.setAttribute('name', 'email')
    mail_SI.setAttribute('id', 'email')
    //inout contrase;a
    const password_SI = document.createElement('input')
    password_SI.setAttribute('placeholder', 'Password')
    password_SI.setAttribute('type', 'password')
    password_SI.setAttribute('class', 'inputs')
    password_SI.setAttribute('name', 'password')
    password_SI.setAttribute('id', 'password')
    //boton
    const btnLI = document.createElement('button')
    btnLI.innerHTML = 'Log in'
    btnLI.setAttribute('class', "btnform")
    btnLI.addEventListener('click', log_in)

    //almacena los btns
    const divbtn = document.createElement('div')
    divbtn.setAttribute('class', 'divbtns')
    divbtn.appendChild(btnLI)

    //div para crear cuenta
    const text = document.createElement('p')
    text.innerHTML = 'Not a member?'
    text.setAttribute('class', 'textSU')
    const textSU = document.createElement('a')
    textSU.innerHTML = "Sign UP"
    textSU.setAttribute('href', '#/FormCount')
    textSU.setAttribute('class', 'textSU')
    const divText = document.createElement('div')
    divText.setAttribute('class', 'divText')
    divText.appendChild(text)
    divText.appendChild(textSU)

    //nav
    const header = document.createElement('header')
    header.setAttribute('class', 'header')

    //text error
    const spanerror = document.createElement("span")
    spanerror.setAttribute("id", "formError")
    //almacenando todo
    const divform = document.createElement('div')
    divform.setAttribute('class', 'divform')
    divform.appendChild(count_title);
    divform.appendChild(mail_SI)
    divform.appendChild(password_SI)
    divform.appendChild(spanerror)
    divform.appendChild(divbtn)
    //divform.appendChild(divText)
    //contenedor
    const containerForm = document.createElement("section");
    containerForm.setAttribute('class', "formCount")

    containerForm.appendChild(header)
    containerForm.appendChild(divform)
    containerForm.appendChild(divText)


    return containerForm;
}