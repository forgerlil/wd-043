const express = require('express');
const server = express();
const path = require('path');
const port = process.env.PORT || 8000;

const products = [
  { id: 1, title: 'Diablo 4' },
  { id: 2, title: 'Total War: Warhammer III' },
  { id: 3, title: 'Horizon Forbidden West' },
];

server.set('view engine', 'ejs');

server.use(express.json());

server.get('/', (req, res) => res.send('Hello from the root path!'));

server
  .route('/products')
  .get((req, res) => {
    return res.json(products);
  })
  .post((req, res) => {
    return res.json('A resource is to be created!');
  })
  .put((req, res) => {
    return res.send('A resource is to be updated!');
  })
  .delete((req, res) => {
    return res.send('A resource is about to be deleted!');
  });

server.route('/products/:id').get((req, res) => {
  console.log(req.params);
  if (!products[req.params.id - 1])
    return res.status(404).send('Product not found!');
  return res.json(products[req.params.id - 1]);
});

server.route('/file').get((req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

server.route('/ejsfile').get((req, res) => {
  res.render('index', {
    title: 'This HTML file was put together by EJS! :D',
    content: 'Have a look at all the games we have to offer:',
    products,
  });
});

server.route('/buyRandomGame').post((req, res) => {
  req.body.money >= 30
    ? res.redirect('/purchaseConfirmation')
    : res.send('You need more money :(');
});

server.route('/purchaseConfirmation').get((req, res) => {
  res.json({
    message: "Here's your game!",
    game: products[Math.floor(Math.random() * products.length)],
  });
});

server.get('/cat', (req, res) => {
  res.download('./cat4.jpg');
});

// server.get('/', (req, res) => {
//   res.send('Hello and welcome to our first express server!');
// });

// server.post('/', (req, res) => {
//   res.send('A resource is to be created!');
// });

// server.put('/', (req, res) => {
//   res.send('A resource is to be updated!');
// });

// server.delete('/', (req, res) => {
//   res.send('A resource is about to be deleted!');
// });

server.listen(port, () => console.log(`Server up on port ${port}`));
