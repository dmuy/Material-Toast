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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$b =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var shared$3 = {exports: {}};

  var fails$3 = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$2 = fails$3;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$2(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var objectDefineProperty = {};

  var isObject$4 = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var global$a = global$b;
  var isObject$3 = isObject$4;

  var document$1 = global$a.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject$3(document$1) && isObject$3(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$2 = descriptors;
  var fails$1 = fails$3;
  var createElement = documentCreateElement;

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$2 && !fails$1(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var isObject$2 = isObject$4;

  var anObject$1 = function (it) {
    if (!isObject$2(it)) {
      throw TypeError(String(it) + ' is not an object');
    } return it;
  };

  var isObject$1 = isObject$4;

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive$1 = function (input, PREFERRED_STRING) {
    if (!isObject$1(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$1(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject$1(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$1(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var DESCRIPTORS$1 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var anObject = anObject$1;
  var toPrimitive = toPrimitive$1;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$1 ? $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var createPropertyDescriptor$1 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var DESCRIPTORS = descriptors;
  var definePropertyModule = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$1;

  var createNonEnumerableProperty$3 = DESCRIPTORS ? function (object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var global$9 = global$b;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;

  var setGlobal$2 = function (key, value) {
    try {
      createNonEnumerableProperty$2(global$9, key, value);
    } catch (error) {
      global$9[key] = value;
    } return value;
  };

  var global$8 = global$b;
  var setGlobal$1 = setGlobal$2;

  var SHARED = '__core-js_shared__';
  var store$3 = global$8[SHARED] || setGlobal$1(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  (shared$3.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.15.2',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$1 = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  var requireObjectCoercible = requireObjectCoercible$1;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$1 = function (argument) {
    return Object(requireObjectCoercible(argument));
  };

  var toObject = toObject$1;

  var hasOwnProperty = {}.hasOwnProperty;

  var has$3 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty.call(toObject(it), key);
  };

  var id = 0;
  var postfix = Math.random();

  var uid$2 = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var global$7 = global$b;

  var path$1 = global$7;

  var path = path$1;
  var global$6 = global$b;

  var aFunction = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn$1 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global$6[namespace])
      : path[namespace] && path[namespace][method] || global$6[namespace] && global$6[namespace][method];
  };

  var getBuiltIn = getBuiltIn$1;

  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

  var global$5 = global$b;
  var userAgent = engineUserAgent;

  var process = global$5.process;
  var versions = process && process.versions;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    version = match[0] < 4 ? 1 : match[0] + match[1];
  } else if (userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent.match(/Chrome\/(\d+)/);
      if (match) version = match[1];
    }
  }

  var engineV8Version = version && +version;

  /* eslint-disable es/no-symbol -- required for testing */

  var V8_VERSION = engineV8Version;
  var fails = fails$3;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$1 = nativeSymbol;

  var useSymbolAsUid = NATIVE_SYMBOL$1
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var global$4 = global$b;
  var shared$2 = shared$3.exports;
  var has$2 = has$3;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL = nativeSymbol;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var WellKnownSymbolsStore = shared$2('wks');
  var Symbol$1 = global$4.Symbol;
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

  var wellKnownSymbol$2 = function (name) {
    if (!has$2(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
      if (NATIVE_SYMBOL && has$2(Symbol$1, name)) {
        WellKnownSymbolsStore[name] = Symbol$1[name];
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
      }
    } return WellKnownSymbolsStore[name];
  };

  var wellKnownSymbol$1 = wellKnownSymbol$2;

  var TO_STRING_TAG$1 = wellKnownSymbol$1('toStringTag');
  var test = {};

  test[TO_STRING_TAG$1] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var redefine$1 = {exports: {}};

  var store$1 = sharedStore;

  var functionToString = Function.toString;

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (typeof store$1.inspectSource != 'function') {
    store$1.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  var inspectSource$2 = store$1.inspectSource;

  var global$3 = global$b;
  var inspectSource$1 = inspectSource$2;

  var WeakMap$1 = global$3.WeakMap;

  var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource$1(WeakMap$1));

  var shared$1 = shared$3.exports;
  var uid = uid$2;

  var keys = shared$1('keys');

  var sharedKey$1 = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys$1 = {};

  var NATIVE_WEAK_MAP = nativeWeakMap;
  var global$2 = global$b;
  var isObject = isObject$4;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
  var objectHas = has$3;
  var shared = sharedStore;
  var sharedKey = sharedKey$1;
  var hiddenKeys = hiddenKeys$1;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var WeakMap = global$2.WeakMap;
  var set, get, has$1;

  var enforce = function (it) {
    return has$1(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;
    set = function (it, metadata) {
      if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset.call(store, it, metadata);
      return metadata;
    };
    get = function (it) {
      return wmget.call(store, it) || {};
    };
    has$1 = function (it) {
      return wmhas.call(store, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function (it, metadata) {
      if (objectHas(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$1(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return objectHas(it, STATE) ? it[STATE] : {};
    };
    has$1 = function (it) {
      return objectHas(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor
  };

  var global$1 = global$b;
  var createNonEnumerableProperty = createNonEnumerableProperty$3;
  var has = has$3;
  var setGlobal = setGlobal$2;
  var inspectSource = inspectSource$2;
  var InternalStateModule = internalState;

  var getInternalState = InternalStateModule.get;
  var enforceInternalState = InternalStateModule.enforce;
  var TEMPLATE = String(String).split('String');

  (redefine$1.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;
    if (typeof value == 'function') {
      if (typeof key == 'string' && !has(value, 'name')) {
        createNonEnumerableProperty(value, 'name', key);
      }
      state = enforceInternalState(value);
      if (!state.source) {
        state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
    }
    if (O === global$1) {
      if (simple) O[key] = value;
      else setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
  });

  var toString$1 = {}.toString;

  var classofRaw$1 = function (it) {
    return toString$1.call(it).slice(8, -1);
  };

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var classofRaw = classofRaw$1;
  var wellKnownSymbol = wellKnownSymbol$2;

  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$1 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof = classof$1;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var redefine = redefine$1.exports;
  var toString = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    redefine(Object.prototype, 'toString', toString, { unsafe: true });
  }

  var vars = {
    defaults: {
      // true if initalize only, false to automatically show toast after initialization.
      init: false,
      // duration of toast message.
      duration: 5000,
      // type of toast to display (can also be info, error, warning, success)
      type: 'default',
      // toast position for larger screens (smaller screens will only display top or bottom)
      position: 'bottom left',
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

    _.toast.setAttribute('data-position', _options.position);

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
      this.options = extend(true, MDToast._defaults || vars.defaults, args[1]);
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


  _defineProperty(MDToast, "_defaults", null);

  function mdtoast(message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return new MDToast(message, options);
  } // info toast wrapper


  mdtoast.info = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return mdtoast(message, extend(true, options, {
      type: 'info'
    }));
  }; // error toast wrapper


  mdtoast.error = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return mdtoast(message, extend(true, options, {
      type: 'error'
    }));
  }; // warning toast wrapper


  mdtoast.warning = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return mdtoast(message, extend(true, options, {
      type: 'warning'
    }));
  }; // success toast wrapper


  mdtoast.success = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return mdtoast(message, extend(true, options, {
      type: 'success'
    }));
  }; // set defaults


  mdtoast.defaults = function (configs) {
    MDToast._defaults = extend(true, vars.defaults, configs);
  };

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
