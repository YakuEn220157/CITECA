const express = require('express');
const router = express.Router();
const pool = require('../db');

// Submit a contact message from the frontend form
router.post('/', async (req, res) => {
  let conn;
  try {
    const { name, email, message } = req.body;
    conn = await pool.getConnection();
    const result = await conn.query(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    res.status(201).json({ message: 'Message sent successfully', id: Number(result.insertId) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (conn) conn.release();
  }
});

// GET messages (for admin dashboard)
router.get('/', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM contacts ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (conn) conn.release();
  }
});

module.exports = router;