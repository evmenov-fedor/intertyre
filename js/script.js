//$(function(){
//    $('.startScroll').hover(function() { //mouse in
//        $(this).stop().animate({ marginTop: '20px', opacity: 0.8 }, 300);
//    }, function() { //mouse out
//        $(this).stop().animate({ marginTop: 0, opacity: 1 }, 300);
//    });
//
//    $('.hover_image img').css('opacity',0.5).hover(function(){
//        $(this).stop().animate({opacity: 1}, 200);
//    }, function(){
//        $(this).stop().animate({opacity: 0.5}, 200);
//    });
//});
$(document).ready(function(){
    $("#description a").click(function(){
        var selected = $(this).attr('href');
        $.scrollTo(selected, 600);
        return false;
    });
});


//$(function() {
//    var counter = 0;
//
//    function getWordColor() {
//        var words_array = [
//            ["one", "red"],
//            ["two", "yellow"],
//            ["three", "green"]
//        ];
//
//        function getCount() {
//            if(counter < (words_array.length - 1)) {
//                counter += 1;
//            } else {
//                counter = 0;
//            }
//            return counter;
//        }
//        return words_array[getCount()];
//    }
//
//    $(".circle_text2").hover(function() {
//        var word_color = getWordColor();
//        $(this).text(word_color[0]);
//        $(this).css("color", word_color[1]);
//    });
//});