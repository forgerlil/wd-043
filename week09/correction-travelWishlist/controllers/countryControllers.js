const countryList = require('../data');

const getAllCountries = (req, res) => {
  return res.json(countryList);
};

const createCountry = (req, res) => {
  const { name, alpha2Code, alpha3Code } = req.body;
  if (!name || !alpha2Code || !alpha3Code)
    return res.status(400).json({ error: 'Missing fields!' });

  countryList.push({
    id: countryList.length + 1,
    name,
    alpha2Code,
    alpha3Code,
    visited: false,
  });

  return res.status(201).json(countryList);
};

const getOneCountry = (req, res) => {
  const { code } = req.params;

  const singleCountry = countryList.find(
    (country) =>
      country.alpha2Code === code.toUpperCase() ||
      country.alpha3Code === code.toUpperCase()
  );

  if (!singleCountry)
    return res.status(404).json({
      error: `Country with alpha code ${code} is not in the wishlist`,
    });

  return res.json(singleCountry);
};

const editCountry = (req, res) => {
  const { code } = req.params;
  const { name, alpha2Code, alpha3Code } = req.body;

  if (!name && !alpha2Code && !alpha3Code)
    return res.status(400).json({ error: 'Please send at least one field' });

  let countryIndex;
  const singleCountry = countryList.find((country, index) => {
    countryIndex = index;
    return (
      country.alpha2Code === code.toUpperCase() ||
      country.alpha3Code === code.toUpperCase()
    );
  });

  if (!singleCountry)
    return res.status(404).json({
      error: `Country with alpha code ${code} is not in the wishlist`,
    });

  countryList[countryIndex] = {
    id: countryList[countryIndex].id,
    name,
    alpha2Code: alpha2Code.toUpperCase(),
    alpha3Code: alpha3Code.toUpperCase(),
    visited: countryList[countryIndex].visited,
  };

  return res.json(countryList);
};

const deleteCountry = (req, res) => {
  const { code } = req.params;

  let countryIndex;
  const singleCountry = countryList.find((country, index) => {
    countryIndex = index;
    return (
      country.alpha2Code === code.toUpperCase() ||
      country.alpha3Code === code.toUpperCase()
    );
  });

  if (!singleCountry)
    return res.status(404).json({
      error: `Country with alpha code ${code} is not in the wishlist`,
    });

  const removedCountry = countryList.splice(countryIndex, 1);

  return res.json({ countryList, removedCountry });
};

module.exports = {
  getAllCountries,
  createCountry,
  getOneCountry,
  editCountry,
  deleteCountry,
};
