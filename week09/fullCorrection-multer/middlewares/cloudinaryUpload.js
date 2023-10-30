const cloudinary = require('cloudinary').v2;
const fs = require('fs/promises');
const ErrorStatus = require('../utils/errorStatus');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryUpload = async (req, res, next) => {
  try {
    if (!req.file && !req.files.length)
      throw new ErrorStatus('No files to upload', 400);

    if (req.file) {
      const uploadInfo = await cloudinary.uploader.upload(req.file.path, {
        resource_type: 'auto',
      });

      if (uploadInfo) await fs.unlink(req.file.path);

      req.cloudinaryData = [uploadInfo];
    }

    if (req.files) {
      const multiCloudinaryUpload = req.files.map(async (file) => {
        const uploadImage = await cloudinary.uploader.upload(file.path, {
          resource_type: 'auto',
        });

        if (uploadImage) await fs.unlink(file.path);

        return uploadImage;
      });

      req.cloudinaryData = await Promise.all(multiCloudinaryUpload);
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = cloudinaryUpload;
