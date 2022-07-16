$(document).ready(function() {
    function set_slider_position() {
        let slider_block_height = $(slider_block).height();
        let content_area_height = $(content_area).height();
        
        let top = content_area_height - (slider_block_height + 50);
        let scroll_end_position = top + 75;
        let scrollPosition = $(this).scrollTop();
        if (scrollPosition >= scroll_end_position){
            $(slider_block).removeClass('fix-to-viewport');
            $(slider_block).attr('style', 'position: absolute; top: '+top+'px;');
        }else if (scrollPosition >= scroll_start_position){
            $(slider_block).removeAttr('style');
            $(slider_block).addClass('fix-to-viewport');
        }else{
            $(slider_block).removeClass('fix-to-viewport');
        }
    }

    var scroll_start_position = 188;

    var slider_block = document.getElementById('sidebar-slider');
    var content_area = document.getElementById('content-area');


    $(window).scroll(set_slider_position);
});