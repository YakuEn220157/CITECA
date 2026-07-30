const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Serve the static site (CITECA-MAIN)
const staticDir = path.join(__dirname, 'CITECA-MAIN');
app.use(express.static(staticDir));

// Import Routes
const auth = require('./routes/auth');
app.use('/api/auth', auth.router); // Mount the login route

// Mount Data Routes
app.use('/api/events', require('./routes/events'));
app.use('/api/researchers', require('./routes/researchers'));
app.use('/api/projects', require('./routes/projects'));
app.use("/api/tags", require("./routes/tags"));
app.use("/api/areas", require("./routes/areas")); // Changed from tags to areas

// Fallback for SPA or direct index access
app.get('/', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

// Debug route (temporary) to inspect static directory
const fs = require('fs');
app.get('/_debug', (req, res) => {
  let files = [];
  try {
    files = fs.readdirSync(staticDir);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
  res.json({ staticDir, files });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});