const express = require("express");
const router = express.Router();
const db = require("../db");

const fallbackResearchers = [
  { id: 1, full_name: "Ana Ribeiro", position: "Principal Investigator", expertise: "Artificial Intelligence", email: "ana.ribeiro@istec.pt" },
  { id: 2, full_name: "Miguel Costa", position: "Networks & Communications Lead", expertise: "Edge Computing", email: "miguel.costa@istec.pt" },
  { id: 3, full_name: "João Almeida", position: "Research Scientist", expertise: "Optimization", email: "joao.almeida@istec.pt" },
  { id: 4, full_name: "Sara Fernandes", position: "Digital Transformation", expertise: "Innovation", email: "sara.fernandes@istec.pt" },
];

router.get("/", async (req, res) => {
  try {
    const rows = await db.query("SELECT id, full_name, position, expertise, email FROM researchers ORDER BY id");
    res.json(rows.length ? rows : fallbackResearchers);
  } catch (error) {
    res.json(fallbackResearchers);
  }
});

module.exports = router;
