let add = function (a, b, c) {
  return a + b + c;
};

let result = add(1, 3, 5);
console.log(result);

let score = function (name = "Unknown", score = 0) {
  return `name is ${name} and score is${score}`;
};

console.log(score("Ali", 50));
score();

//
let getTip = function (total, tipPercent) {
  let percent = tipPercent * 100;
  let tip = total * percent;
  return `A ${percent}% tip on${total} would be $${tip}`;
};

console.log(getTip(4, 4));

console.log("---------String------");
console.log("---------String------");
let age = 12;
let myname = "lol";
console.log(`lollllll ${myname} and age is ${age}`);
