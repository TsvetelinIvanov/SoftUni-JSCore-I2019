class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return 2 * this.radius;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }
}

let circle = new Circle(2);
console.log(`Radius: ${circle.radius}`);
console.log(`Diameter: ${circle.diameter}`);
console.log(`Area: ${circle.area}`);
circle.diameter = 1.6;
console.log(`Radius: ${circle.radius}`);
console.log(`Diameter: ${circle.diameter}`);
console.log(`Area: ${circle.area}`);
