// Named imports with renaming of imported values
// import { moreStudents, default as mainContent } from './userList.js';
// import { moreStudents as aFewStudents, loadMoreStudents } from './userList.js';

// Default and named imports
// import mainContent, { moreStudents } from './userList.js';
import { commentCount } from './promptMessages.js';
import addComment from './commentHandler.js';

// Wildcard syntax to import all exports of a file
import * as users from './userList.js';

// console.log(users);
// console.log(users.default);
// console.log(users.moreStudents);

// Imported values are read-only
// users.moreStudents = 'Hijacked the student list';

console.log('Hello from index.js');

const loadUsersBtn = document.querySelector('.loadUsers');
const showPromptBtn = document.querySelector('.showPrompt');
const fakeCommentBtn = document.querySelector('.fakeComment');

loadUsersBtn.addEventListener('click', users.default);
showPromptBtn.addEventListener('click', addComment);
fakeCommentBtn.addEventListener('click', commentCount);
