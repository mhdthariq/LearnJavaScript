// This is OOP style of coding in JavaScript using ES6 classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

// Create instance of Person
const person1 = new Person("John", 20);
const person2 = new Person("Jane", 22);

console.log(person1.name);
console.log(person2.name);

person1.eat();
person2.eat();
