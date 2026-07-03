const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// =======================================
// Data File
// =======================================

const filePath = path.join(__dirname, "../data/contacts.json");

// =======================================
// Read Contacts
// =======================================

function readContacts() {
  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "[]");
      return [];
    }

    const data = fs.readFileSync(filePath, "utf8");

    if (!data.trim()) {
      return [];
    }

    return JSON.parse(data);

  } catch (error) {
    console.error("Read Contact Error:", error);
    return [];
  }
}

// =======================================
// Save Contacts
// =======================================

function saveContacts(data) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(data, null, 2)
  );
}

// =======================================
// Submit Contact
// =======================================

router.post("/", (req, res) => {

  const {
    name,
    company,
    email,
    phone,
    message,
  } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !message
  ) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields.",
    });
  }

  const contacts = readContacts();

  const newContact = {
    id: Date.now(),
    name,
    company: company || "",
    email,
    phone,
    message,
    createdAt: new Date().toISOString(),
  };

  contacts.push(newContact);

  saveContacts(contacts);
    return res.status(201).json({
    success: true,
    message: "Message submitted successfully.",
    data: newContact,
  });

});

// =======================================
// Get All Contacts
// =======================================

router.get("/", (req, res) => {

  try {

    const contacts = readContacts();

    return res.status(200).json(contacts);

  } catch (error) {

    console.error("Get Contact Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch contacts.",
    });

  }

});

// =======================================
// Export Router
// =======================================

module.exports = router;