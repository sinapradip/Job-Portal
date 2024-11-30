import express from 'express' // ES6 importing of modules
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './utils/db.js'
import userRoute from "./routes/user.route.js"

const app = express(); // create express app instance
const PORT = 3000

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
};

// middleware
app.use(express.json()); // enable parsing of json data
app.use(express.urlencoded({extended: true})); // enable parsing of http request body
app.use(cookieParser()); // enable cookie parser
app.use(cors(corsOptions)); // enable cors
dotenv.config(); // load environment variables from .env file

app.use(express.static('public')); // serve static files from public directory

app.get("/", (req,res) => { 
    res.status(200).json({
        message: 'I am coming from backend',
        success: true
    })
})

// Create api's
app.use("/api/v1/user", userRoute)

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
    connectDB();
});