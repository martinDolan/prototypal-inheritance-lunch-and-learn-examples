let obj = {};
console.log(obj.toString()); // [object Object]

let arr = [1, 2, 3];
console.log(arr.toString()); // 1,2,3

let date = new Date();
console.log(date.toString())




// hasOwnProperty
let person = {
    name: "John"
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("toString")); // false, inherited from Object.prototype


// isPrototypeOf
function Animal() {}
function Rabbit() {}

Rabbit.prototype = Object.create(Animal.prototype);

let rabbit = new Rabbit();

console.log(Animal.prototype.isPrototypeOf(rabbit)); // true
console.log(Rabbit.prototype.isPrototypeOf(rabbit)); // true

