const mongoose = require('mongoose')

//get the exported schema here:
const headphoneSchema = require('./headphone')

//get use the exported schema to create the mongoose model to be imported into the seed files:
const Headphone = mongoose.model('Headphone', headphoneSchema)

//export the model:
module.exports = {
    Headphone,
}