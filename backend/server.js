import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import { connect } from 'mongoose';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// app config

const app = express()
const port = Number(process.env.PORT) || 4000

// middleware
app.use(express.json()
)
app.use(cors())

//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get ('/',(req,res)=>{
    res.send("API WORKING")
})

const startServer = async () => {
    try {
        app.listen(port, () => console.log('Server started on PORT ', port))
        await connectCloudinary()
        await connectDB()
    } catch (error) {
        console.error('Startup warning:', error.message)
    }
}

startServer()
