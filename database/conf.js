const mongoose = require('mongoose');

const databaseInstance = async () => {
    try {
        const connectDatabase = await mongoose.connect(process.env.DATABASE_URI);
        console.log(`Succesfully established connection with Database : ${connectDatabase.connection.host}.blue.underline`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
