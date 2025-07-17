class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    get numberOfChildren() {
        let kidsCount = 0;
        for (let grade in this.kids) {
            kidsCount += this.kids[grade].length;
        }
        
        return kidsCount;
    }
    
    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }

        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }

        for (let kid of this.kids[grade]) {
            let kidName = kid.split('-')[0];
            if (kidName === name) {
                return `${name} is already in the list for this ${this.destination} vacation.`;
            }
        }

        this.kids[grade].push(`${name}-${budget}`);

        return this.kids[grade];
    }

    removeChild(name, grade) {
        if (!this.kids.hasOwnProperty(grade)) {
            return `We couldn't find ${name} in ${grade} grade.`;
        }

        let filteredKids = this.kids[grade].filter(k => k.split('-')[0] !== name);
        if (filteredKids.length === this.kids[grade].length) {
            return `We couldn't find ${name} in ${grade} grade.`;
        } 
        else {
            this.kids[grade] = filteredKids;
            return this.kids[grade];
        }
    }
    
    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let kidsList = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;

        Object.keys(this.kids).sort((a, b) => a - b).forEach(grade => {
            kidsList += `Grade: ${grade}\n`;
            for (let i = 0; i < this.kids[grade].length; i++) {
                kidsList += (i + 1) + '. ' + this.kids[grade][i] + '\n';
            }            
        });

        return kidsList;
        //return kidsList.trim();
        //return kidsList.splice(-1);
    }
}

// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Lilly', 6, 2100));
// console.log(vacation.registerChild('Pesho', 6, 2400));
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Tanya', 5, 6000));
// console.log(vacation.registerChild('Mitko', 10, 1590));

// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// vacation.registerChild('Gosho', 5, 2000);
// vacation.registerChild('Lilly', 6, 2100);
// console.log(vacation.removeChild('Gosho', 9));
// vacation.registerChild('Pesho', 6, 2400);
// vacation.registerChild('Gosho', 5, 2000);
// console.log(vacation.removeChild('Lilly', 6));
// console.log(vacation.registerChild('Tanya', 5, 6000))

// let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);
// vacation.registerChild('Gosho', 5, 3000);
// vacation.registerChild('Lilly', 6, 1500);
// vacation.registerChild('Pesho', 7, 4000);
// vacation.registerChild('Tanya', 5, 5000);
// vacation.registerChild('Mitko', 10, 5500);
// console.log(vacation.toString());
