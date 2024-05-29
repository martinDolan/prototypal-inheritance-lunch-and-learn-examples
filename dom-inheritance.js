let div = document.createElement('div');
console.log(div.__proto__ === HTMLElement.prototype);

// Inherited methods
console.log(div.setAttribute('id', 'test'));
console.log(div.getAttribute('id'));



// Search up the prototype chain in two different ways:


// Manually
console.log(div.__proto__.hasOwnProperty('setAttribute'));
console.log(div.__proto__.__proto__.hasOwnProperty('setAttribute'));
console.log(div.__proto__.__proto__.__proto__.hasOwnProperty('setAttribute'));


//Dynamically
let currentProto = div.__proto__;
while (currentProto) {
    if (currentProto.hasOwnProperty('setAttribute')) {
        console.log('setAttribute found on', currentProto);
        break;
    }
    currentProto = currentProto.__proto__;
}
if (!currentProto) {
    console.log('setAttribute not found in the prototype chain');
}