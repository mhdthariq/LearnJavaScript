const user = {
  name: "John",
  email: "john@example.com",
};

// Frreze user object
Object.freeze(user);

// Try to change the value of user object
user.email = "doe@example.com";
console.log(user);
