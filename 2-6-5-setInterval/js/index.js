let index = 0;
let picInterval;
const duration = 2000;
const $slide = $('#Slide');
const $slideImgInner = $slide.find('.img-inner');

function setSlide() {
  if (index < 4) {
    index++;
  } else {
    index = 0;
  }
  console.log(index);
  // $('#Slide .img-inner').css('left', -index * 100 + '%')
  $slideImgInner.css('left', `${-index * 100}%`);
}

// Initial
picInterval = setInterval(setSlide, duration);

// Event
$slide.hover(function () {
  clearInterval(picInterval);
}, function () {
  picInterval = setInterval(setSlide, duration);
});