function issueIdentity(){
    var url = "http://localhost:3000/api/system/identities/issue";
    
    var namespace = "org.edu.participant";
    var participantType = $("#participantType").val();
    console.log(participantType);
    var participantId = $("input#participantId").val();
    var idName = $("input#idName").val();
    var isIssuer = false;
    if ($('#isIssuer').is(":checked"))
    {
        isIssuer = true;   
    }
    var participant = namespace + "." + participantType + "#" + participantId;

    var dataToSend = {
        "participant": participant,
        "userID": idName,
        "options": {"issuer": isIssuer}
    }

    var input = JSON.stringify(dataToSend);
    console.log(input);
    
    jQuery.ajax({
        url: url,
        cache:false,
        xhrFields:{
            withCredentials: true,
            responseType: 'blob'
        },
        data: input,
        type: 'post',
        contentType: "application/json;charset=UTF-8",
        success: function(data){
            saveData(data, idName); 
        },
        error:function(response){
            console.log(response);
        }
    });

    // to avoid page refreshing
    return false;
}
    


var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        var json = JSON.stringify(data),
            blob = new Blob([json], {type: "octet/stream"}),
            url = window.URL.createObjectURL(data);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());
