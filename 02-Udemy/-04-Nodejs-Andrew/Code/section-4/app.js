const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./notes");
const { argv } = require("process");

// Section 4

// Lesson 1

// console.log(process.argv);

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding Note");
// } else if (command === "remove") {
//   console.log("Remove Note");
// }

// Lesson 2 & 3

// yargs version
yargs.version("1.1.0");

// Create  Add Command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.addNote(argv.title, argv.body),
});

// Create  Remove Command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.removeNote(argv.title),
});

// Create  List Command
yargs.command({
  command: "list",
  describe: "list notes",
  handler: (argv) => notes.listNotes(argv.title),
});

// Create  Read Command
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => notes.readNotes(argv.title),
});

// console.log(yargs.argv);
yargs.parse();
