$(document).ready(function()
{
  $(".fl-menu div").click(function () {
    $(this).next().toggleClass("dn");
   });

});

$(window).load(function() 
{
  $('.cycle-slideshow').cycle();
});

