# Material-Toast
A simple plugin to display a material concept toast (alert message).

## How to use
Make sure you include the jQuery library first. Include `mdtoast.css` and `mdtoast.js` in your html file:
```html
<link rel="stylesheet" type="text/css" href="mdtoast.css">
<script type="text/javascript" src="mdtoast.js"></script>
```

Call `$.mdtoast()` in your script tag:
```javascript
<script>
  $(document).ready(function(){
    $.mdtoast('This is a toast message.'); // Initializes and shows default toast
  });
</script>
```

## Options
You can add options when calling `$.mdtoast()` to fit your needs. Below are the options you can use:

| Option      | Defaut       | Description  |
| ----------- |--------------|--------------|
| init        | `false`      | Determines if toast is initialize-only (meaning toast will not show unless `show()` is called |
| duration    | `5000`       | Determines the toast display duration (in milliseconds). |
| type        | `default`    | Determines the type of toast to display. Other types in `$.mdtoast.type`: `INFO`, `WARNING`, `SUCCESS`, `ERROR`. <br> Or you can just type these string values: `info`, `warning`, `success`, `error`. |
| modal       | `false`      | Determines if toast is modal (pointer events on other elements will be disabled). |
| interaction | `false`      | Determines if toast requires user interaction to dismiss or has some sort of user interaction button to click. |
| interactionTimeout | `null` | Determines the toast duration (timeout to dismiss) if `interaction` is set to `true`. This overrides the `duration` option if `interaction` is set to `true`. |
| actionText  | `OK`         | The action text to display for user interaction (e.g. `UNDO` -> showing toast after archiving items and giving the user an option to undo archiving.) |
| action      | `hide()`     | This will be the function to be called when the user clicks the action text. The default calls the toast's `hide()` method. |
| callbacks   | `{}`         | You can place the callbacks `hidden()` and `shown()` in this option if you have some things to do after the toast is shown or hidden. |

### Usage sample
Below is an example of storing your toast in a variable for future reuse:
```javascript
<script>
  $(document).ready(function(){
    // Initializes default toast with duration of 10 seconds (this will not show the toast since init is set to true)
    var myToast = $.mdtoast('This is a toast message.', { duration: 10000, init: true }); 
    // Displays the toast
    $('#somebutton').click(function(){ myToast.show(); });
  });
</script>
```
Different types of toast:
```javascript
<script>
  $(document).ready(function(){
    // Initializes different toasts with duration of 10 seconds
    $.mdtoast('This is an info toast.', { duration: 10000, type: $.mdtoast.type.INFO });      // or type: 'info'
    $.mdtoast('This is an error toast.', { duration: 10000, type: $.mdtoast.type.ERROR });    // or type: 'error'
    $.mdtoast('This is a warning toast.', { duration: 10000, type: $.mdtoast.type.WARNING }); // or type: 'warning'
    $.mdtoast('This is a success toast.', { duration: 10000, type: $.mdtoast.type.SUCCESS }); // or type: 'success'
  });
</script>
```
Specifying toast action:
```javascript
<script>
  $(document).ready(function(){
    // Initializes a toast with action (this toast will not dismiss unless 'interactionTimeout' is specified)
    $.mdtoast('Message archived.', 
      {
        type: 'success', 
        interaction: true, actionText: 'UNDO', 
        action: function(t){
          //TODO: Undo codes here...
          t.hide(); // t is the toast object returned by the callback.
        }
      });
  });
</script>
```
