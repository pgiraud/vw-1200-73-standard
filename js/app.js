$(function() {
  $('.post-content img').each(function() {
    $(this).wrap($('<a>', {
      href: $(this).attr('src').replace(/_[a-z]\.jpg/, '_q.jpg'),
      'class': 'image',
      'data-caption': $(this).attr('alt'),
      'data-at-450': $(this).attr('src').replace(/_[a-z]\.jpg/, '_z.jpg'),
      'data-at-800': $(this).attr('src').replace(/_[a-z]\.jpg/, '_c.jpg'),
      'data-at-1366': $(this).attr('src').replace(/_[a-z]\.jpg/, '_b.jpg')
    }));

    if ($(this).attr('src').indexOf('_q') != -1) {
      $(this).addClass('thumbnail');
    }
  });
  baguetteBox.run('.post-content', {});

  $('a.image').parent('p').addClass('text-center');
});
