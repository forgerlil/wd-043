const data = require('../wishlist');

/**
 * Controller to serve all countries from the wishlist.
 * @param {*} req - Express request object
 * @param {*} res - Express response object
 * @response View: `index.ejs`
 */
const getAllCountries = (req, res) => {
  // BONUS: Allow a `sort` query to sort countries alphabetically
  const { sort } = req.query;
  if (sort)
    return res.json([...data].sort((a, b) => (a.name > b.name ? 1 : -1)));

  return res.render('index', { data });
};

/**
 * Controller to create a new country in the wishlist.
 * `name`, `alpha2Code`, `alpha3Code` and `visited` are required from req.body
 * @param {*} req - Express request object
 * @param {*} res - Express response object
 * @response Array with all countries including the created resource
 */
const addCountry = (req, res) => {
  try {
    const { name, alpha2Code, alpha3Code, visited } = req.body;

    // BONUS: Check if country exists prior to adding it.
    for (let country of data) {
      if (
        country.alpha2Code === alpha2Code.toUpperCase() ||
        country.alpha3Code === alpha3Code.toUpperCase()
      )
        throw new Error('Country already exists.');
    }

    data.push({
      id: data.length + 1,
      name,
      alpha2Code: alpha2Code.toUpperCase(),
      alpha3Code: alpha3Code.toUpperCase(),
      visited,
    });

    // If we were only a REST API, we would traditionally send the newly created data back
    // as confirmation for the client
    // return res.status(201).json(data);

    // If we have a view, we redirect back to /api/countries for us to display the new data in the view.
    return res.status(201).redirect('/api/countries');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Controller to serve a single country based on alpha code.
 * @param {*} req - Express request object
 * @param {*} res - Express response object
 * @response Single country object
 */
const getSingleCountry = (req, res) => {
  try {
    const { code } = req.params;

    const findCountry = data.find(
      (country) =>
        country.alpha2Code === code.toUpperCase() ||
        country.alpha3Code === code.toUpperCase()
    );

    if (!findCountry) throw new Error('Country not found.');

    return res.json(findCountry);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Controller to edit a single country based on alpha code.
 * `name`, `alpha2Code`, `alpha3Code` and `visited` are required from req.body
 * @param {*} req - Express request object
 * @param {*} res - Express response object
 * @response Edited `country` object
 */
const editCountry = (req, res) => {
  try {
    const { name, alpha2Code, alpha3Code, visited } = req.body;
    const { code } = req.params;

    let countryIndex;
    const findCountry = data.find((country, index) => {
      countryIndex = index;
      return (
        country.alpha2Code === code.toUpperCase() ||
        country.alpha3Code === code.toUpperCase()
      );
    });

    if (!findCountry) throw new Error('Country not found.');

    data[countryIndex] = {
      id: findCountry.id,
      name,
      alpha2Code: alpha2Code.toUpperCase(),
      alpha3Code: alpha3Code.toUpperCase(),
      visited,
    };

    return res.json(data[countryIndex]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * Controller to mark a country as visited, based on alpha code.
 * @param {*} req - Express request object
 * @param {*} res - Express response object
 * @response Edited `country` object
 */
const removeCountry = (req, res) => {
  try {
    const { code } = req.params;

    let countryIndex;
    const findCountry = data.find((country, index) => {
      countryIndex = index;
      return (
        country.alpha2Code === code.toUpperCase() ||
        country.alpha3Code === code.toUpperCase()
      );
    });

    if (!findCountry) throw new Error('Country not found.');

    // This commented out functionality would be if we were to actually delete the country
    // from the wishlist, instead of toggling the visited attribute.

    // data.splice(countryIndex, 1);
    // return res.json(data);

    if (findCountry.visited) throw new Error('Country already visited.');

    data[countryIndex] = {
      ...findCountry,
      visited: true,
    };

    return res.json(data[countryIndex]);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCountries,
  addCountry,
  getSingleCountry,
  editCountry,
  removeCountry,
};
