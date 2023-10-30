const express = require('express');
const app = express();
const multerUpload = require('./lib/multerConfig');
const cloudinaryUpload = require('./middlewares/clodinaryUpload');

const port = process.env.PORT || 8000;

app.use(express.static('public'));
app.use(express.static('uploads'));

app.post(
  '/upload-profile-pic',
  multerUpload.single('profile_pic'),
  cloudinaryUpload,
  (req, res) => {
    if (!req.cloudinaryData)
      return res.status(500).send('File could not be uploaded');

    return res.send(
      `<div><h2>Here's the picture:</h2><img src="${req.cloudinaryData.secure_url}"/></div>`
    );
  }
);

app.listen(port, () => console.log(`Server up on port ${port}`));
