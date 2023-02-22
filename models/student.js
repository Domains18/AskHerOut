//register student to the school database


// Path: models/student.js
const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    names: {
        type: String,
        required: true,
        default: 'John Doe'
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: String,
        required: true,
        default: 'Computer Science'
    },
    // no need for password
    phone: {
        type: String,
        required: true,
        default: '08012345678'
    },
    address: {
        type: String,
        required: true,
        default: 'No 1, Main Street, Nairobi'
    },
    parent:{
        type: String,
        required: true,
        default: 'John Doe'
    },
    parentPhone: {
        type: String,
        required: true,
        default: '08012345678'
    },
    parentEmail: {
        type: String,
        required: true,
        default: ''
    },
 
});
