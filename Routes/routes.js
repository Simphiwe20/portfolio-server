const express = require('express')
const routes = express.Router()


const contactController = require('../contactControllers/contactControllers')

routes.post('/add-comments', contactController.storeComment)

module.exports = routes