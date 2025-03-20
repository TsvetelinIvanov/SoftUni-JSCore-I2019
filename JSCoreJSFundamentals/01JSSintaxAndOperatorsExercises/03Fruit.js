function buyFruits(fruit, weightInGramsString, pricePerKilogramString){
    let weightInKilograms = Number(weightInGramsString) / 1000;
    let pricePerKilogram = Number(pricePerKilogramString);
    let price = weightInKilograms * pricePerKilogram;
    
    console.log(`I need ${price.toFixed(2)} leva to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}

buyFruits('orange', 2500, 1.80)
buyFruits('apple', 1563, 2.35)
