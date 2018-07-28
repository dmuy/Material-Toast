# Material-Toast
A simple plugin to display a material concept toast (alert message).

**[DEMO](https://dmuy.github.io/mdtoast/)**

Larger screen layout:

![alt text](https://lh3.googleusercontent.com/AvVf8iDY9NZz1s7ZAJJACmdTWlJFGkK0JjXJ3rtmk6w6IO9K8tGQfDRtSgc60nAxzNmfprsaNRkChLfkjHkFOQt-T4gOCHuvRIeWAAviqDR5vxCOQC25NnMvgYfTSSKgO7ng8Buvkr0DGiOVVSscaGBAvLFwNYpd1ZpRPz2G2h6gIUrAtogkkX2E_UbzOsBl2TDkGeGgylrpBQM00VIKnk3G0VQtcAvtrVlaNiwqua8FGpmUmWyaEit3Kp3_EfYdf0yOPctNzcwJcOFrQJkyNUIu5UIZ7IRKdTqhuYAX6aQkGbr5b6gQCp8HEM2egh1XXUzOnQWZmHbjtA5FPWajyQXo79qyWr8NeOz2gJ2AO2dJd4cC5sqFLHnO5OqENvzkwb7Je6ZCscrQTCRVLIzCRN2HyLnX9sLyZJ5zE9TkLD5qZ9aiGolyGe1I_TCMqORM6O8lZCpM0w_nbu3j6CJPbD-toogPkz2zFbQiUjuG-UgJNSzeLA4jExMG6Oma3TehRy4JjF53XR75JuYMCt1FSt9M7pcwezp8HmTM29fOaAa44sbyhTe9ksZbe69AFGu7X1Mz7uj7c4btqoq8B61Wao7o1o_d1-LmUWt8X6enSs8SFqBG70Og=w1295-h672-no "MDToast large screen layout")

Smaller screen layout:

![alt text](https://lh3.googleusercontent.com/4L8Ev0_IN2NmFfnJQWLLK_E2BsI5dwxwblUH27J1I-z6P8LL1fmg0G2x7j4Eetk0Z3xcvk5cxusSr3YpuoQA-eusOO0uWzC4iac79xDsrGC_rh6XohXmnRn24PrJfH7vOTxrYcwIcLo3Y3gmUNl-svYeMAOgoRNWv05h8bOJUezVOQjaaXmIpzc6rELMkN8GtKJg7J64lKT3igzx3oBArME21qBn4oFf8SGUUJRvSogjTSbMt8XIkELClK9b3ZJcFKtWBkHdvYhw0xPtFZCxdiymYHXMmPWz8iy8zixWZEcgjqOK6GFCyZdmPFdbH5E7Eaheo7MbDKRTEXxM8IwpObqYDGrhxRq-k9tMg0tFlbo_VstmL4J90utY06aH-H3QLVS7VwPEayV_GHcgzOrbbgETO7aiOEkwR9Gm34pck27xIDJEitA_vbZIiQeaqAXGCwoYuPuqVuYXO9dvSROuLDeP_zch7Ef8gIh2HlrI5E2pFbni_XpFYMAO66CnuskQbRG8bpSsTKhaaXCTKVbkXvacnvVcvoAd8ZuCwU-SnFY025FPGBbGhiVt73N7BuPWRGOIQSnEt-xUHJYRLwSb0jq5_Vkml8m0trF0942pb37WOl8eDun4=w336-h586-no "MDToast smaller screen layout")


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
