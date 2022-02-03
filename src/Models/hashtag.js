const mongoose = require('mongoose');

const hashtagSchema = new mongoose.Schema({
    hashtag_name: {
        type: String,
        maxlength: 30
    }
}, { timestamps: true });

module.exports = mongoose.model('hashtag', hashtagSchema);