// console.log('logging the output of this function:', addWithOne(5));

function addWithOne(number) {
  let myFunctionVariable = 'I am inside the function';
  // console.log(number);
  // console.log(myFunctionVariable);
  return 1 + number;
}

const myResult = addWithOne(5);

// console.log('result of the function addWithOne', myResult);

const myVarWithAFunction = function () {
  console.log('I am stored in a variable');
};

// myVarWithAFunction();

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('You clicked a very interesting button');
});

// Hoisting with variables
// console.log(myVar);
// console.log(myLet);

// var myVar = 'Var variable';
// let myLet = 'Let variable';
// const myConst = 'Const variable';

// console.log(myVar);
// console.log(myLet);
// // console.log(myConst);

// IIFE (Immediately Invoked Function Expression)
// (function () {
//   console.log('I was invoked straight away!');
// })();

// Parameters
function makeSandwich(
  ingredient1 = 'bread',
  ingredient2 = 'tomato',
  ingredient3 = 'cheese'
) {
  return `My sandwich is made of ${ingredient1}, ${ingredient2} and ${ingredient3}`;
}

const mySandwich = makeSandwich();

// console.log(mySandwich);

const myArrowFunction = (message) => {
  if (typeof message !== 'string') return 'Nopity nope';

  return `Your message was ${message}`;
};

const myArrowFunctionImplicitReturn = () => 'The result of the arrow function!';

// console.log(myArrowFunction('Wd43 is rocking at this >:D'));

const evenOrOdd = (number) => {
  return number % 2 === 0 ? 'Even' : 'Odd';
};

const evenOrOddImplicitReturn = (number) => (number % 2 === 0 ? 'Even' : 'Odd');

// console.log(evenOrOdd(6));

const factorial = (num) => {
  if (num <= 0) return 1;
  console.log(num);
  return num * factorial(num - 1);
};

// console.log(factorial(10));

// OBJECTS
const cybeleTheSnake = {
  name: 'Cybele',
  age: 7,
  species: ['Royal python', 'Ball python'],
  'is Venomous': false,
  checkForFood: () => console.log('Looking for food...'),

  flickerTongue() {
    console.log('Ssssss...');
  },

  // owner: {
  //   name: 'Lilian',
  //   age: 34,
  //   formerPets: ['dog', 'cat', 'horse', 'cow'],
  //   currentVideogame: {
  //     title: 'Diablo IV',
  //   },
  // },
};

// Dot notation
// console.log(cybeleTheSnake.checkForFood());
// console.log(cybeleTheSnake.owner.name);

// Bracket notation
const randomProperty = Math.random() > 0.5 ? 'name' : 'age';
// console.log(cybeleTheSnake[randomProperty]);

cybeleTheSnake.name = 'Cybele the Snake';
cybeleTheSnake.isHungry = true;

delete cybeleTheSnake.isHungry;

// console.log(cybeleTheSnake);
// console.log(cybeleTheSnake.owner?.name);

const { name: snakeName, age: snakeAge } = cybeleTheSnake;
// console.log(snakeName);
// console.log(snakeAge);

// Passing by value (happens with primitives)
let a = 1;
let b = 2;

console.log(a);
console.log(b);

b = a;

console.log(a);
console.log(b);

// Passing by reference

const student1 = {
  firstName: 'Eudes',
  batch: 'wd#043',
  lectures: {
    week1: ['UX/UI'],
    week2: ['JS Basics', 'JS Functions', 'Higher order functions'],
  },
};

const student2 = { ...student1, firstName: 'Kimberly' };

console.log(student1.batch.split());

console.log(student1);
console.log(student2);
