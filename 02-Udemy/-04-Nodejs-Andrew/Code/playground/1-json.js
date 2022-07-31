const fs = require("fs");

// const book = {
//   title: "Atomic Habits",
//   author: "James Clear",
// };

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON);

// // const bookObj = JSON.parse(bookJSON)
// // console.log(bookObj);

// fs.writeFileSync('1-json.json' , bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')

// const dataJSON = dataBuffer.toString()

// const data = JSON.parse(dataJSON)
// console.log(data.author);

const dataBuffer = fs.readFileSync("1-json.json");
// console.log(dataBuffer);

const dataJSON = dataBuffer.toString();
// console.log(dataJSON);

const user = JSON.parse(dataJSON);
// console.log(user);

user.name = "Mahmoud";
user.age = 20;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);

// console.log(userJSON);
