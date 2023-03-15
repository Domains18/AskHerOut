const mongoose = require('mongoose');
const colors = require('colors');

const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.DATABASE_URI);
        console.log(`Database connection successful: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        throw new Error(error);
        process.exit(1);
    }
}


module.exports = connectDatabase;
