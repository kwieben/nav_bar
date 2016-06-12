var navBar = new NAV_BAR(); //Builds the navigation object
var docWindow = $(document);
//Add a div to the header to prevent sudden resizing of the page body.
docWindow.ready(function () {
	navBar.on_READY();
});
//Detects window resize and caches the position of the header relative to the top of the page.
$(window).resize(function () {
	navBar.on_RESIZE();
});
//Find if the user has scrolled to the top of the navigation area and dock it, if so.
docWindow.scroll(function () {
	if ($(window).scrollTop() > navBar.get_OFFSET()) {
		navBar.DOCK();
	} else {
		navBar.UNDOCK();
	}
});
/** Wait until everything is loaded and re-cache the position. */
docWindow.load(function () {
	navBar.set_OFFSET(navBar.get_TOP());
});
/** The variables and functions are now stored in an instance of the script. */
function NAV_BAR() {
	this.NAV_BAR_OFFSET;
	this.HEADER_NAV = $('#navBar-header');
	this.get_OFFSET = function () {
		return this.NAV_BAR_OFFSET;
	};
	this.set_OFFSET = function (_set) {
		this.NAV_BAR_OFFSET = _set;
	};
	this.on_READY = function () {
		this.HEADER_NAV.wrap('<div id="navBar-wrapper"></div>');
		$('#navBar-wrapper').css('height', '0').height($('#navBar-navigation').outerHeight());
		this.set_OFFSET(this.get_TOP());
	};
	this.on_RESIZE = function () {
		this.set_OFFSET(this.get_TOP());
	};
	/** Docks the navigation bar if it is at its normal location on the page. */
	this.DOCK = function () {
		this.HEADER_NAV.css({'position': 'fixed', 'top': '0'});
	};
	/** Undock the navigation bar if it is at the top of the page */
	this.UNDOCK = function () {
		this.HEADER_NAV.css({'position': 'static', 'top': 'auto'});
	};
	/** Get the offset to the top of the page */
	this.get_TOP = function () {
		return this.HEADER_NAV.offset().top;
	}
}