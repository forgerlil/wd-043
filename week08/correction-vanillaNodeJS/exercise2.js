const fs = require('fs');

fs.writeFile('test.html', '<h1>Hello World</h1>', 'utf8', (err) => {
  if (err) console.log(err);
});
