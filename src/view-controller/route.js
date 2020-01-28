import {
    components
} from '../view/index.js';
//import  {login } from '../view/login.js';
const changeView = (route) => {
    const container = document.getElementById('container')
    container.innerHTML = "";
    // const formCreate = document.getElementById('form-signIn');
    // formCreate.innerHTML ='';
    // login()
    console.log(route);
    switch (route) {

        case "#/FormCount":
            container.appendChild(components.formCount())
            break;
        case "#/Home":
            container.appendChild(components.home())
            break;
        case "#/Profile":
            container.appendChild(components.profile())
            break;
        case "#/EditProfile":
            container.appendChild(components.editProfile())
            break;
        case "#/Login":
            container.appendChild(components.login())
            break;

    }

    return null;
}

export {
    changeView
}