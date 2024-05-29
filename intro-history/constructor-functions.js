/**
 * 
 * Constructor Functions
 */

// without object.create
function Ball(name) {
  this.name = name;
}

Ball.prototype.rolls = function () {
  console.log(`The ${this.name} rolls`);
};
/*The call() method of Function instances calls this function with a given this value and arguments provided individually.
*/

function Football(name) {
  // Call the parent constructor
  Ball.call(this, name);
}

// Set up inheritance
Football.prototype = new Ball();

// Set the constructor
Football.prototype.constructor = Football;

Football.prototype.spirals = function () {
  console.log(`The ${this.name} spirals`);
};

let ball = new Ball('Ball');
let football = new Football('Football');

ball.rolls(); // The Ball rolls
football.rolls(); // The Football rolls
football.spirals(); // The Football spirals








// With object.create
function Ball(name) {
  this.name = name;
}

Ball.prototype.rolls = function () {
  console.log(`The ${this.name} rolls`);
};

function Football(name) {
  // Call the parent constructor
  Ball.call(this, name);
}

// Set up inheritance
Football.prototype = Object.create(Ball.prototype);

// Correct the constructor
Football.prototype.constructor = Football;

Football.prototype.jump = function () {
  console.log(`The ${this.name} spirals`);
};

let ball = new Ball('Ball');
let football = new Football('Football');

ball.rolls(); // The Ball rolls
football.rolls(); // The Football rolls
football.jump(); // The Football spirals


