import { doSomething } from "./utils.mjs";

function onFullfilled(doSomethingData) {
  // Do your jobs when Promise is fullfilled
  console.log(doSomethingData);
}

function onRejected(doSomethingError) {
  // Do your jobs when Promise is rejected
  console.log(doSomethingError);
}

doSomething().then(onFullfilled, onRejected);
