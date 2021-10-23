const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^https?:\/\//i, 'invalid image Url']
    },
    description: {
        type: String,
        required: true,
        maxlength: 50,
    }
})

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;