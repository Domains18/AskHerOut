const expressAsyncHandler = require('express-async-handler');
const express = require('express');
const Student = require('../models/studentModel');


constRegisterStudents = expressAsyncHandler(async (req, res) => {
    const { name, email, password, phone, address, city, state, country, zip } = req.body;
    if (!name || !email || !password || !phone || !address || !city || !state || !country || !zip) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    const student = await Student.create({
        name, email, password, phone, address, city, state, country, zip
    });
    if (student) {
        res.status(201).json({
            _id: student._id,
            name: student.name,
            email: student.email,
            phone: student.phone,
            address: student.address,
            city: student.city,
            state: student.state,
            country: student.country,
            zip: student.zip,
            token: generateToken(student._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});


