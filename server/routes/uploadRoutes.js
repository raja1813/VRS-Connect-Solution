const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const uploadDir = path.join(
  __dirname,
  "../uploads"
);

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({

  destination(req, file, cb) {

    cb(null, uploadDir);

  },

  filename(req, file, cb) {

    const ext = path.extname(file.originalname);

    cb(
      null,
      req.params.type + ext
    );

  },

});

const upload = multer({

  storage,

  limits: {

    fileSize: 5 * 1024 * 1024,

  },

});

// Upload Logo / Favicon

router.post(
  "/:type",
  upload.single("image"),
  (req, res) => {

    const type = req.params.type;

    if (
      type !== "logo" &&
      type !== "favicon"
    ) {

      return res.status(400).json({

        success: false,

        message: "Invalid upload type",

      });

    }

    return res.json({

      success: true,

      image:
        "/uploads/" + req.file.filename,

    });

  }
);

module.exports = router;