var navBar = new nav_bar(); //Builds the navigation object
//Add a div to the header to prevent sudden resizing of the page body.
$(document).ready(function(){
	navBar.on_READY();
});
//Detects window resize and caches the position of the header relative to the top of the page.
$(window).resize(function(){
	navBar.on_RESIZE();
});
//Find if the user has scrolled to the top of the navigation area and dock it, if so.
$(document).scroll(function(){
	if ($(window).scrollTop() > navBar.get_OFFSET()){
		navBar.DOCK();
	}else{
		navBar.UNDOCK();	
	}
});
/** Wait until everything is loaded and re-cache the position. */
$(document).load(function(){
	navBar.set_OFFSET(navBar.get_TOP());
});
/** The variables and functions are now stored in an instance of the script. */
function nav_bar(){
    this.NAV_BAR_OFFSET;
	this.get_OFFSET = function() {
        return this.NAV_BAR_OFFSET;
	}
	this.set_OFFSET = function(_set){
		this.NAV_BAR_OFFSET = _set;
	}
	this.on_READY = function(){
		$('#navBar-header').wrap('<div class ="navBar-wrapper"></div>');
		$('.navBar-wrapper').css('height','0').height($('nav').outerHeight());
		this.set_OFFSET(this.get_TOP());
	}
	this.on_RESIZE = function(){
		this.set_OFFSET(this.get_TOP());
	}
	/** Docks the navigation bar if it is at its normal locationon the page. */
	this.DOCK = function(){
		$('#navBar-header').css({'position':'fixed','top':'0'});
	}
	/** Undock the navigation bar if it is at the top of the page */
	this.UNDOCK = function(){
		$('#navBar-header').css({'position':'static','top':'auto'});
	}
	/** Get the offset to the top of the page */
	this.get_TOP = function(){
		return $('#navBar-header').offset().top;
	}
}