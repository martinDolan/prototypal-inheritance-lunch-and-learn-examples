const prototype1 = {
    usefulInfo: 'This is a prototype object',
};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);

Object.getPrototypeOf(object1);
