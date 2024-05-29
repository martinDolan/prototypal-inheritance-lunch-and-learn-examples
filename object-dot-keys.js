let silverWare = {
  canEatWith: true
};

// probably should use Object.setPrototypeOf() instead
let spoon = {
  soup: true,
  icecream: true,
  __proto__: silverWare
};


console.log(Object.keys(spoon));