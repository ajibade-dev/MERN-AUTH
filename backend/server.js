import express from 'express';
import dotenv from 'dotenv'; 
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js'
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js'
import path from 'path'
import cors from 'cors'



connectDB();

const app = express();

// Allow requests from your Vercel domain
const whitelist = ['https://mern-auth-orpin-tau.vercel.app'];  // your frontend URL
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));  // Enable CORS with the custom options

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/users', userRoutes);

if(process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve()
    app.use(express.static(path.join(__dirname, 'frontend/dist')))

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist' , 'index.html')));
} else {
    app.get('/', (req, res) => {
        res.send('Server is ready')
        })
}

app.use(notFound);
app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))