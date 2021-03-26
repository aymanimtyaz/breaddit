
$(document).ready(function(){

    var AD_COUNT = 0
    $('.close-button').click(function() { 
        AD_COUNT++;
        var btn = this
        $(btn).parent().addClass('remove-ad')
        if (AD_COUNT < 3){
            setTimeout(function() {
                $(btn).parent().removeClass('remove-ad')
            }, 5000)
        }
        
    });




    $(window).scroll(function() { 
        var slider_block = document.getElementById('sidebar-slider')
        var content_area_height = $('.content-area').height();
        var last_main_content_item_height = $('#last-main-content-item').height();
        var top = content_area_height - (last_main_content_item_height + 25) - 50;
        // console.log('Content Area: '+content_area_height);
        // console.log('Last Main Content Item: '+last_main_content_item_height);
        var scrollPosition = $(this).scrollTop();
        // console.log(scrollPosition)
        if (scrollPosition >= top+75){
            $(slider_block).removeClass('fix-to-viewport');
            $(slider_block).attr('style', 'position: absolute; top: '+top+'px;');
        }else if (scrollPosition >= 188){
            $(slider_block).removeAttr('style');
            $(slider_block).addClass('fix-to-viewport');
        }else{
            $(slider_block).removeClass('fix-to-viewport');
        }
    });
 
});