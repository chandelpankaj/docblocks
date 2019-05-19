function createInstitute(){

    var url = "http://localhost:3000/api/CreateInstitute";
    
    var instituteId = $("input#instituteId").val();
    var instituteName = $("input#instituteName").val();
    var instituteState = $("input#instituteState").val();
    var instituteCity = $("input#instituteCity").val();
    var instituteAddress = $("input#instituteAddress").val();
    var institutePin = $("input#institutePin").val();
    var institutePhone = $("input#institutePhone").val();

    // after validation

    var institute = {
        "$class": "org.edu.participant.CreateInstitute",
        "instituteId": instituteId,
        "instituteName": instituteName,
        "instituteState": instituteState,
        "instituteCity": instituteCity,
        "instituteAddress": instituteAddress,
        "institutePin": institutePin,
        "phoneNumber": institutePhone
    };
    // send http request to create institute

    var input = JSON.stringify(institute);
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

function clearInstituteForm(){
    $("input#instituteId").val('');
    $("input#instituteName").val('');
    $("input#instituteState").val('');
    $("input#instituteCity").val('');
    $("input#instituteAddress").val('');
    $("input#institutePin").val('');
    $("input#institutePhone").val('');
}
