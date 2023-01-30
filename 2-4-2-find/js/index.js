const $naviItems = $('#NaviLs > li');

$naviItems.hover(function(){
    $(this).find('ul').stop(true, false).fadeIn();
}, function(){
    $(this).find('ul').stop(true, false).fadeOut();
});