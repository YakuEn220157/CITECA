const express = require("express");
const router = express.Router();
const db = require("../db");
const { verifyToken } = require("./auth");

function buildFallbackImageValue(type, value) {
  const fallbackText = (value || "").trim() || (type === "researcher" ? "Researcher" : type === "event" ? "Event" : "Project");
  const initials = fallbackText.split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join("").toUpperCase() || "AI";
  const accentColor = type === "researcher" ? "#0B3C6D" : type === "event" ? "#1CA9C9" : "#3b82f6";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320"><rect width="100%" height="100%" rx="32" fill="${accentColor}"/><circle cx="160" cy="160" r="112" fill="rgba(255,255,255,0.14)"/><text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-family="Inter, Arial, sans-serif" font-size="118" font-weight="700" fill="#ffffff">${initials}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function resolveImageValue(type, value, fallbackText) {
  const trimmed = (value || "").trim();
  if (trimmed) return trimmed;
  return buildFallbackImageValue(type, fallbackText);
}

router.get("/", async (req, res) => {
  try {
    const rows = await db.query("SELECT * FROM researchers ORDER BY id ASC");
    res.json(rows);
  } catch (error) { res.status(500).json({ ok: false, message: error.message }); }
});

router.post("/", verifyToken, async (req, res) => {
  try {
    const d = req.body;
    const safeName = d.name || d.full_name || "";
    const safeRole = d.role || d.position || "";
    const safeAreas = d.research_areas || d.expertise || "";
    const image_url = resolveImageValue("researcher", d.image_url, safeName || safeRole || "Researcher");
    console.log("RESEARCHER POST", { safeName, safeRole, safeAreas, image_url });
    const result = await db.query(
      `INSERT INTO researchers (full_name, position, expertise, email, image_url) VALUES (?, ?, ?, ?, ?)`,
      [safeName, safeRole, safeAreas, d.email || "", image_url]
    );
    res.status(201).json({ ok: true, id: Number(result.insertId) });
  } catch (error) { res.status(500).json({ ok: false, message: error.message }); }
});

router.put("/:id", verifyToken, async (req, res) => {
  try {
    const d = req.body;
    const safeName = d.name || d.full_name || "";
    const safeRole = d.role || d.position || "";
    const safeAreas = d.research_areas || d.expertise || "";
    const image_url = resolveImageValue("researcher", d.image_url, safeName || safeRole || "Researcher");
    await db.query(
      `UPDATE researchers SET full_name=?, position=?, expertise=?, email=?, image_url=? WHERE id=?`,
      [safeName, safeRole, safeAreas, d.email || "", image_url, req.params.id]
    );
    res.json({ ok: true });
  } catch (error) { res.status(500).json({ ok: false, message: error.message }); }
});

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await db.query("DELETE FROM researchers WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (error) { res.status(500).json({ ok: false, message: error.message }); }
});

module.exports = router;