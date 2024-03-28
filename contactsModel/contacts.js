const mongoose = require('mongoose')

const contact = mongoose.Schema({
    fullName: {type: String, require: true},
    email: {type: String, require: true},
    cellNumber: {type: String, require: true},
    comment: {type: String, require: true}
})

module.exports = mongoose.model('contact', contact)