var url = window.location;

$('.ui.menu a').filter(function() {
    return this.href == url;
}).parent().addClass('active');
