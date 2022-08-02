const name = "Mahmoud";
const age = 20;

const user = {
  name,
  age,
  location: "EG",
};
// console.log(user);

//Object destructuing
const product = {
  label: "Red",
  price: 5,
  stock: 200,
  salePrice: undefined,
  rating: 9,
};

const {label:productLabel , stock} = product
// console.log(productLabel);
// console.log(stock);

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};
transaction("order", product);
