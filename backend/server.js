import express, { response } from 'express';
import dotenv from "dotenv";
dotenv.config();
import { request } from 'http'
import conectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';


conectDB();

const port = process.env.PORT || 5000

const app = express();

app.get("/", (req, res) =>{
    res.send('API running')

})


app.use('/api/products', productRoutes)

app.listen(port, () => console.log("Server working in port 5000"))
