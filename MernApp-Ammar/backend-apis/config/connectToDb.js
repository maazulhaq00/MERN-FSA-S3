import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config()

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Connected to DB successfully")
    }
    catch (err) {
        console.log("DB connection failed", err)

    }

}

export default connectToDB