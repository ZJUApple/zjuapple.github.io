$('table').addClass('table table-striped table-hover');
$('img').each(function() {
  var src = $(this).attr('src');
  var alt = $(this).attr('alt');
  $(this).wrap('<a href="' + src + '" data-fancybox data-caption="' + alt + '"></a>');
})
