const todo = ["order food", "todo 2", "todo 3", "todo4", "todo 5"];

console.log(todo.pop());

todo.push("new Todo");

console.log(todo.shift());

todo.unshift("frist tode");

todo.slice(1, 1, "new");

todo[2] = "new todo 3";

console.log(todo.length);
console.log(todo);
