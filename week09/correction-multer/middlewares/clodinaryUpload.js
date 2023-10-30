const cloudinary = require('cloudinary').v2;
const fs = require('fs/promises');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const cloudinaryUpload = async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).send('Please upload a file.');

    const uploadInfo = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'auto',
    });

    if (uploadInfo) await fs.unlink(req.file.path);

    req.cloudinaryData = uploadInfo;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send(`Error: ${error.message}`);
  }
};

module.exports = cloudinaryUpload;
