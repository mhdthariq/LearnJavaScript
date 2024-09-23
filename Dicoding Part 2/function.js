let celsius = null;

// Deklarasi function dengan regular function
const convertCelsiusToFahrenheitUsingRegular = function (celsius) {
  const result = (9 / 5) * celsius + 32;
  return result;
};

// Deklarasi function dengan arrow function
const convertCelsiusToFahrenheitUsingArrow = (celsius) => {
  const result = (9 / 5) * celsius + 32;
  return result;
};

//Deklarasi function dengan arrow function yang lebih singkat
const convertCelsiusToFahrenheitUsingArrowShort = (celsius) =>
  (9 / 5) * celsius + 32;

// Call the function
celsius = 90;
console.log(
  "Hasil konversi:",
  celsius,
  "C =",
  convertCelsiusToFahrenheitUsingRegular(celsius),
  "F",
);
console.log(
  "Hasil konversi:",
  celsius,
  "C =",
  convertCelsiusToFahrenheitUsingArrow(celsius),
  "F",
);
console.log(
  "Hasil konversi:",
  celsius,
  "C =",
  convertCelsiusToFahrenheitUsingArrowShort(celsius),
  "F",
);
