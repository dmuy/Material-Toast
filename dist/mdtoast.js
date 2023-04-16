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
})(this, (function () { 'use strict';

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
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
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
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$9 =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var shared$3 = {exports: {}};

  var global$8 = global$9;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$1 = Object.defineProperty;

  var defineGlobalProperty$2 = function (key, value) {
    try {
      defineProperty$1(global$8, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$8[key] = value;
    } return value;
  };

  var global$7 = global$9;
  var defineGlobalProperty$1 = defineGlobalProperty$2;

  var SHARED = '__core-js_shared__';
  var store$3 = global$7[SHARED] || defineGlobalProperty$1(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  (shared$3.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.30.1',
    mode: 'global',
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var sharedExports = shared$3.exports;

  var fails$6 = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$5 = fails$6;

  var functionBindNative = !fails$5(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$1 = functionBindNative;

  var FunctionPrototype$1 = Function.prototype;
  var call$3 = FunctionPrototype$1.call;
  var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$1.bind.bind(call$3, call$3);

  var functionUncurryThis = NATIVE_BIND$1 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$3.apply(fn, arguments);
    };
  };

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$2 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$1 = isNullOrUndefined$2;

  var $TypeError$5 = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$1 = function (it) {
    if (isNullOrUndefined$1(it)) throw $TypeError$5("Can't call method on " + it);
    return it;
  };

  var requireObjectCoercible = requireObjectCoercible$1;

  var $Object$2 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$1 = function (argument) {
    return $Object$2(requireObjectCoercible(argument));
  };

  var uncurryThis$5 = functionUncurryThis;
  var toObject = toObject$1;

  var hasOwnProperty = uncurryThis$5({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
  };

  var uncurryThis$4 = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$2 = uncurryThis$4(1.0.toString);

  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$2(++id + postfix, 36);
  };

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$6 = global$9;
  var userAgent = engineUserAgent;

  var process = global$6.process;
  var Deno = global$6.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */

  var V8_VERSION = engineV8Version;
  var fails$4 = fails$6;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$4(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$1 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$1
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var global$5 = global$9;
  var shared$2 = sharedExports;
  var hasOwn$3 = hasOwnProperty_1;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var Symbol$1 = global$5.Symbol;
  var WellKnownSymbolsStore = shared$2('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

  var wellKnownSymbol$3 = function (name) {
    if (!hasOwn$3(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$3(Symbol$1, name)
        ? Symbol$1[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  var wellKnownSymbol$2 = wellKnownSymbol$3;

  var TO_STRING_TAG$1 = wellKnownSymbol$2('toStringTag');
  var test = {};

  test[TO_STRING_TAG$1] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var documentAll$2 = typeof document == 'object' && document.all;

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

  var documentAll_1 = {
    all: documentAll$2,
    IS_HTMLDDA: IS_HTMLDDA
  };

  var $documentAll$1 = documentAll_1;

  var documentAll$1 = $documentAll$1.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$a = $documentAll$1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var objectDefineProperty = {};

  var fails$3 = fails$6;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$3(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var isCallable$9 = isCallable$a;
  var $documentAll = documentAll_1;

  var documentAll = $documentAll.all;

  var isObject$5 = $documentAll.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable$9(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable$9(it);
  };

  var global$4 = global$9;
  var isObject$4 = isObject$5;

  var document$1 = global$4.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$4(document$1) && isObject$4(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$5 = descriptors;
  var fails$2 = fails$6;
  var createElement = documentCreateElement;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$5 && !fails$2(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$4 = descriptors;
  var fails$1 = fails$6;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$4 && fails$1(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var isObject$3 = isObject$5;

  var $String$2 = String;
  var $TypeError$4 = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$1 = function (argument) {
    if (isObject$3(argument)) return argument;
    throw $TypeError$4($String$2(argument) + ' is not an object');
  };

  var NATIVE_BIND = functionBindNative;

  var call$2 = Function.prototype.call;

  var functionCall = NATIVE_BIND ? call$2.bind(call$2) : function () {
    return call$2.apply(call$2, arguments);
  };

  var global$3 = global$9;
  var isCallable$8 = isCallable$a;

  var aFunction = function (argument) {
    return isCallable$8(argument) ? argument : undefined;
  };

  var getBuiltIn$1 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$3[namespace]) : global$3[namespace] && global$3[namespace][method];
  };

  var uncurryThis$3 = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$3({}.isPrototypeOf);

  var getBuiltIn = getBuiltIn$1;
  var isCallable$7 = isCallable$a;
  var isPrototypeOf = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var $Object$1 = Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable$7($Symbol) && isPrototypeOf($Symbol.prototype, $Object$1(it));
  };

  var $String$1 = String;

  var tryToString$1 = function (argument) {
    try {
      return $String$1(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$6 = isCallable$a;
  var tryToString = tryToString$1;

  var $TypeError$3 = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$1 = function (argument) {
    if (isCallable$6(argument)) return argument;
    throw $TypeError$3(tryToString(argument) + ' is not a function');
  };

  var aCallable = aCallable$1;
  var isNullOrUndefined = isNullOrUndefined$2;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$1 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
  };

  var call$1 = functionCall;
  var isCallable$5 = isCallable$a;
  var isObject$2 = isObject$5;

  var $TypeError$2 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$5(fn = input.toString) && !isObject$2(val = call$1(fn, input))) return val;
    if (isCallable$5(fn = input.valueOf) && !isObject$2(val = call$1(fn, input))) return val;
    if (pref !== 'string' && isCallable$5(fn = input.toString) && !isObject$2(val = call$1(fn, input))) return val;
    throw $TypeError$2("Can't convert object to primitive value");
  };

  var call = functionCall;
  var isObject$1 = isObject$5;
  var isSymbol$1 = isSymbol$2;
  var getMethod = getMethod$1;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$1 = wellKnownSymbol$3;

  var $TypeError$1 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$1('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$1(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call(exoticToPrim, input, pref);
      if (!isObject$1(result) || isSymbol$1(result)) return result;
      throw $TypeError$1("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol = isSymbol$2;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$1 = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var DESCRIPTORS$3 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var anObject = anObject$1;
  var toPropertyKey = toPropertyKey$1;

  var $TypeError = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$3 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    } return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var makeBuiltIn$2 = {exports: {}};

  var DESCRIPTORS$2 = descriptors;
  var hasOwn$2 = hasOwnProperty_1;

  var FunctionPrototype = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$2(FunctionPrototype, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || (DESCRIPTORS$2 && getDescriptor(FunctionPrototype, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$2 = functionUncurryThis;
  var isCallable$4 = isCallable$a;
  var store$1 = sharedStore;

  var functionToString = uncurryThis$2(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$4(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$1 = store$1.inspectSource;

  var global$2 = global$9;
  var isCallable$3 = isCallable$a;

  var WeakMap$1 = global$2.WeakMap;

  var weakMapBasicDetection = isCallable$3(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var createPropertyDescriptor$1 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var DESCRIPTORS$1 = descriptors;
  var definePropertyModule$1 = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$1;

  var createNonEnumerableProperty$1 = DESCRIPTORS$1 ? function (object, key, value) {
    return definePropertyModule$1.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var shared$1 = sharedExports;
  var uid = uid$2;

  var keys = shared$1('keys');

  var sharedKey$1 = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$1 = global$9;
  var isObject = isObject$5;
  var createNonEnumerableProperty = createNonEnumerableProperty$1;
  var hasOwn$1 = hasOwnProperty_1;
  var shared = sharedStore;
  var sharedKey = sharedKey$1;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$1 = global$1.TypeError;
  var WeakMap = global$1.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function (it, metadata) {
      if (store.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function (it) {
      return store.get(it) || {};
    };
    has = function (it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey('state');
    set = function (it, metadata) {
      if (hasOwn$1(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$1(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$1(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var uncurryThis$1 = functionUncurryThis;
  var fails = fails$6;
  var isCallable$2 = isCallable$a;
  var hasOwn = hasOwnProperty_1;
  var DESCRIPTORS = descriptors;
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
  var inspectSource = inspectSource$1;
  var InternalStateModule = internalState;

  var enforceInternalState = InternalStateModule.enforce;
  var getInternalState = InternalStateModule.get;
  var $String = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty = Object.defineProperty;
  var stringSlice$1 = uncurryThis$1(''.slice);
  var replace = uncurryThis$1(''.replace);
  var join = uncurryThis$1([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
    return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
    if (stringSlice$1($String(name), 0, 7) === 'Symbol(') {
      name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
      defineProperty(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState(value);
    if (!hasOwn(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$1(function toString() {
    return isCallable$2(this) && getInternalState(this).source || inspectSource(this);
  }, 'toString');

  var makeBuiltInExports = makeBuiltIn$2.exports;

  var isCallable$1 = isCallable$a;
  var definePropertyModule = objectDefineProperty;
  var makeBuiltIn = makeBuiltInExports;
  var defineGlobalProperty = defineGlobalProperty$2;

  var defineBuiltIn$1 = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$1(value)) makeBuiltIn(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;
      else defineGlobalProperty(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
      } catch (error) { /* empty */ }
      if (simple) O[key] = value;
      else definePropertyModule.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    } return O;
  };

  var uncurryThis = functionUncurryThis;

  var toString$1 = uncurryThis({}.toString);
  var stringSlice = uncurryThis(''.slice);

  var classofRaw$1 = function (it) {
    return stringSlice(toString$1(it), 8, -1);
  };

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable = isCallable$a;
  var classofRaw = classofRaw$1;
  var wellKnownSymbol = wellKnownSymbol$3;

  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var $Object = Object;

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
      : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
  };

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof = classof$1;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineBuiltIn = defineBuiltIn$1;
  var toString = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    defineBuiltIn(Object.prototype, 'toString', toString, { unsafe: true });
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
    var length = arguments.length;

    // Check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }

    // Merge the object into the extended object
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
    };

    // Loop through each object and conduct a merge
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
  }

  // info toast wrapper
  mdtoast.info = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return mdtoast(message, extend(true, options, {
      type: 'info'
    }));
  };

  // error toast wrapper
  mdtoast.error = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return mdtoast(message, extend(true, options, {
      type: 'error'
    }));
  };

  // warning toast wrapper
  mdtoast.warning = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return mdtoast(message, extend(true, options, {
      type: 'warning'
    }));
  };

  // success toast wrapper
  mdtoast.success = function (message) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return mdtoast(message, extend(true, options, {
      type: 'success'
    }));
  };

  // set defaults
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

}));
