"use strict";

var $, navigator, window;

function getDimensions() {
	// the iphone specific code is kind of kludgy, if you have a better way let me know
	var isIPhone = (/iphone/gi).test(navigator.appVersion),
		width = $(window).width(),
		height = $(window).height() + (isIPhone ?  60 : 0),
		hHeight = $('header').outerHeight(),
		fHeight = $('footer').outerHeight();
	return {
		width: width - 4,
		height: height - hHeight - fHeight - 4
	};
}

function reSizeDiv() {
	var dims = getDimensions(),
		$flexDiv = $('#flexDiv');
	$flexDiv.css({
		width: dims.width,
		height: dims.height
	});
}

// we are watching all three of these events, if any occur we re-determine the size
// and scroll the window back to the top
$(window).bind('resize orientationchange pageinit', function (event) {
	window.scrollTo(1, 0);
	reSizeDiv();
});
