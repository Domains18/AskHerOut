// access private

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    names: {
        type: String,
        required: true,
        default: "John Doe"
    },
    indexNumber: {
        type: String,
        required: true,
    },
    previousSchool: {
        type: String,
        required: true,
    },
    Grade: {
        type: String,
        required: true,
    }
});


const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
