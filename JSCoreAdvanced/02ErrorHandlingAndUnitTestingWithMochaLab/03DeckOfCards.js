function printDeckOfCards(cards){
    let deckOfCards = [];
    for(let card of cards){
        let cardFace = card.substring(0, card.length - 1);
        let cardSuit = card.substring(card.length - 1);
        try {
            deckOfCards.push(makeCard(cardFace, cardSuit).toString());
        }
        catch(e){
            console.log('Invalid card: ' + card);
            return;
            //throw new Error('Invalid card: ' + card);
        }        
    }

    console.log(deckOfCards.join(' '));

    function makeCard(cardFace, cardSuit){
        let cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let cardSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
    
        if (!cardFaces.includes(cardFace)){
            throw new Error('Invalid card face: ' + cardFace);
        }
    
        if (!Object.keys(cardSuits).includes(cardSuit)){
            throw new Error('Invalid card suit: ' + cardSuit);
        }
    
        let card = {
            face: cardFace,
            suit: cardSuits[cardSuit],
            toString: () => `${card.face}${card.suit}`
        };
    
        // let card = {        
        //     toString: () => `${cardFace}${cardSuits[cardSuit]}`
        // };
    
        //return `${cardFace}${cardSuits[cardSuit]}`;
        return card;
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])