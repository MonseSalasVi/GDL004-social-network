export default () => {
    const divElem = document.createElement('div');
    divElem.setAttribute("class", "view_component");
   // container.body.appendChild(divElem);
   divElem.innerHTML ="Soy el home"
  
    return divElem;
}
