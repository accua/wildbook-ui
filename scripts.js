$( document ).ready(function() {

  $('#submit').click(function(element, animation) {
    event.preventDefault();
    var emailBoolean = $('input[name=sendEmailNotifications]:checked').val();
    var autoEmailAddress = $('#autoEmailAddress').val();
    var newSubmissionEmail = $('#newSubmissionEmail').val();
    alert(emailBoolean);
    $('#well1').hide();
  });

// append additional forms to submission emails

    var wrapper = $(".input_fields_wrap"); //Fields wrapper
    var x = 1;
    $(".addStudySite").click(function(event){ //on add input button click
        event.preventDefault();
        $(wrapper).append('<div><input type="text" name="mytext' + x + '[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        x++;
    });

    $(wrapper).on("click",".remove_field", function(event){ //user click on remove text
        event.preventDefault(); $(this).parent('div').remove();
    });


// Add "hide/show form function"

    $("input[name=measureSpecies]").on( "change", function() {
       var test = $(this).val();
       $("#speciesMeasurementInputForm").toggle();
    } );



// append additional forms to measurement Field

    var measureWrapper = $(".measurementFields"); //Fields wrapper
    var y = 1;
    $(".addMeasureField").click(function(event){ //on add input button click
        event.preventDefault();
        $(measureWrapper).append('<div><label for="measureName' + y + '[]">Measurement Name:</label><br><input type="text" name="measureName' + y + '[]"/><a href="#" class="remove_field">Remove</a><br><label for="measureType' + y + '[]">Measurement Type (units):</label><br><input type="text" name="measureType' + y + '[]"/><br></div>'); //add input box
        y++;
    });

    $(measureWrapper).on("click",".remove_field", function(event){ //user click on remove text
        event.preventDefault(); $(this).parent('div').remove();
    });
    });
