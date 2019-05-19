function uploadCard(){
    var url = "http://localhost:3000/api/wallet/import";

    const formData = new FormData();
    var cardFile = document.getElementById('cardFile').files[0];
    formData.append('card', cardFile);

    $.ajax({
        url: url,
        xhrFields: {
            withCredentials: true
        },
        dataType: 'text', // what to expect back from server
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        type: 'post',
        success: function(response){
            console.log(response);
        }
    });

    // returning false to avoid refreshing page
    return false;
}