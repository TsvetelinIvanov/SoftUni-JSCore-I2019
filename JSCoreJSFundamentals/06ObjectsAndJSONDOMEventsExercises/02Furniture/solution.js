function solve() {
    let furnitureListElement = document.getElementById('furniture-list');
    let generateButton = document.getElementsByTagName('button')[0];
    generateButton.addEventListener('click', () => {
        let furnitureList = JSON.parse(document.getElementsByTagName('textarea')[0].value);
        for (let furniture of furnitureList) {
            let div = document.createElement('div');
            div.setAttribute('class', 'furniture');
            let nameP = document.createElement('p');
            nameP.innerHTML = 'Name: ' + furniture.name;
            div.appendChild(nameP);
            let img = document.createElement('img');
            img.setAttribute('src', furniture.img);
            div.appendChild(img);
            let priceP = document.createElement('p');
            priceP.innerHTML = 'Price: ' + furniture.price;
            div.appendChild(priceP);
            let decorationFactorP = document.createElement('p');
            decorationFactorP.innerHTML = 'Decoration factor: ' + furniture.decFactor;
            div.appendChild(decorationFactorP);
            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            div.appendChild(checkbox);

            //document.getElementById('furniture-list').appendChild(div);
            furnitureListElement.appendChild(div);
        }
    })

    let buyButton = document.getElementsByTagName('button')[1];
    buyButton.addEventListener('click', () => {
        let boughtFurnitures = [];
        let totalPrice = 0;
        let decorationFactors = [];
        //let furnitureArray = Array.from(document.getElementById('furniture-list').children);
        let furnitureArray = Array.from(furnitureListElement.children);
        for (let furniture of furnitureArray) {
            let isChecked = furniture.getElementsByTagName('input')[0].checked;
            if (isChecked) {
                let furnitureName = furniture.getElementsByTagName('p')[0].innerHTML.split(': ')[1];
                boughtFurnitures.push(furnitureName);
                let price = Number(furniture.getElementsByTagName('p')[1].innerHTML.split(': ')[1]);
                totalPrice += price;
                let decorationFactor = Number(furniture.getElementsByTagName('p')[2].innerHTML.split(': ')[1]);
                decorationFactors.push(decorationFactor);
            }
        }

        let textareaElement = document.getElementsByTagName('textarea')[1];
        textareaElement.value += `Bought furniture: ${boughtFurnitures.join(', ')}\n`;
        textareaElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        let averageDecorationFactor = decorationFactors.reduce((a, b) => a + b) / decorationFactors.length;
        textareaElement.value += `Average decoration factor: ${averageDecorationFactor}`;
    })
}
