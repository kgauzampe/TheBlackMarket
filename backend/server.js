require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')

connectDB();
const app = express();

const PORT = process.env.PORT || 500;

app.listen(PORT, () => console.log(`Sever running on port ${PORT}`))