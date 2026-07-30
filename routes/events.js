const express = require("express");
const router = express.Router();
const db = require("../db");
const { verifyToken } = require("./auth");

async function ensureEventResearchersTable() {
  await db.query(`CREATE TABLE IF NOT EXISTS event_researchers (
    event_id INT NOT NULL,
    researcher_id INT NOT NULL,
    PRIMARY KEY (event_id, researcher_id),
    FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE,
    FOREIGN KEY (researcher_id) REFERENCES researchers(id) ON DELETE CASCADE
  )`);
}

router.get("/", async (req, res) => {
  try {
    await ensureEventResearchersTable();
    const rows = await db.query("SELECT * FROM events ORDER BY event_date DESC");
    const links = await db.query(`SELECT er.event_id, er.researcher_id, r.full_name, r.position, r.expertise, r.email, r.image_url
      FROM event_researchers er
      JOIN researchers r ON r.id = er.researcher_id
      ORDER BY er.event_id, r.full_name`);
    const researchersByEvent = {};
    links.forEach(link => {
      if (!researchersByEvent[link.event_id]) researchersByEvent[link.event_id] = [];
      researchersByEvent[link.event_id].push({
        id: link.researcher_id,
        name: link.full_name,
        full_name: link.full_name,
        position: link.position,
        expertise: link.expertise,
        email: link.email,
        image_url: link.image_url
      });
    });
    const payload = rows.map(event => ({ ...event, researchers: researchersByEvent[event.id] || [] }));
    res.json(payload);
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const rows = await db.query("SELECT * FROM events WHERE id = ?", [req.params.id]);
    if (!rows || rows.length === 0) {
      return res.status(404).json({ ok: false, message: "Event not found." });
    }

    const researchers = await db.query(
      `SELECT r.* FROM researchers r
       JOIN event_researchers er ON er.researcher_id = r.id
       WHERE er.event_id = ?`,
      [req.params.id]
    );

    res.json({ ok: true, event: rows[0], researchers });
  } catch (error) {
    console.error("EVENT DETAIL ERROR", error);
    res.status(500).json({ ok: false, message: error.message });
  }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    await ensureEventResearchersTable();
    const d = req.body;
    const event_date = d.event_date || new Date().toISOString().split('T')[0];
    const researcherIds = Array.isArray(d.researcher_ids)
      ? d.researcher_ids.map(id => Number(id)).filter(Boolean)
      : [];

    const result = await db.query(
      `INSERT INTO events (title, description, category, event_date, end_date, start_time, end_time, venue, speaker, registration_link, image_url) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [d.title || "Untitled Event", d.description || "", d.category || "General", event_date, d.end_date || null, d.start_time || null, d.end_time || null, d.venue || "", d.speaker || "", d.registration_link || "", d.image_url || ""]
    );

    if (researcherIds.length) {
      const values = researcherIds.map(id => `(${Number(result.insertId)}, ${id})`).join(', ');
      await db.query(`INSERT INTO event_researchers (event_id, researcher_id) VALUES ${values}`);
    }

    res.status(201).json({ ok: true, id: Number(result.insertId) });
  } catch (error) {
    console.error("❌ EVENT ADD ERROR:", error); 
    res.status(500).json({ ok: false, message: error.message });
  }
});

// NEW: UPDATE EVENT
router.put("/:id", verifyToken, async (req, res) => {
  try {
    await ensureEventResearchersTable();
    const d = req.body;
    const event_date = d.event_date || new Date().toISOString().split('T')[0];
    const researcherIds = Array.isArray(d.researcher_ids)
      ? d.researcher_ids.map(id => Number(id)).filter(Boolean)
      : [];

    await db.query(
      `UPDATE events SET title=?, description=?, category=?, event_date=?, end_date=?, start_time=?, end_time=?, venue=?, speaker=?, registration_link=?, image_url=? WHERE id=?`,
      [d.title || "Untitled Event", d.description || "", d.category || "General", event_date, d.end_date || null, d.start_time || null, d.end_time || null, d.venue || "", d.speaker || "", d.registration_link || "", d.image_url || "", req.params.id]
    );

    await db.query("DELETE FROM event_researchers WHERE event_id = ?", [req.params.id]);
    if (researcherIds.length) {
      const values = researcherIds.map(id => `(${req.params.id}, ${id})`).join(', ');
      await db.query(`INSERT INTO event_researchers (event_id, researcher_id) VALUES ${values}`);
    }

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