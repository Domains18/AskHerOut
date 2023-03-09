const Student = require('../models/studentModel')
const Staff = require('../models/staffModel');

const asyncHandler = require('express-async-handler')

//path: api/controller/register.js
//@desc: Register a new student
//@access: Public


const registerStudent = asyncHandler(async (req, res) => {
    const { admissionNumber, email, password } = req.body;
    if (!admissionNumber || !email || !password) {
        res.status(400);
        throw new Error('Please fill all the fields');
    }
    const validateStudent = await Student.findOne({ email });
    if (validateStudent) {
        res.status(400);
        throw new Error('Please login, details already exists');
    }
    const student = await Student.create({
        
    });
});
