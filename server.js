
const express = require('express');
const env = require('dotenv')
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

env.config()
// Connect MongoDB
connectDB();

// Middleware
(app.use(cors({ origin: '*' })))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use('/api/plans', require('./routes/planroutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} ✅`);
});
