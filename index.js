import express from "express";
import usersRoutes from "./routes/users.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3030;
const MONGO_URI = process.env.MONGO_DB_KEY; // Load MongoDB URI from .env

// Middleware
app.use(express.json()); // Built-in JSON body parser
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Use the usersRoutes
app.use("/users", usersRoutes);

// ✅ MongoDB Connection
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB-atlas-users!"))
  .catch((error) => console.error("❌ MongoDB Connection Failed:", error));

// ✅ Define a root route
app.get("/", (req, res) => {
  res.send("Hello, from index.js page!");
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on: http://localhost:${PORT}`);
});
