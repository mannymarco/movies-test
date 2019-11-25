const express = require('express')
const Movie = require('../models/movie')
const router = new express.Router()

router.get('/healthcheck', async (req, res) => {
    console.log('perform health check')
    try {
        res.json({status: 'UP'})
    } catch(e) {
        res.status(500).send(e)
    }
})

router.get('/movies', async (req, res) => {
    console.log('get all movies');
    try {
        const movies = await Movie.find({});
        res.send(movies);
    } catch (e) {
        res.status(500).send(e);
    }
})

router.get('/movies/report', async (req, res) => {
    try {
        console.log('report')

        // Movies available in 3d
        const moviesIn3d = await Movie.aggregate([
            { $match: { available_in_3d: true }},
            { $count: "movies_available_in_3d" }
        ])

        // The movie with the most Oscar nominations
        const mostOscarNominations = await Movie.aggregate([
            { $match: { oscar_nominations: { $gt: 0 }}},
            { $sort: { oscar_nominations: -1 }},
            { $limit: 1 },
            { $project: { "_id": 0, "most_oscar_nominations": "$title" }}
        ])

        // The user with the most comments
        const topCommentsReport = await Movie.aggregate([
            
            { $unwind: "$comments" }, 
            { $sortByCount: "$comments.user" },
            { $limit: 1},
            { $project: { "_id": 0, "user_with_most_comments": "$_id" }}
            
        ])

        
        // Most recent comments
        const mostRecentComments = await Movie.aggregate([
            
            { $unwind: "$comments" },
            { $sort: { "comments.dateCreated": -1 } },
            { $limit: 5 },
            { $project: { "_id": 0, "newest_comments": "$comments" }}
        ])

        res.json([moviesIn3d, mostOscarNominations, topCommentsReport, mostRecentComments ])
      
    } catch (e) {
        res.status(500).send(e)
    }
})


router.get('/movies/:movie_id', async (req, res) => {
    const movie_id = req.params.movie_id
    try {
        const movie = await Movie.findOne({ movie_id})

        if (!movie) {
            res.status(404).send()
        }

        res.send(movie)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router