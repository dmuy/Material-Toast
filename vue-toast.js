import './dist/mdtoast.css'
import mdtoast from './dist/mdtoast.js'

export default {
    install(Vue, options) {
        /**
         * Shows an alert message
         * @param {string} message Toast message
         * @param {Object} config Toast configurations
         * @param {boolean} options.init=false Determines if toast is initialize-only (meaning toast will not show unless `show()` is called
         * @param {number} options.duration=5000 Determines the toast display duration (in milliseconds)
         * @param {('info' | 'warning' | 'success' | 'error')} options.type Determines the type of toast to display
         * @param {boolean} options.modal=false Determines if toast is modal (pointer events on other elements will be disabled)
         * @param {boolean} options.interaction=false Determines if toast requires user interaction to dismiss or has some sort of user interaction button to click
         * @param {number} options.interactionTimeout=null Determines the toast duration (timeout to dismiss) if interaction is set to `true` - this overrides the duration option if interaction is set to `true`
         * @param {string} options.actionText=OK The action text to display for user interaction (e.g. `UNDO` -> showing toast after archiving items and giving the user an option to undo archiving.)
         * @param {Function} options.action This will be the function to be called when the user clicks the action text - default calls the toast's `hide()` method
         * @param {object} options.callbacks Callback methods
         * @param {Function} options.callbacks.shown Callback function after toast is displayed
         * @param {Function} options.callbacks.hidden Callback function after toast is dismissed
         */
        Vue.prototype.$mdtoast = (message, config) => {
            mdtoast(message, config)
        }
    }
}