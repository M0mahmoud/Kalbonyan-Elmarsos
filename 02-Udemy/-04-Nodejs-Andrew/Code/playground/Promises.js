const add = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(a + b);
    }, 2000);
  });
};

// add(5, 5)
//   .then((sum) => {
//     console.log(sum);
//     add(sum, 10)
//       .then((sum2) => {
//         console.log(sum2);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   })
//   .catch((e) => {
//     console.log(e);
//   });

add(10, 10)
  .then((sum) => {
    console.log(sum);
    return add(sum, 500);
  })
  .then((sum2) => {
    console.log('2=>'+sum2);
    
  })
  .catch((e) => {
    console.log(e);
  });
