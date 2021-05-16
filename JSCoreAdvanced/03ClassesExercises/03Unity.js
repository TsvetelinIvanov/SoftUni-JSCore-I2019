class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    unite(rat){
        if(rat instanceof Rat){
            this.unitedRats.push(rat);
        }
    }

    getRats(){
        return this.unitedRats;
    }

    toString(){
        let ratNames = this.unitedRats.map(r => `##${r.name}`)
        return this.unitedRats.length === 0 ? this.name : this.name + '\n' + ratNames.join('\n');
    }
}

let rat = new Rat("Pesho");
console.log(rat.toString()); //Pesho

console.log(rat.getRats()); //[]

rat.unite(new Rat("Gosho"));
rat.unite(new Rat("Sasho"));
console.log(rat.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(rat.toString());
// Pesho
// ##Gosho
// ##Sasho
