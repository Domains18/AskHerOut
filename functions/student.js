const expressAsyncHandler = require('express-async-handler');
const express = require('express');
const Student = require('../models/studentModel');
// const kuccpsValidator = require('../data/kuccps');




const registerStudent = expressAsyncHandler(async (req, res) => {
    const { names, email, course, phone, address, parent, parentPhone, parentEmail, kuccps } = req.body;
    
    if (!names || !email || !course || !phone || !address || !parent || !parentPhone || !parentEmail || !kuccps) {
        res.status(400);
        throw new Error('Please fill all fields');
    }
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    if (!validateEmail(email)) {
        res.status(400);
        throw new Error('Please enter a valid email');
    }
    if (phone.length < 10) {
        res.status(400);
        throw new Error('Please enter a valid phone number');
    }
    if (parentPhone.length < 10) {
        res.status(400);
        throw new Error('Please enter a valid phone number');
    }
    //validate kuccps

});

