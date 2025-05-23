function getPersonalBMI(name, age, weight, height) {
    let bmi = Math.round(weight / (height / 100) / (height / 100));
    let personalBMI = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi
    };
    
    let status = '';
    if (bmi < 18.5) {
        status = 'underweight';
    }
    else if (bmi < 25) {
        status = 'normal';
    }
    else if (bmi < 30) {
        status = 'overweight';
    }
    else if (bmi >= 30) {
        status = 'obese';
    }

    personalBMI.status = status;
    if (status === 'obese') {
        personalBMI.recommendation = 'admission required';
    }

    return personalBMI;
}

console.log(getPersonalBMI('Peter', 29, 75, 182))
console.log(getPersonalBMI('Honey Boo Boo', 9, 57, 137))
