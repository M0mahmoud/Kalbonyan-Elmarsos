const createCounter = () => {
  let count = 1;
  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    },
  };
};

const counter = createCounter();
counter.increment;
counter.increment;
counter.increment;
counter.decrement;
console.log(counter.get());

const createAdder = (a) => {
  return (b) => {
    return a + b;
  };
};

const add10 = createAdder(10);
console.log(add10(-2));
console.log(add10(20));

const add100 = createAdder(100);
console.log(add100(-90));

//Tipper
const createTipper = (baseTip)=>{
  return (amount)=>{
    return baseTip * amount
  }
}

const tip20 = createTipper(.2)
const tip30 = createTipper(.3)
console.log(tip20(100))
console.log(tip30(100))