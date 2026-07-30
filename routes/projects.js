const express = require("express");
const router = express.Router();
const db = require("../db");
const { verifyToken } = require("./auth");

router.get("/", async (req, res) => {
  try {
    const rows = await db.query("SELECT * FROM projects ORDER BY id DESC");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const rows = await db.query("SELECT * FROM projects WHERE id = ?", [req.params.id]);
    if (!rows || rows.length === 0) {
      return res.status(404).json({ ok: false, message: "Project not found." });
    }

    const project = rows[0];
    const researchers = await db.query(
      `SELECT r.* FROM researchers r
       JOIN project_researchers pr ON pr.researcher_id = r.id
       WHERE pr.project_id = ?`,
      [req.params.id]
    );

    res.json({ ok: true, project, researchers });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    const d = req.body;
    const result = await db.query(
      `INSERT INTO projects (title, category, summary, funding_entity, budget, start_date, end_date, principal_investigator, partners, image_url) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [d.title || "Untitled", d.category || "Research", d.summary || "", d.funding_entity || "", d.budget || null, d.start_date || null, d.end_date || null, d.principal_investigator || "", d.partners || "", d.image_url || ""]
    );
    res.status(201).json({ ok: true, id: Number(result.insertId) });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

// NEW: UPDATE PROJECT
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const d = req.body;
    await db.query(
      `UPDATE projects SET title=?, category=?, summary=?, funding_entity=?, budget=?, start_date=?, end_date=?, principal_investigator=?, partners=?, image_url=? WHERE id=?`,
      [d.title || "Untitled", d.category || "Research", d.summary || "", d.funding_entity || "", d.budget || null, d.start_date || null, d.end_date || null, d.principal_investigator || "", d.partners || "", d.image_url || "", req.params.id]
    );
    res.json({ ok: true });
  } catch (error) {
    console.error("❌ PROJECT UPDATE ERROR:", error);
    res.status(500).json({ ok: false, message: error.message });
  }
});

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await db.query("DELETE FROM projects WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

module.exports = router;