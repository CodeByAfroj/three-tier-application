const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const contentRoutes = require('./routes/content');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is working and running...' });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.use('/api', contentRoutes);

module.exports = app;
