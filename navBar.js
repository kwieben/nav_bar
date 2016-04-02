var navOffSet; //Variable used to chace the header position.
//Add a div to the header to prevent sudden resizing of thr HTML body.
$(document).ready(function(){
	$('header').wrap('<div class = "placeholder"></div>');
	$('.placeholder').height($('nav').outerHeight());
	navOffSet = $('header').offset().top;
});//Cache the position of the header relative to the top of the page on document ready.
//Detects if the window has been resized and caches the position of the header relative to the top of the page.
$(window).resize(function(){
	navOffSet = $('header').offset().top;
}); //Cache the position of the header position relative to the top of the page.
//Finds if the user has scrolled to where the nav-bar location and if so, dock it.
$(document).scroll(function(){
	if ($(window).scrollTop() > navOffSet){
		$('header').addClass('dockNav');
	}else{
		$('header').removeClass('dockNav');
	}
});
//Wait until everything is loaded and re-cache the position. This additional re-cache helps fix random occurrences when the position does not cache during the initial load of the HTML body.
$(document).load(function(){
	navOffSet = $('header').offset().top;
}); //Cache the position of the header relative to the top of the page