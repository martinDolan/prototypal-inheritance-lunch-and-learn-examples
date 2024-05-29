https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf

const parentObject = { 
    parentProp: 'Parent object related data',
 };
const childObject = {
    childProp: 'Child object related data',
};

Object.setPrototypeOf(childObject, parentObject);

console.log(childObject.parentProp);
console.log(childObject.childProp);