import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import contentRoutes from './routes/content.js'

dotenv.config();
connectDB();

const ap = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API is working and running...' });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.use('/api', contentRoutes);

export default app;
