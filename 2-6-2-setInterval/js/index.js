let num = 3;
let $pic = $('#Pic');
let duration = 2000;

$pic.attr('src', `./images/photo${num}.jpg`);

function todo() {

  if (num < 5) {
    num += 1;
  } else {
    num = 1;
  }

  $pic.attr('src', `./images/photo${num}.jpg`);
  console.log(num);
}

setInterval(todo, duration);