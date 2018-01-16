$(document).ready(function(){
    $('.navigation li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.navigation li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
});