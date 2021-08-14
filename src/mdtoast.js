import { extend, buildUI, showToast } from './helpers'
import vars from './vars'

/**
 * Toast class
 */
class MDToast {
    static _defaults = null;

    constructor(message, options) {
        var args = arguments

        this.animateTime = 230
        this.message = args[0]
        this.options = extend(true, MDToast._defaults || vars.defaults, args[1])
        this.timeout = null

        if (!this.options.init)
            buildUI.call(this)
    }

    show(callback) {
        var _ = this, exToast = document.getElementsByClassName('mdtoast'), doc = document.body

        if (doc.contains(_.toast))
            return

        if (_.options.init)
            buildUI.apply(_)

        if (exToast.length > 0) {
            for (var i = exToast.length - 1; i >= 0; i--) {
                exToast[i].mdtoast.hide(function () {
                    if (i < 0) {
                        showToast.call(_, callback)
                    }
                })
            }
        } else {
            showToast.call(_, callback)
        }
    }

    hide(callback) {
        var _ = this, callbacks = _.options.callbacks, doc = document.body

        clearTimeout(_.timeout)

        _.toast.classList.add('mdt--load')
        doc.classList.remove(vars.toastOpenClass)
        doc.classList.remove(vars.toastModalClass)
        setTimeout(function () {
            doc.removeChild(_.toast)
            if (callbacks && callbacks.hidden)
                callbacks.hidden.call(_)

            if (callback && typeof callback === 'function')
                callback.call(_)
        }, _.animateTime)
    }
}

/**
 * Creates a toast
 * @param {string} message Toast message
 * @param {Object} options Toast configurations
 * @param {boolean} options.init=false Determines if toast is initialize-only (meaning toast will not show unless `show()` is called
 * @param {number} options.duration=5000 Determines the toast display duration (in milliseconds)
 * @param {('info' | 'warning' | 'success' | 'error')} options.type Determines the type of toast to display
 * @param {('top left' | 'top center' | 'top right' | 'bottom left' | 'bottom center' | 'bottom right')} options.position Determines the display position of the toast
 * @param {boolean} options.modal=false Determines if toast is modal (pointer events on other elements will be disabled)
 * @param {boolean} options.interaction=false Determines if toast requires user interaction to dismiss or has some sort of user interaction button to click
 * @param {number} options.interactionTimeout=null Determines the toast duration (timeout to dismiss) if interaction is set to `true` - this overrides the duration option if interaction is set to `true`
 * @param {string} options.actionText=OK The action text to display for user interaction (e.g. `UNDO` -> showing toast after archiving items and giving the user an option to undo archiving.)
 * @param {Function} options.action This will be the function to be called when the user clicks the action text - default calls the toast's `hide()` method
 * @param {object} options.callbacks Callback methods
 * @param {Function} options.callbacks.shown Callback function after toast is displayed
 * @param {Function} options.callbacks.hidden Callback function after toast is dismissed
 */
function mdtoast (message, options = {}) {
    return new MDToast(message, options)
}

// info toast wrapper
mdtoast.info = function (message, options = {}) {
    return mdtoast(message, extend(true, options, { type: 'info' }))
}

// error toast wrapper
mdtoast.error = function (message, options = {}) {
    return mdtoast(message, extend(true, options, { type: 'error' }))
}

// warning toast wrapper
mdtoast.warning = function (message, options = {}) {
    return mdtoast(message, extend(true, options, { type: 'warning' }))
}

// success toast wrapper
mdtoast.success = function (message, options = {}) {
    return mdtoast(message, extend(true, options, { type: 'success' }))
}

// set defaults
mdtoast.defaults = function (configs) {
    MDToast._defaults = extend(true, vars.defaults, configs)
}

Object.defineProperties(mdtoast, {
    INFO: { value: 'info' },
    ERROR: { value: 'error' },
    WARNING: { value: 'warning' },
    SUCCESS: { value: 'success' }
})

/* Polyfills for unsupported methods/functions */
if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i = matches.length
            while (--i >= 0 && matches.item(i) !== this) { }
            return i > -1
        }
}

export default mdtoast