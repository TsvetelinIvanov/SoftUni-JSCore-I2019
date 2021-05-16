//In Judge must be paste only the function without variable
let vectorProduct = (function() {
    function add(firstVector, secondVector){
        let addedVector = [];
        addedVector[0] = firstVector[0] + secondVector[0];
        addedVector[1] = firstVector[1] + secondVector[1];
        return addedVector;
    }

    function multiply(vector, scalar){
        let scalaredVector = [vector[0] * scalar, vector[1] * scalar];
        return scalaredVector;
    }

    function length(vector){
        let vectorLength = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1])
        return vectorLength;
    }

    function dot(firstVector, secondVector){
        let vectorsDotProduct = firstVector[0] * secondVector[0] + firstVector[1] * secondVector[1];
        return vectorsDotProduct;
    }

    function cross(firstVector, secondVector){
        let vectorsCrossProduct = firstVector[0] * secondVector[1] - firstVector[1] * secondVector[0];
        return vectorsCrossProduct;
    }

    return {
        add: add,
        multiply: multiply,
        length: length,
        dot: dot,
        cross: cross
    }
})();

console.log(vectorProduct.add([1, 1], [1, 0]))
console.log(vectorProduct.multiply([3.5, -2], 2))
console.log(vectorProduct.length([3, -4]))
console.log(vectorProduct.dot([1, 0], [0, -1]))
console.log(vectorProduct.cross([3, 7], [1, 0]))