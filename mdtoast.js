/* !Don't remove this!
 * Material Toast plugin v2.0
 * https://github.com/dmuy/Material-Toast
 * 
 * Author: Dionlee Uy
 * Email: dionleeuy@gmail.com
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define('mdtoast', [], factory(root));
	} else if (typeof exports === 'object') {
		// CommonJS
		module.exports = factory(root);
	} else {
		// Browser globals
		root.mdtoast = factory(root);
	}
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {
	'use strict';

	var supports = !!document.querySelector && !!root.addEventListener, // feature test
		defaults = {
			init: false,				// true if initalize only, false to automatically show toast after initialization.
			duration: 5000,				// duration ot toast message.
			type: 'default',			// type of toast to display (can also be info, error, warning, success)
			modal: false,				// true if you want to disable pointer events when toast is shown
			interaction: false,			// determines if toast requires user interaction to dismiss
			interactionTimeout: null,	// if requires interaction, set the value for automatic dismissal of toast (e.g. 2000 -> 2 seconds)
			actionText: 'OK',			// if requires interaction, set the value like 'UNDO'
			action: function (t) {		// callback action for the user interaction, hides toast by default
				t.hide();
			},
			callbacks: {}				// callback object for toast; contains hidden() and shown()
		}, mdtoast = function () {

			if (!(this instanceof mdtoast))
				return mdtoast.apply(Object.create(mdtoast.prototype), arguments);

			var _ = this, args = arguments;

			_.animateTime = 250;
	 		_.message = args[0];
	 		_.options = extendObj(defaults, args[1]);;
	 		_.toastOpenClass = "mdtoast--open";
	 		_.toastModalClass = "mdtoast--modal";
	 		_.toastTimeout = null;

			if (!_.options.init) buildUI.apply(_);

			return _;
		}, setAttributes = function(el, attrs) {
			/* src: http://jsfiddle.net/andr3ww/pvuzgfg6/13/ */
			var recursiveSet = function(at, set) {
				for (var prop in at) {
					var a = at[prop];
					if ((typeof a === 'object' && a !== null) && a.dataset === undefined && a[0] === undefined) { recursiveSet(a, set[prop]); }
					else { set[prop] = a; }
				}
			}
			recursiveSet(attrs, el);
		}, removeSpace = function (str) {
			return str.replace(/\s+/g,'');
		}, inArray = function (arr, item) {
			if (!arr) return false;
			if (arr[0] === undefined) return false;

			return arr.filter(function (x) { return x === item  }).length > 0
		}, buildUI = function() {

			if (!supports) return;

			var _ = this, _options = _.options, _callbacks = _options.callbacks, content, actionBtn,
				// createElement helper
				createElem = function(tag, className, content, isHtml) {
					var el = document.createElement(tag);

					el.className = className;
					
					if (typeof content !== 'undefined')
						el[isHtml || false ? 'innerHTML' : 'innerText'] = content;

					return el;
				},
				// global event handler
				evtHandler = function (e) {
					if (e.target.matches('.mdt-action')) {
						if ((e.type === 'click' || (e.type === 'keypress' && e.keyCode === 13)) && _options.action)
							_options.action(_);
					}
				};

			_.docFrag = document.createDocumentFragment();
			_.toast = createElem('div', 'mdtoast mdt--load');
			_.toast.tabIndex = 0;
	 		_.docFrag.appendChild(_.toast);

			if (_options.type !== 'default') 
				_.toast.classList.add('mdt--' + _options.type);

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
		};

	Object.defineProperties(mdtoast, {
		INFO : { value: 'info' },
		ERROR : { value: 'error' },
		WARNING : { value: 'warning' },
		SUCCESS : { value: 'success' }
	});

	/* Shows toast */
	mdtoast.prototype.show = function() {
		var _ = this, callbacks = _.options.callbacks, exToast = document.getElementsByClassName('mdtoast'), doc = document.body;

		if (doc.contains(_.toast)) return;

		if (_.options.init) buildUI.apply(this);

		for (var i = exToast.length - 1; i >= 0; i--) {
			exToast[i].mdtoast.hide();
		}

		doc.appendChild(_.docFrag);

		setTimeout(function () {
			_.toast.classList.remove('mdt--load');

			setTimeout(function () { 
				if (callbacks && callbacks.shown) callbacks.shown(_);

				_.toast.focus(); 
			}, _.animateTime);

			if (_.options.interaction) {
				if (_.options.interactionTimeout)
					_.toastTimeout = setTimeout(function () { _.hide() }, _.options.interactionTimeout);
			} else if (_.options.duration)
				_.toastTimeout = setTimeout(function () { _.hide() }, _.options.duration);
			
			doc.classList.add(_.toastOpenClass);

			if (_.options.modal) 
				doc.classList.add(_.toastModalClass);
		}, 10);
	}

	/* Hides toast */
	mdtoast.prototype.hide = function() {
		var _ = this, callbacks = _.options.callbacks, doc = document.body;

		clearTimeout(_.toastTimeout);

		_.toast.classList.add('mdt--load');
        doc.classList.remove(_.toastOpenClass);
        doc.classList.remove(_.toastModalClass);
        setTimeout(function () {
            doc.removeChild(_.toast);
            if(callbacks && callbacks.hidden) callbacks.hidden();
        }, _.animateTime);
	}

	/*
	* Vanilla JavaScript version of jQuery.extend()
	* src: https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
	*/
	function extendObj() {
		// Variables
		var extended = {};
		var deep = false;
		var i = 0;
		var length = arguments.length;

		// Check if a deep merge
		if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
			deep = arguments[0];
			i++;
		}

		// Merge the object into the extended object
		var merge = function (obj) {
			for ( var prop in obj ) {
				if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
					// If deep merge and property is an object, merge properties
					if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
						extended[prop] = extend( true, extended[prop], obj[prop] );
					} else {
						extended[prop] = obj[prop];
					}
				}
			}
		};

		// Loop through each object and conduct a merge
		for ( ; i < length; i++ ) {
			var obj = arguments[i];
			merge(obj);
		}

		return extended;
	}

	return mdtoast;
});