const todo = ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5"];

todo.forEach(function (item, index) {
  //console.log("test")
  console.log(item);
  console.log(index);
});

todo.forEach(function (item, index) {
  console.log(`${index + 1}==>${item} `);
});

