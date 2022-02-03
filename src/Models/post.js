const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    post_date: {
        type: Date,
        default: now()
    },
    post_title: {
        type: String,
        required: true,
    },
    post_slug: {
        type: String,
        required: true,
        unique: true
    },
    post_content: {
        type: String,
        required: true,
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    hashtag_id: [{
        type: Schema.Types.ObjectId,
        ref: 'hashtag'
    }],
    post_status: {
        type: Boolean,
        default: false
    },
    post_readtime: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('post', postSchema);