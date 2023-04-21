const mongoose = require("mongoose");
require("dotenv").config();

const contact_uri = process.env.contact_uri;


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