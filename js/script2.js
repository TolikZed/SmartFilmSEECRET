$(document).ready(function() {
  $('.sour').click(function(event) {
    $('.tar').removeClass('active')
    var num = $(this).attr('data-num');
    $('#target'+num).addClass('active')
  });
});