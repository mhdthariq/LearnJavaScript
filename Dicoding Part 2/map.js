/* Map
 * Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
 * The main methods are:
 * new Map() – creates the map.
 * map.set(key, value) – stores the value by the key.
 * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
 * map.has(key) – returns true if the key exists, false otherwise.
 * map.delete(key) – removes the value by the key.
 * map.clear() – removes everything from the map.
 * map.size – returns the current element count.
 */

const productMap = new Map([
  ["shoees", 100],
  ["bags", 200],
  ["clothes", 300],
]);
console.log(productMap);

// Save the value using the set() method
const map = new Map();
map.set("name", "John");
map.set("age", 25);
console.log(map);

// Get the value using the get() method
console.log(map.get("name"));

// Remove the value using the delete() method
const user = new Map();
user.set("name", "James");
user.set("age", 30);
user.delete("age");
console.log(user);
