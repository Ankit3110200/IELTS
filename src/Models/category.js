const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        maxlength: 20,
        unique: true
    }
}, { timestamps: true });

module.exports = mongoose.model('category', categorySchema);