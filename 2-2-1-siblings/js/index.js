const $advItems = $('#AdvLs .adv-item');
const duration = 200;

console.log($advItems)

$advItems.hover(function () {
  $(this).stop(true, false).animate({ top: 0 }, duration);
  $(this).siblings().stop(true, false).animate({ top: 118 }, duration);
}, function () {
  $advItems.stop(true, false).animate({ top: 166 }, duration);
});