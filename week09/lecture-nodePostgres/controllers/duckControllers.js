const dbPool = require('../db/pgClient');

const getAllDucks = async (req, res) => {
  try {
    const { rows } = await dbPool.query(
      'SELECT * FROM duck WHERE active=true;'
    );
    // Actual query for our database (with password):
    // const { rows } = await dbPool.query(
    //   `SELECT duck_name, img_src as imgSrc, quote, to_json(owner.*) as owner FROM duck JOIN owner on owner.id=duck.owner_id;`
    // );
    // Actual query for our database (without password):
    // const { rows } = await dbPool.query(`SELECT duck_name as duckName, img_src as imgSrc, quote, json_build_object('id', owner.id, 'first_name', owner.first_name, 'last_name', owner.last_name, 'email', owner.email) as owner FROM duck JOIN owner ON owner.id=duck.owner_id`);
    res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const getSingleDuck = async (req, res) => {
  try {
    const { id } = req.params;

    if (!+id) return res.status(400).json({ error: 'Id must be a number' });

    const { rows } = await dbPool.query(
      `SELECT * FROM duck WHERE id=$1 AND active=true`,
      [id]
    );

    res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const createDuck = async (req, res) => {
  try {
    const { duck_name, img_src, quote, owner_id } = req.body;
    if (!duck_name || !img_src || !owner_id)
      return res.status(400).json({ error: 'Missing fields' });

    const defaultQuote = 'Whenever you are ready!';

    const {
      rows: [newDuck],
    } = await dbPool.query(
      'INSERT INTO duck (duck_name, img_src, quote, owner_id) VALUES ($1, $2, $3, $4) RETURNING *;',
      [duck_name, img_src, quote || defaultQuote, owner_id]
    );

    return res.status(201).json(newDuck);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const editDuck = async (req, res) => {
  try {
    const {
      params: { id },
      body: { duck_name, img_src, quote, owner_id },
    } = req;

    if (!+id) return res.status(400).json({ error: 'Id must be a number' });

    if (!duck_name || !img_src || !owner_id)
      return res.status(400).json({ error: 'Missing fields' });

    const {
      rows: [updatedDuck],
    } = await dbPool.query(
      'UPDATE duck SET duck_name=$1, img_src=$2, quote=$3, owner_id=$4 WHERE id=$5 RETURNING *;',
      [duck_name, img_src, quote, owner_id, id]
    );

    // Updating duck and getting owner embedded into the object
    // const {
    //   rows: [updatedDuck],
    // } = await dbPool.query(
    //   `UPDATE duck SET duck_name=$1, img_src=$2, quote=$3, owner_id=$4 FROM (SELECT duck.id, duck_name, img_src, quote, json_build_object('id', owner.id, 'firstName', owner.first_name, 'lastName', owner.last_name, 'email', owner.email) as owner FROM duck JOIN owner ON owner.id=duck.owner_id) updatedDuck WHERE updatedDuck.id=$5 RETURNING updatedDuck.id, updatedDuck.duck_name, updatedDuck.img_src, updatedDuck.quote, updatedDuck.owner;`,
    //   [duck_name, img_src, quote, owner_id, id]
    // );

    return res.json(updatedDuck);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

const deleteDuck = async (req, res) => {
  try {
    const { id } = req.params;

    if (!+id) return res.status(400).json({ error: 'Id must be a number' });

    // If we want to delete a record:
    // await dbPool.query('DELETE FROM duck WHERE id=$1;', [id]);

    await dbPool.query('UPDATE duck SET active=false WHERE id=$1;', [id]);

    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllDucks,
  getSingleDuck,
  createDuck,
  editDuck,
  deleteDuck,
};
