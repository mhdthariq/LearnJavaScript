function max(arrayOfNumbers) {
  return arrayOfNumbers.sort((a, b) => a - b).pop();
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log("Largest number:", largest);
console.log("Numbers array:", numbers);
