class SmartPhones {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class iOS extends SmartPhones {
  airDrop() {
    console.log("iOS has AirDrop");
  }
}

class Android extends SmartPhones {
  splitScreen() {
    console.log("Android has split screen");
  }
}

const iPhone = new iOS("Apple", "iPhone 12", 1200);
const samsung = new Android("Samsung", "Galaxy S21", 1100);

iPhone.charging();
iPhone.airDrop();

samsung.charging();
samsung.splitScreen();
