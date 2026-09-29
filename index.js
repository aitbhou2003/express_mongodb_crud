const express = require('express');
const mongoose = require('mongoose'); // Corrected spelling
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send("hello from node api");
});

mongoose.connect("mongodb://127.0.0.1:27017/Node-Api")
.then(() => {
    console.log("Connected to the local database");
})
.catch((err) => {
    console.log("Connection failed", err);
});