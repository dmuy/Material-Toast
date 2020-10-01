/*!Don't remove this!
 * Material-Toast plugin v2.0
 * https://github.com/dmuy/Material-Toast
 * 
 * Author: Dionlee Uy
 * Email: dionleeuy@gmail.com
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mdtoast = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var vars = {
    defaults: {
      // true if initalize only, false to automatically show toast after initialization.
      init: false,
      // duration of toast message.
      duration: 5000,
      // type of toast to display (can also be info, error, warning, success)
      type: 'default',
      // true if you want to disable pointer events when toast is shown
      modal: false,
      // determines if toast requires user interaction to dismiss
      interaction: false,
      // if requires interaction, set the value for automatic dismissal of toast (e.g. 2000 -> 2 seconds)
      interactionTimeout: null,
      // if requires interaction, set the value like 'UNDO'
      actionText: 'OK',
      // callback action for the user interaction, hides toast by default
      action: function action() {
        this.hide();
      },
      // callback object for toast; contains hidden() and shown()
      callbacks: {}
    },
    toastOpenClass: 'mdtoast--open',
    toastModalClass: 'mdtoast--modal'
  };

  /**
  * Vanilla JavaScript version of jQuery.extend()
  * @see https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
  */

  function extend() {
    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length; // Check if a deep merge

    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    } // Merge the object into the extended object


    var merge = function merge(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          // If deep merge and property is an object, merge properties
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    }; // Loop through each object and conduct a merge


    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  }
  /**
   * `document.createElement` wrapper function
   * @param {string} tag Element tag name
   * @param {string} className Element class name
   * @param {string} content Element content
   * @param {boolean} isHtml Determines if content is HTML
   */

  function createElem(tag, className, content, isHtml) {
    var el = document.createElement(tag);
    el.className = className;
    if (typeof content !== 'undefined') el[isHtml || false ? 'innerHTML' : 'innerText'] = content;
    return el;
  }
  /**
   * Builds the toast UI
   */

  function buildUI() {
    var _ = this,
        _options = _.options,
        content,
        actionBtn,
        // global event handler
    evtHandler = function evtHandler(e) {
      if (e.target.matches('.mdt-action')) {
        if ((e.type === 'click' || e.type === 'keypress' && e.keyCode === 13) && _options.action) _options.action.call(_, e);
      }
    };

    _.docFrag = document.createDocumentFragment();
    _.toast = createElem('div', 'mdtoast mdt--load');
    _.toast.tabIndex = 0;

    _.docFrag.appendChild(_.toast);

    if (_options.type !== 'default') _.toast.classList.add('mdt--' + _options.type);
    content = createElem('div', 'mdt-message', _.message, true);

    _.toast.appendChild(content);

    actionBtn = createElem('span', 'mdt-action');

    if (_options.interaction) {
      actionBtn.innerText = _options.actionText;
      actionBtn.tabIndex = 0;

      _.toast.classList.add('mdt--interactive');

      _.toast.appendChild(actionBtn);
    }

    _.toast.addEventListener('click', evtHandler, false);

    _.toast.addEventListener('keypress', evtHandler, false);

    _.toast.mdtoast = _;
    if (!_.options.init) _.show();
  }
  /**
   * Show toast wrapper
   * @param {Function} callback Callback function after show
   */

  function showToast(callback) {
    var _ = this,
        doc = document.body,
        callbacks = _.options.callbacks;

    doc.appendChild(_.docFrag);
    setTimeout(function () {
      _.toast.classList.remove('mdt--load');

      setTimeout(function () {
        if (callbacks && callbacks.shown) callbacks.shown.call(_);
        if (callback && typeof callback === 'function') callback.call(_);
      }, _.animateTime);

      if (_.options.interaction) {
        if (_.options.interactionTimeout) _.timeout = setTimeout(function () {
          _.hide();
        }, _.options.interactionTimeout);
      } else if (_.options.duration) _.timeout = setTimeout(function () {
        _.hide();
      }, _.options.duration);

      doc.classList.add(vars.toastOpenClass);
      if (_.options.modal) doc.classList.add(vars.toastModalClass);
    }, 15);
  }

  /**
   * Toast class
   */

  var MDToast = /*#__PURE__*/function () {
    function MDToast(message, options) {
      _classCallCheck(this, MDToast);

      var args = arguments;
      this.animateTime = 230;
      this.message = args[0];
      this.options = extend(true, vars.defaults, args[1]);
      this.timeout = null;
      if (!this.options.init) buildUI.call(this);
    }

    _createClass(MDToast, [{
      key: "show",
      value: function show(callback) {
        var _ = this,
            exToast = document.getElementsByClassName('mdtoast'),
            doc = document.body;

        if (doc.contains(_.toast)) return;
        if (_.options.init) buildUI.apply(_);

        if (exToast.length > 0) {
          for (var i = exToast.length - 1; i >= 0; i--) {
            exToast[i].mdtoast.hide(function () {
              if (i < 0) {
                showToast.call(_, callback);
              }
            });
          }
        } else {
          showToast.call(_, callback);
        }
      }
    }, {
      key: "hide",
      value: function hide(callback) {
        var _ = this,
            callbacks = _.options.callbacks,
            doc = document.body;

        clearTimeout(_.timeout);

        _.toast.classList.add('mdt--load');

        doc.classList.remove(vars.toastOpenClass);
        doc.classList.remove(vars.toastModalClass);
        setTimeout(function () {
          doc.removeChild(_.toast);
          if (callbacks && callbacks.hidden) callbacks.hidden.call(_);
          if (callback && typeof callback === 'function') callback.call(_);
        }, _.animateTime);
      }
    }]);

    return MDToast;
  }();
  /**
   * Creates a toast
   * @param {string} message Toast message
   * @param {Object} options Toast configurations
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


  function mdtoast(message, options) {
    if (!options) options = {};
    return new MDToast(message, options);
  }

  Object.defineProperties(mdtoast, {
    INFO: {
      value: 'info'
    },
    ERROR: {
      value: 'error'
    },
    WARNING: {
      value: 'warning'
    },
    SUCCESS: {
      value: 'success'
    }
  });
  /* Polyfills for unsupported methods/functions */

  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  }

  return mdtoast;

})));
