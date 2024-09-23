// For Loop
for (let i = 0; i < 5; i++) {
  console.log(`Perulangan ke-${i}`);
}

// For in Loop
const person = { name: "Fulan", age: 50, birthYear: 1970 };

for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}

// For of Loop
const fruits = ["Apple", "Banana", "Cherry", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}
