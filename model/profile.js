const Mongoose = require('mongoose');

const ProfileSchema = new Mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    UserName: {
        type: String,
        required: true
    },
    UserId: String,
    Race: String,
    Attack: {
        type: Number,
        default: 5
    },
    Defense: {
        type: Number,
        default: 5
    },
    Class: String,
    Level: {
        type: Number,
        default: 1
    },
    XP:{
        type: Number,
        default: 0
    },
    Gold:{
        type: Number,
        default: 1000
    },
    Guild: {
        type: String,
        default: 'No guild'
    },
    Tag: String,
    Status: {
        type: String,
        default: 'No adventure'
    },
    Luck: String,
    God: {
        type: String,
        default: 'No God'
    },
    IsMarried:{
        type: String,
        default: 'Not Married'
    },
    ImageUrl:{
        type: String,
        default: 'X-URL'
    }
},
{
    timestamps: true
})

const ProfileModel = Mongoose.model('profile',ProfileSchema);

module.exports = ProfileModel;