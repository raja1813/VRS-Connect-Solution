require("dotenv").config();

const express = require("express");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");
const proposalRoutes = require("./routes/proposalRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();

// ================================
// Middlewares
// ================================
app.use(cors());
app.use(express.json());

// ================================
// Home Route
// ================================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 VRS Connect Solution API Running Successfully",
  });
});

// ================================
// API Routes
// ================================
app.use("/contact", contactRoutes);
app.use("/proposal", proposalRoutes);
app.use("/admin", adminRoutes);

// ================================
// 404 Handler
// ================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route Not Found",
  });
});

// ================================
// Start Server
// ================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("====================================");
  console.log(`✅ Server Running on Port ${PORT}`);
  console.log("🚀 VRS Connect Solution Backend Ready");
  console.log("====================================");
});