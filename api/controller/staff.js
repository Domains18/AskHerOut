const Staff = require('../models/staffModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const expressAsyncHandler = require('express-async-handler');


const registerStaff = expressAsyncHandler(async (req, res) => {
    const { identification, email, password } = req.body
    if (!identification || !email || !password) {
        res.status(400);
        res.json('fields cannot be blank');
    }

    const validateStaff = await Staff.findOne({ email });
    if (validateStaff) {
        res.status(400);
        throw new Error('User already exists ');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const staff = await Staff.create({
        identification,
        email,
        password: hashedPassword,
    });
    if (staff) {
        res.status(201).json({
            _id: staff.id,
            identification: staff.identification,
            email: staff.email,
            token: generateToken(staff._id);
        });
    } else {
        res.status(400);
        throw new Error('Invalid credentials');
    }
});

//acces private
const aboutStaff = expressAsyncHandler( async(req, res) => {
    res.status(200);
    res.json(req.staff);
});
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '500d'
    });
}



module.exports = {
    registerStaff,
    aboutStaff
}
