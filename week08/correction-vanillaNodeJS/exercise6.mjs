import axios from 'axios';
import fs from 'fs/promises';

// We can use await on global scope in an ES6 modules file!
// This is known as 🌟 top-level await 🌟
try {
  const { data } = await axios('https://google.com');

  // Let's create a new file with the content of the google HTML page :D
  await fs.writeFile('copyGoogle.html', data, 'utf8');
} catch (err) {
  console.log(error.message);
}
