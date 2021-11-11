const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let commentsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comments', commentsSchema);