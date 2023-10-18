const fs = require('fs');

fs.readFile('test.html', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
