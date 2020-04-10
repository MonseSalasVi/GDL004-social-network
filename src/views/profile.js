import {
    log_out
} from '../auth/signup.js'
import {
    get_user
} from '../auth/signup.js'
import postMethod from '../database/post.js';
const {
    createpost,
    historypost
} = postMethod;
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

    //name
    const post_name = document.createElement('h1')
    post_name.innerHTML = 'email_user'
    post_name.setAttribute('id', 'post_name')
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
    btn_guardar.setAttribute('class', 'btn_delete')
    btn_guardar.innerHTML = 'Send'
    btn_guardar.addEventListener('click', () => (createpost(post_textarea.value)))
    const btn_editar = document.createElement('button')
    btn_editar.setAttribute('id', 'btn_editar')
    btn_editar.setAttribute('class', 'btn_editar')

    //pie del post
    const post_footer = document.createElement('div')
    post_footer.setAttribute('class', 'post_footer')
    post_footer.appendChild(btn_guardar)
    post_footer.appendChild(btn_editar)

    //div post 
    const post = document.createElement('div')
    post.setAttribute('class', 'post')
    //todo lo que contiene el post
    post.appendChild(post_titulo)
    post.appendChild(post_container)
    post.appendChild(post_footer)

    //div contenedor home
    const containerProfile = document.createElement('div');
    containerProfile.setAttribute('class', "containerHome")
    //boton para salir
    const btn_logOut = document.createElement('button')
    btn_logOut.addEventListener('click', log_out)
    btn_logOut.setAttribute('class', 'btn_post')
    btn_logOut.innerHTML = 'SALIR'

    const containerPosts = document.createElement('li')
    containerPosts.setAttribute('id', 'containerPosts')
    containerPosts.setAttribute('class', 'containerPosts')
    historypost()

    const footer = document.createElement('footer')
    footer.setAttribute('class', 'footer')
    footer.appendChild(btn_logOut)
    
    containerProfile.appendChild(menu)
    containerProfile.appendChild(post)
    // containerProfile.appendChild(new_post)
    containerProfile.appendChild(containerPosts)
    containerProfile.appendChild(footer)
    return containerProfile;
}