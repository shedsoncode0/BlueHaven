/** @format */

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import colors from "colors";
import http from "http";
import userRoutes from "./server/routes/user.routes.js";

import connectDB from "./server/config/db.js";
import routes from "./server/routes/index.js";
import {
  notFound,
  errorHandler,
} from "./server/middlewares/errorMiddleware.js";

// Load env
dotenv.config();

// Connect DB
 connectDB();

// Init app
const app = express();
const server = http.createServer(app);

// =====================
// GLOBAL MIDDLEWARES
// =====================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(cookieParser());
app.use(morgan("dev"));

// =====================
// ROUTES
// =====================
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Backend running successfully 🚀",
  });
});

app.use("/api", routes);

// =====================
// ERROR HANDLING
// =====================
app.use(notFound);
app.use(errorHandler);
app.use("/api/users", userRoutes);

// =====================
// START SERVER
// =====================
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(
    `🚀 Server running in ${
      process.env.NODE_ENV || "development"
    } mode on port ${PORT}`.cyan.bold
  );
});