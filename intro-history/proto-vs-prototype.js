// Create a person constructor function (note the capital letter)
function Person(name) {
  this.name = name;
}

// Add a greet method to the prototype of Person
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

// Create an instance of Person
const person1 = new Person("Camille");

// Log the __proto__ of person1
console.log(person1.__proto__);

// Log the prototype property of the Person constructor
console.log(Person.prototype); 

// Verify that person1.__proto__ and Person.prototype are the same
console.log(person1.__proto__ === Person.prototype);