import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const app = express();
dotenv.config();  // to access environment variables
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import cookieParser from 'cookie-parser';

const connect = async () => {

  try {
    await mongoose.connect(process.env.MONGO) // connecting to MongoDB  
    console.log('Connected to MongoDB');
  } catch (error) {
    throw error
  }
};

// middleware
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

// Error handling middleware
app.use((err, req, res,next) => {
  const errStatus = err.status || 500;
  const errMessage = err.message || "Something went wrong";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMessage,
    stack: err.stack,
  });
})


app.listen(8000, () => {
  connect();
  console.log('Server is running');
});
