// setTimeout(() => {
//   console.log("After 2s");
// }, 2000);

// // const names = ["ali", "eman", "mahmoud"];

// // const logNames = names.filter((name) => {
// //   return name.length > 3;
// // });

// // console.log(logNames);

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("Egypt", (data) => {
//   console.log(data);
// });

// //
// // Goal: Mess around with the callback pattern
// //
// // 1. Define an add function that accepts the correct arguments
// // 2. Use setTimeout to simulate a 2 second delay
// // 3. After 2 seconds are up, call the callback function with the sum
// // 4. Test your work!

// const add = (x, y, callback) => {
//   setTimeout(() => {
//     callback(x + y);
//   });
// };

// add(1, 4, (sum) => {
//   console.log(sum); // Should print: 5
// });

const doWorkCallBack = (callBack) => {
  setTimeout(() => {
    // callBack('This is error' , undefined)
    callBack(undefined, ["This is error", 2, 3, 3]);
  }, 2000);
};

doWorkCallBack((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});
