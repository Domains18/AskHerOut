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

const loginStudent = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (student && (await bcrypt.compare(password, student.password))) {
        res.json({
            _id: student.id,
            email: student.email,
            admissionNumber: student.admissionNumber
        });
    } else {
        res.status(400);
        throw new Error('Invalid credentials, Acces denied');
    }

});

const aboutStudent = async (req, res) => {
    res.status(200);
    res.json(req.user);
}

const generateToken = () => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '500d',
    });
}


module.exports = {
    loginStudent,
    registerStudent,
    aboutStudent,
}
