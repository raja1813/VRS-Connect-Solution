const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const filePath = path.join(__dirname, "contacts.json");

router.post("/", (req, res) => {
  const newContact = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date().toISOString(),
  };

  let contacts = [];

  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, "utf8");

    if (fileData) {
      contacts = JSON.parse(fileData);
    }
  }

  contacts.push(newContact);

  fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));

  res.status(200).json({
    success: true,
    message: "Message saved successfully!",
  });
});

router.get("/", (req, res) => {
  if (!fs.existsSync(filePath)) {
    return res.json([]);
  }

  const contacts = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  res.json(contacts);
});

module.exports = router;