let one = "one";
if (true) {
  console.log(one);
  let two = "two";
  console.log(two);
  if (true) {
    one = "four";
  }
}
// console.log(two) Erorr

//      Scope 2

if (true) {
  console.log("one");
  if (true) {
    console.log("two");
  }
}

if (true) {
  console.log("out");
}
