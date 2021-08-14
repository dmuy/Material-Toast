import vars from './vars'

/**
* Vanilla JavaScript version of jQuery.extend()
* @see https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
*/
export function extend() {
    // Variables
    var extended = {}
    var deep = false
    var i = 0
    var length = arguments.length

    // Check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
        deep = arguments[0]
        i++
    }

    // Merge the object into the extended object
    var merge = function (obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                // If deep merge and property is an object, merge properties
                if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    extended[prop] = extend(true, extended[prop], obj[prop])
                } else {
                    extended[prop] = obj[prop]
                }
            }
        }
    };

    // Loop through each object and conduct a merge
    for (; i < length; i++) {
        var obj = arguments[i]
        merge(obj)
    }

    return extended
}

/**
 * `document.createElement` wrapper function
 * @param {string} tag Element tag name
 * @param {string} className Element class name
 * @param {string} content Element content
 * @param {boolean} isHtml Determines if content is HTML
 */
export function createElem(tag, className, content, isHtml) {
    var el = document.createElement(tag)

    el.className = className

    if (typeof content !== 'undefined')
        el[isHtml || false ? 'innerHTML' : 'innerText'] = content

    return el
}

/**
 * Builds the toast UI
 */
export function buildUI () {
    var _ = this, _options = _.options, content, actionBtn,
        // global event handler
        evtHandler = function (e) {
            if (e.target.matches('.mdt-action')) {
                if ((e.type === 'click' || (e.type === 'keypress' && e.keyCode === 13)) && _options.action)
                    _options.action.call(_, e)
            }
        }

    _.docFrag = document.createDocumentFragment()
    _.toast = createElem('div', 'mdtoast mdt--load')
    _.toast.tabIndex = 0
    _.docFrag.appendChild(_.toast)

    if (_options.type !== 'default')
        _.toast.classList.add('mdt--' + _options.type)

    _.toast.setAttribute('data-position', _options.position)

    content = createElem('div', 'mdt-message', _.message, true)
    _.toast.appendChild(content)

    actionBtn = createElem('span', 'mdt-action')

    if (_options.interaction) {
        actionBtn.innerText = _options.actionText
        actionBtn.tabIndex = 0
        _.toast.classList.add('mdt--interactive')
        _.toast.appendChild(actionBtn)
    }

    _.toast.addEventListener('click', evtHandler, false)
    _.toast.addEventListener('keypress', evtHandler, false)

    _.toast.mdtoast = _

    if (!_.options.init) _.show()
}

/**
 * Show toast wrapper
 * @param {Function} callback Callback function after show
 */
export function showToast(callback) {
    let _ = this, doc = document.body, callbacks = _.options.callbacks

    doc.appendChild(_.docFrag)

    setTimeout(() => {
        _.toast.classList.remove('mdt--load')

        setTimeout(() => {
            if (callbacks && callbacks.shown) callbacks.shown.call(_)

            if (callback && typeof callback === 'function') callback.call(_)
        }, _.animateTime)

        if (_.options.interaction) {
            if (_.options.interactionTimeout)
                _.timeout = setTimeout(() => { _.hide() }, _.options.interactionTimeout)
        } else if (_.options.duration)
            _.timeout = setTimeout(() => { _.hide() }, _.options.duration)

        doc.classList.add(vars.toastOpenClass)

        if (_.options.modal)
            doc.classList.add(vars.toastModalClass)
    }, 15)
}