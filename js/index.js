/*global $, jQuery , alert */
$(document).ready(function () {
 
    "use strict";
    // nice scroll 
    $("html").niceScroll();
    
    // set the time of carousel slider
    $(".carousel").carousel({
        interval: 2000
    });
    // show color option Div when click on the gear
    $(".gear-check").mouseenter(function () {
        $(".color-option").toggle(1000);
    });
    $(".color-option").mouseleave(function () {
        $(".color-option").hide(1000);
    });
    // change color theme by click event
    // and caching scroll top element .
    
    var colorLi = $(".color-option ul li"), scrollButton = $("#scroll_top");
    
    colorLi.eq(0).css("backgroundColor", "#009AFF").end()
        .eq(1).css("backgroundColor", "#7a0082").end()
        .eq(2).css("backgroundColor", "#E41B17").end()
        .eq(3).css("backgroundColor", "#ff6a00");
    
    colorLi.click(function () {
        //console.log($(this).attr("data-value"));
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    
        
    $(window).scroll(function () {
        //console.log($(this).scrollTop());
        
        
        // inline if
        //$(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();   
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    
        // click on button to scrolltop
    scrollButton.click(function () {
            
        $("html,body").animate({scrollTop: 0}, 1000);
    });
    
});

// loading screen
$(window).load(function () {
    "use strict";
    $(".loading-overlay .sk-cube-grid").fadeOut(1000, function () {
        // show the scroll
        $("html,body").css("overflow", "auto");
        $(this).parent().fadeOut(1000, function () {
            $(this).remove();
        });
    });
    
    
});