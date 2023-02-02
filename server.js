const express = require("express");
const asyncHandler = require("express-async-handler");
const cors = require("cors");
const colors = require("colors");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path")
const PORT = process.env.PORT;

//app
const server = express();


// middlewares and functions
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(PORT, () => { console.log(`server started on port ${PORT}`) });
