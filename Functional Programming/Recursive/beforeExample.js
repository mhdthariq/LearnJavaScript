// This is using loop
function generateArray(n) {
  const result = [];
  for (let counter = 0; counter <= n; counter += 1) {
    result.push(counter);
  }
  return result;
}

const largeArray = generateArray(50);

console.log(largeArray);
