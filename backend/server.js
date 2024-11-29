import express from "express";
import cors from "cors";
import path from "path";
import checklistRoutes from "./routes/checklistRoutes.js";

const __dirname = path.resolve();

// app config
const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(cors());

// Serve static files (Frontend) from the 'frontend' directory
app.use(express.static(path.join(__dirname, "../frontend")));

// Use the checklist routes
app.use("/api", checklistRoutes);

// Default route to serve the index.html from the 'frontend' directory
app.get("/", (req, res) => {
  const indexPath = path.join(__dirname, "../frontend", "index.html");
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("Error serving file:", err);
      res.status(500).send("Error serving index.html");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
