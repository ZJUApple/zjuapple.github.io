$('table').addClass('table table-striped table-hover');

$('img').each(function() {
  var src = $(this).attr('src');
  var alt = $(this).attr('alt');
  $(this).wrap('<a href="' + src + '" data-fancybox data-caption="' + alt + '"></a>');
});

function submitForm() {
  $('#submit').prop('disabled', true).text('提交中……');

  var baseUrl  = 'https://db.yzyzsun.me';
  var database = 'freshmen2017';
  $.ajax({
    type: 'GET',
    url: baseUrl + '/_uuids',
    success: function(data) {
      var uuid = data.uuids[0];
      var json = { 'UA': navigator.userAgent, '提交时间': new Date().toString() };
      $('form').serializeArray().forEach(function(x) {
        json[x.name] = x.value;
      });

      $.ajax({
        type: 'PUT',
        url: baseUrl + '/' + database + '/' + uuid,
        contentType: 'application/json',
        data: JSON.stringify(json),
        success: function() {
          alert('报名表提交成功！');
          location.replace('/');
        }
      });
    }
  });
}
