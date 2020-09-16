import './mdtoast.scss'
import { extend, buildUI, showToast } from './helpers'
import vars from './vars'

/**
 * Toast class
 */
class MDToast {
    constructor(message, options) {
        var args = arguments

        this.animateTime = 230
        this.message = args[0]
        this.options = extend(true, vars.defaults, args[1])
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
 * @param {object} options Toast configurations
 */
function mdtoast (message, options = {}) {
    return new MDToast(message, options)
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