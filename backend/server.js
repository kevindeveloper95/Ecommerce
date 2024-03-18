import express, { response } from 'express';
import dotenv from "dotenv";
import conectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middlewares/errorMiddlewares.js';
import cookieParser from 'cookie-parser';

dotenv.config();
conectDB();

const port = process.env.PORT || 5000

const app = express();

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) =>{
    res.send('API running')

})
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound);
app.use(errorHandler);



app.listen(port, () => console.log("Server working in port 5000"))
