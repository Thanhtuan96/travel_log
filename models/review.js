const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
    create_at: {
        type: String,
        default: () => new Date(),
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    body: String,
    rating: Number,
});

module.exports = mongoose.model('Review', reviewSchema);
