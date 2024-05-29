const aRandomObject = {
  arrayOfElements: []
};

// Borrow the Array push method
aRandomObject.push = function(element) {
  return Array.prototype.push.call(this.arrayOfElements, element);
};

// Use the borrowed push method to add arrayOfElements
aRandomObject.push(1);
aRandomObject.push(2);
aRandomObject.push(3);

console.log(aRandomObject.arrayOfElements); // Output: [1, 2, 3]
