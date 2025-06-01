let extensible = //in Judge must be paste only the IIFE
(function extendClass() {
    let counter = 0;
    class Extensible {
        constructor() {
            this.id = counter;
            counter++;
        }

        extend(template) {
            for (let property in template) {
                if (typeof template[property] === 'function') {
                    Extensible.prototype[property] = template[property];
                    //this.prototype[property] = template[property];
                    //Object.getPrototypeOf(this)[property] = template[property];
                } else {
                    this[property] = template[property];
                    //Extensible[property] = template[property];
                }
            }
        }
    }
    
    return Extensible;
})()

let object1 = new extensible();
let object2 = new extensible();
let object3 = new extensible();
console.log(object1.id);
console.log(object2.id);
console.log(object3.id);
