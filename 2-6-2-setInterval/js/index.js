// let num = 3;
// let $pic = $('#Pic');
// let duration = 2000;

// $pic.attr('src', `./images/photo${num}.jpg`);

// function todo() {

//   if (num < 5) {
//     num += 1;
//   } else {
//     num = 1;
//   }

//   $pic.attr('src', `./images/photo${num}.jpg`);
//   console.log(num);
// }

// setInterval(todo, duration);

let num = 0;

setInterval(function () {
  if (num < 10) {
    num += 1;
  } else {
    num = 0;
  }

  console.log(num);
}, 500);