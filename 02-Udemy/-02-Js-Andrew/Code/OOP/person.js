//prototypal Inheritance
// "Mahmoud".toLocaleLowerCase()

//Class
class PersonClass {
  constructor(fName, lName, age, likes = []) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} is ${this.age}`;
    this.likes.forEach((element) => {
      bio += ` ${this.firstName} like ${element}`;
    });
    return bio;
  }
  set fullName(fullName) {
    const names = fullName.split(" ");
    this.firstName = names[0];
    this.lastName = names[1];
  }
  get fullName(){
    return `${this.firstName} ${this.lastName}`
  }
}

//SubClass
class Employee extends PersonClass {
  constructor(fName, lName, age, postion, likes) {
    super(fName, lName, age, likes);
    this.postion = postion;
  }
  getBio() {
    return `${this.fullName} is a ${this.postion}`;
  }
  getYourLeft() {
    return 65 - this.age;
  }
}

class Student extends PersonClass {
  constructor(fName, lName, age, grade, likes) {
    super(fName, lName, age, likes);
    this.grade = grade;
  }
  updateGrade(change) {
    this.grade += change;
  }
  getBio() {
    const status = this.grade >= 70 ? "Passing" : "Faling";
    return `${this.firstName} ${this.lastName} is a ${status} The Class`;
  }
}

const newStudent = new Student("Ali", "Mohamed", 34, 85, []);
newStudent.updateGrade(80);
console.log(newStudent.getBio());

const myPerson = new PersonClass("Mahmoud", "Mohamed", 20, ["JS", "CSS"]);
// console.log(myPerson.getBio());
const myPersonEmployee = new Employee("Mahmoud", "Mohamed", 20, "Admin", [
  "JS",
  "CSS",
]);
console.log(myPersonEmployee.getBio());
console.log(myPersonEmployee.getYourLeft());
// console.log(myPerson);

const Person = function (fName, lName, age, likes) {
  this.firstName = fName;
  this.lastName = lName;
  this.age = age;
  this.likes = likes;
};

Person.prototype.getBio = function () {
  let bio = `${this.firstName} is ${this.age}`;
  this.likes.forEach((element) => {
    bio += ` ${this.firstName} like ${element}`;
  });
  return bio;
};

Person.prototype.setName = function (fullName) {
  const names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];
};

const me = new Person("A", "B", 20, ["AA", "BB"]);

me.getBio = function () {
  return `this is fake`;
};

const personTwo = new Person("D", "F", 66, ["Food", "Games"]);
me.setName("Mahmoud Mohamed");

// console.log(me.getBio());

// Person.prototype.getBio=function(){
//   return`Testing...`
// }
// console.log(personTwo.getBio());


//get & set
const man = new Employee ("ss" , "sss" ,30,"tester",[])
man.fullName = "ali ahmed"
console.log(man.getBio())
