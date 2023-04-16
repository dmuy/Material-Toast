import './dist/mdtoast.css'
import mdtoast from './dist/mdtoast.js'

export default {
    install(Vue, options) {
        Vue.prototype.$mdtoast = mdtoast
    }
}