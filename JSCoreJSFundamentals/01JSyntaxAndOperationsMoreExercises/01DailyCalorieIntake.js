function calculateDailyCalorieIntake(personData, workoutsCount){
    let sex = personData[0];
    let weight = Number(personData[1]);
    let height = Number(personData[2]);
    let age = Number(personData[3]);
    
    let caloriesBasicMetabolism = 0;
    if (sex === 'm'){
        caloriesBasicMetabolism = 66 + 13.8 * weight + 5 * height - 6.8 * age;
    }
    else if (sex === 'f'){
        caloriesBasicMetabolism = 655 + 9.7 * weight + 1.85 * height - 4.7 * age;
    }

    let workoutsCountNumber = Number(workoutsCount);
    let activeFactor = 0;
    if (workoutsCountNumber < 1){
        activeFactor = 1.2;
    }
    else if (workoutsCountNumber <= 2){
        activeFactor = 1.375;
    }
    else if (workoutsCountNumber <= 5){
        activeFactor = 1.55;
    }
    else if (workoutsCountNumber <= 7){
        activeFactor = 1.725;
    }
    else if (workoutsCountNumber > 7){
        activeFactor = 1.9;
    }
   
    let dailyCalorieIntake = Math.round(caloriesBasicMetabolism * activeFactor);

    //console.log(`My calorie intake is ${dailyCalorieIntake}`);
    console.log(dailyCalorieIntake);
}

calculateDailyCalorieIntake(['f', 46, 157, 32], 5)
calculateDailyCalorieIntake(['m', 86, 185, 25], 3)
