//CallBack
const getDataCallBack = (num, callBack) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callBack(undefined, num * 2);
    } else {
      callBack("Enter Number");
    }
  }, 2000);
};

getDataCallBack(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getDataCallBack(data, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`CallBack Data: ${data}`);
      }
    });
  }
});

//Promises

const getDataPromises = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number" ? resolve(num * 2) : reject("Enter Number");
    }, 2000);
  });

const myPromises = getDataPromises(2);
myPromises.then(
  (data) => {
    getDataPromises(data).then(
      (data) => {
        console.log(`Promises Data: ${data}`);
      },
      (err) => {
        console.log("Erro");
      }
    );
  },
  (err) => {
    console.log(err);
  }
);

getDataPromises(10)
  .then((data) => {
    return getDataPromises(data);
  })
  .then((data) => {
    return `This is some data`
  })
  .then((data) => {
    console.log(`Promises Data Pro: ${data}`);
  })
  .catch((err) => {
    console.log(err);
  });
