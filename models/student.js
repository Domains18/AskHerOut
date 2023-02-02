const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your last name'],
        default: "John"
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name'],
        default: "Doe"
    },
    nationalId: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true,
        default: "you@gmail.com"
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Please enter your phone number'],
        unique: true,
        default: +25472200000
    },
    guardian: {
        type: String,
        required: true,
        default: "John Doe",
        email: {
            type: String,
        },
        phoneNumber: {
            type: Number,
            required: [true, 'Please Enter the guardians number']
        },
        relationship: {
            type: String,
            required: [true, 'Please define the relationship with the guardian']
        }
    }
});
