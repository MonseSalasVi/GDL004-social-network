 import {
    createUser
 } from '../auth/signup.js'


export default () => {
    //texto
    const count_title = document.createElement('h1')
    count_title.innerHTML = 'Create account'

    //input name
    const count_name = document.createElement('input')
    count_name.innerHTML = 'name'
    count_name.setAttribute('placeholder', 'Name')
    count_name.setAttribute('class', 'inputs')
    count_name.setAttribute('name','name')
    //input Email
    const count_Email = document.createElement('input')
    count_Email.setAttribute('placeholder', 'Email')
    count_Email.setAttribute('class', 'inputs')
    count_Email.setAttribute('name','email')
    //inout contrase;a
    const count_password = document.createElement('input')
    count_password.setAttribute('placeholder', 'Password')
    count_password.setAttribute('type', 'password')
    count_password.setAttribute('class', 'inputs')
    count_password.setAttribute('name','password')

    // boton
    const btnSU = document.createElement('button')
    btnSU.innerHTML = 'SignUp'
    btnSU.setAttribute('class', "btnform")
    btnSU.addEventListener('click', createUser)

    //almacena los btns
    const divbtn = document.createElement('div')
    divbtn.setAttribute('class', 'divbtns')
    divbtn.appendChild(btnSU)

    //nav
    const header = document.createElement('header')
    header.setAttribute('class', 'header')
    const list_logIn = document.createElement('a')
    list_logIn.setAttribute('href', '#/Login')
    list_logIn.innerHTML = 'Log In'

    //error
    // const diverror = document.createElement("span")
    //  diverror.setAttribute("id", "formError")
    
    //almacenando todo
    const divform = document.createElement('div')
    divform.setAttribute('class', 'divform')
    divform.appendChild(count_title);
    divform.appendChild(count_name)
    divform.appendChild(count_Email)
    divform.appendChild(count_password)
    divform.appendChild(divbtn)
    // contenedorr
    const containerForm = document.createElement("section");
    containerForm.setAttribute('class', "formCount")
    header.appendChild(list_logIn)

    containerForm.appendChild(header)
    containerForm.appendChild(divform)
   // containerForm.appendChild(diverror)
   


    return containerForm;


}