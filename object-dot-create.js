/** The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object. 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 * 
*/

const engineer = {
  introduceSelf: function () {
    console.log(`My name is ${this.name}. I am a ${this.type} engineer.`);
  },
};

const marty = Object.create(engineer);
marty.name = "Marty";
marty.type = "Frontend";

// Call the method
marty.introduceSelf();