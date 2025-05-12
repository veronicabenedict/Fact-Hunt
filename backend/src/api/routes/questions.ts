import express from 'express';
import router from express.Router();

router.get('/', (req, res) => {
    res.send({question: "What is the capital of France?", answer: "Paris"});
});

export default router;