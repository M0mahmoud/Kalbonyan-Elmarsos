// // CRUD => Create & Read & Update & Delete
// //    Create => POST /tasks
// //    Read   => GET /tasks
// //    Read   => GET /tasks/:id
// //    Update => PATCH /tasks/:id
// //    Delete => DELETE /tasks/:id

// // const mongodb = require("mongodb");
// // const MongoClient = mongodb.MongoClient;
// // const ObjectID = mongodb.ObjectID

// const { MongoClient, ObjectID } = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";
// const dbName = "task-manager";

// // const id = new ObjectID();
// // console.log(id);
// // console.log(id.toHexString());
// // console.log(id.getTimestamp());
// // console.log(id.id.length);

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (error, client) => {
//     if (error) {
//       return console.log("Unable to connect to database!");
//     }
//     const db = client.db(dbName);
//   }
// );

// // ==============================================

// // db.collection("tasks")
// // .deleteOne({
// //   todo: "Task2",
// // })
// // .then((res) => {
// //   console.log(res);
// // })
// // .catch((err) => {
// //   console.log(err);
// // });

// // ==============================================

// // db.collection("users")
// // .updateOne(
// //   {
// //     _id: new ObjectID("6315d66aabceac774a27267f"),
// //   },
// //   {
// //     $inc: {
// //       age: 1,
// //     },
// //   }
// // )
// // .then((res) => {
// //   console.log(res);
// // })
// // .catch((err) => {
// //   console.log(err);
// // });
// // ==============================================

// // db.collection("users")
// // .updateOne(
// //   {
// //     _id: new ObjectID("6315d66aabceac774a27267f"),
// //   },
// //   {
// // Or You Can Use   $inc: {  age: 1,  },
// //     $set: {
// //       name: "Jon",
// //       age: 50,
// //     },
// //   }
// // )
// // .then((res) => {
// //   console.log(res);
// // })
// // .catch((err) => {
// //   console.log(err);
// // });
// // ==============================================

// // db.collection("users")
// // .find({ age: 30 })
// // .toArray((error, user) => {
// // });

// // db.collection("taskes")
// // .find({ completed: true })
// // .toArray((error, task) => {
// // });
// // ==============================================
