const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM news ORDER BY published_at DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (conn) conn.release();
  }
});

router.post('/', async (req, res) => {
  let conn;
  try {
    const { title, summary, published_at } = req.body;
    conn = await pool.getConnection();
    const result = await conn.query(
      'INSERT INTO news (title, summary, published_at) VALUES (?, ?, ?)',
      [title, summary, published_at]
    );
    res.status(201).json({ message: 'News article added', id: Number(result.insertId) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (conn) conn.release();
  }
});

module.exports = router;