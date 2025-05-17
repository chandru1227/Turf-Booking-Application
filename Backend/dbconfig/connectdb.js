import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoURI = "mongodb+srv://chandrua22cse:chandru@cluster0.acrqb.mongodb.net/grounds_booking?retryWrites=true&w=majority";
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.log('Error connecting DB', error);
    }
}

export default connectDB;
