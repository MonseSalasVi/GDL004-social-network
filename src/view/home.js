
import {navbar} from './commonElements.js';
import {headerMenu} from './commonElements.js';

export default () => {
  
  const divElem = document.createElement('div');
  divElem.setAttribute("class", "view_component");
 // container.body.appendChild(divElem);
 divElem.innerHTML ="Soy el HOME"
 document.innerHTML = headerMenu();
  
  document.innerHTML = navbar();

  
  return divElem;
   
};
