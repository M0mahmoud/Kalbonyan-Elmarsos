const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([1, 2, 3, 4, 5]);
    reject("Error");
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log("Done", result);
  })
  .catch((err) => {
    console.log("ERROR", err);
  });
