import express from 'express';
import cors from 'cors';
import adminRoute from './routes/adminRoutes.js';
import userRoute from './routes/userRoutes.js';
import connectdb from './dbconfig/connectdb.js';
import { Booking } from './models/bookingModel.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

//connect db
connectdb();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/v1/admin', adminRoute);

app.use('/api/v1/user', userRoute);

//img uploads
app.use('uploads/', express.static('uploads'));

app.delete("/delete",)

//port
const PORT = process.env.PORT || 8080;




//listen 
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
