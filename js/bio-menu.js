$('.plate:nth-of-type(n)')
  .hover( function() {
    $('.mainMenu .title')
      .remove();
    $('.mainMenu')
      .append($('<span class="title">'+$(this).data('label')+'</span>'));
  }, function() {
    $('.mainMenu .title')
      .remove();
    $('.mainMenu')
      .append($("<div class='title'> <i class='sidebar icon'></i> </div>"));
  });
