const readline = require("readline");

// Function to generate random consonants
function getRandomConsonant() {
  var consonants = "bcdfghjklmnpqrstvwxyz";
  return consonants[Math.floor(Math.random() * consonants.length)];
}

// Function to generate random vowels
function getRandomVowel() {
  var vowels = "aeiou";
  return vowels[Math.floor(Math.random() * vowels.length)];
}

// Function to generate random names
function generateRandomName(length) {
  let name = "";
  for (let i = 0; i < length; i++) {
    name += getRandomConsonant();
    name += getRandomVowel();
  }
  // Capitalize the first letter
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// Function to generate and display random names
function generateRandomNames(numberOfNames) {
  const names = [];

  for (let i = 0; i < numberOfNames; i++) {
    const firstNameLength = Math.floor(Math.random() * 3) + 2; // first name length between 2 and 4
    const lastNameLength = Math.floor(Math.random() * 3) + 2; // last name length between 2 and 4

    const randomFirstName = generateRandomName(firstNameLength);
    const randomLastName = generateRandomName(lastNameLength);

    names.push(randomFirstName + " " + randomLastName);
  }

  return names;
}

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Get user input for the number of names to generate
rl.question("How many random names would you like to generate? ", (answer) => {
  const numberOfNames = parseInt(answer, 10);

  // Generate and display the names
  const randomNames = generateRandomNames(numberOfNames);
  console.log("Generated Names:");
  randomNames.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
  });

  rl.close();
});
