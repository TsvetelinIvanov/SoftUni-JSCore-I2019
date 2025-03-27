function calculateTimeToWalk(stepsNumber, footprintLengthInMeters, speedInKilometersPerHour) {
let pathInMeters = stepsNumber * footprintLengthInMeters;
let pauseTimeInSeconds = Math.floor(pathInMeters / 500) * 60;
let pathInKilometers = pathInMeters / 1000;
let goTimeInHours = pathInKilometers / speedInKilometersPerHour;
let goTimeInSeconds = goTimeInHours * 3600;
let walkTimeInSeconds = goTimeInSeconds + pauseTimeInSeconds;
let walkHours = Math.floor(walkTimeInSeconds / 3600);
let walkMinutes = Math.floor((walkTimeInSeconds % 3600) / 60);
let walkSeconds = Math.round((walkTimeInSeconds % 3600) % 60);
//let walkSeconds = (walkTimeInSeconds % 3600) % 60;
//let walkSeconds = Math.floor((walkTimeInSeconds % 3600) % 60);

let walkHoursString;
if (walkHours < 10) {
    walkHoursString = `0${walkHours}`;
}
else {
    walkHoursString = `${walkHours}`;
}

let walkMinutesString;
if (walkMinutes < 10) {
    walkMinutesString = `0${walkMinutes}`;
}
else {
    walkMinutesString = `${walkMinutes}`;
}

let walkSecondsString;
if (walkSeconds < 10) {
    walkSecondsString = `0${walkSeconds}`;
}
else {
    walkSecondsString = `${walkSeconds}`;
}

console.log(`${walkHoursString}:${walkMinutesString}:${walkSecondsString}`);
}

calculateTimeToWalk(4000, 0.60, 5)
calculateTimeToWalk(2564, 0.70, 5.5)
