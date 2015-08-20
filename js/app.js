$(function() {
  var count = 0;
  $('.post-content img').each(function() {
    var set = 'set' + count;
    var el = $(this);
    if (el.next().prop('tagName') != 'IMG') {
      count++;
    }
    $(this).wrap($('<a>', {
      href: $(this).attr('src').replace(/_[a-z]\.jpg/, '_b.jpg'),
      'class': 'image'
    }).attr('data-lightbox', set));
  });
});
