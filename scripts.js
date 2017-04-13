$(document).ready(function() {


  // Hide/Show click functions for Progress Bar at Header

      $(".cat1").click(function(){
        $("#well1").show();
        $("#well2").hide();
        $("#well3").hide();
        $("#well4").hide();
        $("#well5").hide();
      });
      $(".cat2").click(function(){
        $("#well1").hide();
        $("#well2").show();
        $("#well3").hide();
        $("#well4").hide();
        $("#well5").hide();
      });
      $(".cat3").click(function(){
        $("#well1").hide();
        $("#well2").hide();
        $("#well3").show();
        $("#well4").hide();
        $("#well5").hide();
      });
      $(".cat4").click(function(){
        $("#well1").hide();
        $("#well2").hide();
        $("#well3").hide();
        $("#well4").show();
        $("#well5").hide();
      });
      $(".cat5").click(function(){
        $("#well1").hide();
        $("#well2").hide();
        $("#well3").hide();
        $("#well4").hide();
        $("#well5").show();
      });

// Well 2: Append additional forms to study sites

    var x = 1; // X variable for incrementing studySite name

    $(".addStudySite").click(function(event){ //on add input button click
        event.preventDefault();
        $(".input_fields_wrap").append('<div class="row"><div class="col-md-10"><input class="form-control studyClass" type="text" name="studySite'+ x + '"/></div><div class="col-md-1 cancelIconColumn2"><a href="#" class="remove_field"><img src="cancelIcon.png" class="cancelIcon"></a></div><br><br><br></div>'); //add input box
        x++;
    });

    $(".input_fields_wrap").on("click",".remove_field", function(event){ //user click on remove text
        event.preventDefault(); $(this).parent('div').parent().remove();
    });

// Well 3: Append additional forms to sample protocol

    var wrapper = $(".sampleProtocol"); //Fields wrapper
    var z = 1; // Z variable for incrementing protocol names
    $(".addSampleProtocol").click(function(event){ //on add input button click
        event.preventDefault();
        $(wrapper).append('<div class="row"><div class="col-md-10"><input class="form-control sampleProtocolClass" type="text" name="protocol' + z + '"/></div><div class="col-md-1 cancelIconColumn2"><a href="#" class="remove_field"><img src="cancelIcon.png" class="cancelIcon"></a></div><br><br><br></div>'); //add input box
        z++;
    });

    $(wrapper).on("click",".remove_field", function(event){ //user click on remove text
        event.preventDefault(); $(this).parent('div').parent().remove();
    });


// Add "hide/show form function for measurement input forms"

    $("input[name=measureSpecies]").on( "change", function() {
       var test = $(this).val();
       $("#speciesMeasurementInputForm").toggle();
    } );



// append additional forms to measurement Field

    var measureWrapper = $(".measurementFields"); //Fields wrapper
    var y = 1;
    $(".addMeasureField").click(function(event){ //on add input button click
        event.preventDefault();
        $(measureWrapper).append('<div class="row"><div class="col-md-5"><label for="measureName' + y + '">Measurement Name:</label><br><input class="form-control mNameClass" type="text" name="measureName' + y + '"/></div><div class="col-md-5"><label for="measureType' + y + '">Measurement Type (units):</label><br><input class="form-control mTypeClass" type="text" name="measureType' + y + '"/>&nbsp&nbsp</div><div class="col-md-1 cancelIconColumn"><a href="#" class="remove_field"><img src="cancelIcon.png" class="cancelIcon"></a></div><br><br></div><br>'); //add input box
        y++;
    });

    $(measureWrapper).on("click",".remove_field", function(event){ //user click on remove text
        event.preventDefault(); $(this).parent('div').parent('div').remove();
    });

// Submit user input from form

    $('#submit').click(function() {
      event.preventDefault();

      var siteArray = {};
      $(".studyClass").each(function(){
        siteArray[$(this).attr("name")] = $(this).val();
      });

      var measureNameArray = {};
      $(".mNameClass").each(function(){
        measureNameArray[$(this).attr("name")] = $(this).val();
      });

      var measureTypeArray = {};
      $(".mTypeClass").each(function(){
        measureTypeArray[$(this).attr("name")] = $(this).val();
      });

      var sampleProtocolArray = {};
      $(".sampleProtocolClass").each(function(){
        sampleProtocolArray[$(this).attr("name")] = $(this).val();
      });


      var emailBoolean = $('input[name=sendEmailNotifications]:checked').val();
      var autoEmailAddress = $('#autoEmailAddress').val();
      var newSubmissionEmail = $('#newSubmissionEmail').val();
      var brandLogoImg = $('#brandLogo').val();
      var brandBackgroundImg = $('#heroImg').val();


      var jsonOutput = [
        {"emailBoolean": emailBoolean,
         "emailNoReply": autoEmailAddress,
         "emailList": newSubmissionEmail,
         "studySites": siteArray,
         "protocols": sampleProtocolArray,
         "measurementNames": measureNameArray,
         "measurementTypes": measureTypeArray,
         "brandLogo": brandLogoImg,
         "backgroundImage": brandBackgroundImg
       }
     ];
      return jsonOutput;
    });
});
