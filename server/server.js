const express = require("express");
const cors = require("cors");

const contactRoutes = require("./contactRoutes");
const proposalRoutes = require("./proposalRoutes");
const adminRoutes = require("./adminRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 VRS Connect Solution API Running...");
});

// Contact API
app.use("/contact", contactRoutes);

// Proposal API
app.use("/proposal", proposalRoutes);

// Admin API
app.use("/admin", adminRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});