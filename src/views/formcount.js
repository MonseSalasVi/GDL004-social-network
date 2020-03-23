export default () => {
    const count_title = document.createElement('h1')
    count_title.innerHTML = 'Create account'

    //input name
    const count_name = document.createElement('input')
    count_name.innerHTML = 'name'
    count_name.setAttribute('placeholder', 'Name')
    count_name.setAttribute('class', 'inputs')
    //input mail
    const count_mail = document.createElement('input')
    count_mail.setAttribute('placeholder', 'Mail')
    count_mail.setAttribute('class', 'inputs')
    //inout contrase;a
    const count_password = document.createElement('input')
    count_password.setAttribute('placeholder', 'Password')
    count_password.setAttribute('type', 'password')
    count_password.setAttribute('class', 'inputs')

    // boton
    const btnSU = document.createElement('button')
    btnSU.innerHTML = 'SingUp'
    btnSU.setAttribute('class', "btnform")

    //almacena los btns
    const divbtn = document.createElement('div')
    divbtn.setAttribute('class', 'divbtns')
    divbtn.appendChild(btnSU)


    //almacenando todo
    const divform = document.createElement('div')
    divform.setAttribute('class', 'divform')
    divform.appendChild(count_title);
    divform.appendChild(count_name)
    divform.appendChild(count_mail)
    divform.appendChild(count_password)
    divform.appendChild(divbtn)




    const containerForm = document.createElement("section");
    containerForm.setAttribute('class', "formCount")
    containerForm.appendChild(divform)

    document.body.appendChild(containerForm);
    return containerForm;


}