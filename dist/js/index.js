$('.banner.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  dots: true,
  fade: true,
  cssEase: 'linear',
  infinite: true
});

$('.sponsor.slider').slick({
  centerMode: true,
  slidesToShow: 3,
  variableWidth: true
});

$('.ufscar.slider').slick({
  centerMode: true,
  slidesToShow: 2,
  variableWidth: true
});

$('figure.item .image')
  .dimmer('show');

$('.ui.dropdown').dropdown({
  allowCategorySelection: true,
  on: 'hover'
});
