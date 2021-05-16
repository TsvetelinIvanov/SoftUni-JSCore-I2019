function orderRectangles(rectanglesData) {
    let rectangles = [];
    for (let [width, height] of rectanglesData) {
        let rectangle = makeRectangle(width, height);
        rectangles.push(rectangle);
    }
    rectangles.sort((a, b) => a.compareTo(b));
    return rectangles;

    function makeRectangle(width, height){
        let rectangle = {
            width: width,
            height,
            area: () => rectangle.width * rectangle.height,
            compareTo: function(otherRectangle){
                let areaComparation = otherRectangle.area() - rectangle.area();
                let widthComparation = otherRectangle.width - rectangle.width;
                return areaComparation || widthComparation;
            }
        };
        return rectangle;
    }
}

console.log(orderRectangles([[10,5],[5,12]]))
console.log(orderRectangles([[10,5], [3,20], [5,12]]))