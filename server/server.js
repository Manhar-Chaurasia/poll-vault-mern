const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

app.use(
  cors({
    origin: "https://poll-vault-mern-client.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // If using cookies or authentication
  })
);

app.use(cors());
app.use(express.json());

// Routes
const routes = require("./routes/api");
const authRoutes = require("./routes/authRoutes");
const pollRoutes = require("./routes/pollRoutes");
const voteRoutes = require("./routes/voteRoutes");

app.use("/api", routes);
app.use("/api/auth", authRoutes);
app.use("/api/a", pollRoutes);
app.use("/api/vote", voteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
