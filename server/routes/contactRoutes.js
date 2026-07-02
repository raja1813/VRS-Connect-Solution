const express = require("express");
const fs = require("fs");
const path = require("path");

const { sendEmail } = require("../services/emailService");

const router = express.Router();

// =========================================
// Data File
// =========================================
const filePath = path.join(__dirname, "../data/contacts.json");

// =========================================
// Read Contacts
// =========================================
function readContacts() {
  if (!fs.existsSync(filePath)) return [];

  const data = fs.readFileSync(filePath, "utf8");

  if (!data.trim()) return [];

  return JSON.parse(data);
}

// =========================================
// Save Contacts
// =========================================
function saveContacts(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// =========================================
// Submit Contact Form
// =========================================
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
    } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const contacts = readContacts();

    const newContact = {
      id: Date.now(),
      name,
      email,
      phone,
      subject: subject || "",
      message,
      createdAt: new Date().toISOString(),
    };

    contacts.push(newContact);

    saveContacts(contacts);

    // =====================================
    // Email to Admin
    // =====================================
    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Received",
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>

        <hr>

        <p>VRS Connect Solution Website</p>
      `,
    });

    // =====================================
    // Thank You Email to User
    // =====================================
    await sendEmail({
      to: email,
      subject: "Thank You for Contacting VRS Connect Solution",
      html: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting <strong>VRS Connect Solution</strong>.</p>

        <p>We have successfully received your message.</p>

        <p>Our team will contact you as soon as possible.</p>

        <br>

        <p>Regards,</p>

        <h3>VRS Connect Solution</h3>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message submitted successfully.",
      data: newContact,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

// =========================================
// Get All Contacts
// =========================================
router.get("/", (req, res) => {
  res.json(readContacts());
});

module.exports = router;