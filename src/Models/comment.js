const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    comment_date: {
        type: Date,
        default: now()
    },
    comment: {
        type: String,
        required: true,
    },
    post_id: {
        type: Schema.Types.ObjectId,
        ref: 'post'
    }
}, { timestamps: true });

module.exports = mongoose.model('comment', commentSchema);