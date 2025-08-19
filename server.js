import express from "express";
import googlePlayRoutes from "./router/googlePlayRoutes.js";

const app = express();
const PORT = 5000;

// Middleware (optional: for JSON parsing)
app.use(express.json());

// Routes
app.use("/api", googlePlayRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
