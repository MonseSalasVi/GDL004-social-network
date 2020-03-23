export default () => {
    const count_title = document.createElement('h1')
    count_title.innerHTML = 'Sign In'


    //input mail
    const mail_SI = document.createElement('input')
    mail_SI.setAttribute('placeholder', 'mail')
    mail_SI.setAttribute('class', 'inputs')
    //inout contrase;a
    const password_SI = document.createElement('input')
    password_SI.setAttribute('placeholder', 'password')
    password_SI.setAttribute('type', 'password')
    password_SI.setAttribute('class', 'inputs')

    //div de botones
    const btnSU = document.createElement('button')
    btnSU.innerHTML = 'SingUp'
    btnSU.setAttribute('class', 'btnsform')
    const btnSI = document.createElement('button')
    btnSI.innerHTML = 'SingIn'
    btnSI.setAttribute('class', "btnsform")

    //almacena los btns
    const divbtn = document.createElement('div')
    divbtn.setAttribute('class', 'divbtns')
    divbtn.appendChild(btnSU)
    divbtn.appendChild(btnSI)

    //almacenando todo
    const divform = document.createElement('div')
    divform.setAttribute('class', 'divform')
    divform.appendChild(count_title);
    divform.appendChild(mail_SI)
    divform.appendChild(password_SI)
    divform.appendChild(divbtn)



    const containerForm = document.createElement("section");
    containerForm.setAttribute('class', "formCount")
    containerForm.appendChild(divform)

    document.body.appendChild(containerForm);
    return containerForm;
}