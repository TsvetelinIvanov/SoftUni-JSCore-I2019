class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {
        for (let product of products) {
            let [productName, productQuantity, productPrice] = product.split(' ');
            productQuantity = Number(productQuantity);
            productPrice = Number(productPrice);
            if (this.budget >= productPrice) {
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = 0;
                }

                this.productsInStock[productName] += productQuantity;
                this.budget -= productPrice;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } 
            else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        
        //return this.actionsHistory.join('\n').trim() + '\n';
        //return this.actionsHistory.join('\n') + '\n';
        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {        
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {meal, products: neededProducts, price};
            let mealsCount = Object.keys(this.menu).length;
            
            return `Great idea! Now with the ${meal} we have ${mealsCount} meals in the menu, other ideas?`;            
        }
        else {
            //return `The ${meal} is already in our menu, try something different.`;//For Exercise in Judge
            return `${meal} is already in our menu, try something different.`;//For Exam in Judge
        }
    }

    showTheMenu() {
        if(Object.keys(this.menu).length > 0) {
            let menuList = Object.values(this.menu).map(m => `${m.meal} - $ ${m.price}`);
            
            //return menuList.join('\n').trim() + '\n';           
            return menuList.join('\n') + '\n';                      
        }
        else {
            return 'Our menu is not ready yet, please come later...';
        }
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        let neededProducts = this.menu[meal].products;
        for (let neededProduct of neededProducts) {
            let [productName, productQuantity] = neededProduct.split(/\s+/);
            productQuantity = Number(productQuantity);
            if (!this.productsInStock.hasOwnProperty(productName) || this.productsInStock[productName] < productQuantity) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }

        neededProducts.forEach(neededProduct => {
            let [productName, productQuantity] = neededProduct.split(/\s+/);
            productQuantity = Number(productQuantity);
            this.productsInStock[productName] -= productQuantity;
        });

        let price = this.menu[meal].price;
        this.budget += price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`
    }   
}

let kitchen = new Kitchen (1000);

console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

console.log(kitchen.showTheMenu());
