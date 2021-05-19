function doSecretKnock(){
    const baseUrl = "https://baas.kinvey.com/appdata/kid_BJXTsSi-e/knock?query=";
    const kinveyUsername = "guest";
    const kinveyPassword = "guest";
    const base64Auth = btoa(kinveyUsername + ":" + kinveyPassword);
    const headers = {"Authorization": "Basic " + base64Auth};
    let $divContent = $("#content");
    let currentMessage = "Knock Knock.";
    let $pCurrent = $("<p>").text(currentMessage);
    $divContent.append($pCurrent);
    getNext(currentMessage);

    function getNext(message){
        let request = {
            method: "GET",
            url: baseUrl + message,
            headers
        };

        $.ajax(request).then(function(object){
            if (object.answer){
                let $pNext = $("<p>").text(object.answer);
                $divContent.append($pNext);               
            }

            if (object.message){
                let $pNext = $("<p>").text(object.message);
                $divContent.append($pNext);
                currentMessage = object.message;
                getNext(currentMessage);
            }
        });
    }
}