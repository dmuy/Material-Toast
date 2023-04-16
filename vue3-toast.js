import './dist/mdtoast.css'
import mdtoast from './dist/mdtoast.js'

export default {
    install(app, options) {
        app.config.globalProperties.$mdtoast = mdtoast

        app.provide('mdtoast', mdtoast)
    }
}