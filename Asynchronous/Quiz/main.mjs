import { API, sampleErrorData, sampleSuccessData } from "./support.mjs";

function processData(data) {
  // Map over the `data` array and call `API.fetch` for each item
  const promises = data.map(({ delay, simulateError }) =>
    API.fetch(delay, simulateError),
  );

  // Use `Promise.all` to wait for all promises to either resolve or any to reject
  return Promise.all(promises)
    .then((results) => results) // If all promises resolve, return the results
    .catch((error) => {
      // If any promise rejects, throw the error
      throw error;
    });
}

processData(sampleErrorData).then(console.log).catch(console.log); // Should throw: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // Expected output: ['Data from delay 100', 'Data from delay 50']
