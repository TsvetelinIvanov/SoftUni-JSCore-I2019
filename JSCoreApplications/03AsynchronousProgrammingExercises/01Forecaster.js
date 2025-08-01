function attachEvents() {
    const baseUrl = 'https://judgetests.firebaseio.com/';
    $('#submit').click(getWeather);

    function getWeather() {
        $.get(baseUrl + 'locations.json')
            .then(loadForecast)
            .catch(displayError);
        
        function loadForecast(locations) {
            let locationName = $('#location').val();
            let location = locations.find(l => l.name === locationName);
            //let location = locations.filter(l => l.name === locationName)[0];
            let todayForecast = $.get(baseUrl + 'forecast/today/' + location.code + '.json');
            let upcomingForecast = $.get(baseUrl + 'forecast/upcoming/' + location.code + '.json');

            Promise.all([todayForecast, upcomingForecast])
                .then(displayForecast)
                .catch(displayError);

            function displayForecast([today, upcoming]) {
                let symbols = {
                    'Sunny': '&#x2600',
                    'Partly sunny': '&#x26C5',
                    'Overcast': '&#x2601',
                    'Rain': '&#x2614',
                    'Degrees': '&#176'
                };
                
                $('#forecast').css('display', 'block');
                let $spanSymbol = $('<span>').addClass('condition symbol').html(symbols[today.forecast.condition]);                
                let $spanConditionContainer = $('<span>').addClass('condition');
                let $spanLocationName = $('<span>').addClass('forecast-data').text(today.name);
                let $spanTemperature = $('<span>').addClass('forecast-data').html(today.forecast.low + symbols.Degrees + '/' + today.forecast.high + symbols.Degrees);
                let $spanCondition = $('<span>').addClass('forecast-data').text(today.forecast.condition);
                $spanConditionContainer.append($spanLocationName, $spanTemperature, $spanCondition);
                $('#current').append($spanSymbol, $spanConditionContainer);

                let $divUpcoming = $('#upcoming');
                for (let forecast of upcoming.forecast) {
                    let $spanUpcoming = $('<span>').addClass('upcoming');
                    let $spanUpcomingSymbol = $('<span>').addClass('symbol').html(symbols[forecast.condition]);
                    let $spanUpcomingTemperature = $('<span>').addClass('forecast-data').html(forecast.low + symbols.Degrees + '/' + forecast.high + symbols.Degrees);
                    let $spanUpcomingCondition = $('<span>').addClass('forecast-data').text(forecast.condition);
                    $spanUpcoming.append($spanUpcomingSymbol, $spanUpcomingTemperature, $spanUpcomingCondition);
                    $divUpcoming.append($spanUpcoming);
                }
            }
        }
        
        function displayError() {
            let $divForecast = $('#forecast');
            $divForecast.css('display', 'block');
            $divForecast.text('Error');
        }
    }
}
