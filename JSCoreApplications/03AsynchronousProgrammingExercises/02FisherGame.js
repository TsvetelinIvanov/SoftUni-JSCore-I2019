function attachEvents() {
    //const baseUrl = 'https://baas.kinvey.com/appdata/kid_rkxScVJGe/biggestCatches';
    //const baseUrl = 'https://baas.kinvey.com/appdata/kid_Sy3cFMu9G/biggestCatches';
    const baseUrl = 'https://baas.kinvey.com/appdata/kid_H1y9kL-_N/biggestCatches';
    const kinveyUsername = 'guest';
    //const kinveyPassword = '123';// for middle baseUrl
    const kinveyPassword = 'guest';
    const base64Auth = btoa(kinveyUsername + ':' + kinveyPassword);
    const authHeaders = {'Authorization':'Basic ' + base64Auth};

    $('.load').click(loadCatches);
    $('.add').click(addCatch);
    
    function loadCatches() {
        let request = {
            url: baseUrl,
            method: 'GET',
            headers: authHeaders
        };

        $.ajax(request)
            .then(displayCatches);

        function displayCatches(catches) {
            let $divCatches = $('#catches');
            $divCatches.empty();
            for (let catche of catches) {
                let $divCatch = $('<div>').addClass('catch').attr('data-id', catche._id);
                let $labelAngler = $('<label>').text('Angler');
                let $inputAngler = $('<input>').attr('type', 'text').addClass('angler').val(catche.angler);
                let $labelWeight = $('<label>').text('Weight');
                let $inputWeight = $('<input>').attr('type', 'number').addClass('weight').val(catche.weight);
                let $labelSpecies = $('<label>').text('Species');
                let $inputSpecies = $('<input>').attr('type', 'text').addClass('species').val(catche.species);
                let $labelLocation = $('<label>').text('Location');
                let $inputLocation = $('<input>').attr('type', 'text').addClass('location').val(catche.location);
                let $labelBait = $('<label>').text('Bait');
                let $inputBait = $('<input>').attr('type', 'text').addClass('bait').val(catche.bait);
                let $labelCaptureTime = $('<label>').text('Capture Time');
                let $inputCaptureTime = $('<input>').attr('type', 'number').addClass('captureTime').val(catche.captureTime);
                let $buttonUpdate = $('<button>').addClass('update').text('Update').click(updateCatch);
                let $buttonDelete = $('<button>').addClass('delete').text('Delete').click(deleteCatch);
                $divCatch.append($labelAngler, $inputAngler, $labelWeight, $inputWeight, $labelSpecies, $inputSpecies, $labelLocation, $inputLocation, $labelBait, $inputBait, $labelCaptureTime, $inputCaptureTime, $buttonUpdate, $buttonDelete);
                $divCatches.append($divCatch);
            }
        }
    }
    
    function addCatch() {
        let inputs = $(this).parent().find('input');
        let request = {
            url: baseUrl,
            method: 'POST',
            headers: {'Authorization': 'Basic ' + base64Auth, 'Content-type': 'application/json'}, 
            data: JSON.stringify({
                angler: $(inputs[0]).val(),
                weight: Number($(inputs[1]).val()),
                species: $(inputs[2]).val(),
                location: $(inputs[3]).val(),
                bait: $(inputs[4]).val(),
                captureTime: Number($(inputs[5]).val())
            })
        };

        $.ajax(request).then(loadCatches);
        for (let input of inputs) {
            $(input).val('');
        }
    }
   
    function updateCatch() {
        let inputs = $(this).parent().find('input');
        let catchId = $(this).parent().attr('data-id');
        let request = {
            url: baseUrl + '/' + catchId,
            method: 'PUT',
            headers: {'Authorization': 'Basic ' + base64Auth, 'Content-type': 'application/json'},
            data: JSON.stringify({
                angler: $(inputs[0]).val(),
                weight: $(inputs[1]).val(),
                species: $(inputs[2]).val(),
                location: $(inputs[3]).val(),
                bait: $(inputs[4]).val(),
                captureTime: $(inputs[5]).val()
            })
        };
        
        $.ajax(request)
            .then(loadCatches);
    }
    
    function deleteCatch() {
        let catchId = $(this).parent().attr('data-id');
        let request = {
            url: baseUrl + '/' + catchId,
            method: 'DELETE',
            headers: authHeaders
        };
        
        $.ajax(request)
            .then(loadCatches);
    }
}
