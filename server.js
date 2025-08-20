import express from "express";
import googlePlayRoutes from "./router/googlePlayRoutes.js";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
// Middleware (optional: for JSON parsing)
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});
app.use("/api", googlePlayRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
