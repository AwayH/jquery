const $entryType = $('#EntryType');

$entryType.addClass('Type1');

$('#Tab1').click(function () {
  $entryType.removeClass();
  $entryType.addClass('entry-out Type1');
});

$('#Tab2').click(function () {
  // $entryType.removeClass();
  // $entryType.addClass('entry-out Type2');
  $entryType
    .removeClass()
    .addClass('entry-out Type2 dd fff hh');
});

$('#Tab3').click(function () {
  $entryType.removeClass();
  $entryType.addClass('entry-out Type3');
});