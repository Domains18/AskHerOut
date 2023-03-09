const Student = require('../models/studentModel')
const Staff = require('../models/staffModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
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
    
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);

    const student = await Student.create({
        admissionNumber,
        email,
        password: hashedPassword,
    });
    if (student) {
        res.status(200);
        res.json({
            _id: student.id,
            admissionNumber: student.admissionNumber,
            email: student.email,
            token: generateToken(student._id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});
