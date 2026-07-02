const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const filePath = path.join(__dirname, "proposals.json");

router.post("/", (req, res) => {
  const newProposal = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date().toISOString(),
  };

  let proposals = [];

  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, "utf8");

    if (fileData) {
      proposals = JSON.parse(fileData);
    }
  }

  proposals.push(newProposal);

  fs.writeFileSync(filePath, JSON.stringify(proposals, null, 2));

  res.status(200).json({
    success: true,
    message: "Proposal submitted successfully!",
  });
});

router.get("/", (req, res) => {
  if (!fs.existsSync(filePath)) {
    return res.json([]);
  }

  const proposals = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  res.json(proposals);
});

module.exports = router;