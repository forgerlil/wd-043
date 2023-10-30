// -1018293819823.918739812
// ('This is a string with double quotes');
// 'This is a string with single quotes'`This is a string in backticks`;
// 'A string with quotes needs to do' +
//   'this!'`A string with backticks can do ${0} `;

// true;
// false;

// null;
// undefined;

// = stands for the ASSIGNMENT operator
var myVarVariable;
let myLetVariable;
const myConstVariable = true;

var myVarVariable = 'This is a new value now!';
myLetVariable = null;

// console.log('value of let variable', myLetVariable);
// console.log('value of var variable', myVarVariable);

// == stands for equality
// === stands for STRICT equality

if (2 === 1) {
  console.log("1 is strictly equal to 1. Who'd have thought.");
} else if (myLetVariable !== null) {
  console.log('This variable contains null');
} else {
  // console.log('1 will never not be equal to 1. Silly.');
}

// condition
//   ? 'This will happen if the condition is truthy'
//   : 'This will happen if the condition is falsy';

const myRandomNumber = 1;
const isMyNumberOne = myRandomNumber === 1 ? true : false;

// console.log(isMyNumberOne);

const evolutionStone = 'Leaf Stone';

switch (evolutionStone) {
  case 'Water Stone':
    console.log('Eevee is evolving into Vaporeon.');
    break;
  case 'Fire Stone':
    console.log('Eevee is evolving into Flareon.');
    break;
  case 'Thunder Stone':
    console.log('Eevee is evolving into Jolteon.');
    break;
  default:
  // console.log('This stone has no effect on Eevee.');
}

const myArray = [
  42,
  'a message',
  undefined,
  null,
  true,
  [1, 2, 3],
  function () {},
  {},
];

myArray.pop();
myArray.push('a new value here');
// console.log(myArray.join(' '));
// console.log(myArray.indexOf(null));

// console.log(myArray);
// console.log(myArray[0]);
// console.log(myArray[4]);
// console.log(myArray[5][1]);
// console.log(myArray.length);
// console.log(myArray[myArray.length - 1]);

function myFunction(number = 1) {
  // console.log(number);
  // console.log('The function was called! :D');
  return 2 + number;
}

const returnOfFunction = myFunction(10);

// myFunction();

// console.log(myFunction());

// const myVarWithAFunction = function () {};

// console.log(returnOfFunction);

// for (let i = 0; i < 5; i++) {
//   console.log(`The current iteration is ${i}`);
// }

let whileLoopI = 6;

// while (whileLoopI < 5) {
//   console.log(whileLoopI);
//   Math.random() > 0.5 && whileLoopI++;
// }

// do {
//   console.log(whileLoopI);
//   Math.random() > 0.5 && whileLoopI++;
// } while (whileLoopI < 5);

// const students = ['Sully', 'Eudes', 'Mochi']

// ['Sully', 'Eudes', 'Mochi'].forEach(function (student) {
//   console.log(student);
// });

// Little DOM Manipulation example
// const body = document.querySelector('body');
// const div = document.createElement('div');
// div.textContent = 'I was set here by JavaScript!';
// body.appendChild(div);

var globalVar = 'global var says hi';
let globalLet = 'global let says hi';
const globalConst = 'global const says hi';

globalLet = 'This variable was hijacked!';
// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

function functionScope() {
  var funcVar = 'function var says hi';
  let funcLet = 'function let says hi';
  const funcConst = 'function const says hi';

  // console.log(funcVar);
  // console.log(funcLet);
  // console.log(funcConst);
  // console.log('Logging the global variable inside the function', globalVar);
}

// console.log(funcVar);

if (true) {
  var globalVar = 'block var says hi';
  let blockLet = 'block let says hi';
  const blockConst = 'block const says hi';

  // console.log(blockVar);
  console.log(blockLet);
  console.log(blockConst);
}

console.log(blockLet);

functionScope();
