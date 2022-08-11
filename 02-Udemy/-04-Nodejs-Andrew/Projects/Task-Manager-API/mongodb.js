const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const dbName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(dbName);
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Ahmed",
    //       age: 20,
    //     },
    //     {
    //       name: "Ali",
    //       age: 30,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("ERROR");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // console.log(client);

    db.collection("taskes").insertMany(
      [
        {
          todo: "Task1",
        },
        {
          todo: "Task2",
        },
        {
          todo: "Task3",
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("ERROR");
        }
        console.log(result.ops);
      }
    );
  }
);
