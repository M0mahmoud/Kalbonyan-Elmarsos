const square = (num) => num * num;

console.log(square(5));

const squareLong = (num) => {
  return num * num;
};

const people = [
  {
    name: "Mahmoud",
    age: 20,
  },
  {
    name: "Ali",
    age: 25,
  },
  {
    name: "Eman",
    age: 35,
  },
];

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

const person22 = people.filter((person) => person.age === 20);
console.log(person22);
