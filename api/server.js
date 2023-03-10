const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const colors = require('colors');
const cors = require('cors');
const port = process.env.PORT || 5000;
const express = require('express');

const {errorHandler} = require('./middleware/errorhandler');

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./routes/api'));

app.use(errorHandler)

app.listen(port, ()=>{ console.log(`server deployed on port: ${port}`.yellow)})
