const express = require("express");
const asyncHandler = require("express-async-handler");
const cors = require("cors");
const colors = require("colors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path")
const PORT = process.env.PORT;

const { errorHandler } = require('./middleware/errorHandler')
//app
const server = express();


// middlewares and functions
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(errorHandler);

//routes
server.use('/api/students', require('./routes/studentRegistration'));

server.listen(PORT, () => { console.log(`server started on port ${PORT}`.yellow.underline)});
