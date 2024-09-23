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

// Generate and display a random first name and last name
const firstName = Math.floor(Math.random() * 3) + 2; // first name length between 2 and 4
const lastName = Math.floor(Math.random() * 3) + 2; // last name length between 2 and 4

const randomFirstName = generateRandomName(firstName);
const randomLastName = generateRandomName(lastName);

console.log("Generated Name:", randomFirstName + " " + randomLastName);
