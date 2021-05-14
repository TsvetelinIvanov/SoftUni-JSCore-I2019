function showServicePrice(weekDay, service, hourString){
    let hour = Number(hourString);    
    if (hour < 8.0 || hour > 22.0){
        console.log('The gym does not work in this time!')
        return;
   }
    let price = 0;
    switch(weekDay){
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday': if (hour > 15.0) {
            price += 2.5;
        } switch(service){
            case 'Fitness': price += 5; break;
            case 'Sauna': price += 4; break;
            case 'Instructor': price += 10; break;
        } break;
        case 'Saturday':
        case 'Sunday': switch(service){
            case 'Fitness': price = 8; break;
            case 'Sauna': price = 7; break;
            case 'Instructor': price = 15; break;
        } break;
    }

    console.log(price);
}

showServicePrice('Monday', 'Sauna', 15.30)
showServicePrice('Sunday', 'Fitness', 22.00)