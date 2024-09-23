const user = {
  id: 1,
  name: "Kanon Shibuya",
  email: "kanonshibuya@liella.com",
  nickname: "Kanon",
  username: "kanonshibuya",
  password: "kanon123",
};

const { id, email } = user;
console.log(id, email);

// Mengubah nilai properti
const account = {
  balance: 1000000,
  debt: 5000,
};

account.balance = 2000000;
console.log(account.balance);

// Menghapus properti
const person = {
  name: "John",
  gender: "Male",
  age: 33,
};

// delete person.age;
delete person["age"];
console.log(person);
