var jurorColor
var charset = "abcdefghijklmnopqrstuvwxyz0123456789"

//for each div with class juror, fadeIn random color 

$(document).ready(function() {
	function randColor () {
		for( var i=0; i < 6; i++ ) {
		    jurorColor += charset.charAt(Math.floor(Math.random() * charset.length));
	}

	$('div.juror').each(function (i,elem) {
		(elem).css('background-color', '#'+randColor()+'');
	});
};