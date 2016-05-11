$(document).ready(function() {

	/*FIX NAVBAR*/
	var $window = $(window);
	
	$(window).scroll(function() {
		console.log($(window).scrollTop())
		
		if($(window).scrollTop() > 800) {
			$(".nav_bar").addClass("navbar-fixed");
		}
		if ($(window).scrollTop() < 801) {
			$(".nav_bar").removeClass("navbar-fixed");
		}	
	});
	
	/*DOWNARROW BUTTON*/
	$(".arrow_down").click( function(){
		$("html, body").animate({
			scrollTop: $(".column").offset().top - 100}, 2000);
	});
	
	
	
	
});