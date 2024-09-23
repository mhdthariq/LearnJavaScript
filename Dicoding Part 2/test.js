const greet = (name) => "Hello, " + name + "!";

function noReturn() {
  let x = 10;
}

let result = noReturn();

console.log(greet("Bob"));
console.log(result);
