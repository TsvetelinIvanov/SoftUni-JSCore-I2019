let extensible = //in Judge must be paste only the IIFE
(function extendClass(){
    let counter = 0;
    class Extensible{
        constructor(){
            this.id = counter;
            counter++;
        }

        extend(template){
            for(let property in template){
                if(typeof template[property] === 'function'){
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

let obj1 = new extensible();
let obj2 = new extensible();
let obj3 = new extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);