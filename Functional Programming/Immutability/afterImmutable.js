function max(arrayOfNumber) {
  // Use spread operator to duplicate the array
  return [...arrayOfNumber].sort((a, b) => a - b).pop();
}

function registerEmail(person, email) {
  // Use spread operator to duplicate person object
  return { ...person, email };
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log("Largest number:", largest);
console.log("Numbers array:", numbers);

const person = {
  name: "John",
  username: "john_doe",
};

const personWithEmail = registerEmail(person, "john@example.com");

console.log(person);
console.log(personWithEmail);
