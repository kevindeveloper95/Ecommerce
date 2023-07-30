import express, { response } from 'express';
import dotenv from "dotenv";
dotenv.config();
import products from './data/products.js';
import { request } from 'http'
import conectDB from './config/db.js';


conectDB();

const port = process.env.PORT || 5000

const app = express()


app.get("/", (req, res) =>{
    res.send('API running')

})

app.get("/api/products", (req, res) =>{
    res.json(products)

})

app.get("/api/products/:id", (req, res) =>{
    const product = products.find((p) => p._id === req.params.id) 
    res.json(product)

})

app.listen(port, () => console.log("Server working in port 5000"))
