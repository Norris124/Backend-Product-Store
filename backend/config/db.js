import mongoose from 'mongoose';
import dotenv from 'dotenv';
export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongo DB connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(`error : ${error.message}`);
        process.exit(1); 
    }
};