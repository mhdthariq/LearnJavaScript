class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class Android extends SmartPhones {
  constructor(color, brand, model, price) {
    super(color, brand, model);
    this.price = price;
  }

  splitScreen() {
    console.log("Android have a split screen");
  }
}

const samsung = new Android("Phantom Black", "Samsung", "Galaxy S21", 1100);
console.log(samsung);
