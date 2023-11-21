// let firstName: string | null;
// firstName = null;

// const age = 34;
// const isOnline = true;
// const hobbies = ['Coding', 'Gaming', 'Reading'];

// const user = {
//   name: {
//     firstName: 'Lilian',
//     lastName: 'Forger',
//   },
//   age: 34,
// };

// const greet = (name: string) => {
//   alert(`Welcome back ${name}!`);
// };

// greet(user.name.firstName);

/* --------------------------------------------------- */

// type User = {
//   name: string;
//   age: number | string;
//   hobbies?: string[];
//   addToHobby: (hobby: string) => void;
// };

// const user1: User = {
//   name: 'Lilian',
//   age: 34,
//   hobbies: ['Coding', 'Gaming', 'Reading'],
//   addToHobby(hobby) {
//     if (this.hobbies) return this.hobbies.push(hobby);
//     throw new Error('User has no hobbies');
//   },
// };

// const user2: User = {
//   name: 'Lukas',
//   age: 29,
//   addToHobby() {},
// };

// const addOne = (num: number) => {
//   return num + 1;
// };

// const result = addOne(1);

/* --------------------------------------------------- */

const button = document.createElement('button');
const p = document.createElement('p');
const video = document.createElement('video');

const changeTextContent = (
  element: HTMLParagraphElement | HTMLButtonElement,
  content: string
) => {
  element.textContent = content;
};

changeTextContent(button, 'I do cool things, click me!');
changeTextContent(p, "The button above doesn't do anything, it fooled you :(");
changeTextContent(
  video,
  "The button above doesn't do anything, it fooled you :("
);
