$(document).ready(function () {
    var nav = document.getElementById('navbar')                                        // background -
    var nav_title_link = document.getElementById('nav-title-link')                     // color -
    var nav_dropdown_tab_header = document.getElementById('nav-dropdown-tab-header')   // color -
    var nav_dropdown_tab_arrow = document.getElementById('nav-dropdown-tab-arrow')     // color -
    var nav_title = document.getElementById('nav-title')                               // opacity -
    var nav_search = document.getElementById('nav-search')                             // opacity - 
    var nav_search_input = document.getElementById('nav-search-input')                 // width -
    var nav_search_go = document.getElementById('nav-search-go')                       // left -
    var icon_search_nav = document.getElementById('icon-search-nav')                   // left - 
    var nav_dropdown = document.getElementById('nav-dropdown')                         // opacity -
    var SCROLL_LIMIT = 25
    var MIN_OPACITY = 20
    var MAX_OPACITY = 100
    var TEXT_LIGHT = 'white'
    var TEXT_DARK = 'black'



    function set_nav_dropdown_opacity(){
        var scrollPosition = $(window).scrollTop();
        if(scrollPosition >= SCROLL_LIMIT){
            $(nav_dropdown).attr('style', 'opacity: '+MIN_OPACITY+'%;');
        }else{
            $(nav_dropdown).attr('style', 'opacity: '+MAX_OPACITY+'%;');
        }
    }

    function set_nav_dropdown_colors(){
        var scrollPosition = $(window).scrollTop();
        if(scrollPosition >= SCROLL_LIMIT){
            $(nav_dropdown_tab_header).attr('style', 'color: '+TEXT_DARK+';');
            $(nav_dropdown_tab_arrow).attr('style', 'color: '+TEXT_DARK+';');
        }else{
            $(nav_dropdown_tab_header).attr('style', 'color: '+TEXT_LIGHT+';');
            $(nav_dropdown_tab_arrow).attr('style', 'color: '+TEXT_LIGHT+';');
        }
    }


    function set_nav_title_opacity(){
        var scrollPosition = $(window).scrollTop();
        if(scrollPosition >= SCROLL_LIMIT){
            $(nav_title).attr('style', 'opacity: '+MIN_OPACITY+'%;');
        }else{
            $(nav_title).attr('style', 'opacity: '+MAX_OPACITY+'%;');
        }
    }

    function set_nav_title_colors(){
        var scrollPosition = $(window).scrollTop();
        if(scrollPosition >= SCROLL_LIMIT){
            $(nav_title_link).attr('style', 'color: '+TEXT_DARK+';');
        }else{
            $(nav_title_link).attr('style', 'color: '+TEXT_LIGHT+';');
        }
    }

    function set_nav_search_input_opacity(){
        var scrollPosition = $(window).scrollTop();
        if(scrollPosition >= SCROLL_LIMIT){
            $(nav_search_input).attr('style', 'opacity: '+MIN_OPACITY+'%;');
        }else{
            $(nav_search_input).attr('style', 'opacity: '+MAX_OPACITY+'%;');
        }
    }

    function set_nav_search_go_opacity(){
        var scrollPosition = $(window).scrollTop();
        if(scrollPosition >= SCROLL_LIMIT){
            $(nav_search_go).attr('style', 'opacity: '+MIN_OPACITY+'%;');
        }else{
            $(nav_search_go).attr('style', 'opacity: '+MAX_OPACITY+'%;');
        }
    }

    function set_icon_search_nav_opacity(){
        var scrollPosition = $(window).scrollTop();
        if(scrollPosition >= SCROLL_LIMIT){
            $(icon_search_nav).attr('style', 'opacity: '+MIN_OPACITY+'%;');
        }else{
            $(icon_search_nav).attr('style', 'opacity: '+MAX_OPACITY+'%;');
        }
    }

    function set_nav_background(){
        var scrollPosition = $(window).scrollTop();
        if(scrollPosition >= SCROLL_LIMIT){
            $(nav).removeClass('bg-dark');
        }else{
            $(nav).addClass('bg-dark');
        }
    }


    function nav_dropdown_mouse_enter(){
        $(window).off('scroll', set_nav_dropdown_opacity);
        $(nav_dropdown).attr('style', 'opacity: '+MAX_OPACITY+'%;');
    }

    function nav_search_mouse_enter(){
        $(window).off('scroll', set_nav_search_input_opacity);
        $(window).off('scroll', set_nav_search_go_opacity);
        $(window).off('scroll', set_icon_search_nav_opacity);
        $(nav_search_input).attr('style', 'opacity: '+MAX_OPACITY+'%;');
        $(nav_search_go).attr('style', 'opacity: '+MAX_OPACITY+'%;');
        $(icon_search_nav).attr('style', 'opacity: '+MAX_OPACITY+'%;');
    }

    function nav_title_hover_entry(){
        $(window).off('scroll', set_nav_title_opacity);
        $(this).attr('style', 'opacity: '+MAX_OPACITY+'%;');
    }

    function nav_dropdown_mouse_exit(){
        $(window).on('scroll', set_nav_dropdown_opacity);
        set_nav_dropdown_opacity();
    }

    function nav_search_mouse_exit(){
        $(window).on('scroll', set_nav_search_input_opacity);
        $(window).on('scroll', set_nav_search_go_opacity);
        $(window).on('scroll', set_icon_search_nav_opacity);
        set_nav_search_input_opacity();
        set_nav_search_go_opacity();
        set_icon_search_nav_opacity();
    }

    function nav_title_hover_exit(){
        $(window).on('scroll', set_nav_title_opacity);
        set_nav_title_opacity();
    }

    function nav_menu_click() { 
        var dropdownMenu = $(nav_dropdown_tab_arrow).parent().parent().find('.dropdown-menu');
        $(nav_dropdown_tab_arrow).html('arrow_drop_up');
        $(dropdownMenu).addClass('active');
        $(nav_dropdown_tab_arrow).off('click', nav_menu_click);
        $(nav_dropdown).mouseleave(function() { 
            $(nav_dropdown_tab_arrow).html('arrow_drop_down');
            $(dropdownMenu).removeClass('active');
            $(nav_dropdown_tab_arrow).on('click', nav_menu_click);
        });
        $(nav_dropdown_tab_arrow).click(function() { 
            $(nav_dropdown_tab_arrow).html('arrow_drop_down');
            $(dropdownMenu).removeClass('active');
            $(nav_dropdown_tab_arrow).on('click', nav_menu_click);
        });
    }

    function nav_search_focus() {
        $(nav_search_input).addClass('active');
        $(nav_search_go).addClass('active');
        $(icon_search_nav).addClass('active');
        $(window).off('scroll', set_nav_search_input_opacity);
        $(window).off('scroll', set_nav_search_go_opacity);
        $(window).off('scroll', set_icon_search_nav_opacity);
        $(nav_search_input).off('mouseleave', nav_search_mouse_exit);
        $(nav_search_go).off('mouseleave', nav_search_mouse_exit);
        $(icon_search_nav).off('mouseleave', nav_search_mouse_exit);
    }

    function nav_search_focusout() { 
        $(nav_search_input).removeClass('active');
        $(nav_search_go).removeClass('active');
        $(icon_search_nav).removeClass('active');
        $(window).on('scroll', set_nav_search_input_opacity);
        $(window).on('scroll', set_nav_search_go_opacity);
        $(window).on('scroll', set_icon_search_nav_opacity);;
        $(nav_search_input).on('mouseleave', nav_search_mouse_exit);
        $(nav_search_go).on('mouseleave', nav_search_mouse_exit);
        $(icon_search_nav).on('mouseleave', nav_search_mouse_exit);
        set_nav_search_input_opacity();
        set_nav_search_go_opacity();
        set_icon_search_nav_opacity();
    }

    $(window).scroll(set_nav_background)
    $(window).scroll(set_nav_dropdown_colors)
    $(window).scroll(set_nav_dropdown_opacity)
    $(window).scroll(set_nav_search_input_opacity)
    $(window).scroll(set_nav_search_go_opacity)
    $(window).scroll(set_icon_search_nav_opacity)
    $(window).scroll(set_nav_title_colors)
    $(window).scroll(set_nav_title_opacity)

    $(nav_dropdown_tab_arrow).click(nav_menu_click);
    $(nav_search_input).focus(nav_search_focus);
    $(nav_search_input).focusout(nav_search_focusout);

    $(nav_search_input).mouseenter(nav_search_mouse_enter)
    $(nav_search_input).mouseleave(nav_search_mouse_exit)
    $(nav_search_go).mouseenter(nav_search_mouse_enter)
    $(nav_search_go).mouseleave(nav_search_mouse_exit)
    $(icon_search_nav).mouseenter(nav_search_mouse_enter)
    $(icon_search_nav).mouseleave(nav_search_mouse_exit)

    $(nav_dropdown).mouseenter(nav_dropdown_mouse_enter)
    $(nav_dropdown).mouseleave(nav_dropdown_mouse_exit)
    $(nav_title).hover(nav_title_hover_entry,nav_title_hover_exit)

});