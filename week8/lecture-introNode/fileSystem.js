import fs from 'fs';
import os from 'os';

// ----- native async functions -----

fs.writeFile('myText.txt', 'Time to learn Node! ', 'utf8', (err) =>
  console.log(err)
);

fs.appendFile('myText.txt', `${os.freemem()}`, 'utf8', (err) =>
  console.log(err)
);

fs.readFile('myText.txt', 'utf8', (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});

// ----- sync function versions -----

fs.writeFileSync(
  'myText.txt',
  'Hey there! Changing the content here :3 ',
  'utf8'
);
fs.appendFileSync('myText.txt', `${os.freemem()}`, 'utf8');

fs.readFile('myText.txt', 'utf8', (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});

// ----- with callback hell -----

fs.writeFile('myText.txt', 'Time to learn Node >:D ', 'utf8', (err) => {
  if (err) return console.log(err);
  fs.appendFile('myText.txt', `${os.freemem()}`, 'utf8', (err) => {
    if (err) return console.log(err);
    fs.readFile('myText.txt', 'utf8', (err, data) => {
      if (err) return console.log(err);
      console.log(data);
    });
  });
});

// ----- or with the promises module -----
// import fs from 'fs/promises';

// fs.writeFile('myText.txt', 'Time to learn Node >:D ', 'utf8')
//   .then(() => {
//     fs.appendFile('myText.txt', `${os.freemem()}`, 'utf8').then(() => {
//       fs.readFile('myText.txt', 'utf8').then((data) => console.log(data));
//     });
//   })
//   .catch((err) => console.log(err));
