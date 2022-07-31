const fs = require("fs");
const chalk = require("chalk");

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const notes = loadNotes();

const addNote = (title, body) => {
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);
  console.log(duplicateNote);
  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);

    console.log(chalk.blue("New Note Added"));
  } else {
    console.log(chalk.red("Already Exist"));
  }
};

const removeNote = (title) => {
  const filteredNotes = notes.filter((note) => note.title !== title);

  if (notes.length > filteredNotes.length) {
    console.log(chalk.green("Removed✅"));
  } else {
    console.log(chalk.red("Note not found"));
  }

  saveNotes(filteredNotes);
};

const listNotes = () => {
  console.log("Your Notes is \n");
  notes.forEach((e) => {
    console.log(
      chalk.inverse.blue(
        "Title :" + e.title + " | " + "Body :" + e.title + "\n"
      )
    );
  });
};

const readNotes = (title) => {
  const filter = notes.find((note) => note.title === title);
  if (filter) {
    console.log(
      chalk.yellow(`Your Note is ${filter.title} \nBody Is ${filter.body}`)
    );
  } else {
    console.log(chalk.inverse.red("Note not found"));
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNotes,
};
