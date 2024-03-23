$('.statement input').forEach(function(inputField) {
    inputField.addEventListener('focus', function(focusEvent) {
        focusEvent.currentTarget.addEventListener('keydown', function(keydownEvent) {
            // OK
            if ( ( keydownEvent.metaKey || keydownEvent.ctrlKey ) && keydownEvent.keyCode == 13 ) {
                var $ok = keydownEvent.currentTarget.closest('[data-statementlineid]').find('.okayButton');
                if ( $ok.style.visibility == 'visible' ) {
                    let e = new Event("click");
                    //$ok.get(0).dispatchEvent(e);
                }
            }
            // Cancel
            if ( keydownEvent.keyCode == 27 ) {

            }
        });
    }
});