const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const combinedMessage = [subject, message].filter(Boolean).join("\n\n");

    if (!name || !email || !combinedMessage) {
      return res.status(400).json({ ok: false, message: "Please provide name, email and message." });
    }

    await db.query("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)", [name, email, combinedMessage]);
    res.status(201).json({ ok: true, message: "Contact submitted successfully." });
  } catch (error) {
    res.status(500).json({ ok: false, message: "Could not save the message yet.", error: error.message });
  }
});

module.exports = router;
