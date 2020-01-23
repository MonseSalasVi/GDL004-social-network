export default () => {
  const viewEditProfile = `<h2> ¡Soy el Edit-Profile </h2>
    <figure> <img src="/" alt="Edit-profile"> </figure>
    
    <div class='container'>
       
        <figure> <img src="/" alt="home"> </figure>
        <div class='' id="spa">
        <header class="header_nav">
          <ul class="header_nav_list">
            <li class="header_nav-page"> <a href="#/Profile"> Profile </a><span class="flaticon-009-next "></span> </span>
            </li>
            <li class="header_nav-user"> <span class="flaticon-051-user"><a href="#/EditProfile"> User</a> </span> </li>
          </ul>
        </header>
        <main class="main_container">
          <section id="container">  
            
          </section>
        </main>
        <nav class="navbar_bottom">
          <ul class="navbar_bottom_list">
            <li> <span class="flaticon-012-house"> <a href="#/Home"> Home</a> </span></li>
            <li> <span class="flaticon-036-zoom"> Search</span> </li>
            <li> <span class="flaticon-045-add"> Post</span> </li>
            <li> <button id=log-out type="submit"> <a href="">SALIRRRRR </button> </li>
          </ul>
        </nav>
      </div>
      
        
    </div>`

  const divElem = document.createElement('div')
  divElem.innerHTML = viewEditProfile;

  return divElem;
}