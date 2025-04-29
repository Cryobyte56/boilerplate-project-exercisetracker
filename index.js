const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// MongoDB
mongoose.connect(process.env.MONGO_URI);

// Routes
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// Index Page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Start Server
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Server listening on port " + listener.address().port);
});
