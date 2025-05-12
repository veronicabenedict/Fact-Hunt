import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import dotenv from 'dotenv';

import router from './api/routes/routes.ts';
dotenv.config();
const app = express();

app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 5173;

app.get('/', (req, res) => {
    res.send("Fact Hunt API is running");
});

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

import { connectDB } from './config/db_setup.ts';
connectDB();

app.use('/', router);