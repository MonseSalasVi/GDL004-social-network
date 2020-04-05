import postMethod from '../database/post.js';
const  {createpost, historypost} = postMethod;


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
    //fecha
    const post_date = document.createElement('p')
    post_date.innerHTML = '25/02/2020'
    const btn_delete = document.createElement('button')
    btn_delete.setAttribute('class', 'btn_delete')
    btn_delete.innerHTML = 'X'
    //div del titulo del post
    const post_titulo = document.createElement('div')
    post_titulo.setAttribute('class', 'post_titulo')
    post_titulo.appendChild(post_name)
    post_titulo.appendChild(post_date)
    post_titulo.appendChild(btn_delete)


    //textarea
    const post_textarea = document.createElement('textarea')
    post_textarea.setAttribute('class', 'post_textarea')
    post_textarea.setAttribute('placeholder', '......')
    post_textarea.setAttribute('id', 'post_textarea')

    //div que contiene el textarea
    const post_container = document.createElement('div')
    post_container.setAttribute('class', 'post_container')
    post_container.appendChild(post_textarea)


    //menecorazona
    const love = document.createElement('button')
    love.setAttribute('class', 'love')
    love.innerHTML = 'Love'

    //radio soloyo
    const onlymy = document.createElement('input')
    onlymy.setAttribute('type', 'radio')
    //texto Solo yo
    const private_text = document.createElement('p')
    private_text.innerHTML = 'Only my'
    //div que contiene textoprivate y radio
    const btn_guardar = document.createElement('a')
    btn_guardar.setAttribute('class', 'btn_guardar')
    btn_guardar.innerHTML = 'Guardar'
    btn_guardar.addEventListener('click', () => (createpost(post_textarea.value)))
    //div privado
    const div_private = document.createElement('div')
    div_private.setAttribute('class', 'div_private')
    div_private.appendChild(onlymy)
    div_private.appendChild(private_text)
    //pie del post
    const post_footer = document.createElement('div')
    post_footer.setAttribute('class', 'post_footer')
    post_footer.appendChild(love)
    post_footer.appendChild(div_private)
    post_footer.appendChild(btn_guardar)

    const containerPosts = document.createElement('div')
    historypost().then((listElements) => {   
    })

    //div post 
    const post = document.createElement('div')
    post.setAttribute('class', 'post')
    //todo lo que contiene el post
    post.appendChild(post_titulo)
    post.appendChild(post_container)
    post.appendChild(post_footer)

    //contenedor de post pasados
    const history = document.createElement('div')
    history.setAttribute('class','history')
    history.setAttribute('id','history')
    // history.appendChild(post)

    //Esto son otros posst//
    //const historypost = document.createElement(div)



    const containerHome = document.createElement('div');
    containerHome.setAttribute('class', "containerHome")


    containerHome.appendChild(menu)
    containerHome.appendChild(post)
    containerHome.appendChild(containerPosts)
    
    return containerHome;
}