import mongoose from "mongoose";

let connection = false;

const connectDB = async () => {
    if(connection){
        console.info("database connect");
        return
    }

    try {
        await mongoose.connect(process.env.DATABASE);
        connection = true;
    } catch (e) {
        console.info("connect failed");
    }
}

export default connectDB;