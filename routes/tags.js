const express = require("express");
const router = express.Router();
const db = require("../db");
const { verifyToken } = require("./auth");

// GET ALL AREAS & NESTED TAGS
router.get("/", async (req, res) => {
  try {
    const areas = await db.query("SELECT * FROM research_areas ORDER BY id ASC");
    const tags = await db.query("SELECT * FROM research_tags");
    
    // Nest tags inside their parent area
    const data = areas.map(area => {
      area.tags = tags.filter(t => t.area_id === area.id);
      return area;
    });

    res.json(data);
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

// ADD NEW AREA
router.post("/areas", verifyToken, async (req, res) => {
  try {
    const result = await db.query("INSERT INTO research_areas (title, description) VALUES (?, ?)", [req.body.title, req.body.description || ""]);
    res.status(201).json({ ok: true, id: Number(result.insertId) });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

// ADD NEW TAG TO AN AREA
router.post("/tags", verifyToken, async (req, res) => {
  try {
    const result = await db.query("INSERT INTO research_tags (area_id, name) VALUES (?, ?)", [req.body.area_id, req.body.name]);
    res.status(201).json({ ok: true, id: Number(result.insertId) });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

// DELETE AREA (Cascade will delete all its tags automatically)
router.delete("/areas/:id", verifyToken, async (req, res) => {
  try {
    await db.query("DELETE FROM research_areas WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

// DELETE TAG
router.delete("/tags/:id", verifyToken, async (req, res) => {
  try {
    await db.query("DELETE FROM research_tags WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

module.exports = router;