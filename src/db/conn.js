const mongoose = require("mongoose");
require("dotenv").config();
// const uri = "mongodb://127.0.0.1:27017/my_first_backend_project";
const contact_uri = 'mongodb+srv://dhananjoymahata43:Dmp1903@cluster1.f6i4wrr.mongodb.net/my_first_backend_project';
// const contact_uri = process.env.contact_uri;

// console.log(process.env.uri);

// Creating a database
mongoose.connect(contact_uri, {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log("connection succesful");
}).catch((error) => {
    console.log(error);
})