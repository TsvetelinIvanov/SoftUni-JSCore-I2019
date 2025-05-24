function calculateEccentricAnomaly(currentMeanAnomaly, orbitalEccenrticity) {
    let eccentricalAnomaly = approximate(currentMeanAnomaly, orbitalEccenrticity, 0);
    console.log(Number(eccentricalAnomaly.toFixed(9)));

    function approximate(meanAnomaly, orbitalEccenrticity, seriesCount) {
        if (Math.abs(currentMeanAnomaly - (meanAnomaly - orbitalEccenrticity * Math.sign(meanAnomaly))) < 1e-9 || seriesCount > 200) {
            return meanAnomaly;
        }

        return approximate(meanAnomaly - (meanAnomaly - orbitalEccenrticity * Math.sin(meanAnomaly) - meanAnomaly) / (1 - orbitalEccenrticity * Math.cos(meanAnomaly)), orbitalEccenrticity, ++seriesCount);
    }
}

calculateEccentricAnomaly(1, 0)
calculateEccentricAnomaly(3.1415926535, 0.75)
calculateEccentricAnomaly(0.25, 0.99)
calculateEccentricAnomaly(4.8, 0.2)
