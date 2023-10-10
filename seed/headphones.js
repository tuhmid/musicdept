const db = require('../db')
const { Headphone } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const seedHeadphones = async () => {
    const headphones = [
        {
            model_name: "QuietComfort 45",
            Brand: "Bose",
            Price: 329,
            Mic: true,
            Noise_cancelling: true,
            Bluetooth: true,
            year_model: 2021,
            quantity: 50,
            in_stock: true
        },
        {
            model_name: "Live 460NC",
            Brand: "JBL",
            Price: 64.95,
            Mic: true,
            Noise_cancelling: true,
            Bluetooth: true,
            year_model: 2021,
            quantity: 75,
            in_stock: true
        },
        {
            model_name: "Echo Buds",
            Brand: "Amazon",
            Price: 64.99,
            Mic: true,
            Noise_cancelling: true,
            Bluetooth: true,
            year_model: 2021,
            quantity: 90,
            in_stock: true
        }
    ]
    await Headphone.insertMany(headphones)
    console.log('headphones added')
}

async function run(){
    await seedHeadphones()
    db.close()
}

//note: has not been run yet!