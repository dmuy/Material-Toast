export default {
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
        action: function () {
            this.hide()
        },
        // callback object for toast; contains hidden() and shown()
        callbacks: {}
    },
    toastOpenClass: 'mdtoast--open',
    toastModalClass: 'mdtoast--modal'
}