import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import lanes from "./routes/lane.routes.js"; // ✅ MUST BE CORRECT PATH

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

/* 🔥 IMPORTANT FIX */
app.use("/api/lanes", lanes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});