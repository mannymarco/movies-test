const request = require('supertest')
const app = require('../src/app')
const Movie = require('../src/models/movie')

test('Should get one movie', async () => {
    await request(app)
        .get('/movies/1')
        .expect(200)
})

test('Should not get one movie', async () => {
    await request(app)
        .get('/movies/100')
        .expect(404)
})