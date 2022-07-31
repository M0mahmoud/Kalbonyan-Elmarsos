import fs from "fs";
import validator from "validator";
import chalk from "chalk";

import Notes from "./notes.js";
import add from "./utils.js";

// Section 3

// Lesson 1

fs.writeFileSync('notes.txt' , 'First Day In Node 31/7/2022 ')
fs.appendFileSync('notes.txt' , 'Just 20.')

// Lesson 2

console.log(add(5,5));
console.log(Notes());

// Lesson 3

console.log(validator.isEmail('mahmoud@test.com')); //true
console.log(validator.isURL('https://mahmoud.org'));  //true

// Lesson 4

const blueName =chalk.blue.bold.underline('Mahmoud') + chalk.red('!')
const redName =chalk.red('Mahmoud')

console.log(blueName);
console.log(redName);


