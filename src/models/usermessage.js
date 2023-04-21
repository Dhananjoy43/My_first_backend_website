const { error } = require("jquery");
const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
        minLength: 3
    },
    Phone: {
        type: Number,
        required: true,
        min: 10
    },
    Email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new error("Invalid Email Id");
            }
        }
    },
    Message: {
        type: String,
        required: true
    }
})

// We need a collection
const User = mongoose.model("User", userSchema);

module.exports = User;