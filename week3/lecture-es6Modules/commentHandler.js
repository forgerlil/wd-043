import { promptMessages, commentCount } from './promptMessages.js';

// console.log('Hello from the commentHandler file :D');

const commentSection = document.querySelector('#commentSection');

const addComment = () => {
  commentCount();

  const userResponse = prompt(
    promptMessages[Math.floor(Math.random() * promptMessages.length)]
  );

  const p = document.createElement('p');
  p.classList.add(
    'bg-slate-900',
    'text-white',
    'p-2',
    'rounded-xl',
    'mt-4',
    'break-words'
  );

  userResponse
    ? (p.textContent = `You answered: ${userResponse}`)
    : (p.textContent = 'You cancelled the prompt :(');

  commentSection.appendChild(p);
};

export default addComment;
