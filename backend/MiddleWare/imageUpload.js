const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "image") {
      cb(null, "createpost");
    }
    if (file.fieldname === "product") {
      cb(null, "createpost");
    }
  },
  filename: (req, file, cb) => {
    if (file.fieldname === "image") {
      cb(null, Date.now() + file.originalname);
    }
    if (file.fieldname === "product") {
      cb(null, Date.now() + file.originalname);
    }
  },
});

const imageUploadss = multer({
  storage,
}).fields([
  {
    name: "image",
    maxCount:1
  },
  {
    name: "product",
    maxCount:1
  },
]);

const uploadProfile = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "background") {
      cb(null, "createpost");
    }
    if (file.fieldname === "profile") {
      cb(null, "createpost");
    }
  },
  filename: (req, file, cb) => {
    if (file.fieldname === "background") {
      cb(null, Date.now() + file.originalname);
    }
    if (file.fieldname === "profile") {
      cb(null, Date.now() + file.originalname);
    }
  },
});

const userUploadProfile = multer({
  storage: uploadProfile,
}).fields([
  {
    name: "background",
    maxCount:1
  },
  {
    name: "profile",
    maxCount:1
  },
]);

module.exports = { imageUploadss, userUploadProfile };
