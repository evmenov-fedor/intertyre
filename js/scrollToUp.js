/**
 * Created by Admin on 10.10.2014.
 */
$( document ).ready(function() {
    $('#scrollup img').mouseover( function(){
        $( this ).animate({opacity: 0.65},100);
    }).mouseout( function(){
        $( this ).animate({opacity: 1},100);
    }).click( function(){
        window.scroll(0 ,0);
        return false;
    });

    $(window).scroll(function(){
        if ( $(document).scrollTop() > 0 ) {
            $('#scrollup').fadeIn('fast');
        } else {
            $('#scrollup').fadeOut('fast');
        }
    });
});