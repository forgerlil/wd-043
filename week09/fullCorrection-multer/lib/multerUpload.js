const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}${extension}`);
  },
});

const fileFilter = (req, file, cb) => {
  const errorMessage =
    'Invalid file(s) in your upload. Please make sure to only include images.';

  if (!file.mimetype.startsWith('image')) return cb(new Error(errorMessage));

  const fileTypes = ['png', 'jpg', 'jpeg', 'gif'];
  const [fileType, fileExtension] = file.mimetype.split('/');

  return fileTypes.includes(fileExtension.toLowerCase())
    ? cb(null, true)
    : cb(new Error(errorMessage));
};

module.exports = multer({ storage, fileFilter });
