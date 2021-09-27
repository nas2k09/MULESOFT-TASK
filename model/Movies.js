const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    actor: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    actress: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    director: {
        type: String,
        required: true,
        max: 255,
        min: 4,
    },
   year: {
        type: Number,
        required: true,
    },

});

module.exports = mongoose.model('Post', PostSchema);