const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    post_id: {
        type: Schema.Types.ObjectId,
        ref: 'post'
    }
}, { timestamps: true });

module.exports = mongoose.model('like', likeSchema);