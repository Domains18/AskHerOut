const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentModel = new Schema({
    admissionNumber: {
        type: Object,
        required: [true, 'Enter your Admission Number']
    },
    email: {
        type: Object,
        required: [true, 'Please enter your Email']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    }
});

const Student = mongoose.model('Student', studentModel);
module.exports = Student;
