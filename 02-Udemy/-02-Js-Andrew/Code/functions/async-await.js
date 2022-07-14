//
const getDataPromises = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number" ? resolve(num * 2) : reject("Enter Number");
    }, 1000);
  });

const processData = async () => {
  let data = await getDataPromises(5);
  data = await getDataPromises(data);
  return data;
};

processData()
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((err) => {
    console.log("Error:", err);
  });

  