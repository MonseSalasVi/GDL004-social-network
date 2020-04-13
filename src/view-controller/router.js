import {
    components
} from '../views/index-views.js'

const changeView = (route) => {
    const container = document.getElementById('container')
    container.innerHTML = ''

    switch (route) {

        case "#/FormCount":
            container.appendChild(components.formCount())
            break;
        case "#/Login":
            container.appendChild(components.login())
            break;
        case "#/Home":
            container.appendChild(components.home())
            break;
        case "#/Profile":
            container.appendChild(components.profile())
            break;

    }
    return null
}
export {
    changeView
}