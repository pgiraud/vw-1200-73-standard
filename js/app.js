$(function() {
  $('.post-content img').each(function() {
    $(this).wrap($('<a>', {
      href: $(this).attr('src').replace(/_[a-z]\.jpg/, '_s.jpg'),
      'class': 'image',
      'data-caption': $(this).attr('alt'),
      'data-at-450': $(this).attr('src').replace(/_[a-z]\.jpg/, '_z.jpg'),
      'data-at-800': $(this).attr('src').replace(/_[a-z]\.jpg/, '_c.jpg'),
      'data-at-1366': $(this).attr('src').replace(/_[a-z]\.jpg/, '_b.jpg')
    }));
  });
  baguetteBox.run('.post-content', {});
});
