# Material-Toast
A simple plugin to display a material concept toast (alert message).

**[DEMO](https://dmuy.github.io/Material-Toast/)**

Larger screen layout:

![Material-Toast on large screens](https://lh3.googleusercontent.com/ctcUblNkRT8tiMPeXLqqaL3aVacFg6OhVZDPOAPKZQ_M-MwsGHe8rdX0wfIG0p2RcwHQO14dX2RaoRaxhQgPStfRUs21kLOcmm3XIdsXQWbsJVIB1oHtI8PcffOLsa9tyaTMtw5owTtbV4Vyi3xyRCWE5sdjDmeoH16Accq2vuiK9H7JSV7WYikx-o2mDIGdgDjGq0YflthktNYuZEf_DUvhXs6jeeGpY1dRgV9lA2gzoY_uoUJUBH1dZVlHy7Upeilhe5BFS9642grsJHoNTJWPeC0hz5tovteDMs1OeSBiKEFz2-LDmdxIaJFGe4Ch0l2fKJHBXp1h7QS-bKF9mVhEbspFi0yTVwvihmzR2r183_j6IdofaeGsJMMFGETnmfv7E9SEbZBSL1RebqWRjpa2FF7IE-waHG3i1WGoeCc7XQfcQDLCZGWR9s1KS4KpzBVvPYOgGAvrR5Xxmf2tNmBLYE104WPFtNJSagN3AXx-jWgG1lRyAeVJNdhfOHXkIcKpljrSQuFyuUnlGSdSryN5by3IBardlQDa4cXNV5ixabB7Ktef131kCaMbmPJJ7zITGbH4XeTqRVD4jbkJBUxk8DCvn5HYSvmpECCCTzmSrinqwMHm7XEHKPKTFfOw_mNwDWXZPblBXuKr-F-PshWm=w759-h404-no "Material-Toast large screen layout")

Smaller screen layout:

![Material-Toast on small screens](https://lh3.googleusercontent.com/ghIKExtruFQJg67WEp_4Npj_S0Lc7vu_FrHUrMfJrOgLY8CApc7yGMB_8583BlFC9_FscysR6a99ZbiU-fZOB08j6xvffhk8ja21ZE_5JKYn9WAwT4R__An59S4QonjISzWyUahpZrTiPdQWBToTQ26qbjiLLRwl4tAsdxGNCF0s4pvWVMgIpXlIT87BdbsEYPFfgcvb6HOLZVy526J5Mvd1ARjeRv3g7mVYwEp4hGWSihTIo-kYogW4h7JINnKSSrv9L43cUQiau9LhsIDpFDHnW1A6Gy5FI7iN-GVi3nilmAb18Zw4gb6To4YJcj5SeZDAEGWKfGHp7M9Gv4dTqbKl0uKXBjmCk997sgoWtU2ximnIIIXNNa-otXfauZ9k7ogXJVtA5i3ciSULBZoQOw6vWkEcoJ7BNp_yEwKuJ0f9ffkM3MfiF_7e6z7LJkSOgzpGzyyVCyptffFNSHs2pUPlU7KX7SaPXhGuqcUSNbWqTTKlPHXbFt6nigetER_bT8DD-e7ZsHfFuWnFWLyWLi0NjGCPxeHZG3f-Tch6ayk4QuCvoEHhw9bVOu-p8PjQ5PsJmGBeEkfPC6TjOLGNBfcTV0nuK3wge8s4M72Dls_HpRGpw9WrYo0ukbqmeZz805iv40dI_qJGtRId26eaExSE=w232-h404-no "Material-Toast smaller screen layout")


## How to use
Include `mdtoast.css` and `mdtoast.js` in your html file:
```html
<link rel="stylesheet" type="text/css" href="mdtoast.css">
<script type="text/javascript" src="mdtoast.js"></script>
```

Call `mdtoast()` in your script tag:
```javascript
// Initializes and shows default toast or with the 'new' keyword - i.e new mdtoast(...)
mdtoast('This is a toast message.');
```

### CDN
Use the following if you don't want to host the `js` and `css` files:
```
https://cdn.jsdelivr.net/gh/dmuy/Material-Toast/mdtoast.css
https://cdn.jsdelivr.net/gh/dmuy/Material-Toast/mdtoast.js
```
Minified version:
```
https://cdn.jsdelivr.net/gh/dmuy/Material-Toast/mdtoast.min.css
https://cdn.jsdelivr.net/gh/dmuy/Material-Toast/mdtoast.min.js
```

[Learn more about the CDN](https://www.jsdelivr.com/features#gh)

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
  action: function(){
    //TODO: Undo codes here...
    this.hide(); // this is the toast instance
  }
});
```

### Remember
Comment or remove the line shown below in the css file if you already have a link to the Roboto font.
```css
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
```

Older browsers may need the [classList polyfill](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) which extends classList support back to IE8 (natively, it’s IE10+).
