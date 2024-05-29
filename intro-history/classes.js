class Phone {
  constructor(name, percentage) {
    this.name = name;
    this.percentage = percentage;
  }
  batteryLeft() {
    console.log(`${this.name} has ${this.percentage}% battery left`);
  }
}

const iPhone = new Phone('iPhone', '100');

iPhone.batteryLeft(); // iPhone has 100% battery left