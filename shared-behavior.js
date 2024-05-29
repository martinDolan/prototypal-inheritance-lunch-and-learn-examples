function Pizza(type) {
    this.type = type;
}

Pizza.prototype.bake = function() {
    console.log(`Your ${this.type} pizza is baking and will be on the way soon!`);
};

function SpecialtyPizza(type, topping) {
    Pizza.call(this, type);
    this.topping = topping;
}

SpecialtyPizza.prototype = Object.create(Pizza.prototype);
SpecialtyPizza.prototype.constructor = SpecialtyPizza;

SpecialtyPizza.prototype.addTopping = function() {
    console.log(`Your ${this.type} pizza with ${this.topping} is on the way!`);
};

let pizza = new SpecialtyPizza('Gluten Free', 'mushrooms');
pizza.bake(); 
pizza.addTopping();
