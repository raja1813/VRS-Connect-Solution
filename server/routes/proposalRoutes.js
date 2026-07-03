const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

// =======================================
// Data File
// =======================================

const filePath = path.join(__dirname, "../data/proposals.json");

// =======================================
// Read Proposal Data
// =======================================

function readProposals() {
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
    console.error("Read Proposal Error:", error);
    return [];
  }
}

// =======================================
// Save Proposal Data
// =======================================

function saveProposals(data) {
  fs.writeFileSync(
    filePath,
    JSON.stringify(data, null, 2)
  );
}

// =======================================
// Submit Proposal
// =======================================

router.post("/", (req, res) => {

  const {
    company,
    name,
    email,
    phone,
    website,
    service,
    budget,
    message,
  } = req.body;

  if (
    !company ||
    !name ||
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
    company,
    name,
    email,
    phone,
    website: website || "",
    service,
    budget: budget || "",
    message,
    createdAt: new Date().toISOString(),
  };

  proposals.push(newProposal);

  saveProposals(proposals);
    return res.status(201).json({
    success: true,
    message: "Proposal submitted successfully.",
    data: newProposal,
  });

});

// =======================================
// Get All Proposals
// =======================================

router.get("/", (req, res) => {

  try {

    const proposals = readProposals();

    return res.status(200).json(proposals);

  } catch (error) {

    console.error("Get Proposal Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch proposals.",
    });

  }

});

// =======================================
// Export Router
// =======================================

module.exports = router;