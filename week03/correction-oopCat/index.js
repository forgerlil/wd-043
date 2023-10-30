import Cat from './cat.js';

const body = document.body;
const catSelect = document.querySelector('#cat-select');

const catOptions = [
  { name: 'Rita', initialStats: 2 },
  { name: 'Charlotte', initialStats: 5 },
  { name: 'Jade', initialStats: 7 },
];

const createCat = (e) => {
  const findCat = catOptions.find((cat) => cat.name === e.target.value);
  if (!findCat) return;

  const newCat = new Cat(findCat.name, findCat.initialStats, body);
  console.log(newCat);
};

catSelect.addEventListener('click', createCat);
