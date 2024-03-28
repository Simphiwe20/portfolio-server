// Importing express framework
const express = require('express')
// Using express to create an express application
const app = express()
// Import cors to be used to enable cors
const cors = require('cors')
// Import the routes
const routes = require('./Routes/routes')

// Import moongose 
const moongose = require('mongoose')
const { default: mongoose } = require('mongoose')

mongoose.connect('mongodb+srv://gsimphiwe212:bLbKpX7pFxsYHsyU@freecuster0.66kio5z.mongodb.net/')
    .then((res) => console.log('cluster has been successfuly connected'))
    .catch((err) => console.log(err))

const PORT = process.env.PORT || 3000

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(routes)

app.listen(PORT, () => {
    console.log(`Listerning to  ${PORT}......`)
})
