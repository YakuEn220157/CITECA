const express = require("express");
const router = express.Router();
const db = require("../db");
const { verifyToken } = require("./auth");

router.get("/", async (req, res) => {
  try {
    const rows = await db.query("SELECT * FROM researchers ORDER BY id ASC");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    const d = req.body;
    const safeName = d.name || d.full_name || "";
    const safeRole = d.role || d.position || "";
    const safeAreas = d.research_areas || d.expertise || "";

    const result = await db.query(
      `INSERT INTO researchers (name, full_name, role, position, email, research_areas, expertise, orcid_id, ciencia_id, google_scholar, linkedin_url, bio, status_membership, image_url) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [safeName, safeName, safeRole, safeRole, d.email || "", safeAreas, safeAreas, d.orcid_id || "", d.ciencia_id || "", d.google_scholar || "", d.linkedin_url || "", d.bio || "", d.status_membership || "", d.image_url || ""]
    );
    res.status(201).json({ ok: true, id: Number(result.insertId) });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

// NEW: UPDATE RESEARCHER
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const d = req.body;
    const safeName = d.name || d.full_name || "";
    const safeRole = d.role || d.position || "";
    const safeAreas = d.research_areas || d.expertise || "";

    await db.query(
      `UPDATE researchers SET name=?, full_name=?, role=?, position=?, email=?, research_areas=?, expertise=?, orcid_id=?, ciencia_id=?, google_scholar=?, linkedin_url=?, bio=?, status_membership=?, image_url=? WHERE id=?`,
      [safeName, safeName, safeRole, safeRole, d.email || "", safeAreas, safeAreas, d.orcid_id || "", d.ciencia_id || "", d.google_scholar || "", d.linkedin_url || "", d.bio || "", d.status_membership || "", d.image_url || "", req.params.id]
    );
    res.json({ ok: true });
  } catch (error) {
    console.error("❌ RESEARCHER UPDATE ERROR:", error);
    res.status(500).json({ ok: false, message: error.message });
  }
});

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await db.query("DELETE FROM researchers WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

module.exports = router;