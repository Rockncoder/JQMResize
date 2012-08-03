"use strict";

var $, navigator, window;

function getDimensions() {
	// the iphone specific code is kind of kludgy, if you have a better way let me know
	var isIPhone = (/iphone/gi).test(navigator.appVersion),
		iPhoneHeight = (isIPhone ?  60 : 0),
		width = $(window).width(),
		height = $(window).height(),
		// if one of these doesn't exist, assign 0 rather a null or undefined
		hHeight = $('header').outerHeight() || 0,
		fHeight = $('footer').outerHeight() || 0;
	return {
		width: width - 4,
		height: height - hHeight - fHeight - 4 + iPhoneHeight
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
$(window).bind('resize orientationchange pageshow', function (event) {
	window.scrollTo(1, 0);
	reSizeDiv();
});
