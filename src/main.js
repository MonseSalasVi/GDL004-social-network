//import initFirebase from "./config/initFirebase"
import setUp from './config/setUp.js';
import {
    changeView
} from './view-controller/router.js'


const init = () => {
    //initFirebase();
    setUp();
    changeView(window.location.hash)
    window.addEventListener('hashchange', () => changeView(window.location.hash))
}

window.addEventListener('load', init)