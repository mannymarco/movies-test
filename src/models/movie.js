const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    movie_id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    producer: {
        type: String,
        required: true,
    },
    available_in_3d: {
        type: Boolean,
        required: true
    },
    age_rating: {
        type: String,
        required: true,
    },
    oscar_nominations: {
        type: Number,
        required: true,
    },
    likes: { type: Number },
    comments: [{
        user: String,
        message: String,
        dateCreated: Number,
        rating: Number
    }]
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie