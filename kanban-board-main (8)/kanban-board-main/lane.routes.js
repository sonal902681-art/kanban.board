import express from "express";

const router = express.Router();

// IMPORTANT: this should be "/"
router.get("/", (req, res) => {
  res.json([
    { title: "To Do" },
    { title: "In Progress" },
    { title: "Done" }
  ]);
});

export default router;