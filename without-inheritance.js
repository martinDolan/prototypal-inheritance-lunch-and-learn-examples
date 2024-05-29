// Without inheritance

function Dragon(name, type) {
  this.name = name;
  this.type = type;

  this.shoutName = function () {
    console.log(`I am ${this.name}, a ${this.type} dragon!!!`);
  };

  this.breatheFire = function () {
    console.log(`${this.name} breathes fire!`);
  };
}

const draco = new Dragon("Draco", "European");
const smaug = new Dragon("Smaug", "Wyvern");

draco.breatheFire();
smaug.breatheFire();


// With inheritance
function Dragon(name, type) {
  this.name = name;
  this.type = type;
}

Dragon.prototype.shoutName = function () {
  console.log(`I am ${this.name}, a ${this.type} dragon!!!`);
};

Dragon.prototype.breatheFire = function () {
  console.log(`${this.name} breathes fire!`);
};

const draco = new Dragon("Draco", "European");
const smaug = new Dragon("Smaug", "Wyvern");

draco.breatheFire();
smaug.breatheFire();
