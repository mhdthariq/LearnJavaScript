function greeting() {
  console.log("Hello World!");
}

// Dinamis
function greetingWithName(name) {
  console.log("Hello " + name + "!");
}

function greetingWithSituation(greet, name) {
  console.log("Selamat " + greet + ", " + name + "!");
}

greeting();
greetingWithName("Mika");
greetingWithSituation("Pagi", "Mika");
