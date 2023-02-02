const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        default: "John Doe"
    },
    lastName: {
        type: String,
        required: true,
        default: "doe"
    },
    nationalId: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        default: "you@gmail.com"
    },
    phoneNumber: {
        type: Number,
        required: true,
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
            required: true
        },
        relationship: {
            type: String,
            required: true
        }
    }
});
