// const square =(x)=>{
//   return x*x
// }
// console.log(square(4));

// const square =(x)=> x* x;
// console.log(square(2));

const event = {
  name: "Birthday",
  guesList:['Eman' , 'Ali' , 'Amal'],

  printGuesList () {
    console.log("Gues List For " + this.name);
    this.guesList.forEach((guest)=>{
      console.log(guest + 'is attended');
    })
  },
};

event.printGuesList()