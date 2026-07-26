const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
const auth = require('./routes/auth');
app.use('/api/auth', auth.router); // Mount the login route

// Mount Data Routes
app.use('/api/events', require('./routes/events'));
app.use('/api/researchers', require('./routes/researchers'));
app.use('/api/projects', require('./routes/projects'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running securely on http://localhost:${PORT}`);
});