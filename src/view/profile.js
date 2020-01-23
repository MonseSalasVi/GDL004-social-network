export default () => {
    const viewProfile = `
    <h2> ¡Soy el Profile </h2>
    <div class="container">
        <div class="profile_information">
            <span class="flaticon-051-user"> User </span> 
            <div class="profile_description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices faucibus elit ac rutrum. Donec porttitor tortor aliquam leo pellentesque, pulvinar condimentum sapien condimentum. 
            </div>
            <div class="profile_direction">  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
             
        </div>   
    </div>
    <div class="container">
        <div class="profile_information">
            <span class="flaticon-051-user"> User </span> 
            <div class="profile_description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices faucibus elit ac rutrum. Donec porttitor tortor aliquam leo pellentesque, pulvinar condimentum sapien condimentum. 
            </div>
            <div class="profile_direction">  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
             
        </div>   
        <li> <button id=log-out type="submit"> <a href="">SALIRRRRR </button> </li>
           
           
    </div>`

    const divElem = document.createElement('div')
    divElem.innerHTML = viewProfile;

    return divElem;
}