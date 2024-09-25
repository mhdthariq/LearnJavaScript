// Accept a function argument
function memoize(fn) {
  const cache = new Map();

  // Return the value in form of function
  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
}

function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

const memoizedSumArray = memoize(sumArray);
const largeArray = Array.from({ length: 5000 }, (_, i) => i + 1);

console.time("Memoized Sum First Call");
console.log("Total:", memoizedSumArray(largeArray));
console.timeEnd("Memoized Sum First Call");

console.time("Memoized Sum Second Call (Cached)");
console.log("Total:", memoizedSumArray(largeArray));
console.timeEnd("Memoized Sum Second Call (Cached)");
