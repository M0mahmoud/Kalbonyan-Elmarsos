const add = function (a, b) {
  return arguments[0] + arguments[1];
};

console.log(add(11, 22, 34));

const car = {
  color: "red",
  getSummary: function () {
    return `the car is ${this.color}`;
  },
};

console.log(car.getSummary());
