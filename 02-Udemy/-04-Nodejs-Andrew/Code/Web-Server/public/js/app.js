console.log("LOADING...");

// fetch("http://puzzle.mead.io/puzzle")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

const weatherForm = document.querySelector("form");
const searchEl = document.querySelector("input");
const msgOne = document.getElementById("msg-1");
const msgTwo = document.getElementById("msg-2");
const lastOne = document.querySelector("#last-1");
const lastTwo = document.querySelector("#last-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = searchEl.value;

  msgOne.textContent = "Loading...";
  msgTwo.textContent = "";

  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.error) {
        msgOne.textContent = data.error;
      } else {
        msgOne.textContent = data.location;
        localStorage.setItem("location", msgOne.textContent);
        msgTwo.textContent = data.forecast;
        localStorage.setItem("forecast", msgTwo.textContent);
      }
    });
});


//This Way Not Good 
lastOne.textContent = localStorage.getItem("location");
lastTwo.textContent = localStorage.getItem("forecast");
