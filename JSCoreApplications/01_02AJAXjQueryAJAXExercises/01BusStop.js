function getInfo(){
    const baseServiceUrl = 'https://judgetests.firebaseio.com/businfo/';
    let $inputStopId = $('#stopId');
    let $divStopName = $('#stopName');
    let $ulBuses = $('#buses');

    $divStopName.text('');
    $ulBuses.empty();

    let busStopId = $inputStopId.val();
    $.get(baseServiceUrl + busStopId + '.json')
    .then(loadBuses)
    .catch(displayError);

    function loadBuses(stopId){
        $divStopName.text(stopId.name);
        for(let [busId, time] of Object.entries(stopId.buses)){
            let $li = $('<li>').text(`Bus ${busId} arrives in ${time} minutes`);
            $ulBuses.append($li);
        }
    }

    function displayError(){
        $divStopName.text('Error');
    }
}