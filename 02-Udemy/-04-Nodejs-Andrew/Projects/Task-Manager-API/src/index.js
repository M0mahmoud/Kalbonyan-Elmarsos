const express = require("express");
require("./db/mongoose");
//Router
const userRouter = require("./router/user");
const taskRouter = require("./router/task");

const app = express();
const port = process.env.PORT

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("SERVER ON PORT :" + port);
});

// EX For==> toJSON()
// const pet = {
//   name :'ss'
// }
// pet.toJSON = function(){
//   console.log(this);
//   return {}
// }
// console.log(JSON.stringify(pet));
