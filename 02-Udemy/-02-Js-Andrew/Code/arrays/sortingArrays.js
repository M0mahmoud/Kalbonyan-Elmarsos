const notes = [
  {},
  {
    title: "note 2",
    body: "i would like to go to dpain",
  },
  {
    title: "note 1",
    body: "i would like to go to bit better",
  },
  {
    title: "note 3",
    body: "Get a new seat",
  },
];

console.log("a" > "b");

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });
};
sortNotes(notes);
console.log(notes);


