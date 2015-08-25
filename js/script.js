$(document)
  .ready(function() {
    $('.menuOverlay').visibility({
      type: 'fixed',
      offset: 15
    });
  });

$('.container .image').dimmer({
  on: 'hover'
});
