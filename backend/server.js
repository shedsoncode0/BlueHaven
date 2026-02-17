/** @format */

const express = require("express");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const http = require("http");
require("dotenv").config();

const connectDB = require("./server/database/connection");
const { verifyAccessToken } = require("./utils/jwt");

// Server PORT
const PORT = process.env.PORT || 8000;

// Connect to Database
connectDB();

// Create Express App
const app = express();

// ✅ Create HTTP server from express app
const server = http.createServer(app);

// ✅ Initialize socket.io properly
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

// Server Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// Test Route
app.get("/", verifyAccessToken, async (req, res) => {
  res.status(200).json({
    id: req.user.id,
    fullname: req.user.fullname,
    email: req.user.email,
  });
});

// Start the server (IMPORTANT: use server.listen, not app.listen)
server.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});
