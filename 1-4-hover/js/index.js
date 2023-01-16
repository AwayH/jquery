// $('#Item1').mouseover(function(){
//     alert('over');
// });

// $('#Item1').mouseout(function(){
//     alert('out');
// });

// alert(0==false);

$('#Item1').hover(function(){
    $('#Child1').stop(1, 0).slideDown();
}, function(){
    $('#Child1').stop(1, 0).slideUp();
});

$('#Item2').hover(function(){
    $('#Child2').stop(1, 0).slideDown();
}, function(){
    $('#Child2').stop(1, 0).slideUp();
});

$('#Item3').hover(function(){
    $('#Child3').stop(1, 0).slideDown();
}, function(){
    $('#Child3').stop(1, 0).slideUp();
});

$('#Item4').hover(function(){
    $('#Child4').stop(1, 0).slideDown();
}, function(){
    $('#Child4').stop(1, 0).slideUp();
});

$('#Item5').hover(function(){
    $('#Child5').stop(1, 0).slideDown();
}, function(){
    $('#Child5').stop(1, 0).slideUp();
});