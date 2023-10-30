const express = require('express');
const app = express();
const countryValidator = require('./middlewares/countryValidator');
const {
  getAllCountries,
  addCountry,
  getSingleCountry,
  editCountry,
  removeCountry,
} = require('./controllers/countriesControllers');

const port = process.env.PORT || 8000;

// We enable data to be interpreted as JSON
app.use(express.json());
// And we also enable the body to be interpreted as urlencoded content
// This is important for step 7 and the view engine, since html forms send data as x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>
  res.send(
    '<p>Welcome to the travel wishlist! Go to <a href="/api/countries">/api/countries</a> to see cool things happening</p>'
  )
);

app
  .route('/api/countries')
  .get(getAllCountries)
  .post(countryValidator, addCountry);

app
  .route('/api/countries/:code')
  .get(getSingleCountry)
  .put(countryValidator, editCountry)
  .delete(removeCountry);

app.listen(port, () => console.log(`Server up on port ${port}`));
