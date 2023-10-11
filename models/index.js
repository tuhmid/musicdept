const mongoose = require('mongoose')

//get the exported schema here:
const headphoneSchema = require('./headphone')
const Speakers = require('./speaker')

//get use the exported schema to create the mongoose model to be imported into the seed files:
const Headphone = mongoose.model('Headphone', headphoneSchema)
const Speaker = mongoose.model('Speaker', Speakers)

//export the model:
module.exports = {
    Headphone,
    Speaker
}