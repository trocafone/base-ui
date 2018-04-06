$(document).ready(function(){
    if(!isMobile()){
        $(".js-init-select2").select2({
            placeholder: Lang.get('generic.select_placeholder')
        });
        $(".js-init-select2-no-search").select2({
            placeholder: Lang.get('generic.select_placeholder'),
            minimumResultsForSearch: -1
        });
    }
    if(isMobile()){
        $('select.native-placeholder.placeholder-disabled').find('option:first').attr('disabled','disabled');

        $('select.native-placeholder.placeholder-disabled').find('option:first').text( Lang.get('generic.select_placeholder'));

        $('select.native-placeholder').on('change', function(){
            if ($(this).val() === ""){
                $(this).addClass('placeholder-color');
            } else {
                $(this).removeClass('placeholder-color');
            }
        });
    }
});
