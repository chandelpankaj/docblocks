function createDocument(){
    const url = "../php/uploadDocumentToIPFS.php";
    const formData = new FormData();
    var documentFile = document.getElementById('documentFile').files[0];
    formData.append('file', documentFile);

    $.ajax({
        url: url,
        dataType: 'text', // what to expect back from server
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        type: 'post',
        success: function(response){
            var hashOfFile = response;
            if(response[0] != 'Q'){
                console.log("error uploading file");
            }
            else{
                console.log("file upload successful");


                // now upload file to blockchain
                createDocumentOnBlockchain(hashOfFile);
            }
        }
    });

    return false;
}

function createDocumentOnBlockchain(hashOfFile){
    var url = "http://localhost:3000/api/CreateDocument";
    var documentId = $("input#documentId").val();
    var studentId = $("input#studentId").val();
    console.log(documentId + ", " + studentId);

    // after validation

    var document = {
        "$class": "org.edu.document.CreateDocument",
        "documentId": documentId,
        "participantKey": studentId,
        "documentHash": hashOfFile
    };


    var input = JSON.stringify(document);
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
    

}
