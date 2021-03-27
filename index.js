
$(document).ready(function(){

    var AD_COUNT = 0
    $('.close-button').click(function() { 
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

    function set_slider_position() {
        var slider_block_height = $(slider_block).height();
        var content_area_height = $(content_area).height();
        
        var top = content_area_height - (slider_block_height + 75);
        // console.log('Content Area: '+content_area_height);
        // console.log('Last Main Content Item: '+last_main_content_item_height);
        var scrollPosition = $(this).scrollTop();
        // console.log(scrollPosition)
        if (scrollPosition >= top + 75){
            $(slider_block).removeClass('fix-to-viewport');
            $(slider_block).attr('style', 'position: absolute; top: '+top+'px;');
        }else if (scrollPosition >= 188){
            $(slider_block).removeAttr('style');
            $(slider_block).addClass('fix-to-viewport');
        }else{
            $(slider_block).removeClass('fix-to-viewport');
        }
    }

    var slider_block = document.getElementById('sidebar-slider');
    var content_area = document.getElementById('content-area');


    $(window).scroll(set_slider_position)

});