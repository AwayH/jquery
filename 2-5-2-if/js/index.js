let num = 3;
const $pic = $('#Pic');

// $pic.attr('src', './images/ui0' + num + '.jpg');
$pic.attr('src', `./images/ui0${num}.jpg`);
// '<h1>' + money + '</h1>'

$pic.click(function () {
  // num = num + 1;
  // num += 10;
  // num++;
  if (num < 4) {
    num += 1;
  } else {
    num = 1;
  }
  console.log(num);

  $(this).attr('src', `./images/ui0${num}.jpg`);
});