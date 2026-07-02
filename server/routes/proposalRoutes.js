const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// ================================
// Data File
// ================================
const filePath = path.join(__dirname, "../data/proposals.json");

// ================================
// Read Proposals
// ================================
function readProposals() {
  if (!fs.existsSync(filePath)) return [];

  const data = fs.readFileSync(filePath, "utf8");

  if (!data.trim()) return [];

  return JSON.parse(data);
}

// ================================
// Save Proposals
// ================================
function saveProposals(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// ================================
// Submit Proposal
// ================================
router.post("/", (req, res) => {
  const {
    companyName,
    contactPerson,
    email,
    phone,
    service,
    budget,
    timeline,
    message,
  } = req.body;

  if (
    !companyName ||
    !contactPerson ||
    !email ||
    !phone ||
    !service ||
    !message
  ) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields.",
    });
  }

  const proposals = readProposals();

  const newProposal = {
    id: Date.now(),
    companyName,
    contactPerson,
    email,
    phone,
    service,
    budget: budget || "",
    timeline: timeline || "",
    message,
    createdAt: new Date().toISOString(),
  };

  proposals.push(newProposal);

  saveProposals(proposals);

  res.status(200).json({
    success: true,
    message: "Proposal submitted successfully.",
    data: newProposal,
  });
});

// ================================
// Get All Proposals
// ================================
router.get("/", (req, res) => {
  res.json(readProposals());
});

module.exports = router;