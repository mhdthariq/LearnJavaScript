/* Rest Operator
 * The rest operator is used to merge a list of function arguments into an array.
 * The rest operator is denoted by three dots (…).
 * The rest operator can be used in function parameters.
 */

// Rest operator in function
function myFunc(number, ...manyMoreArgs) {
  console.log("number", number);
  console.log("manyMoreArgs", manyMoreArgs);
  console.log(manyMoreArgs.length);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Rest operator in destructuring
const fruits = ["apple", "banana", "orange", "grape"];
const [first, second, ...rest] = fruits;
console.log(first);
console.log(second);
console.log(rest);
