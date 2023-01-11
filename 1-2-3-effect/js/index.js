
$('#Btn1').click(function () {
    $('#Pic').fadeIn();
});

$('#Btn2').click(function () {
    $('#Pic').fadeOut();
});

// document.getElementById('Btn2').addEventListener('click', function() {
//     document.getElementById('Pic').style.display = 'none';
// });

$('#Btn3').click(function () {
    $('#Pic').fadeTo(400, .5);
});

$('#Btn4').click(function () {
    $('#Pic').fadeTo(400, 1);
});

$('#Btn5').click(function () {
    $('#Pic').fadeToggle();
});