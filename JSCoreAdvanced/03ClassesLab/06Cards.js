let madeCardAndSuits = (function() {
    let Suits = {
        SPADES: '\u2660',
        HEARTS: '\u2665',
        DIAMONDS: '\u2666',
        CLUBS: '\u2663'
    }

    let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(face) {
            if (!Faces.includes(face)) {
                throw new Error(`Invalid face ${face}`);
            }
            
            this._face = face;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {
            if (!Object.keys(Suits).map(s => Suits[s]).includes(suit)) {
                throw new Error(`Invalid suit ${suit}`);
            }

            this._suit = suit;
        }
    }
    
    return {
        Suits: Suits,
        Card: Card
    }
}())

let Card = madeCardAndSuits.Card;
console.log(Card)
let Suits = madeCardAndSuits.Suits;
console.log(Suits)

let card = new Card('Q', Suits.CLUBS);
console.log(card)
console.log(card.face)
console.log(card.suit)
card.face = 'A';
card.suit = Suits.DIAMONDS;
console.log(card.face)
console.log(card.suit)
let card1 = new Card('1', Suits.DIAMONDS);//Error
