const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const petList = require('./petList');

app.get('/', (req, res) => {
  res.send(`
  <h1>Adopt a Pet!</h1>
  <p>Browse through the links below to find your new furry friend:</p>
  <ul>
    <li><a href='/animals/dogs'>Dogs</a></li>
    <li><a href='/animals/cats'>Cats</a></li>
    <li><a href='/animals/rabbits'>Rabbits</a></li>
  </ul>
  `);
});

app.get('/animals/:pet_type', (req, res) => {
  const { pet_type } = req.params;

  if (!petList[pet_type])
    return res.send(`<h3>We have no ${pet_type} in our shelter</h3>`);

  res.send(`
  <h1>List of ${pet_type}</h1>
  <ul>
    ${petList[pet_type]
      .map(
        (animal, index) =>
          `<li><a href='/animals/${pet_type}/${index + 1}'>${
            animal.name
          }</a></li>`
      )
      .join('')}
  </ul>
  `);
});

app.get('/animals/:pet_type/:pet_id', (req, res) => {
  const { pet_type, pet_id } = req.params;
  const findPet = petList[pet_type][pet_id - 1];

  if (!findPet) return res.send('<h3>We could not find that pet</h3>');

  res.send(`
  <h1>${findPet.name}</h1>
  <img src="${findPet.url}" alt="${findPet.name}'s photo" width='400px'>
  <p>${findPet.description}</p>
  <ul>
    <li>Age: ${findPet.age}</li>
    <li>Breed: ${findPet.breed}</li>
  </ul>
  `);
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
