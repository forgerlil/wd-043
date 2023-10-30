// console.log(document);

// document.children[0].children[1].children[1].style.color = 'red';

// const cardsSection = document.getElementById('articlesSection');
// const h1 = document.querySelector('h1');
// const firstCard = document.querySelector('.card');

// querySelector syntax is like CSS Selectors
// document.querySelector('#articlesSection');
// document.querySelector('#articlesSection:nth-child(2)');
// document.querySelector('input[type="email"]');

// console.log(firstCard);
// console.dir(h1);

/* ------------------------------------ */

// Changing the style or classes of an element:
// h1.style.color = 'red';
// h1.style.backgroundColor = 'blue';

// console.log(h1.className);
// h1.className += ' bg-red-200';

// console.log(h1.classList);
// h1.classList.add('bg-amber-200', 'text-white');
// h1.classList.remove('bg-amber-200', 'text-white');
// h1.classList.toggle('bg-amber-200');

/* ------------------------------------ */

// Changing the content of an element
// console.log(h1.innerHTML);
// h1.innerHTML = 'Hello <span class="text-red-600">there!</span>';

// XSS example
// const form = document.querySelector('form');
// const searchBar = document.querySelector('#searchBar');
// const searchResult = document.querySelector('#searchResult');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   searchResult.textContent = searchBar.value;
// });

// console.log(h1.innerHTML);
// console.log(h1.innerText);
// console.log(h1.textContent);

/* ------------------------------------ */

// Getting multiple elements
const articles = document.getElementsByTagName('article');
// const cards = document.getElementsByClassName('card');
// const cardsWithQuerySelector = document.querySelectorAll('.card');

// console.log('getting by tag', articles);
// console.log('getting by class', cards);
// console.log('getting by querySelectorAll', cardsWithQuerySelector);

// cards.forEach((card) => {
//   card.classList.toggle('bg-green-300');
// }); // ❌

// cardsWithQuerySelector.forEach((card) => {
//   card.classList.toggle('bg-green-300');
// }); // ✅

// console.log('getting by querySelector', firstCard);

// HTMLCollection vs NodeList (live vs not-live)
// const cardsSection = document.getElementById('articlesSection');
// const cards = document.getElementsByClassName('card');
// const cardsWithQuerySelector = document.querySelectorAll('.card');

// console.log('getting by querySelectorAll', cardsWithQuerySelector);
// console.log('getting by class', cards);

// const newArticle = document.createElement('article');
// newArticle.classList.add('card');
// newArticle.textContent = 'I am here thanks to JavaScript';
// cardsSection.appendChild(newArticle);

// console.log(cards);

/* ------------------------------------ */

// Creating DOM with methods

/**
 * Function that takes one parent and multiple children, and appends to the parent all the children in order
 * @param {HTMLElement} parent
 * @param  {...HTMLElement} elements
 * @returns undefined
 */
const appendElements = (parent, ...elements) =>
  elements.forEach((element) => parent.appendChild(element));

const addArticleBtn = document.querySelector('#createArticle');

addArticleBtn.addEventListener('click', () => {
  const newArticle = document.createElement('article');
  newArticle.classList.add('card', 'w-96', 'bg-gray-900');

  const cardImg = document.createElement('img');
  cardImg.src = 'https://picsum.photos/400/300';
  cardImg.alt = 'A pretty, random image';

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body', 'flex-col');

  const cardH2 = document.createElement('h2');
  cardH2.classList.add('card-title');
  cardH2.textContent = 'Featured Article';

  const cardP = document.createElement('p');
  cardP.textContent = 'I was brought here by JavaScript!';

  const cardBtn = document.createElement('button');
  cardBtn.classList.add('btn', 'btn-accent', 'w-fit', 'self-end');
  cardBtn.textContent = 'See more';

  // Adding events
  // cardBtn.onclick = () => {
  //   alert('This button was clicked');
  // };

  // cardBtn.addEventListener('click', () => {
  //   alert('This button was clicked');
  // });

  // console.dir(cardBtn);

  appendElements(cardBody, cardH2, cardP, cardBtn);
  // cardBody.appendChild(cardH2);
  // cardBody.appendChild(cardP);
  // cardBody.appendChild(cardBtn);

  appendElements(newArticle, cardImg, cardBody);
  // newArticle.appendChild(cardImg);
  // newArticle.appendChild(cardBody);

  cardsSection.appendChild(newArticle);
});

const firstCard = document.querySelector('.card');

// Removing an element and all its children
// firstCard.remove();

// This adds a click listener to the window
// addEventListener('click', () => {
//   alert('Heyo!');
// });
