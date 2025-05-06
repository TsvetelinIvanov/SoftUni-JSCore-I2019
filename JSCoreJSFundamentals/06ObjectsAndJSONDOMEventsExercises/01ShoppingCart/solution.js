function solve() {
    let products = {};
    let textareaElement = document.getElementsByTagName('textarea')[0];
    for (let i = 0; i < 3; i++) {
        let productDiv = document.getElementsByClassName('product')[i];
        let productName = productDiv.children[1].innerHTML;
        let productPrice = Number(productDiv.children[2].innerHTML.split(' ')[1]);
        document.getElementsByTagName('button')[i].addEventListener('click', () => {
            textareaElement.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
            if (!products.hasOwnProperty(productName)) {
                products[productName] = 0;
            }
            
            products[productName] += productPrice;
        })
    }

    document.getElementsByTagName('button')[3].addEventListener('click', () => {
        let productsList = [];
        let totalPrice = 0;

        for (let productName in products) {
            if (!productsList.includes(productName)) {
                productsList.push(productName);
            }
            
            totalPrice += products[productName];
        }

        textareaElement.value += `You bought ${productsList.join(', ')} for ${totalPrice.toFixed(2)}.\n`;
    })
}
