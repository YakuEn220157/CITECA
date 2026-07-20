const express = require("express");
const router = express.Router();
const db = require("../db");

const fallbackPublications = [
  { id: 1, title: "Adaptive Interfaces for Hybrid Research", year: 2024, type: "Journal" },
  { id: 2, title: "Secure Edge Architectures", year: 2023, type: "Conference" },
  { id: 3, title: "Open Science in Practice", year: 2022, type: "Book Chapter" },
];

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT id, title, year, type FROM publications ORDER BY year DESC");
    res.json(rows.length ? rows : fallbackPublications);
  } catch (error) {
    res.json(fallbackPublications);
  }
});

module.exports = router;
