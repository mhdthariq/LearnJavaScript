/* Set
 * A set is a collection of unique values.
 * The main methods are:
 * new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
 * set.add(value) – adds a value, returns the set itself.
 * set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
 * set.has(value) – returns true if the value exists in the set, otherwise false.
 * set.clear() – removes everything from the set.
 */

// Create a set
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet);

// Add a value to the set
mySet.add(6);
console.log(mySet);

// Get the value from the set
for (const value of mySet) {
  console.log(value);
}

mySet.forEach((value) => console.log(value));

// Delete a value from the set
mySet.delete(3);
console.log(mySet);
