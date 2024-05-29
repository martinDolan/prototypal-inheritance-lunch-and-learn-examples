/**
 * The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 */


/**
 * The new keyword does several things
1. assigns .this assignment to an empty object
2. adds `__proto__` to the empty object (hidden property)
	2b. `__proto__` is the reference to the other object with functionality
3. Auto returns the `this` object
 */

function PickleballPaddle(company, model) {
  this.company = company;
  this.model = model;
}

const rubyPaddle = new PickleballPaddle('Six Zero', 'Ruby');
const selkirkSlk = new PickleballPaddle('Selkirk', 'SLK');


// THEN ADD THIS:

// Add a method to the PickleballPaddle prototype
PickleballPaddle.prototype.review = function (review) {
  return `The ${this.company} ${this.model} is ${review}`;
};

// THEN THESE One by one:
// First run this:
rubyPaddle.review('awesome');

// Then run this:
selkirkSlk.review('decent');


/**
 * When a function is called with the new keyword, the function will be used as a constructor. new will do the following things:

Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.
Points newInstance's [[Prototype]] to the constructor function's prototype property, if the prototype is an Object. Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]].
Note: Properties/objects added to the constructor function's prototype property are therefore accessible to all instances created from the constructor function.

Executes the constructor function with the given arguments, binding newInstance as the this context (i.e. all references to this in the constructor function now refer to newInstance).
If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. Otherwise, if the constructor function doesn't return anything or returns a primitive, newInstance is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)
 */
