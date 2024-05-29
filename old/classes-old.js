/**
 * Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
 */


class Shape {
    constructor(color = 'black') {
        this.color = color;
    }

    describe() {
        return `A shape with color ${this.color}.`;
    }
}

class Triangle extends Shape {
    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }

    area() {
        return 0.5 * this.base * this.height;
    }

    describe() {
        return `A triangle with color ${this.color}, base ${this.base}, and height ${this.height}.`;
    }
}

// Example usage
const shape = new Shape('red');
console.log(shape.describe());
const triangle = new Triangle('blue', 5, 10);
console.log(triangle.describe()); 
console.log('Area of the triangle:', triangle.area());
