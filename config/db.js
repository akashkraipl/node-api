const mongoose = require('mongoose')


const connectDB = async () => {

    try {
        const conn = await mongoose.connect("mongodb+srv://js_mastery:M6WfDnJEoj9HkV2d@practice.jto9p.mongodb.net/memories_app?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`mongodb connect success  :${conn.connection.host}`)
    } catch (error) {
        console.log(`Error ; ${error.message}`)
        process.exit();
    }


};
module.exports = connectDB;


