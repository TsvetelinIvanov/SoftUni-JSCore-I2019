function calculateDrinkPrices(orders){
    let income = 0;
    for(let i = 0; i < orders.length; i++){
        let price = 0;
        
        let order = orders[i].split(", ");
        let money = Number(order[0]);
        let drink = order[1];
        if (drink === "tea"){
            price = 0.80;
        }
        else if (drink === "coffee"){
            if (order[2] === "caffeine"){
                price = 0.80;
            }
            else if (order[2] === "decaf"){
                price = 0.90;
            }
        }

        if (order.includes("milk")){
            price += 0.10;            
            //price += Math.round((price * 0.1) * 10) / 10;
        }

        let sugarCount = Number(order[order.length - 1]);
        if (sugarCount > 0){
            price += 0.10;
        }

        if (money >= price){
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${(money - price).toFixed(2)}$`);
            income += price;
        }
        else{
            console.log(`Not enough money for ${drink}. Need ${(price - money).toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${income.toFixed(2)}$`);
}

calculateDrinkPrices(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0'])
calculateDrinkPrices(['8.00, coffee, decaf, 4', '1.00, tea, 2'])