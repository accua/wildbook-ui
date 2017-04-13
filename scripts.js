$(document).ready(function() {

  $('#submit').click(function(element, animation) {
    event.preventDefault();
    var emailBoolean = $('input[name=sendEmailNotifications]:checked').val();
    var autoEmailAddress = $('#autoEmailAddress').val();
    var newSubmissionEmail = $('#newSubmissionEmail').val();
    alert(emailBoolean);
    $('#well1').hide();
  });

// append additional forms to submission emails

    var x = 1;
    $(".addStudySite").click(function(event){ //on add input button click
        event.preventDefault();
        $(".input_fields_wrap").append('<div class="row"><div class="col-md-10"><input class="form-control" type="text" name="studySite' + x + '[]"/></div><div class="col-md-1 cancelIconColumn2"><a href="#" class="remove_field"><img src="cancelIcon.png" class="cancelIcon"></a></div><br><br><br></div>'); //add input box
        x++;
    });

    $(".input_fields_wrap").on("click",".remove_field", function(event){ //user click on remove text
        event.preventDefault(); $(this).parent('div').parent().remove();
    });

    // append additional forms to sample protocol

        var wrapper = $(".sampleProtocol"); //Fields wrapper
        var z = 1;
        $(".addSampleProtocol").click(function(event){ //on add input button click
            event.preventDefault();
            $(wrapper).append('<div class="row"><div class="col-md-10"><input class="form-control" type="text" name="protocol' + z + '[]"/></div><div class="col-md-1 cancelIconColumn2"><a href="#" class="remove_field"><img src="cancelIcon.png" class="cancelIcon"></a></div><br><br><br></div>'); //add input box
            z++;
        });

        $(wrapper).on("click",".remove_field", function(event){ //user click on remove text
            event.preventDefault(); $(this).parent('div').parent().remove();
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
        $(measureWrapper).append('<div class="row"><div class="col-md-5"><label for="measureName' + y + '[]">Measurement Name:</label><br><input class="form-control" type="text" name="measureName' + y + '[]"/></div><div class="col-md-5"><label for="measureType' + y + '[]">Measurement Type (units):</label><br><input class="form-control" type="text" name="measureType' + y + '[]"/>&nbsp&nbsp</div><div class="col-md-1 cancelIconColumn"><a href="#" class="remove_field"><img src="cancelIcon.png" class="cancelIcon"></a></div><br><br></div><br>'); //add input box
        y++;
    });

    $(measureWrapper).on("click",".remove_field", function(event){ //user click on remove text
        event.preventDefault(); $(this).parent('div').parent('div').remove();
    });

    $(".cat1").click(function(){
      $("#well1").show();
      $("#well2").hide();
      $("#well3").hide();
    });
    $(".cat2").click(function(){
      $("#well1").hide();
      $("#well2").show();
      $("#well3").hide();
    });
    $(".cat3").click(function(){
      $("#well1").hide();
      $("#well2").hide();
      $("#well3").show();
    });
    $(".cat4").click(function(){
      $("#well1").hide();
      $("#well2").hide();
      $("#well3").hide();
    });
    $(".cat5").click(function(){
      $("#well1").hide();
      $("#well2").hide();
      $("#well3").hide();
    });

    });
