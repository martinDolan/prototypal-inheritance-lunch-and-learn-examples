let weekend = {
  relaxing: true
};

let saturday = {
  mowLawn: true,
  __proto__: weekend
};

// for..in loops over both own and inherited keys
for(let prop in saturday) {
  console.log(prop); 
}