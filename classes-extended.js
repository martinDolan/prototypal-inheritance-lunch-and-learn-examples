class Device {
  constructor(name, percentage) {
    this.name = name;
    this.percentage = percentage;
  }
  batteryLeft() {
    console.log(`${this.name} has ${this.percentage}% battery left`);
  }
}

class Smartphone extends Device {
  // be sure to use the super keyword to call the parent constructor
  constructor(name, percentage) {
    super(name, percentage);
  }
  camera() {
    console.log(`${this.name} takes photos`);
  }
}

let newiPhone = new Smartphone('iPhone', '100');

newiPhone.batteryLeft();
newiPhone.camera();