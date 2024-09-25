function apply(operation, ...args) {
  // We can add another code here before calling the operation

  return operation(...args);
}

function sum(a, b, c) {
  return a + b + c;
}

function discount(disc, value) {
  return value - (disc / 100) * value;
}

const productPrice = apply(sum, 100, 100, 200);
const discountedPrice = apply(discount, 25, productPrice);

console.log("Product Price:", productPrice);
console.log("With discount 25%:", discountedPrice);
