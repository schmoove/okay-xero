$(".statement input").focus(function() {
    $(".statement input").keydown(function (event) {
        if ( ( event.metaKey || event.ctrlKey ) && event.keyCode == 13 ) {
            var $ok = $(this).closest('[data-statementlineid]').find('.okayButton');
            if ( $ok.css('visibility') == 'visible' ) {
                let e = new Event("click");
                $ok.get(0).dispatchEvent(e);
            }
        }
    });
});