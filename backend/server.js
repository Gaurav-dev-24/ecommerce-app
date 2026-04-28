import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// app config
const app = express();
const port = Number(process.env.PORT) || 4000;

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
    res.send("API WORKING");
});

// Connect DB & Cloudinary (runs in both local and serverless)
connectCloudinary();
connectDB();

// Only start the HTTP server when running locally (not on Vercel)
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => console.log('Server started on PORT', port));
}

export default app;
