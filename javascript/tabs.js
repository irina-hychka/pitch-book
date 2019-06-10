$(document).ready(function () {
    $('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('active');
        $('.tab-contnent--wrap').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    })
})