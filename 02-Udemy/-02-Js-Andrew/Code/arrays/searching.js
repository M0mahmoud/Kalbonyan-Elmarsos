const notes = [
  {},
  {
    title: "note 1",
    body: "i would like to go to dpain",
  },
  {
    title: "note 2",
    body: "i would like to go to bit better",
  },
  {
    title: "note 3",
    body: "Get a new seat",
  },
];
console.log({} === {});

// const index = notes.findIndex(function (note, index) {
//   console.log(note);
//   return note.title == "note 3";
// });
// console.log(index);

// const findNote = function (notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return notes[index]
// };

// const founded = findNote(notes, "note 3");

// console.log(founded);

// const findNote = function (notes, noteTitle) {
//   return notes.find(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
// };

// const founded = findNote(notes, "note 3");

// console.log(founded);

const findByFilter = notes.filter(function (note, index) {
  const isTitleMatch = note.title.toLocaleLowerCase().includes("note 1");
  const isBody = note.body.toLocaleLowerCase().includes("would");
  return isTitleMatch || isBody;
});

console.log(findByFilter);
