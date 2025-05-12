import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({question: "What is the capital of France?", answer: "Paris"});
});

router.post('/', (req, res) => {
    const { question, answer } = req.body;
    res.json({ message: "Answer submitted successfully", correct: answer === "Paris" });
});

export default router;