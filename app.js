const express = require('express');
const router = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

app.use(express.json());

app.use(cors());
app.use('/api', router);


mongoose.connect('mongodb+srv://Contas:nuouP4MyDhH0q3E4@cluster0.gkkofhc.mongodb.net/Database', {
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 30000, // Set a higher timeout value (e.g., 30 seconds) 
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



