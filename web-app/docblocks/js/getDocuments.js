function getDocuments(){
    var url = "http://localhost:3000/api/queries/getDocumentById";
    
    var documentId = $("input#documentId").val();

    // after validation

    var input = "document_id="+documentId;
    console.log(input);
    $.ajax({
        url: url,
        xhrFields: {
            withCredentials: true
        },
        dataType: 'text', // what to expect back from server
        contentType: "application/x-www-form-urlencoded",
        processData: false,
        data: input,
        type: 'get',
        success: function(response){
           console.log(JSON.parse(response));
           var documents = JSON.parse(response);
           try {
               for(let i in documents){
                    let document = documents[i];
                    console.log(document);
                    let documentHash = document.documentHash;
                    console.log(documentHash);

                    // now get this document from IPFS network

                    getDocumentFromIPFS(documentHash, documentId);


                }
               
           } catch (error) {
               console.log(error);
           }
        }
    });
    
    //return false so that page don't refresh after submitting form
    return false;
}

function getDocumentFromIPFS(documentHash, documentId){
    var url = "../php/getDocumentFromIPFS.php";

    var input = "documentHash="+documentHash;
    jQuery.ajax({
        url: url,
        data: input,
        cache:false,
        xhrFields:{
            responseType: 'blob'
        },
        type: 'get',
        contentType: "application/json;charset=UTF-8",
        success: function(data){
            //saveData(data, idName); 
            console.log(data);
            saveByteArray(data, documentId + ".pdf");
            return data;
        },
        error:function(response){
            console.log(response);
        }
    });
    
}

var saveByteArray = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, name) {
        //var blob = new Blob(data, {type: "text/plain;charset=utf-8"}),
            url = window.URL.createObjectURL(data);
            window.open(url);
        a.href = url;
        a.download = name;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());
