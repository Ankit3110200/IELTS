const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        minlength: 2
    },
    user_email: {
        type: String,
        required: true,
        validate(value) {
            if (validator.isEmail(value)) {
                throw new Error("Invalid Email entered");
            }
        },
        unique: true
    },
    user_password: {
        type: String,
        required: true,
        minlength: 8,
    },
    user_photo: String
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);