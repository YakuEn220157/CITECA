const express = require("express");
const router = express.Router();
const db = require("../db");
const { verifyToken } = require("./auth");

// GET ALL AREAS & TOPICS
router.get("/", async (req, res) => {
  try {
    const areas = await db.query("SELECT * FROM research_areas ORDER BY id ASC");
    const tags = await db.query("SELECT * FROM research_tags");
    const data = areas.map(area => {
      area.tags = tags.filter(t => t.area_id === area.id);
      return area;
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

// CREATE AREA
router.post("/", verifyToken, async (req, res) => {
  try {
    const result = await db.query("INSERT INTO research_areas (title, description) VALUES (?, ?)", [req.body.title, req.body.description || ""]);
    res.status(201).json({ ok: true, id: Number(result.insertId) });
  } catch (error) { res.status(500).json({ ok: false, message: error.message }); }
});

// UPDATE AREA (Text Editing)
router.put("/:id", verifyToken, async (req, res) => {
  try {
    await db.query("UPDATE research_areas SET title = ?, description = ? WHERE id = ?", [req.body.title, req.body.description, req.params.id]);
    res.json({ ok: true });
  } catch (error) { res.status(500).json({ ok: false, message: error.message }); }
});

// ADD TOPIC (TAG) TO AREA
router.post("/tags", verifyToken, async (req, res) => {
  try {
    const areaId = Number(req.body.area_id);
    const name = String(req.body.name || "").trim();

    if (!areaId || !name) {
      return res.status(400).json({ ok: false, message: "A valid area and tag name are required." });
    }

    const result = await db.query("INSERT INTO research_tags (area_id, name) VALUES (?, ?)", [areaId, name]);
    res.status(201).json({ ok: true, id: Number(result.insertId) });
  } catch (error) { res.status(500).json({ ok: false, message: error.message }); }
});

// DELETE AREA OR TAG
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await db.query("DELETE FROM research_tags WHERE area_id = ?", [req.params.id]);
    await db.query("DELETE FROM research_areas WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (error) { res.status(500).json({ ok: false, message: error.message }); }
});
router.delete("/tags/:id", verifyToken, async (req, res) => {
  try {
    await db.query("DELETE FROM research_tags WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (error) { res.status(500).json({ ok: false, message: error.message }); }
});

module.exports = router;