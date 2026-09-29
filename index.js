const express = require('express');
const mongoose = require('mongoose'); // Corrected spelling
const app = express();

const Product = require('./models/product.model')


app.use(express.json())

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send("hello from node api");
});

app.get('/api/products',async (req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products)
    }catch (e) {
        res.status(500).json({
            error : e.message
        })
    }
})


app.get('/api/products/:id',async (req,res)=>{
    try{
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)

    }catch (e){
        res.status(500).json({
            error : e.message
        })
    }
})
app.post('/api/products',async (req,res)=>{
    try {
         const product =await Product.create(req.body)
        res.status(200).json(product)
    }catch (e) {
        res.status(500).json({
            message : e.message
        })
    }
})

mongoose.connect("mongodb://127.0.0.1:27017/Node-Api")
.then(() => {
    console.log("Connected to the local database");
})
.catch((err) => {
    console.log("Connection failed", err);
});
