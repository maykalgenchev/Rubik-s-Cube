const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 100,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^https?:\/\//i, 'invalid image Url']
        // validate: {
        //     validator: function (value) {
        //         return /^https?:\/\//i.test(value)
        //     },
        //     message: 'ImageUrl is invalid!'
        // }
    },
    difficulty: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory',
        }
    ]
});

// cubeSchema.path('imageUrl').validate(function (value) {
//     return /^https?:\/\//i.test(value);
// })

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;