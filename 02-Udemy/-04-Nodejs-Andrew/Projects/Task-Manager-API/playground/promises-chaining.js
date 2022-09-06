require("../src/db/mongoose");
const User = require("../src/models/user");


const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("631710d5fd4c7c8eab7eb4e4", 20)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
