
/**
 * The call() method of Function instances calls this function with a given this value and arguments provided individually.
 */

function greeting() { 
	console.log(`Hello, ${this.name}!`); 
} 

let person = { name: 'Marty' }; 
let person2 = { name: 'Doc' };

greeting.call(person);
greeting.call(person2);

// Call lives on the Function prototype
console.dir(Function.prototype);

