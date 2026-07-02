const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const contactsFile = path.join(__dirname, "contacts.json");
const proposalsFile = path.join(__dirname, "proposals.json");

function readJson(file) {
  if (!fs.existsSync(file)) return [];

  const data = fs.readFileSync(file, "utf8");

  if (!data.trim()) return [];

  return JSON.parse(data);
}

function writeJson(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

/* =======================
   Dashboard
======================= */

router.get("/dashboard", (req, res) => {
  const contacts = readJson(contactsFile);
  const proposals = readJson(proposalsFile);

  res.json({
    totalContacts: contacts.length,
    totalProposals: proposals.length,
    latestContacts: contacts.slice(-5).reverse(),
    latestProposals: proposals.slice(-5).reverse(),
  });
});

/* =======================
   Contacts
======================= */

router.get("/contacts", (req, res) => {
  res.json(readJson(contactsFile));
});

router.delete("/contacts/:id", (req, res) => {
  const id = Number(req.params.id);

  let contacts = readJson(contactsFile);

  contacts = contacts.filter(
    (item) => item.id !== id
  );

  writeJson(contactsFile, contacts);

  res.json({
    success: true,
    message: "Contact deleted successfully",
  });
});

/* =======================
   Proposals
======================= */

router.get("/proposals", (req, res) => {
  res.json(readJson(proposalsFile));
});

router.delete("/proposals/:id", (req, res) => {
  const id = Number(req.params.id);

  let proposals = readJson(proposalsFile);

  proposals = proposals.filter(
    (item) => item.id !== id
  );

  writeJson(proposalsFile, proposals);

  res.json({
    success: true,
    message: "Proposal deleted successfully",
  });
});

module.exports = router;