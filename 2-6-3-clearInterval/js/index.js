let num = 1;
let picInterval;
const duration = 500;

function doPrev() {
	if (num > 1) {
		num -= 1;
	} else {
		num = 24;
	}

	$('#Pic').attr('src', `./images/pic${num}.jpg`);
}

picInterval = setInterval(doPrev, duration);

$('#BtnPause').click(function(){
	clearInterval(picInterval);
});

$('#BtnPlay').click(function(){
	clearInterval(picInterval);
	picInterval = setInterval(doPrev, duration);
});