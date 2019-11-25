const express = require('express')
require('./db/mongoose')
const movieRouter = require('./routers/movie')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(movieRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})