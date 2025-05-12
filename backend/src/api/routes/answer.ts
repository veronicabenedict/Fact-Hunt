import express from 'express';
import router from express.Router();

router.post('/', (req, res) => {
    const { question, answer } = req.body;
    res.json({ message: "Answer submitted successfully", correct: answer === "Paris" });
});

export default router;