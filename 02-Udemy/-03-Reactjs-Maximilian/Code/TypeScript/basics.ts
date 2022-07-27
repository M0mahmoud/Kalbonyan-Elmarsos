//  Primitives

let age: number = 20;

let userName: string = "Mahmoud ";

let isTtrue = true;

//More

let friends: number[] = [1, 2, 3, 4, 5];

let person: {
  name: string;
  age: number;
};

person = {
  name: "mahmoud",
  age: 20,
};

// person ={
//  isTrue :true
// }

let people: {
  name: string;
  age: number;
}[];

//  INference

let course = "React";
// course =123

let collection: number | string = 12345;
collection = "string";

type Man = {
  name: string;
  age: number;
};

let mahmoud: Man = {
  name: "Mahmoud",
  age: 20,
};


//Functions & Types 

function addNumbers(a: number, b: number) {
  return a + b;
}

const res = addNumbers(10 , 10);
console.log(res);

//Generics

function insert<T > (array:T[], value :T){
  const newArray =[value , ...array]
  return newArray
}

let arr =[1,2,3,4]
let value = 5
const reslut = insert(arr , value )

// reslut[0].split(' ')// 'split' does not exist on type 'number'