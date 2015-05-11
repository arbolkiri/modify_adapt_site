/*Theme    : Quick
 * Author  : Design_mylife
 * Version : V1.0
 *
 */


// ***********************************
// Backstretch - Slider on Background
// ***********************************

$("body").backstretch([
   "img/showcase-5.jpg",
   "img/showcase-3.jpg",
   "img/showcase-4.jpg"
], {duration: 5000, fade: 1000});

//collaps method
$(document).ready(function(){
    $(".btn-primary").click(function(){
        $(".collapse").collapse('toggle');
    });
    $(".btn-success").click(function(){
        $(".collapse").collapse('show');
    });
    $(".btn-warning").click(function(){
        $(".collapse").collapse('hide');
    });
});
//jquery show more/less ..not working-------------------------------------------------->
// $(document).ready(function() {
//     // Configure/customize these variables.
//     var showChar = 10;  // How many characters are shown by default
//     var ellipsestext = "...";
//     var moretext = "Read More";
//     var lesstext = "Show less";


//     $('.more').each(function() {
//         var content = $(this).html();

//         if(content.length > showChar) {

//             var c = content.substr(0, showChar);
//             var h = content.substr(showChar, content.length - showChar);

//             var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="more"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

//             $(this).html(html);
//         }

//     });

//     $(".btn .morelink").click(function(){
//         if($(this).hasClass("more")) {
//             $(this).removeClass("less");
//             $(this).html(moretext);
//         } else {
//             $(this).addClass("less");
//             $(this).html(lesstext);
//         }
//         $(this).parent().prev().toggle();
//         $(this).prev().toggle();
//         return false;
//     });
// });

//--------------------------------------------------------------------->


