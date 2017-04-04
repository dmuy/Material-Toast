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
 		this.toast_open_class = "md-toast-open";
 		this.toast_data_name = "dmu-md-toast";

 		this.toast = $('<div class="md-toast load"></div>');
 		this.action = $('<span class="action"></span>');

 		this.toast.addClass(options.type).text(message);

 		this.toast_timeout = null;

 		if (options.interaction) {
 			var that = this;
 			this.action.text(options.actionText).on('click', function () {
 				if (options.action) options.action(that);
 			});
 			this.toast.append(this.action);
 		}

 		this.show();
 	}

 	MDToast.prototype = {
 		constructor : MDToast,

 		show : function () {
 			var that = this,
 				callbacks = that.options.callbacks,
 				existing_toast = $('.md-toast'),
 				doc = $('body');

 			that.toast.data(that.toast_data_name, that).appendTo(doc);

 			setTimeout(function () {
 				that.toast.removeClass('load');
 				doc.addClass(that.toast_open_class);

 				if (existing_toast.length > 0) {
 					existing_toast.each(function () {
 						var ex_toast = $(this).data(that.toast_data_name);

 						ex_toast.hide();
 					});
 				}

 				setTimeout(function () { if (callbacks && callbacks.shown) callbacks.shown(that); }, 300);

 				that.toast_timeout = setTimeout(function () { that.hide(); }, that.options.duration);

 				if(that.options.interaction) clearTimeout(that.toast_timeout);
 			}, 0);
 		},
 		hide: function () {
 			var that = this,
 				callbacks = that.options.callbacks;
 				doc = $('body');

 			clearTimeout(that.toast_timeout);

 			that.toast.addClass('load');
            doc.removeClass(that.toast_open_class);
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
		duration: 5000,
		type: 'default',
		interaction: false
	};

	$.mdtoast.type = {
		INFO : 'info',
		ERROR : 'error',
		WARNING : 'warning',
		SUCCESS : 'success'		
	};

	$.mdtoast.Constructor = MDToast;
 }(jQuery);