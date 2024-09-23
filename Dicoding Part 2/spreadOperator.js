/* Spread Operator
 * The spread operator is used to expand an array or object into individual elements.
 * The spread operator is denoted by three dots (…).
 * The spread operator can be used in function calls, array literals, and object literals.
 */

// Spread operator in object
const obj1 = { name: "John" };
const obj2 = { lastName: "Doe", address: "New York" };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const copyObj1 = { ...obj1 };
console.log(copyObj1);

// Spread operator in array
const array1 = ["Kanon"];
const array2 = ["Shibuya", "Japan"];
const newArray = [...array1, ...array2];
console.log(newArray);

const copyArray1 = [...array1];
console.log(copyArray1);
