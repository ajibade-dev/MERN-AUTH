import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected Succesfully: ${conn.connection.host}`)
    }catch (error) {
        console.error(`error: ${error.message}`);
        process.exit(1)
    }
}

export default connectDB;