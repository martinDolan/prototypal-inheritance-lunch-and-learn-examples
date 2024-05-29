/**
 * After the creation of the car instances, the color of car1 is overridden to black. The prototype of both cars remains the same.
 */

function Car() {}
const car1 = new Car();
const car2 = new Car();

Car.prototype.color = "original color";

console.log(car1.color)
console.log(car2.color)

car1.color = "black";

console.log(Object.getPrototypeOf(car1).color); // 'original color'
console.log(Object.getPrototypeOf(car2).color); // 'original color'

console.log(car1.color); // 'black'
console.log(car2.color); // 'original color'
