require("../src/db/mongoose");

const Task = require("../src/models/task");

const updateAgeAndDelete = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

updateAgeAndDelete("63171335745679332b6db33e")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
