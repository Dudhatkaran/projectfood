const mongoose = require('mongoose')

const blogsSchema = new mongoose.Schema({
    titel: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    Filepath: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('food-tables', blogsSchema);