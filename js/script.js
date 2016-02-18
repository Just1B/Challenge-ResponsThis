$(document).ready(function() {

//function for hide and show block
function hideBlock (number) {
  var block = ["","#skill","#past","#study"];
  for (i = 0 && i != number ; i <= 3 ; i++ ) {
    $(block[i]).hide();
  }
  $(block[number]).show();
}
  // call hideblock on click on competence
  $('#liOne').click( function(){
    hideBlock(1) });

  // call hideblock on click on experiences
  $('#liTwo').click( function() {
    hideBlock(2) });

  // call hideblock on click on formation
  $('#liThree').click( function() {
    hideBlock(3) });

  // Hide Collapse nav on mobile usage
  (function ($) {
    if ($(window).width() <= 768) {
      $(".nav a").on('click', function() {
        $('.navbar-toggle').click(); });
    };
  })(jQuery);

});
