document.querySelectorAll('.statement input').forEach(function(inputField) {
    inputField.addEventListener('focus', function(focusEvent) {
        focusEvent.currentTarget.addEventListener('keydown', function(keydownEvent) {
            if ( ( keydownEvent.metaKey || keydownEvent.ctrlKey ) && keydownEvent.keyCode === 13 ) {
                const okButton = keydownEvent.currentTarget.closest('.line')?.querySelector('.okayButton');
                if ( okButton && getComputedStyle(okButton).visibility === 'visible' ) {
                    const e = new Event("click");
                    okButton.dispatchEvent(e);
                }
            }
        });
    });
});