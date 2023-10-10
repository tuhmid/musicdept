const mongoose = require('mongoose')

const { Schema } = require('mongoose')
const Speakers = new Schema(
    {
        brand: { type: String, required: true },
        price: { type: Float, required: true },
        bluetooth: { type: Boolean, required: true },
        yearModel: { type: Number, required: true },
        surroundSound: { type: Boolean, required: true },
        quantity: { type: Number, required: true },
        inStock: { type: Boolean, required: false },
        auxPort: { type: Boolean, required: true }
    },
    { timestamps: true }
);
module.exports = Speakers