const express = require('express');
const pool = require('./DB/dbConnection.js');
const upload = require('./lib/multerUpload.js');
const cloudinaryUpload = require('./middlewares/cloudinaryUpload.js');
const errorHandler = require('./middlewares/errorHandler.js');
const fs = require('fs/promises');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('views'));
app.use(express.static('uploads'));

// uploading a single image w/o database
/*
app.post('/upload-profile-pic', upload.single('profile_pic'), cloudinaryUpload, (req, res) => {
  const { secure_url } = req.cloudinaryUrl
  return res.send(
    `<h2>Here is the picture:</h2><img src="${secure_url}" alt="Your profile picture" /><div><a href="javascript:history.back()">Go Back</a></div>`
  );
});
*/

// uploading a single image with database
app.post(
  '/upload-profile-pic',
  upload.single('profile_pic'),
  cloudinaryUpload,
  async (req, res, next) => {
    try {
      const { original_filename, secure_url } = req.cloudinaryData[0];

      const {
        rows: [newImage],
      } = await pool.query(
        'INSERT INTO pictures (name, path) VALUES ($1, $2) RETURNING *',
        [original_filename, secure_url]
      );

      return res
        .status(200)
        .send(
          `<h2>Here is the picture:</h2><img src="${newImage.path}" alt="Your profile picture" /><h4><a href="javascript:history.back()">Go Back</a></h4>`
        );
    } catch (error) {
      next(error);
    }
  }
);

// uploading multiple images w/o database
/*
app.post(
  '/upload-cat-pics',
  upload.array('cat_pics', 5),
  cloudinaryUpload,
  async (req, res) => {
    try {
      const allImages = req.cloudinaryData
        .map((file) => `<div><img src="${file.secure_url}" /></div>`)
        .join('');

      return res.send(
        `<h2>Here are all pictures you just uploaded</h2>${allImages}<a href="javascript:history.back()">Go Back</a>`
      );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
);
*/

// uploading multiple images with image hosting and database
app.post(
  '/upload-cat-pics',
  upload.array('cat_pics', 5),
  cloudinaryUpload,
  async (req, res) => {
    try {
      const allImages = await Promise.all(
        req.cloudinaryData.map(async (file) => {
          const {
            rows: [newImage],
          } = await pool.query(
            'INSERT INTO pictures (name, path) VALUES ($1, $2) RETURNING *',
            [file.original_filename, file.secure_url]
          );

          return `<div><img src="${newImage.path}" /></div>`;
        })
      );

      return res.send(
        `<h2>Here are all pictures you just uploaded</h2>${allImages.join(
          ''
        )}<a href="javascript:history.back()">Go Back</a>`
      );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
);

// displaying all images from the database
app.get('/get-pics', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM pictures');

    const displayAllImages = rows
      .map((picture) => `<div><img src="${picture.path}" /></div>`)
      .join('');

    return res.send(
      `<h2>Here are all uploaded pictures:</h2>${displayAllImages}`
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.use(errorHandler);

app.listen(port, () => console.log(`Server up on port ${port}`));
