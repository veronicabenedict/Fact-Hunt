import mongoose from 'mongoose';

export const dbConfigExport = {
    MONGO_URI: "mongodb+srv://vbenedic:KpTin1JU6zLQA0MR@fact-hunter-dev.7jyyxil.mongodb.net/?retryWrites=true&w=majority&appName=fact-hunter-dev",
    PORT: 5000
};


export const connectDB = async () => {
    try {
        console.log(dbConfigExport.MONGO_URI);
        await mongoose.connect(dbConfigExport.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};