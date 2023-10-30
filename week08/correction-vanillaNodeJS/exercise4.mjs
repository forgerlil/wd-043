import fs from 'fs';

fs.writeFile('test.html', '<h1>Hello from ES6 modules!</h1>', 'utf8', (err) => {
  if (err) console.log(err);
});

fs.readFile('test.html', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
