function assembleCar(carRequirements){
    let car = {};
    car.model = carRequirements.model;
    car.engine = takeEngine(carRequirements.power);
    car.carriage = {
        type: carRequirements.carriage,
        color: carRequirements.color
    };
    let wheelsize = carRequirements.wheelsize % 2 !== 0 ? carRequirements.wheelsize : carRequirements.wheelsize - 1;
    //let wheelsize = Math.trunc(carRequirements.wheelsize) % 2 !== 0 ? Math.trunc(carRequirements.wheelsize) : Math.trunc(carRequirements.wheelsize - 1);
    car.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

    return car;

    function takeEngine(power){
        let engine = {};
        if (power <= 90){
            engine = {
                power: 90,
                volume: 1800
            }         
        }
        else if (power <= 120){
            engine = {
                power: 120,
                volume: 2400
            }                            
        }
        else {
            engine = {
                power: 200,
                volume: 3500
            }
        }
        return engine;
    }
}

console.log(assembleCar({ model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14 }))
console.log(assembleCar({ model: 'Opel Vectra', power: 110, color: 'grey', carriage: 'coupe', wheelsize: 17 }))