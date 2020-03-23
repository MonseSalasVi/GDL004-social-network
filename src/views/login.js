export default () => {
    const count_title = document.createElement('h1')
    count_title.innerHTML = 'Sign In'

    //input mail
    const mail_SI = document.createElement('input')
    mail_SI.setAttribute('placeholder', 'Mail')
    mail_SI.setAttribute('class', 'inputs')
    //inout contrase;a
    const password_SI = document.createElement('input')
    password_SI.setAttribute('placeholder', 'Password')
    password_SI.setAttribute('type', 'password')
    password_SI.setAttribute('class', 'inputs')

    //div de botones

    const btnLI = document.createElement('button')
    btnLI.innerHTML = 'Log in'
    btnLI.setAttribute('class', "btnform")

    //almacena los btns
    const divbtn = document.createElement('div')
    divbtn.setAttribute('class', 'divbtns')
    divbtn.appendChild(btnLI)

    //almacenando todo
    const divform = document.createElement('div')
    divform.setAttribute('class', 'divform')
    divform.appendChild(count_title);
    divform.appendChild(mail_SI)
    divform.appendChild(password_SI)
    divform.appendChild(divbtn)

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



    const containerForm = document.createElement("section");
    containerForm.setAttribute('class', "formCount")
    containerForm.appendChild(divform)
    containerForm.appendChild(divText)

    document.body.appendChild(containerForm);
    return containerForm;
}