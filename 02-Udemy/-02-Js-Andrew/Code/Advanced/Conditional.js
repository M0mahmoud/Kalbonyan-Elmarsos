const age = 27;
const message = age >= 18 ? `you can vote` : `you can't vote`;

console.log(message);

const myAge = 25;
const showPage = () => {
  return `Showing The Page`;
};

const showErorrPage = () => {
  return `Showing The Erorr Page`;
};

let meg = myAge >= 21 ? showPage() : showErorrPage();
console.log(meg);

const team = ["tyler", "porter"];
console.log(
  team.length <= 4 ? `team size is ${team.length}` : `Too meany on your team`
);
