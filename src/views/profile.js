import {
    log_out
} from '../auth/signup.js'

export default () => {
    //Menu
    const menu = document.createElement('nav')
    menu.setAttribute('class', 'header')
    const li_ = document.createElement('li')
    const list_home = document.createElement('a')
    list_home.setAttribute('href', '#/Home')
    list_home.innerHTML = 'Home'
    const li_1 = document.createElement('li')
    const list_profile = document.createElement('a')
    list_profile.setAttribute('href', '#/Profile')
    list_profile.innerHTML = 'Profile'
    li_.appendChild(list_home)
    li_1.appendChild(list_profile)
    //lo que guarde el menu
    menu.appendChild(li_)
    menu.appendChild(li_1)

    const containerProfile = document.createElement('div');
    containerProfile.setAttribute('class', "containerProfile")

    const btn_logOut = document.createElement('button');
    btn_logOut.addEventListener('click', log_out)
    btn_logOut.innerHTML = 'SALIR'


    containerProfile.appendChild(menu)
    containerProfile.appendChild(btn_logOut)

    document.body.appendChild(containerProfile);
    return containerProfile;
}