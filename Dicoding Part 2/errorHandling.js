/* Try and Catch
 * The try statement allows you to define a block of code to be tested for errors while it is being executed.
 * The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
 * The finally statement lets you execute code, after try and catch, regardless of the result.
 */

// Example
try {
  console.log("Memulai Program");
  throw new Error("Terjadi Error");
  console.log("Mengakhiri Program");
} catch (err) {
  console.log("Karena Error, maka program dihentikan");
}

// Example
try {
  console.log("Ini try block");
  throw new Error("Terjadi Error");
} catch (err) {
  console.log("Ini catch block");
} finally {
  console.log("Ini finally block");
}
