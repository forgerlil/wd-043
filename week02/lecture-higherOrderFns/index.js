const innerFunction = () => {
  console.log('I am being logged inside the inner function');
};

// Higher Order Function
const outerFunction = (cb) => {
  return Math.random() > 0.5 ? 'Nothing' : cb();
};

// outerFunction(() => console.log('I am being logged inside the inner function'));
// innerFunction is being used as a callback
// outerFunction(innerFunction);

/* --------------------------------- */

function mommaFunction() {
  const parentValue = 'I live in the parent, and all my children can see me!';

  return function kiddoFunction() {
    console.log('Momma function says:' + parentValue);
  };
}

const getKiddoFunction = mommaFunction();

// getKiddoFunction();

function makeIncrementer(incrementer) {
  return function (value) {
    return incrementer + value;
  };
}

const incrementByOne = makeIncrementer(1);
const incrementByFive = makeIncrementer(5);
const incrementByTwenty = makeIncrementer(20);

// console.log(incrementByOne(35));
// console.log(incrementByFive(11));
// console.log(incrementByTwenty(20));

/* --------------------------------- */

const cybele = {
  // This is known as a property (contains a value that is not a function)
  name: 'Cybele',
  // This is a METHOD (property that contains a function)
  flickerTongue: () => {},
};

/* --------------------------------- */

const fruits = ['🍊', '🍎', '🍌', '🍊', '🍊', '🍓', '🍌'];

// .forEach() calls the given function for every loop, but returns/outputs no value
// const resultOfForEach = fruits.forEach((currentItem, index, originalArray) => {
//   console.log(
//     currentItem +
//       ' is at index ' +
//       index +
//       ' from the original array: ' +
//       originalArray
//   );
// });

// .map() returns a new array based on an existing array
function makeOj() {
  return fruits.map((currentItem) =>
    currentItem === '🍊' ? '🧃' : currentItem
  );
}

// console.log(fruits);
// console.log(makeOj());

const donkeyKongBananaHoard = fruits.filter(
  (currentFruit) => currentFruit === '🍌'
);

// console.log(fruits);
// console.log(donkeyKongBananaHoard);

const findStrawberry = fruits.find((currentFruit) => currentFruit === '🍓');
const findFirstBanana = fruits.find((currentFruit) => currentFruit === '🍌');
const findWatermelon = fruits.find((currentFruit) => currentFruit === '🍉');

// console.log(findStrawberry);
// console.log(findFirstBanana);
// console.log(findWatermelon);

const makeString = fruits.reduce((previousItem, currentItem) => {
  // console.log('previous item is:', previousItem);
  // console.log('current item is:', currentItem);
  return previousItem + currentItem;
});

// console.log(makeString);

const getLength = fruits.reduce((accumulator, currentItem) => {
  // console.log(accumulator);
  return ++accumulator;
}, 0);

// console.log('Total length of the array is', getLength);

const removeOranges = fruits.reduce((acc, currFruit) => {
  console.log('the accumulator starts with ', acc);
  if (currFruit === '🍊') return acc;
  const resultofPush = acc.push(currFruit);
  console.log(resultofPush);
  console.log('after pushing, the accumulator has ', acc);
  return acc;
  // return acc.concat([currFruit]);
}, []);

console.log(removeOranges);

const addPlates = fruits.reduce((acc, currFruit) => {
  return acc.concat([currFruit, '🍽️']);
}, []);

// console.log(addPlates);
