
function createAuthenticator(){
    var url = "http://localhost:3000/api/CreateAuthenticator";
    
    var participantId = $("input#participantId").val();
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var participantEmail = $("input#participantEmail").val();
    var participantMobile = $("input#participantMobile").val();

    // after validation

    var authenticator = {
        "$class": "org.edu.participant.CreateAuthenticator",
        "participantKey": participantId,
        "contact": {
          "$class": "org.edu.participant.Contact",
          "fName": firstName,
          "lName": lastName,
          "email": participantEmail,
          "mobile": participantMobile
        }
      };


    var input = JSON.stringify(authenticator);
    console.log(input);
    $.ajax({
        url: url,
        xhrFields: {
            withCredentials: true
        },
        dataType: 'text', // what to expect back from server
        cache: false,
        contentType: "application/json;charset=UTF-8",
        processData: false,
        data: input,
        type: 'post',
        success: function(response){
           console.log(response);
        }
    });
    
    //return false so that page don't refresh after submitting form
    return false;
}
