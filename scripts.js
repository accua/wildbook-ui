$( document ).ready(function() {

  $('#submit').click(function(element, animation) {
    event.preventDefault();
    var emailBoolean = $('input[name=sendEmailNotifications]:checked').val();
    var autoEmailAddress = $('#autoEmailAddress').val();
    var newSubmissionEmail = $('#newSubmissionEmail').val();
    alert(emailBoolean);
    $('#well1').addClass('animated fadeOutDown');
  });
});
