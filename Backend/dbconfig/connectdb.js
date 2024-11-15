import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoURI = "mongodb+srv://chandrua22cse:5DBHPLP5OAAzIaP6@cluster0.acrqb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "grounds_booking", // Optional: Set your database name here if necessary
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.log('Error connecting DB', error);
    }
}

export default connectDB;
