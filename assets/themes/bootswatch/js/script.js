$('table').addClass('table table-striped table-hover');

$('img').each(function() {
  var src = $(this).attr('src');
  var alt = $(this).attr('alt');
  if (alt == 'LOGO') return;
  $(this).wrap('<a href="' + src + '" data-fancybox data-caption="' + alt + '"></a>');
});

function validateForm() {
  function validate(selector, regexp) {
    if ($(selector).val().match(regexp) == null) {
      $(selector).parents('.form-group').addClass('has-error');
      valid = false;
    }
  }
  $('.form-group').removeClass('has-error');
  var valid = true;
  validate('#name', /\S/);
  validate('#sid', /^\d{8}(\d{2})?$/);
  validate('#speciality', /\S/);
  validate('#phone', /^\d{11}$/);
  validate('#email', /^[\w.+\-]+@([A-Za-z0-9\-]+\.)+[A-Za-z]+$/);
  validate('#profile', /\S/);
  return valid;
}

function submitForm() {
  var error = function(jqxhr) {
    console.log(jqxhr);
    alert('提交发生错误，请检查网络状态');
    $('#submit').prop('disabled', false).text('提交');
  }

  if (validateForm() == false) return alert('请检查信息填写是否正确');
  $('#submit').prop('disabled', true).text('提交中……');

  var baseUrl  = 'https://db.zju-apple.club';
  var database = 'freshmen';
  var year = new Date().getFullYear();
  if (new Date().getMonth() < 8) --year;
  database += year;
  $.ajax({
    type: 'GET',
    url: baseUrl + '/_uuids',
    error,
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
        error,
        success: function() {
          alert('报名表提交成功！');
          location.replace('/');
        }
      });
    }
  });
}
