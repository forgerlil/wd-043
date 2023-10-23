const express = require('express');
const app = express();
const {
  getAllCountries,
  createCountry,
  getOneCountry,
  editCountry,
  deleteCountry,
} = require('./controllers/countryControllers');

const port = process.env.PORT || 8000;

app.use(express.json());

app.route('/api/countries').get(getAllCountries).post(createCountry);

app
  .route('/api/countries/:code')
  .get(getOneCountry)
  .put(editCountry)
  .delete(deleteCountry);

app.listen(port, () => console.log(`Server up on port ${port}`));
