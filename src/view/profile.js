import {navbar} from './commonElements.js';
import {headerMenu} from './commonElements.js';
import { autEmailPass, signOutU} from '../models/auth.js';
export default () => {
    const viewProfile = `
    
    <div class="container_user">
        <div class="profile_information">
            <span class="flaticon-051-user"> User </span> 
        </div>  
            <div class="profile_description"> Descripción: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices faucibus elit ac rutrum. Donec porttitor tortor aliquam leo pellentesque, pulvinar condimentum sapien condimentum. 
            </div>
            <div class="profile_direction"> Dirección: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>   
          <div class="profile_pesornal_information"> Phonee number</div>
          <div class="flaticon-020-heart profile_icons"> iconos
          </div>          
         
    </div>
    <div class="container_post">
    <div class="profile_information">
        <span class="flaticon-051-user"> User </span> 
    </div>  
        <div class="profile_post"> Post: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices faucibus elit ac rutrum. Donec porttitor tortor aliquam leo pellentesque, pulvinar condimentum sapien condimentum. 
        </div>
        <div class="profile_post_icons"> 
        <i class="flaticon-020-heart"></i><i class="flaticon-034-chat"></i><i class="flaticon-018-settings"></i> iconos
        </div> 
         
     
</div>`;

const divElem = document.createElement('div');
divElem.setAttribute("class", "view_component");
// container.body.appendChild(divElem);
const divsignOut= document.createElement('div');
divsignOut.setAttribute("class","divsignOut")
const btnsignOut = document.createElement("BUTTON");
btnsignOut.onclick = signOutU;
btnsignOut.innerHTML= "SALIRRRRR"
divsignOut.appendChild(btnsignOut);
divElem.innerHTML ="Soy el Profile"
document.innerHTML = headerMenu();
divElem.appendChild(divsignOut)
document.innerHTML = navbar();


return divElem;
  
};