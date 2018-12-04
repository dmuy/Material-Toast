# Material-Toast
A simple plugin to display a material concept toast (alert message).

**[DEMO](https://dmuy.github.io/mdtoast/)**

Larger screen layout:

![alt text](https://lh3.googleusercontent.com/NXGHyY4MJepzoKrkwoP3om_jX5fax20Ggxr-WGJtmAhQJWqhzvhfoLNYVf8ahu1O9Qp7EIzVUzQ8I3tmmMBQK3bC3swKUldzbiagbO2IDkhTW34bylez5_9TDgSJy1fr__Wr-SMY_AqW52PXqbEI3YQOryuwZ603eUYmGGDbpeayccoMm2tvk2joNfmDT-yO7hkadvNBlxbNFr_VANOJuSKZ_sXePepTRmwb1eXhVZ6RkgBnukxuD7kumz28tT1rbG7zUAJOlcvTcfCraagtUSxys3ECZt0-CtJfY807asWpI3F_htuOfHV0ktAXRlKnUk6_MUwx3DljfS3fUD--Si-6QiB8zWyDgl2S2ZTlWpWeO0uenf1mvTpRLxwX-MsmNt5_67ACe90TjyUKFw_3W5IaogyIuc2LPzrtEN6qw6X7nfJxeP6j9DieVG5poMI3YKmOVZ7FxP9hMVuXkYCOjwGCEY4mz58Ty95tcCSPrm7qk5zG-6_ct8fri5jZ0T-gfq4ErwO8m_qZ2epQkQYYDaqQm0z_gMtZnIrvCDEgVTwmVpvb3F6hjhuNywSRY_sF4hchGh6H7GMF1g16FtfBpfaiA-tVNw6-4DlBTyf42HfvbC1tK58i31tssjk-_maWH7_R4NosSPLgpmXyA8CyYdFG=w1233-h657-no "Material-Toast large screen layout")

Smaller screen layout:

![alt text](https://lh3.googleusercontent.com/eTzAwRX9FXpZrlrWQfGDTuJxBgh5tLA2sIWu8g428yaAVFvh1UjK6fYT8e-IR6bxGeDmKup1B_Pux7ql-P0JzDh3Cbj98KlXd1WN2ObeMyRdHtbAdvmkJdeKsTFwzmiJ3KisAWCq7GL0_UPHl55cMQRsUkstwe9vwngtcvwN6uZola4PZAOdE-J2NNUJwqeHqfYbxWUFfVC3RFloNOsNitK1NJfik8LvlN6jwLNFU53rP9iac_K6lTEl6t0H34xX81JncVeCkJ_BlhwE62BlDv3N_Ynl_UZQUwfFw2jJnw2rC9Ff8QYKydrAktyjg_fWlWJHjqDnboMMX1M23ijN0hwzDdXg90XeLbgk-nIRHRX8va_3L00DcBcYgSaAhbeme_4BtBr0t2eqzPxJYkKMInbGOjN5wwFQerh-_reV8shzaBL9n1u2UIpPknF6P9W7pbPBlSmrVTkt-uh0-CD0dLg58850X1vv1GSwv11MjVbKjHIce7r5aM7cHbP9ygGKUzhgkG1RMibyEttb6qPLubJ1jIsKP98U8fA1EPMyThLdT-u9W4ce3jG5WiGe0NTbpf73JsAGL2ZI72yY4VM7txDJaMYjiZ1IizC5b_G4vI-GIS52SBkH96r31M_ZB1jkxYZTi4JwIS-xTFT6vlJbyYUZ=w319-h556-no "Material-Toast smaller screen layout")


## How to use
Include `mdtoast.css` and `mdtoast.js` in your html file:
```html
<link rel="stylesheet" type="text/css" href="mdtoast.css">
<script type="text/javascript" src="mdtoast.js"></script>
```

Call `mdtoast()` in your script tag:
```javascript
mdtoast('This is a toast message.'); // Initializes and shows default toast or with the 'new' keyword - i.e new mdtoast(...)
```

## Options
You can add options when calling `mdtoast()` to fit your needs. Below are the options you can use:

| Option      | Defaut       | Description  |
| ----------- |--------------|--------------|
| init        | `false`      | Determines if toast is initialize-only (meaning toast will not show unless `show()` is called |
| duration    | `5000`       | Determines the toast display duration (in milliseconds). |
| type        | `default`    | Determines the type of toast to display. Other types in `mdtoast`: `INFO`, `WARNING`, `SUCCESS`, `ERROR`. <br> Or you can just type these string values: `info`, `warning`, `success`, `error`. |
| modal       | `false`      | Determines if toast is modal (pointer events on other elements will be disabled). |
| interaction | `false`      | Determines if toast requires user interaction to dismiss or has some sort of user interaction button to click. |
| interactionTimeout | `null` | Determines the toast duration (timeout to dismiss) if `interaction` is set to `true`. This overrides the `duration` option if `interaction` is set to `true`. |
| actionText  | `OK`         | The action text to display for user interaction (e.g. `UNDO` -> showing toast after archiving items and giving the user an option to undo archiving.) |
| action      | `hide()`     | This will be the function to be called when the user clicks the action text. The default calls the toast's `hide()` method. |
| callbacks   | `{}`         | You can place the callbacks `hidden()` and `shown()` in this option if you have some things to do after the toast is shown or hidden. |

### Usage sample
Below is an example of storing your toast in a variable for future reuse:
```javascript
// Initializes default toast with duration of 10 seconds (this will not show the toast since init is set to true)
var myToast = mdtoast('This is a toast message.', { duration: 10000, init: true }); 

// Displays the toast
myToast.show();
```

Different types of toast:
```javascript
// Initializes different toasts with duration of 10 seconds
mdtoast('This is an info toast.', { duration: 10000, type: mdtoast.INFO });      // or type: 'info'
mdtoast('This is an error toast.', { duration: 10000, type: mdtoast.ERROR });    // or type: 'error'
mdtoast('This is a warning toast.', { duration: 10000, type: mdtoast.WARNING }); // or type: 'warning'
mdtoast('This is a success toast.', { duration: 10000, type: mdtoast.SUCCESS }); // or type: 'success'
```

Specifying toast action:
```javascript
// Initializes a toast with action (this toast will not dismiss unless 'interactionTimeout' is specified)
mdtoast('Message archived.', {
  type: 'success', 
  interaction: true, actionText: 'UNDO', 
  action: function(t){
    //TODO: Undo codes here...
    t.hide(); // t is the toast object returned by the callback.
  }
});
```

### Remember
Comment or remove the line shown below in the css file if you already have a link to the Roboto font.
```css
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
```

Older browsers may need the [classList polyfill](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) which extends classList support back to IE8 (natively, it’s IE10+).