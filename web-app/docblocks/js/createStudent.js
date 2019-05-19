
function createStudent(){
    var url = "http://localhost:3000/api/CreateStudent";    

    var participantId = $("input#participantId").val();
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var gender = $("#gender").val();
    var state = $("input#state").val();
    var city = $("input#city").val();
    var address = $("input#address").val();
    var dob = $("#dob").val();
    // after validation

    var student = {
        "$class": "org.edu.participant.CreateStudent",
        "id": participantId,
        "fName": firstName,
        "lName": lastName,
        "gender": gender,
        "state": state,
        "city": city,
        "address": address,
        "DOB": dob
    };


    var input = JSON.stringify(student);
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
