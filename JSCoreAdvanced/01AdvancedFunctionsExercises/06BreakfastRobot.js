let breakfastRobot = (
    //In Judge must be paste without this above
    function makeBreakfast() {
        let microelementStock = {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0
        };
        
        let recipes = {
            apple/*'apple'*/: {
                carbohydrate: 1,
                flavour: 2
            }, 
            coke: {
                carbohydrate: 10,
                flavour: 20
            },
            burger: {
                carbohydrate: 5,
                fat: 7, 
                flavour:3
            },
            omelet: {
                protein: 5,
                fat: 1,
                flavour: 1
            },
            cheverme: {
                protein: 10,
                carbohydrate: 10,
                fat: 10, 
                flavour: 10
            }
        };

        return readCommand;        

        function readCommand(commandString) {
            let commandLine = commandString.split(' ');
            let command = commandLine[0];
            switch(command) {
                case 'restock':
                    let microelement = commandLine[1];
                    let microelementQuantity = Number(commandLine[2]);
                    return restock(microelement, microelementQuantity);
                case 'prepare':
                    let breakfast = commandLine[1];
                    let breakfastQuantity = commandLine[2];
                    return prepare(breakfast, breakfastQuantity);
                case 'report':
                    return report();
            }
        }

        function restock(microelement, quantity) {
            microelementStock[microelement] += Number(quantity);
            
            return 'Success';
        }

        function prepare(recipe, quantity) {
            let breakfast = recipes[recipe];
            for (let microelement in breakfast) {
                if (microelementStock[microelement] < breakfast[microelement] * Number(quantity)) {
                    return `Error: not enough ${microelement} in stock`;
                }
            }

            Object.keys(breakfast).forEach(microelement => microelementStock[microelement] -= breakfast[microelement] * Number(quantity));
            
            return 'Success';
        }

        function report() {
            return `protein=${microelementStock.protein} carbohydrate=${microelementStock.carbohydrate} fat=${microelementStock.fat} flavour=${microelementStock.flavour}`;
        }
        
    }//In Judge must be paste without this below
)() //This IIFE is for local tests

console.log(breakfastRobot('restock flavour 50'))
console.log(breakfastRobot('prepare coke 4'))
console.log(breakfastRobot('report'))
console.log('Next Test: Perform another tests in comments!')

// console.log(breakfastRobot('restock carbohydrate 10'))
// console.log(breakfastRobot('restock flavour 10'))
// console.log(breakfastRobot('prepare apple 1'))
// console.log(breakfastRobot('restock fat 10'))
// console.log(breakfastRobot('prepare burger 1'))
// console.log(breakfastRobot('report'))
// console.log('Next Test: Perform another tests in comments!')

// console.log(breakfastRobot('prepare cheverme 1'))
// console.log(breakfastRobot('restock protein 10'))
// console.log(breakfastRobot('prepare cheverme 1'))
// console.log(breakfastRobot('restock carbohydrate 10'))
// console.log(breakfastRobot('prepare cheverme 1'))
// console.log(breakfastRobot('restock fat 10'))
// console.log(breakfastRobot('prepare cheverme 1'))
// console.log(breakfastRobot('restock flavour 10'))
// console.log(breakfastRobot('prepare cheverme 1'))
// console.log(breakfastRobot('report'))
