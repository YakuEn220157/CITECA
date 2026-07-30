const express = require("express");
const router = express.Router();
const db = require("../db");
const { verifyToken } = require("./auth");

async function ensureProjectResearchersTable() {
  await db.query(`CREATE TABLE IF NOT EXISTS project_researchers (
    project_id INT NOT NULL,
    researcher_id INT NOT NULL,
    PRIMARY KEY (project_id, researcher_id),
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    FOREIGN KEY (researcher_id) REFERENCES researchers(id) ON DELETE CASCADE
  )`);
}

router.get("/", async (req, res) => {
  try {
    await ensureProjectResearchersTable();
    const rows = await db.query("SELECT * FROM projects ORDER BY id DESC");
    const links = await db.query(`SELECT pr.project_id, pr.researcher_id, r.full_name
      FROM project_researchers pr
      JOIN researchers r ON r.id = pr.researcher_id
      ORDER BY pr.project_id, r.full_name`);
    const researchersByProject = {};
    links.forEach(link => {
      if (!researchersByProject[link.project_id]) researchersByProject[link.project_id] = [];
      researchersByProject[link.project_id].push({ id: link.researcher_id, name: link.full_name });
    });
    const payload = rows.map(project => ({ ...project, researchers: researchersByProject[project.id] || [] }));
    res.json(payload);
  } catch (error) { res.status(500).json({ ok: false, message: error.message }); }
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
    await ensureProjectResearchersTable();
    const d = req.body;
    const researcherIds = Array.isArray(d.researcher_ids)
      ? d.researcher_ids.map(id => Number(id)).filter(Boolean)
      : [];
    const result = await db.query(
      `INSERT INTO projects (title, category, summary, funding_entity, budget, start_date, end_date, principal_investigator, partners, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [d.title || "Untitled", d.category || "Research", d.summary || "", d.funding_entity || "", d.budget || null, d.start_date || null, d.end_date || null, d.principal_investigator || "", d.partners || "", d.image_url || ""]
    );

    if (researcherIds.length) {
      const values = researcherIds.map(id => `(${Number(result.insertId)}, ${id})`).join(', ');
      await db.query(`INSERT INTO project_researchers (project_id, researcher_id) VALUES ${values}`);
    }

    res.status(201).json({ ok: true, id: Number(result.insertId) });
  } catch (error) { res.status(500).json({ ok: false, message: error.message }); }
});

router.put("/:id", verifyToken, async (req, res) => {
  try {
    await ensureProjectResearchersTable();
    const d = req.body;
    const researcherIds = Array.isArray(d.researcher_ids)
      ? d.researcher_ids.map(id => Number(id)).filter(Boolean)
      : [];
    await db.query(
      `UPDATE projects SET title=?, category=?, summary=?, funding_entity=?, budget=?, start_date=?, end_date=?, principal_investigator=?, partners=?, image_url=? WHERE id=?`,
      [d.title || "Untitled", d.category || "Research", d.summary || "", d.funding_entity || "", d.budget || null, d.start_date || null, d.end_date || null, d.principal_investigator || "", d.partners || "", d.image_url || "", req.params.id]
    );
    await db.query("DELETE FROM project_researchers WHERE project_id = ?", [req.params.id]);
    if (researcherIds.length) {
      const values = researcherIds.map(id => `(${req.params.id}, ${id})`).join(', ');
      await db.query(`INSERT INTO project_researchers (project_id, researcher_id) VALUES ${values}`);
    }
    res.json({ ok: true });
  } catch (error) { res.status(500).json({ ok: false, message: error.message }); }
});

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await db.query("DELETE FROM projects WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (error) { res.status(500).json({ ok: false, message: error.message }); }
});

module.exports = router;