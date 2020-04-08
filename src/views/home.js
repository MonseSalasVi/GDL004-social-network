import postMethod from '../database/post.js';
const  {createpost, historypost} = postMethod;
import {get_user}  from '../auth/signup.js'
//import email_user from '../aut'


export default () => {
    //menu
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



    //name
    const post_name = document.createElement('h1')
    post_name.innerHTML = 'email_user'
    const post_titulo = document.createElement('div')
    post_titulo.setAttribute('class', 'post_titulo')

    get_user((user) => {
        if (user) {
            const post_name = document.createElement('h1')
            post_name.innerHTML = user.email;
            post_titulo.appendChild(post_name)
        }
 
    })

    //textarea
    const post_textarea = document.createElement('textarea')
    post_textarea.setAttribute('class', 'post_textarea')
    post_textarea.setAttribute('placeholder', '......')
    post_textarea.setAttribute('id', 'post_textarea')

    //div que contiene el textarea
    const post_container = document.createElement('div')
    post_container.setAttribute('class', 'post_container')
    post_container.appendChild(post_textarea)

    const btn_guardar = document.createElement('button')
    btn_guardar.setAttribute('class', 'btn_guardar')
    btn_guardar.innerHTML = 'Send'
    btn_guardar.addEventListener('click', () => (createpost(post_textarea.value)))
 
    const post_footer = document.createElement('div')
    post_footer.setAttribute('class', 'post_footer')
    

    post_footer.appendChild(btn_guardar)

    const containerPosts = document.createElement('li')
    containerPosts.setAttribute('id','containerPosts')
    containerPosts.setAttribute('class','containerPosts')
    historypost()
    
    //div post 
    const post = document.createElement('div')
    post.setAttribute('class', 'post')
    //todo lo que contiene el post
    post.appendChild(post_titulo)
    post.appendChild(post_container)
    post.appendChild(post_footer)

    //contenedor de post pasados
    const containerHome = document.createElement('div');
    containerHome.setAttribute('class', "containerHome")


    containerHome.appendChild(menu)
    containerHome.appendChild(post)
    containerHome.appendChild(containerPosts)
    
    
    return containerHome;
}
