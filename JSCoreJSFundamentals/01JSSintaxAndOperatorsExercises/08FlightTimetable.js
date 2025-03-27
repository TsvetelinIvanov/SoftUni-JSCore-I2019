function showFlightData(arr) {
    let type = arr[0];
    let townName = arr[1];
    let time = arr[2];
    let flightNumber = arr[3];
    let gateNumber = arr[4];

    console.log(`${type}: Destination - ${townName}, Flight - ${flightNumber}, Time - ${time}, Gate - ${gateNumber}`);
}

showFlightData(['Departures', 'London', '22:45', 'BR117', '42'])
showFlightData(['Arrivals', 'Paris', '02:22', 'VD17', '3'])
