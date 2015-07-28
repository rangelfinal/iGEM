$(document)
  .ready(function() {

    // fix menu when passed
    $('.masthead .overlay')
      .visibility({
        type: 'fixed',
        offset: 15 // give some space from top of screen
      });

    $('.ui.dropdown')
        .dropdown({
          showOnFocus: true
        });

  });

$('.container .image').dimmer({
  on: 'hover'
});
