const nodemon = require('nodemon')
const db = require('../db')
const { Speaker } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const seedSpeaker  = async () => {
    const Speakers = [
        {
            brand:"apple",
            modelName:"homepod",
            price: 250,
            bluetooth: true,
            yearModel: 2023,
            surroundSound: true,      
            quantity:200,
            inStock: true, 
            auxPort: true,
        },
        {
            brand: "amazon",
            modelName: "echo",
            price: 150,
            bluetooth: true,
            yearModel: 2022,
            surroundSound:  false,     
            quantity: 400,
            inStock: true,
            auxPort: false,
        },
        {
            brand:  "amazon",
            modelName: "alexia",
            price: 200,
            bluetooth: true,
            yearModel: 2019,
            surroundSound: flase,    
            quantity: 300,
            inStock: true,
            auxPort: false,
        },
        {
            brand: "apple",
            modelName:"apple home",
            price: 400,
            bluetooth: true, 
            yearModel: 2023,
            surroundSound:  true,     
            quantity: 0,
            inStock: false,
            auxPort: true
        },
        {
            brand:  "sony",
            modelName: "sonys pro gaming",
            price: 600,
            bluetooth:  false,
            yearModel: 2021,
            surroundSound: true,      
            quantity: 1,
            inStock: true,
            auxPort: true,
        },
    
    ]
    await Speaker.insertMany(Speakers)
    console.log('Speakers added')
}

async function run() {
    await seedSpeakers()
    db.close()``
}

run()