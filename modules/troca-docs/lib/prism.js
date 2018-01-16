// Optional
Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true
});

/* Prism copy to clipbaord for all pre with copytoclipboard class */
$('pre.copy-to-clipboard').each(function () {
    $this = $(this);
    $button = $('<button>Copy</button>');
    $this.wrap('<div/>').removeClass('copy-to-clipboard');
    $wrapper = $this.parent();
    $wrapper.addClass('copy-to-clipboard-wrapper').css({position: 'relative'})
    $button.css({position: 'absolute', top: 10, right: 10}).appendTo($wrapper).addClass('copy-to-clipboard button-primary button-small');
    /* */
    var copyCode = new Clipboard('button.copy-to-clipboard', {
        target: function (trigger) {
            return trigger.previousElementSibling;
        }
    });
    copyCode.on('success', function (event) {
        event.clearSelection();
        event.trigger.textContent = 'Copied';
        window.setTimeout(function () {
            event.trigger.textContent = 'Copy';
        }, 2000);
    });
    copyCode.on('error', function (event) {
        event.trigger.textContent = 'Press "Ctrl + C" to copy';
        window.setTimeout(function () {
            event.trigger.textContent = 'Copy';
        }, 2000);
    });
});