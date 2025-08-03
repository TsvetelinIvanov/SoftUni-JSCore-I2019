function operateWithCountriesAndTowns() {
    let baseUrl = "https://baas.kinvey.com/appdata/kid_H1y9kL-_N/";
    let kinveyUsername = "guest";
    let kinveyPassword = "guest";
    let base64Auth = btoa(kinveyUsername + ":" + kinveyPassword);
    
    attachEvents();
    loadCountries();
    
    function attachEvents() {
        $('#btnAddCountry').click(addCountry);
        $('#btnDeleteCountry').click(deleteCountry);
        $('#btnEditCountry').click(editCountry);
        
        $('#btnListTowns').click(loadTowns);
        $('#btnAddTown').click(addTown);
        $('#btnDeleteTown').click(deleteTown);
        $('#btnEditTown').click(editTown);
        
        $('#addCountry').click(fadeInNewCountry);
        $('#addTown').click(fadeInNewTown);                       
    }

    function loadCountries() {
        let request = {
            method: 'GET',
            url: baseUrl + 'countries',
            headers: {'Authorization': 'Basic ' + base64Auth}
        };

        $.ajax(request).then(displayCountries);
    }

    function displayCountries(countries) {
        let $countriesSelect = $('#countries');
        $countriesSelect.empty();
        for (let country of countries) {
            let $option = $('<option>').val(country._id).text(country.name);
            $countriesSelect.append($option);
        }
    }

    function addCountry() {
        let $newCountry = $('#newCountry');
        let countryName = $newCountry.val();
        if (!$('#countries option').toArray().some(c => $(c).text() == countryName)) {
            let request = {
                method: 'POST',
                url: baseUrl + 'countries',
                headers: {
                    "Authorization": "Basic " + base64Auth,
                    "Content-type": "application/json"
                },
                data: JSON.stringify({
                    name: countryName
                })
            };

            $.ajax(request)
                .then(function() {
                    $('.add:first').fadeOut();
                    loadCountries();
                    $newCountry.val('');
                });
        }
        else {
            let $errorDiv = $('#errorDiv');
            $errorDiv.text('This country exist already in the list!');
            $errorDiv.fadeIn();
            $('.sdd:first').fadeOut();
            setTimeout(function() {
                $errorDiv.fadeOut()
            }, 3000);
            
            $newCountry.val('');
        }
    }

    function deleteCountry() {
        let countryToDeleteId = $('#countries option:selected').val();
        let request = {
            method: 'DELETE',
            url: baseUrl + 'countries/' + countryToDeleteId,
            headers: {'Authorization': 'Basic ' + base64Auth}
        };

        $.ajax(request).then(loadCountries);
    }
    
    function editCountry() {
        let $countryToEditOption = $('#countries option:selected');
        let $inputEditCountry = $('#inputEditCountry');
        let $divEditCountry = $('#editCountry');

        let countryToEditId = $countryToEditOption.val();
        $inputEditCountry.val($countryToEditOption.text());
        $divEditCountry.fadeIn();

        $('#btnEditCountryName').click(function() {
            let request = {
                method: "PUT",
                url: baseUrl + "countries/" + countryToEditId,
                headers: {
                    "Authorization": "Basic " + base64Auth,
                    "Content-type": "application/json"
                },
                data: JSON.stringify({
                    name: $inputEditCountry.val()
                })
            };

            $.ajax(request)
                .then(function() {
                    loadCountries();
                    $inputEditCountry.val('');
                    $divEditCountry.fadeOut();
                });
        })
    }    

    function loadTowns() {
        let country = $('#countries option:selected').text();
        let request = {
            method: 'GET',
            url: baseUrl + 'towns',
            headers: {'Authorization': 'Basic ' + base64Auth}
        };

        $.ajax(request)
            .then(function(towns){
                let $townsSelect = $('#towns');
                $townsSelect.empty();
                let townsInCountry = towns.filter(t => t.country == country);
                for (let town of townsInCountry) {
                    let $option = $('<option>').val(town._id).text(town.name);
                    $townsSelect.append($option);
                }
            });
    }
    
    function addTown() {
        let $newTownCountry = $('#newTownCountry');
        let $newTown = $('#newTown');
        let countryName = $newTownCountry.val();
        let townName = $newTown.val();
        if ($('#countries option').toArray().some(c => $(c).text() == countryName)) {
            let request = {
                method: 'POST',
                url: baseUrl + 'towns',
                headers: {
                    "Authorization": "Basic " + base64Auth,
                    "Content-type": "application/json"
                },
                data: JSON.stringify({
                    name: townName,
                    country: countryName
                })
            };

            $.ajax(request)
                .then(function() {
                    loadTowns();
                    $('.add:last').fadeOut();
                    $newTownCountry.val('');
                    $newTown.val('');
                });
        }
        else{
            let $errorDiv = $('#errorDiv');
            $errorDiv.text('This country does not exist in the list!');
            $errorDiv.fadeIn();
            $('.add:last').fadeOut();
            setTimeout(function() {
                $errorDiv.fadeOut()
            }, 3000);
            $newTownCountry.val('');
            $newTown.val('');
        }
    }

    function deleteTown() {
        let townToDeleteId = $('#towns option:selected').val();
        let request = {
            method: 'DELETE',
            url: baseUrl + 'towns/' + townToDeleteId,
            headers: {'Authorization': 'Basic ' + base64Auth}
        };

        $.ajax(request).then(loadTowns);
    }

    function editTown() {
        let $townToEditOption = $('#towns option:selected');
        let $inpupEditTownName = $('#inputEditTownName');
        let $inputEditTownCountry = $('#inputEditTownCountry');
        let $divEditTown = $('#editTown');

        let townToEditId = $townToEditOption.val();
        $inpupEditTownName.val($townToEditOption.text());
        $inputEditTownCountry.val('');
        $divEditTown.fadeIn();
        $('#btnEditTownName').click(function() {
            let request = {
                method: 'PUT',
                url: baseUrl + 'towns/' + townToEditId,
                headers: {
                    "Authorization": "Basic " + base64Auth,
                    "Content-type": "application/json"
                },
                data: JSON.stringify({
                    name: $inpupEditTownName.val(),
                    country: $inputEditTownCountry.val()
                })
            };

            $.ajax(request)
                .then(function() {
                    loadTowns();
                    $inpupEditTownName.val('');
                    $inputEditTownCountry.val('');
                    $divEditTown.fadeOut();
                });
        });
    }

    function fadeInNewCountry() {
        $('.add:first').fadeIn();
    }

    function fadeInNewTown() {
        $('.add:last').fadeIn();
    }
}
