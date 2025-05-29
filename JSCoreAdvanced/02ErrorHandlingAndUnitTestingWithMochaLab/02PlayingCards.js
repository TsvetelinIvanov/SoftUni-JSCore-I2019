function makeCard(cardFace, cardSuit) {
    let cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let cardSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if (!cardFaces.includes(cardFace)) {
        throw new Error('Invalid card face: ' + cardFace);
    }

    if (!Object.keys(cardSuits).includes(cardSuit)) {
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

console.log('' + makeCard('A', 'S'))
console.log('' + makeCard('10', 'H'))
console.log('' + makeCard('1', 'C'))
