function solve() {    
    let button = document.querySelector('button');
    button.addEventListener('click', addCards);

    function addCards() {
        let cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let fromCardInputElement = document.getElementById('from');
        let toCardInputElement = document.getElementById('to');
        let cardSuitSelectElement = document.querySelector('select');
        let cardsSectionElement = document.getElementById('cards');
        let fromCardIndex = cardValues.indexOf(fromCardInputElement.value);
        let toCardIndex = cardValues.indexOf(toCardInputElement.value);
        
        let cardSuit = '';
        if (cardSuitSelectElement.value.includes('Hearts')) {
            cardSuit = '&hearts;';
        }
        else if(cardSuitSelectElement.value.includes('Spades')) {
            cardSuit = '&spades;';
        }
        else if(cardSuitSelectElement.value.includes('Diamonds')) {
            cardSuit = '&diamond;';
        }
        else if(cardSuitSelectElement.value.includes('Clubs')) {
            cardSuit = '&clubs;';
        }

        for (let i = fromCardIndex; i <= toCardIndex; i++) {
            let cardValue = cardValues[i];
            let cardDiv = document.createElement('div');
            cardDiv.classList.add('card');
            let upSuitP = document.createElement('p');
            upSuitP.innerHTML = cardSuit;
            cardDiv.appendChild(upSuitP);
            let cardValueP = document.createElement('p');
            cardValueP.innerHTML = cardValue;
            cardDiv.appendChild(cardValueP);
            let downSuitP = document.createElement('p');
            downSuitP.innerHTML = cardSuit;
            cardDiv.appendChild(downSuitP);
            cardsSectionElement.appendChild(cardDiv);
        }

        fromCardInputElement.value = '';
        toCardInputElement.value = '';
    }
}
