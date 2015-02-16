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
 $(".trigger").css("background-color", "#d93e2d"); // mouse on
 }, 
 function () {
$(".trigger").css("background-color", "#1b337a"); // mouse out
});

//window height header
var theHeight = $(window).height(); //gives you the height of the window
$('.header-image').height(theHeight); // make the div that height


//scroll to top
$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
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



