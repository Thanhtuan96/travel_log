const mongoose = require('mongoose');
const { Schema } = mongoose;
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const ImageSchema = new Schema({
    url: String,
    filename: String,
});

const UserSchema = Schema({
    avatar: ImageSchema,
    email: {
        type: String,
        require: true,
        unique: true,
    },
    phone: {
        type: Number,
        require: true,
    },
    password: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
