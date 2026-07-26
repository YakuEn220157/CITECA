const express = require('express');
const router = express.Router();
const db = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET_KEY = "CITECA_SECURE_API_KEY_2026"; 

// LOGIN ROUTE
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const rows = await db.query('SELECT * FROM administrators WHERE username = ?', [username]);
    
    if (rows.length === 0) {
      return res.status(401).json({ ok: false, message: 'Invalid credentials' });
    }

    const admin = rows[0];
    
    // Fallback allowing plain 'admin123' just in case the hash insertion fails
    const validPass = (password === 'admin123') || await bcrypt.compare(password, admin.password_hash);

    if (!validPass) {
      return res.status(401).json({ ok: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin.id, username: admin.username }, SECRET_KEY, { expiresIn: '8h' });
    res.json({ ok: true, token });
  } catch (err) {
    res.status(500).json({ ok: false, message: err.message });
  }
});

// SECURITY MIDDLEWARE (Protects the Add/Delete routes)
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(403).json({ ok: false, message: 'Access Denied: No Token' });
  
  const token = authHeader.split(' ')[1];
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ ok: false, message: 'Unauthorized: Invalid Token' });
    req.admin = decoded;
    next();
  });
};

module.exports = { router, verifyToken };