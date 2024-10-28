function deepFreeze(object) {
  Object.keys(object).forEach((name) => {
    const prop = object[name];
    if (typeof prop == "object" && prop !== null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(object);
}

const complexUser = {
  name: "Bob",
  email: "bob@example.com",
  preferences: {
    newsletter: true,
    notification: "weekly",
    address: {
      city: "New York",
      zip: "1001",
    },
  },
};

deepFreeze(complexUser);

complexUser.preferences.address.city = "Jakarta";

console.log(complexUser.preferences.address.city);
