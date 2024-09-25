function registerEmail(person, email) {
  return Object.assign(person, { email });
}

const person = {
  name: "John",
  username: "john_doe",
};

const personWithEmail = registerEmail(person, "john@example.com");

console.log(person);
console.log(personWithEmail);
