const $btnLg = $('#BtnLg');
const $btnSm = $('#BtnSm');
const $content = $('#Content');


$btnLg.click(function(){
  // $content.css('font-size', '2.5em');
  // $content.css('fontSize', '2.5em');
  // $content.css('backgroundColor', 'pink');
  $content.css({
    'font-size': '2.5em',
    backgroundColor: 'pink',
    lineHeight: '3em'
  });
});

$btnSm.click(function(){
  $content.css('font-size', 15);
});