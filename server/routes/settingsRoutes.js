const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// =======================================
// Data File
// =======================================

const filePath = path.join(
  __dirname,
  "../data/settings.json"
);

// =======================================
// Read Settings
// =======================================

function readSettings() {

  try {

    if (!fs.existsSync(filePath)) {

      fs.writeFileSync(
        filePath,
        JSON.stringify({}, null, 2)
      );

      return {};

    }

    const data = fs.readFileSync(
      filePath,
      "utf8"
    );

    if (!data.trim()) {

      return {};

    }

    return JSON.parse(data);

  } catch (error) {

    console.error(
      "Read Settings Error:",
      error
    );

    return {};

  }

}

// =======================================
// Save Settings
// =======================================

function saveSettings(data) {

  fs.writeFileSync(
    filePath,
    JSON.stringify(data, null, 2)
  );

}

// =======================================
// GET Settings
// =======================================

router.get("/", (req, res) => {

  try {

    const settings = readSettings();

    return res.status(200).json(settings);

  } catch (error) {

    console.error(error);

    return res.status(500).json({

      success: false,

      message: "Unable to load settings.",

    });

  }

});

// =======================================
// SAVE Settings
// =======================================

router.post("/", (req, res) => {

  try {

    saveSettings(req.body);

    return res.status(200).json({

      success: true,

      message: "Settings saved successfully.",

    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({

      success: false,

      message: "Unable to save settings.",

    });

  }

});

// =======================================

module.exports = router;