import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from React build
app.use(express.static(path.join(__dirname, "client/build")));

// API Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" });
});

app.get("/api/menu", (req, res) => {
  res.json({
    menu: [
      { id: 1, name: "Home", link: "/" },
      { id: 2, name: "About", link: "/about" },
      { id: 3, name: "Services", link: "/services" },
      { id: 4, name: "Menu", link: "/menu" },
      { id: 5, name: "Events", link: "/events" },
      { id: 6, name: "Contact", link: "/contact" },
    ],
  });
});

// Serve React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
