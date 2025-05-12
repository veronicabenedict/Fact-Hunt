import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

require('dotenv').config();

const app = express();

app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Fact Hunt APU is running");
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

const connectDB = require('./config/db');
connectDB();