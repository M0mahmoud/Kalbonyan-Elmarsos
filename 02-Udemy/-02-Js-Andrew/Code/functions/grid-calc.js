let gridCalc = function (score, total) {
  if (typeof score !== "number" || typeof total !== "number") {
    throw Error("PLZ.Enter Number Only...");
  }
  let percent = (score / total) * 100;
  let g = "";
  if (percent >= 90) {
    g = "A";
  } else if (percent >= 80) {
    g = "B";
  } else if (percent >= 70) {
    g = "C";
  } else if (percent >= 60) {
    g = "D";
  } else {
    g = "F";
  }
  return `U Got ${g} ${Math.floor(percent)}%`;
};

try {
  console.log(gridCalc(29, 30));
  console.log(gridCalc(25, 30));
  console.log(gridCalc(19, 30));
  console.log(gridCalc(15, 30));
} catch (e) {
  console.log("Enter Number Only...");
}
