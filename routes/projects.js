const express = require("express");
const router = express.Router();
const db = require("../db");

const fallbackProjects = [
  { id: 1, title: "Neural Language Models for Portuguese", category: "Artificial Intelligence", summary: "Domain-specific transformer models trained on scientific corpora.", cover: "p1" },
  { id: 2, title: "Urban Sensor Mesh, Porto", category: "Networks and Communications", summary: "Low-power communication networks supporting citywide sensing and mobility analysis.", cover: "p2" },
  { id: 3, title: "Collaborative Research Platforms", category: "Software Engineering", summary: "Reliable digital environments for interdisciplinary research and knowledge sharing.", cover: "p3" },
  { id: 4, title: "Zero-Trust Data Vaults", category: "Data Science", summary: "Secure data workflows for decentralized identity, privacy and analytics.", cover: "p4" },
];

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT id, title, category, summary, cover FROM projects ORDER BY id");
    res.json(rows.length ? rows : fallbackProjects);
  } catch (error) {
    res.json(fallbackProjects);
  }
});

module.exports = router;
