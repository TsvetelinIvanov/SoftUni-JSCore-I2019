function showCaloriesFromFood(arr){
    let caloryObject = {};
    for (let i = 0; i < arr.length; i += 2){
        let caloryObjectKey = arr[i];
        let caloryObjectValue = arr[i + 1];
        caloryObject[caloryObjectKey] = Number(caloryObjectValue);
    }

    console.log(caloryObject);
}

showCaloriesFromFood(['Yoghurt', 48, 'Rise', 138, 'Apple', 52])
showCaloriesFromFood(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42])