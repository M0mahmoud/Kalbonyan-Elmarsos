//truthy-falsy

const products = [{ name: "A", age: 20 }];
const product = products[0];

if (product) {
  console.log("Found");
} else {
  console.log("Not Found");
}

if ("") {
  console.log("Found");
} else {
  console.log("Not Found");
}

if (0) {
  console.log("Found");
} else {
  console.log("Not Found");
}

if (undefined) {
  console.log("Found");
} else {
  console.log("Not Found");
}

if ([]) {
  console.log("Found");
} else {
  console.log("Not Found");
}
