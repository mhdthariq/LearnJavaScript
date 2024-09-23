function isPrime(num) {
  if (num <= 1) return false; // Prime numbers are greater than 1
  if (num === 2) return true; // 2 is the only even prime number
  if (num % 2 === 0) return false; // Other even numbers are not prime

  // Check divisibility from 3 to the square root of num, skipping even numbers
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function categorizeNumber(input) {
  if (typeof input !== "number") {
    throw new Error("Input harus berupa bilangan bulat");
  } else if (input === 0) {
    return "Nol";
  } else if (input < 0) {
    return "Negatif";
  } else if (isPrime(input)) {
    return "Prima";
  } else if (input % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
}

// Contoh penggunaan
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber("abc");
} catch (error) {
  console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}
