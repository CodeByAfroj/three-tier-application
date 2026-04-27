import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


const db = require('./config/db');
const connectDB = db.connectDB;
connectDB();
const app = express();
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is working and running...' });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.use('/api', contentRoutes);

export default app;
