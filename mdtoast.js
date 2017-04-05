/* -- DO NOT REMOVE --
 * jQuery Material Toast plugin v1
 * 
 * Author: Dionlee Uy
 * Email: dionleeuy@gmail.com
 *
 * Date: Tue Apr 4 2017
 *
 * @requires jQuery
 * -- DO NOT REMOVE --
 */
 if (typeof jQuery === 'undefined') { throw new Error('MDToast: This plugin requires jQuery'); }
 +function ($) {
 	var MDToast = function (message, options) {
 		this.message = message;
 		this.options = options;
 		this.toastOpenClass = "md-toast-open";
 		this.toastModalClass = "md-toast-modal";
 		this.toastDataName = "dmu-md-toast";

 		this.toast = $('<div class="md-toast load"></div>');
 		this.action = $('<span class="action"></span>');

 		this.toast.addClass(options.type).text(message);

 		this.toastTimeout = null;

 		if (options.interaction) {
 			var that = this;
 			this.action.text(options.actionText)
	 			.on('click', function () {
	 				if (options.action) options.action(that);
	 			});
 			this.toast.append(this.action);
 		}

 		if (!options.init) this.show();
 	}

 	MDToast.prototype = {
 		constructor : MDToast,

 		show : function () {
 			var that = this,
 				callbacks = that.options.callbacks,
 				existingToast = $('.md-toast'),
 				doc = $('body');

 			if (that.toast.is(':visible')) return;

 			that.toast.data(that.toastDataName, that).appendTo(doc);

 			setTimeout(function () {
 				that.toast.removeClass('load');

 				if (existingToast.length > 0) {
 					existingToast.each(function () {
 						var ex_toast = $(this).data(that.toastDataName);

 						ex_toast.hide();
 					});
 				}

 				setTimeout(function () { if (callbacks && callbacks.shown) callbacks.shown(that); }, 300);

 				if (that.options.interaction) {
 					if (that.options.interactionTimeout)
 						that.toastTimeout = setTimeout(function () { that.hide(); }, that.options.interactionTimeout);
 				} else if (that.options.duration){
 					that.toastTimeout = setTimeout(function () { that.hide(); }, that.options.duration);
 				}

 				
 				doc.addClass(that.toastOpenClass);

 				if (that.options.modal) doc.addClass(that.toastModalClass);
 			}, 0);
 		},
 		hide: function () {
 			var that = this,
 				callbacks = that.options.callbacks;
 				doc = $('body');

 			clearTimeout(that.toastTimeout);

 			that.toast.addClass('load');
            doc.removeClass(that.toastOpenClass).removeClass(that.toastModalClass);
            setTimeout(function () {
                that.toast.remove();
                if(callbacks && callbacks.hidden) callbacks.hidden();
            }, 300);
 		}
 	}

 	$.mdtoast = function(message, options) {
 		return new MDToast(message, $.extend({}, $.mdtoast.defaults, null, !Array.isArray(options) && options));
 	}

 	$.mdtoast.defaults = {
 		init: false,				// true if initalize only, false to automatically show toast after initialization.
		duration: 5000,				// duration ot toast message.
		type: 'default',			// type of toast to display (can also be info, error, warning, success)
		modal: false,				// true if you want to disable pointer events when toast is shown
		interaction: false,			// determines if toast requires user interaction to dismiss
		interactionTimeout: null,	// if requires interaction, set the value for automatic dismissal of toast (e.g. 2000 -> 2 seconds)
		actionText: 'OK',			// if requires interaction, set the value like 'UNDO'
		action: function (data) {	// callback action for the user interaction, hides toast by default
			data.hide();
		},
		callbacks: {}				// callback object for toast; contains hidden() and shown()
	};

	$.mdtoast.type = {
		INFO : 'info',
		ERROR : 'error',
		WARNING : 'warning',
		SUCCESS : 'success'		
	};

	$.mdtoast.Constructor = MDToast;
 }(jQuery);