/* Array on Javascript
 * An array is a collection of elements that are stored in a contiguous memory location.
 * The elements in an array can be accessed using an index.
 * The index of an array starts from 0.
 * The elements in an array can be of different data types.
 */

// Manipulating arrays using indexing
const myArray = [1, 2, 3, 4, 5];
myArray[2] = 6;
console.log(myArray);

// Manipulating arrays using push()
const myArray2 = [1, 2, 3, 4, 5];
myArray2.push(6);
console.log(myArray2);

// Deleting an element from an array
const myArray3 = ["Android", "iOS", "Blackberry", "Windows Phone"];
delete myArray3[2];
console.log(myArray3);

// Deleting an element from an array using splice()
const myArray4 = ["Android", "iOS", "Blackberry", "Windows Phone"];
myArray4.splice(1, 1);
console.log(myArray4);

// Deleting an element from an array using pop()
const myArray5 = ["Android", "iOS", "Blackberry", "Windows Phone"];
myArray5.pop();
console.log(myArray5);

// Deleting an element from an array using shift()
const myArray6 = ["Android", "iOS", "Blackberry", "Windows Phone"];
myArray6.shift();
console.log(myArray6);

// Array destructuring
const introduction = ["Hello", "John"];
const [greeting, name] = introduction;
console.log(greeting, name);

/* Array Method
 * The array method is a built-in method that can be used to manipulate arrays.
 */

// reverse()
const subjects = ["Math", "English", "Programming"];
subjects.reverse();
console.log(subjects);

// sort()
const subjects2 = ["Math", "English", "Programming"];
subjects2.sort();
console.log(subjects2);
