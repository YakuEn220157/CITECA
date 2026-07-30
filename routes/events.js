const express = require("express");
const router = express.Router();
const db = require("../db");
const { verifyToken } = require("./auth");

router.get("/", async (req, res) => {
  try {
    const rows = await db.query("SELECT * FROM events ORDER BY event_date DESC");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    const d = req.body;
    const event_date = d.event_date || new Date().toISOString().split('T')[0];

    const result = await db.query(
      `INSERT INTO events (title, description, category, event_date, end_date, start_time, end_time, venue, speaker, registration_link, image_url) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [d.title || "Untitled Event", d.description || "", d.category || "General", event_date, d.end_date || null, d.start_time || null, d.end_time || null, d.venue || "", d.speaker || "", d.registration_link || "", d.image_url || ""]
    );
    res.status(201).json({ ok: true, id: Number(result.insertId) });
  } catch (error) {
    console.error("❌ EVENT ADD ERROR:", error); 
    res.status(500).json({ ok: false, message: error.message });
  }
});

// NEW: UPDATE EVENT
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const d = req.body;
    const event_date = d.event_date || new Date().toISOString().split('T')[0];

    await db.query(
      `UPDATE events SET title=?, description=?, category=?, event_date=?, end_date=?, start_time=?, end_time=?, venue=?, speaker=?, registration_link=?, image_url=? WHERE id=?`,
      [d.title || "Untitled Event", d.description || "", d.category || "General", event_date, d.end_date || null, d.start_time || null, d.end_time || null, d.venue || "", d.speaker || "", d.registration_link || "", d.image_url || "", req.params.id]
    );
    res.json({ ok: true });
  } catch (error) {
    console.error("❌ EVENT UPDATE ERROR:", error);
    res.status(500).json({ ok: false, message: error.message });
  }
});

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await db.query("DELETE FROM events WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

module.exports = router;