const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const staffSchema = new Schema({
    identification: {
        type: Object,
        required: [true, 'Please enter your staff Identification']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    }
});

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;
