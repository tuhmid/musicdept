const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const headphoneSchema = new Schema (
    {
        Brand: {type: String, required: true},
        Price: {type: Number, required: true},
        Mic: {type: Boolean, required: true},
        Noise_cancelling: {type: Boolean, required: true},
        Bluetooth: {type: Boolean, required: true},
        year_model: {type: Number, required: true},
        quantity: {type: Number, required: true},
        in_stock: {type: Boolean, required: false}
    },
    {timestamps: true}
)

module.exports = headphoneSchema 