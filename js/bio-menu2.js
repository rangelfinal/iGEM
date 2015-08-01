$('.cn-wrapper li:nth-child(n) a')
  .hover(function() {
    $(this).find('i.icon').hide();
    $(this).find('span.text').fadeIn();
  }, function() {
    $(this).find('i.icon').fadeIn();
    $(this).find('span.text').hide();
  });
