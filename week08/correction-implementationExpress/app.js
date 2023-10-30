const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const axios = require('axios');
const fs = require('fs/promises');

app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

app
  .route('/')
  .get((req, res) => {
    return res.sendFile(path.join(__dirname + '/form.html'));
  })
  .put((req, res) => {
    return res.sendFile(path.join(__dirname + '/index.html'));
  })
  .delete((req, res) => {
    return res.json({ good: 'yep' });
  });

app.route('/test-ejs').get((req, res) => {
  res.render('index', { myTitle: 'WD#043 is doing EJS now :D' });
});

app.route('/test-ejs2').get((req, res) => {
  res.render('users', { users: ['Bob', 'John', 'Jane'] });
});

// step 7
app.use(express.urlencoded({ extended: true }));
app.post('/showPost', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

// step 8
app.get('/showGet', (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

// step 9
app.get('/number/:id', (req, res) => {
  const { id } = req.params;

  console.log(req.params);
  res.send(`The number is ${id}`);
});

// step 10
app.get('/postlist', async (req, res) => {
  try {
    const getPost = await axios.get(
      'http://jsonplaceholder.typicode.com/posts/1'
    );
    // step 11
    await fs.writeFile('posts.json', JSON.stringify(getPost.data));
    res.json(getPost.data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => console.log('Hello'));
