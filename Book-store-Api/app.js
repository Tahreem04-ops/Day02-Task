const express = require("express");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to Book Store API");
});

// Book routes
app.use("/api/books", bookRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});