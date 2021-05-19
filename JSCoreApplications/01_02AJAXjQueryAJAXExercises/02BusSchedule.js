function solve() {
    const baseUrl = 'https://judgetests.firebaseio.com/schedule/';
    let currentStopId = 'depot';
    let currentStop;
    let spanInfo = $('.info');

    function depart() {
        $.ajax({
            method: 'GET',
            url: baseUrl + currentStopId + '.json',
            success: loadStop
        });
    }

    function arrive() {
        spanInfo.text(`Arriving at ${currentStop.name}`);
        currentStopId = currentStop.next;
        switchButtons('arrive', 'depart');
    }

    function loadStop(data) {
        currentStop = data;
        spanInfo.text('Next stop ' + currentStop.name);
        switchButtons('depart', 'arrive');
    }

    function switchButtons(disable, enable) {
        $(`#${disable}`).attr('disabled', true);
        $(`#${enable}`).attr('disabled', false);
    }

    return { depart, arrive };
}