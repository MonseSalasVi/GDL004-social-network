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

const containerHome = document.createElement('div');
containerHome.setAttribute('class', "containerHome")


containerHome.appendChild(menu)

document.body.appendChild(containerHome);
    return containerHome;
}
