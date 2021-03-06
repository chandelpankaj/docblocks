
function createInstituteAdmin(){
    var url = "http://localhost:3000/api/CreateInstituteAdmin";
    
    var participantId = $("input#participantId").val();
    var instituteId = $("input#instituteId").val();
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var participantEmail = $("input#participantEmail").val();
    var participantMobile = $("input#participantMobile").val();

    // after validation

    var instituteAdmin = {
        "$class": "org.edu.participant.CreateInstituteAdmin",
        "participantKey": participantId,
        "instituteId": instituteId,
        "contact": {
          "$class": "org.edu.participant.Contact",
          "fName": firstName,
          "lName": lastName,
          "email": participantEmail,
          "mobile": participantMobile
        }
    };


    var input = JSON.stringify(instituteAdmin);
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
