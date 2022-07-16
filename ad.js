$(document).ready(function() {
    var AD_COUNT = 0
    $('#ad-close-button').click(function() { 
        AD_COUNT++;
        var btn = this
        $(btn).parent().addClass('remove-ad')
        set_slider_position()
        if (AD_COUNT < 3){
            setTimeout(function() {
                $(btn).parent().removeClass('remove-ad')
                set_slider_position()
            }, 5000)
        }
    });
});