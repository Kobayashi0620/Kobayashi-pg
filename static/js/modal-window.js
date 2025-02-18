$(document).ready(function() {

    $(".x-twitterLink").modaal({
        overlay_close: true,
        before_open: function () {
            $('html').css('overflow', 'hidden');
        },
        after_close: function () {
            $('html').css('overflow', 'auto');
        }
    });

    $(".privacyLink").modaal({
        overlay_close: true,
        before_open: function () {
            $('html').css('overflow', 'hidden');
        },
        after_close: function () {
            $('html').css('overflow', 'auto');
        }
    });

});