const express = require('express');
const router = express.Router();

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'citeca2026';

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    res.json({ success: true, token: 'citeca-admin-token-123' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

module.exports = router;