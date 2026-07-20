const express = require("express");
const router = express.Router();
const db = require("../db");

const fallbackResources = [
  { id: 1, name: "Research Toolkit", category: "Software", link: "https://example.org/toolkit" },
  { id: 2, name: "Data Governance Guide", category: "Policy", link: "https://example.org/governance" },
  { id: 3, name: "Open Access Repository", category: "Repository", link: "https://example.org/repo" },
];

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT id, name, category, link FROM resources ORDER BY id");
    res.json(rows.length ? rows : fallbackResources);
  } catch (error) {
    res.json(fallbackResources);
  }
});

module.exports = router;
