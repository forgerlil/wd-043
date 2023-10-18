// const { randomNumGenerator } = require('./utils.js');

// for (let i = 0; i < 5; i++) {
//   console.log(`The current iteration is ${i}`);
// }

// const http = require('http');
import http from 'http';
import { randomNumGenerator } from './utils.js';

const products = [
  { id: 1, title: 'Diablo 4' },
  { id: 2, title: 'Total War: Warhammer III' },
  { id: 3, title: 'Horizon Forbidden West' },
];

console.log(randomNumGenerator(50));

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    console.log('The server got a http request!');
    response.writeHead(200, {
      'Content-type': 'text/plain',
    });
    response.end('This response has been changed yet again! :D');
  }

  if (request.url === '/products' && request.method === 'GET') {
    console.log('The server was requested all products');
    response.writeHead(200, {
      'Content-type': 'application/json',
    });
    response.end(JSON.stringify(products));
  }

  if (request.url === '/products' && request.method === 'POST') {
    console.log('The server was requested to add a new product');
    products.push({ id: 4, title: 'Red Dead Redemption 2' });
    response.writeHead(200, {
      'Content-type': 'application/json',
    });
    response.end(JSON.stringify(products));
  }
});

server.listen(8000, () => console.log('Server up on port 8000'));
