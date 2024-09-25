// Change the value of global variable
let count = 0;
function increment() {
  count++;
}

// Access system time
function getCurrentTime() {
  return new Date().toLocaleString();
}

// Change status accepted object as parameter
function updateUser(user) {
  user.name = "Updated Name";
}

// Write to file
const fs = require("fs");

function writeToFile(data) {
  fs.writeFileSync("data.txt", data);
}
