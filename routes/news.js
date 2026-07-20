const express = require("express");
const router = express.Router();
const db = require("../db");

const fallbackNews = [
  { id: 1, title: "New collaboration with regional innovation hubs", summary: "A new partnership expands outreach and applied research opportunities.", published_at: "2025-03-20" },
  { id: 2, title: "Open calls for doctoral mobility", summary: "The institute announces a new doctoral mobility scheme for partner institutions.", published_at: "2025-02-15" },
];

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT id, title, summary, published_at FROM news ORDER BY published_at DESC");
    res.json(rows.length ? rows : fallbackNews);
  } catch (error) {
    res.json(fallbackNews);
  }
});

module.exports = router;
