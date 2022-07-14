//try-catch
const getTip = (amount) => {
  if (typeof amount === "number") {
    return amount * 0.25;
  } else {
    throw Error("Enter Number...!");
  }
};

try {
  const result = getTip(100);
  console.log(result);
} catch (e) {
  console.log("Catch Bblock is Runing")
}



