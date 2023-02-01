let num = 1;
let picInterval;

function doNext() {
  if (num < 24) {
    num++;
  } else {
    num = 1;
  }
  $('#Pic').attr('src', `./images/pic${num}.jpg`);
}

function doPrev() {
  if (num > 1) {
    num--;
  } else {
    num = 24;
  }
  $('#Pic').attr('src', `./images/pic${num}.jpg`);
}

// 初始化
picInterval = setInterval(doNext, 100);

// 事件
$('#Wrap').hover(function () {
  clearInterval(picInterval);
}, function () {
  picInterval = setInterval(doNext, 100);
});

$('#BtnNext').click(doNext);
$('#BtnPrev').click(doPrev);