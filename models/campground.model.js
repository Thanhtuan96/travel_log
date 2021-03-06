const mongoose = require('mongoose');
const Review = require('../models/review');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    filename: String,
});

ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});
const opts = { toJSON: { virtuals: true } };
const CampgroundSchema = new Schema(
    {
        title: String,
        price: Number,
        description: String,
        geometry: {
            type: {
                type: String,
                enum: ['Point'],
            },
            coordinates: {
                type: [Number],
            },
        },
        location: String,
        rating: Number,
        images: [ImageSchema],
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        reviews: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Review',
            },
        ],
    },
    opts
);

CampgroundSchema.virtual('properties.popUpMarkup').get(function () {
    return `<a href='/campgrounds/${this._id}'>${this.title}</a>`;
});

CampgroundSchema.post('findOneAndDelete', async function () {
    await Review.deleteMany({});
});

module.exports = mongoose.model('Campground', CampgroundSchema);
