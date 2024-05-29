let amphibian = {
  vertebrate: true
};

let frog = Object.create(amphibian);

frog.jumps = true;

console.log(frog.vertebrate);
