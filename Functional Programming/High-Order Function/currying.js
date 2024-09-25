function adjectivfy(adjective) {
  return function (noun) {
    return `${noun} ${adjective}`;
  };
}

function multipleBy(x) {
  return function (y) {
    return x * y;
  };
}

const coolifier = adjectivfy("cool");
const funnifier = adjectivfy("funny");

const multipleByFive = multipleBy(5);

console.log(coolifier("JavaScript")); // JavaScript cool
console.log(funnifier("JavaScript")); // JavaScript funny
console.log(multipleByFive(10)); // 50
console.log(multipleByFive(20)); // 100
