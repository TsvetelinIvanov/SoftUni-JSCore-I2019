function attachEventsListeners() {
    let convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', convertDistance);

    function convertDistance() {
        let inputDistanceElement = document.getElementById('inputDistance');
        let inputUnitsSelectElement = document.getElementById('inputUnits');
        let outputDistanceElement = document.getElementById('outputDistance');
        let outputUnitsSelectElement = document.getElementById('outputUnits');

        let distanceInMeters = 0;
        let inputDistance = Number(inputDistanceElement.value);
        switch (inputUnitsSelectElement.value) {
            case 'km':
                distanceInMeters = inputDistance * 1000;
                break;
            case 'm':
                distanceInMeters = inputDistance;
                break;
            case 'cm':
                distanceInMeters = inputDistance * 0.01;
                break;
            case 'mm':
                distanceInMeters = inputDistance * 0.001;
                break;
            case 'mi':
                distanceInMeters = inputDistance * 1609.34;
                break;
            case 'yrd':
                distanceInMeters = inputDistance * 0.9144;
                break;
            case 'ft':
                distanceInMeters = inputDistance * 0.3048;
                break;
            case 'in':
                distanceInMeters = inputDistance * 0.0254;
                break;
        }
        
        let outputDistance = 0;
        switch (outputUnitsSelectElement.value) {
            case 'km':
                outputDistance = distanceInMeters / 1000;
                break;
            case 'm':
                outputDistance = distanceInMeters;
                break;
            case 'cm':
                outputDistance = distanceInMeters / 0.01;
                break;
            case 'mm':
                outputDistance = distanceInMeters / 0.001;
                break;
            case 'mi':
                outputDistance = distanceInMeters / 1609.34;
                break;
            case 'yrd':
                outputDistance = distanceInMeters / 0.9144;
                break;
            case 'ft':
                outputDistance = distanceInMeters / 0.3048;
                break;
            case 'in':
                outputDistance = distanceInMeters / 0.0254;
                break;
        }

        outputDistanceElement.value = outputDistance;
    }
}
