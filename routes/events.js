const express = require("express");
const router = express.Router();
const db = require("../db");

const fallbackEvents = [
  { id: 1, title: "Open Research Day", date: "2025-10-05", venue: "Porto" },
  { id: 2, title: "AI for Society Lab", date: "2025-11-12", venue: "Lisbon" },
  { id: 3, title: "Innovation Meetup", date: "2026-01-20", venue: "Braga" },
];

router.get("/", async (req, res) => {
  try {
    const rows = await db.query("SELECT id, title, date, venue FROM events ORDER BY date ASC");
    res.json(rows.length ? rows : fallbackEvents);
  } catch (error) {
    res.json(fallbackEvents);
  }
});

module.exports = router;
