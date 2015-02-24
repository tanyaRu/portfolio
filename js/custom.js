$(document).ready(function(){
	$(".trigger").click(function(){
		$(".panel").toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});
//slidepictures

  $("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  2700);

//hover "contact me button"
$('.trigger').hover(function() {
 $(".trigger").css("background-color", "#aa7755"); // mouse on
 }, 
 function () {
$(".trigger").css("background-color", "#a1978e"); // mouse out
});

//window height header
var theHeight = $(window).height(); //gives you the height of the window
$('.header-image').height(theHeight); // make the div that height


jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});

// SCROLL DOWN to about me page
$("#scrollDown").click(function() {
    $('html, body').animate({
        scrollTop: $("#logo").offset().top
    }, 1000);
});


//window height "about me"
var theHeight = $(window).height(); //gives you the height of the window
$('.bucket').height(theHeight); // make the div that height



